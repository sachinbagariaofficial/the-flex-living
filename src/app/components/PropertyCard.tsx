import { Bath, Bed, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PropertyResponseType } from "../types/property";

const PropertyCard = ({ property }: { property: PropertyResponseType }) => (
  <Link
    href={`/`}
    className="group rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] bg-[#FFFDF6] flex flex-col h-full"
  >
    <div className="relative">
      <div className="relative pb-[56.25%]">
        <Image
          width={400}
          height={225}
          src={property.property.mainImage}
          alt={property.property.listingName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Price Tag */}
        <div className="absolute top-2 right-2">
          <div className="backdrop-blur-sm rounded-md shadow-lg  bg-[#fefaf3] px-2 py-1">
            <div className="flex flex-col items-end">
              <span className="text-base font-extrabold text-[#284e4c]">
                ${property.property.propertyDetails.price}
              </span>
              <span className="text-[10px] text-gray-500">per night</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {property.property.listingName}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {property.property.location.city}
          </p>
          {property.reviews.status === "published" && (
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star size={16} fill="currentColor" stroke="none" />
              <span className="text-gray-700 text-sm font-semibold">
                {property.reviews.rating}
              </span>
              <span className="text-gray-500 text-sm font-normal">
                {`(${property.reviews.categories.length || 0} reviews)`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 pt-2 border-t border-gray-100 flex items-center gap-4 text-gray-600 text-[12px]">
        <span className="flex items-center gap-1">
          <Bed size={16} />
          <span>
            {property.property.propertyDetails.bedroomsNumber} Bedroom
          </span>
        </span>
        <span className="flex items-center gap-1">
          <Bath size={16} />
          <span>
            {property.property.propertyDetails.bathroomsNumber} Bathroom
          </span>
        </span>
        <span className="flex items-center gap-1">
          <Users size={16} />
          <span>
            Up to {property.property.propertyDetails.personCapacity} guests
          </span>
        </span>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
