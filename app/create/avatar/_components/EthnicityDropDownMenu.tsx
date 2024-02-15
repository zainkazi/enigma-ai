"use client";

import { useState, useRef, useEffect } from "react";

const EthnicityDropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEthnicity, setSelectedEthnicity] =
    useState("Select ethnicity");
  const dropdownRef = useRef(null);

  const ethnicities = [
    "Asian",
    "Black/African descent",
    "Hispanic/Latino",
    "White/Caucasian",
    "Middle Eastern",
    "Native American",
    "Pacific Islander",
    "Other",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative " ref={dropdownRef}>
      <h1 className="text-lg font-medium py-2">Ethnicty</h1>
      <button
        className="border border-zinc-100 w-64 text-white px-4 py-2 rounded-md flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedEthnicity} <span className="ml-2">▼</span>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md shadow-lg bg-zinc-900  z-50">
          <ul className="py-1">
            {ethnicities.map((ethnicity, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-zinc-800 cursor-pointer"
                onClick={() => {
                  setSelectedEthnicity(ethnicity);
                  setIsOpen(false);
                }}
              >
                {ethnicity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EthnicityDropDownMenu;
