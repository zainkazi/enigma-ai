"use client";

import React, { useState, useRef, useEffect } from "react";

const AgeGroupDropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("Select Age Group");
  const dropdownRef = useRef(null);

  const ageGroups = [
    "0 - 12",
    "13 - 17",
    "18 - 24",
    "25 - 34",
    "35 - 44",
    "45 - 54",
    "55 - 64",
    "65+",
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
    <div className="relative" ref={dropdownRef}>
      <h1 className=" text-lg font-medium py-2">Age Group</h1>
      <button
        className="border border-zinc-100 w-64 text-white px-4 py-2 rounded-md flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedAgeGroup} <span className="ml-2">▼</span>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md shadow-lg bg-zinc-900 z-50">
          <ul className="py-1">
            {ageGroups.map((ageGroup, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-zinc-800 cursor-pointer text-white"
                onClick={() => {
                  setSelectedAgeGroup(ageGroup);
                  setIsOpen(false);
                }}
              >
                {ageGroup}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgeGroupDropDownMenu;
