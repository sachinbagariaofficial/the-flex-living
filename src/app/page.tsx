export const dynamic = "force-dynamic";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import { PropertyResponseTypeList } from "./types/property";

export default async function App() {
  let propertiesList: PropertyResponseTypeList = [];

  try {
    const response = await fetch(
      "https://the-flex-living-backend.onrender.com/api/reviews/hostaway",
      {
        cache: "no-store",
      }
    );

    // Check if the response itself is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data with status: ${response.status}`);
    }

    const formatResponse = await response.json();

    // Check for success based on the API's payload
    if (formatResponse?.status === "success") {
      propertiesList = formatResponse.result;
    } else {
      throw new Error("API returned an error status in payload.");
    }
  } catch (err: unknown) {
    console.error("Error fetching properties:", err);
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] overflow-hidden">
        <div className="flex-1 lg:w-3/5 pb-10">
          <main>
            <SearchBar />
            <div className="p-4 pt-0 lg:p-6 lg:pt-0 overflow-y-auto h-[calc(100vh-280px)]  xl:h-[calc(100vh-180px)]">
              <div className=" text-gray-600 text-[12px] leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Furnished, flexible apartments available for short- to
                  medium-term rent by The Flex.
                </span>{" "}
                From Covent Garden lofts to Canary Wharf executive suites, our
                serviced apartments span every neighbourhood in London. Book
                nightly, weekly, or monthly stays and enjoy expertly designed
                spaces, high-speed Wi-Fi, fully equipped kitchens and 24/7 local
                support—your perfect London rental is ready whenever you are.
              </div>
              <div className="mt-6">
                <h2 className="text-sm text-gray-900">
                  {propertiesList.length} properties found
                </h2>
                {!propertiesList.length ? (
                  <p className="text-gray-500 text-center">NO PROPERTY</p>
                ) : (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {propertiesList.map((singleProperty) => (
                      <PropertyCard
                        key={singleProperty.property.propertyId}
                        property={singleProperty}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:block lg:w-2/5 bg-gray-200 relative h-full">
          <Maps />
        </div>
      </div>
      <Footer />
    </div>
  );
}
