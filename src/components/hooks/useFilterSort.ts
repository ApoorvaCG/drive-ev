
import { useState, useEffect } from "react";
import { EVListData, SortOrder } from "@/components/types";

export const useEVFilterSort = (evData: EVListData) => {
  const [sortedData, setSortedData] = useState(evData);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("");

  useEffect(() => {
    let filteredData = evData;

    // Apply condition filter
    if (filterValue) {
      filteredData = filteredData.filter(
        (ev) => ev.condition.toLowerCase() === filterValue.toLowerCase()
      );
    }

    // Apply sorting
    if (sortOrder) {
      filteredData = filteredData.sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    setSortedData([...filteredData]);
  }, [filterValue, sortOrder, evData]);

  return {
    sortedData,
    filterValue,
    setFilterValue,
    sortOrder,
    setSortOrder,
  };
};
