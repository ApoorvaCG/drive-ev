"use client";
import React from "react";
import ListItem from "./ListItem";
import DropDown from "./DropDown";
import { EVListData } from "./types";
import { useEVFilterSort } from "./hooks/useFilterSort";
import { EvfilterOptions, EvSortingOptions } from "./constants";

const EvGridContainer = ({ evData }: { evData: EVListData }) => {
  const { sortedData, filterValue, setFilterValue, sortOrder, setSortOrder } =
  useEVFilterSort(evData);

  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">EV Listings</h2>
        <div className="flex gap-2">
          {/*  Filter and Sorting Dropdown */}
          <DropDown
            options={EvfilterOptions}
            selectedOption={filterValue}
            handleChange={(value) => setFilterValue(value)}
          />
          <DropDown
            options={EvSortingOptions}
            selectedOption={sortOrder}
            handleChange={(value) => setSortOrder(value)}
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
};

export default EvGridContainer;