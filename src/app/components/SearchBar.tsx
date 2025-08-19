"use client";

import {
  ChevronDown,
  Filter,
  Minus,
  Plus,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState("London");
  const [guests, setGuests] = useState(1);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locations = ["London", "Paris", "Algiers", "Lisbon"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative xl:sticky top-0 z-10 bg-[#fffdf6] p-4 lg:p-6"
      ref={dropdownRef}
    >
      <form className="flex flex-col md:flex-row gap-2">
        {/* Location Dropdown */}
        <div className="w-full md:w-[26.25%] relative">
          <div
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="flex items-center justify-between w-full px-3 py-2 border rounded-md bg-[#FFFDF6] border-gray-300 h-9 text-sm cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-700" />
              <span className="text-gray-700">{location.toUpperCase()}</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-gray-700 opacity-50 transition-transform ${
                isLocationOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isLocationOpen && (
            <div className="absolute left-0 mt-1 w-full bg-[#FFFDF6] border border-gray-200 rounded-lg shadow-lg z-50 p-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setLocation(loc);
                    setIsLocationOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm 
                    ${
                      loc === location
                        ? "bg-teal-900 text-white rounded-md"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                >
                  <MapPin
                    className={`h-4 w-4 ${
                      loc === location ? "text-white" : "text-gray-600"
                    }`}
                  />
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dates */}
        <div className="w-full md:w-[27.5%]">
          <div className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-[#FFFDF6] border-gray-300 h-9 text-sm text-gray-600 cursor-pointer">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>Dates</span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </div>
        </div>

        {/* Guests */}
        <div className="w-full md:w-[23.125%]">
          <div className="flex items-center h-9 border rounded-md bg-[#FFFDF6] border-gray-300 px-2">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              className="flex items-center justify-center h-7 w-7 rounded-md text-xs hover:bg-gray-100 disabled:opacity-50"
            >
              <Minus className="h-3 w-3 text-gray-700" />
            </button>
            <div className="flex-1 flex items-center justify-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">
                {guests} guest{guests > 1 && "s"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setGuests(guests + 1)}
              className="flex items-center justify-center h-7 w-7 rounded-md text-xs hover:bg-gray-100"
            >
              <Plus className="h-3 w-3 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Filters Button */}
        <div className="w-full md:w-[23.125%]">
          <button
            type="button"
            className="flex items-center justify-center w-full h-9 px-3 border rounded-md bg-[#FFFDF6] border-gray-300 text-xs text-gray-600 hover:bg-gray-100 transition"
          >
            <Filter className="h-3 w-3 mr-1" />
            Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
