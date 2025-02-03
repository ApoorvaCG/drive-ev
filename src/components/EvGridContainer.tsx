"use client";
import { useEffect, useState } from "react";
import React from "react";
import ListItem from "./ListItem";
import DropDown from "./DropDown";

export default function EvGridContainer({ evData }: { evData: any[] }) {
  const [sortedData, setSortedData] = useState(evData);
  const [condition, setCondition] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");

  const applyFiltersAndSorting = () => {
    let filteredData = evData;

    // Apply condition filter
    if (condition) {
      filteredData = filteredData.filter(
        (ev) => ev.condition.toLowerCase() === condition.toLowerCase()
      );
    }

    // Apply sorting if sortOrder is set
    if (sortOrder) {
      filteredData = filteredData.sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    // Update the state with the filtered and sorted data
    setSortedData([...filteredData]);
  };

  useEffect(() => {
    applyFiltersAndSorting();
  }, [condition, sortOrder, evData]);

  const handleSort = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  const handleFilter = (selectedCondition: string) => {
    setCondition(selectedCondition);
  };

  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">EV Listings</h2>
        <div className="flex gap-2">
          {/* Condition Filter Dropdown */}
          <DropDown
            options={[
              { id: 1, text: "All", value: "" },
              { id: 2, text: "New", value: "New" },
              { id: 3, text: "Used", value: "Used" },
            ]}
            selectedOption={condition}
            handleChange={(value) => handleFilter(value)}
          />
          <DropDown
            options={[
              { id: 1, text: "Sort", value: "" },
              { id: 2, text: "Low to High", value: "asc" },
              { id: 3, text: "High to Low", value: "desc" },
            ]}
            selectedOption={sortOrder}
            handleChange={(value) => handleSort(value)}
          />
        </div>
      </div>
      <ul className="mt-7 grid  md:grid-cols-3 sm:grid-cols-2 gap-5">
        {sortedData.map((evItem) => {
          return (
            <React.Fragment key={evItem.id}>
              <ListItem item={evItem} />
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
