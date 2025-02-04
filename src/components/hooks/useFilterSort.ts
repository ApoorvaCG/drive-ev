import { useState, useEffect } from "react";
import { EVListData } from "@/components/types";

export const useEVFilterSort = (
  evData: EVListData,
  filterValue: string,
  sortValue: string
) => {
  const [sortedData, setSortedData] = useState(evData);

  useEffect(() => {
    let filteredData = evData;

    // Apply condition filter
    if (filterValue) {
      filteredData = filteredData.filter(
        (ev) => ev.condition.toLowerCase() === filterValue.toLowerCase()
      );
    }

    // Apply sorting
    if (sortValue) {
      filteredData = filteredData.sort((a, b) =>
        sortValue === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    setSortedData([...filteredData]);
  }, [evData, filterValue, sortValue]);

  return { sortedData };
};
