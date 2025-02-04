"use client";
import React from "react";
import ListItem from "./ListItem";
import DropDown from "./DropDown";
import Pagination from "@/components/Pagination";
import { EVDetails, EVListData } from "./types";
import { useEVFilterSort } from "./hooks/useFilterSort";
import { usePagination } from "@/components/hooks/usePagination";
import {
  EV_FILTER_OPTIONS,
  EV_SORTING_OPTIONS,
  ITEMS_PER_PAGE,
} from "./constants";
import { useURLQueryState } from "@/components/hooks/useURLQueryState";

const EvGridContainer = ({ evData }: { evData: EVListData }) => {
  const { state, updateState } = useURLQueryState();
  const { sortedData } = useEVFilterSort(evData, state.filter, state.sort);
  const { evList, totalPages } = usePagination(
    state.page,
    ITEMS_PER_PAGE,
    sortedData
  );

  const handleClearFilters = () => {
    updateState({ filter: "", sort: "", page: 1 });
  };
  const isFiltersApplied =
    state.filter !== "" || state.sort !== "" || state.page !== 1;

  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">EV Listings</h2>
        <div className="flex gap-2">
          {isFiltersApplied && (
            <button
              onClick={handleClearFilters}
              disabled={!isFiltersApplied}
              className="rounded-lg border-[1px]  text-base text-slate-900 px-2 
              bg-gray-200 text-black hover:bg-gray-300"
            >
              Clear
            </button>
          )}
          {/* Filter and Sorting Dropdown */}
          <DropDown
            options={EV_FILTER_OPTIONS}
            selectedOption={state.filter}
            handleChange={(value) => updateState({ filter: value })}
          />
          <DropDown
            options={EV_SORTING_OPTIONS}
            selectedOption={state.sort}
            handleChange={(value) => updateState({ sort: value })}
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
      {evList.length ? (
        <Pagination
          currentPage={state.page}
          totalPages={totalPages}
          onPageChange={(newPage) => updateState({ page: newPage })}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default EvGridContainer;
