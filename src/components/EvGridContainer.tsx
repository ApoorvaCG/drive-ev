"use client";
import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import DropDown from "./DropDown";
import { EVDetails, EVListData } from "./types";
import { useEVFilterSort } from "./hooks/useFilterSort";
import { EV_FILTER_OPTIONS, EV_SORTING_OPTIONS, ITEMS_PER_PAGE } from "./constants";
import { usePagination } from "@/components/hooks/usePagination";
import Pagination from "@/components/Pagination";

const EvGridContainer = ({ evData }: { evData: EVListData }) => {
  const { sortedData, filterValue, setFilterValue, sortOrder, setSortOrder } =
    useEVFilterSort(evData);

  const [page, setPage] = useState(1);
  const { evList, totalPages } = usePagination(page, ITEMS_PER_PAGE, sortedData);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    // set page number to initial when there user applies filer or sorting
    setPage(1);
  }, [filterValue, sortOrder]);

  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">EV Listings</h2>
        <div className="flex gap-2">
          {/* Filter and Sorting Dropdown */}
          <DropDown
            options={EV_FILTER_OPTIONS}
            selectedOption={filterValue}
            handleChange={(value) => setFilterValue(value)}
          />
          <DropDown
            options={EV_SORTING_OPTIONS}
            selectedOption={sortOrder}
            handleChange={(value) => setSortOrder(value)}
          />
        </div>
      </div>
      <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        {evList.map((evItem: EVDetails) => {
          return (
            <React.Fragment key={evItem.id}>
              <ListItem item={evItem} />
            </React.Fragment>
          );
        })}
      </ul>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EvGridContainer;
