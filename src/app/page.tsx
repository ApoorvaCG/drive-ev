import { getEvData, getFilteredEvs } from "@/mock/getEvData";
import React from "react";
import SearchInput from "@/components/SearchInput";
import EvGridContainer from "@/components/EvGridContainer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {

  const query = (await searchParams).query;
  const evList = query ? await getFilteredEvs(query) : await getEvData();


  return (
    <>
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold">
          Find Your Perfect Electric Vehicle Today
        </h1>
        <p className="mt-4 text-lg">
          Browse through a wide range of electric vehicles for every need and
          budget.
        </p>
        <div className="mt-6">
          <SearchInput searchTerm={query} />
        </div>
      </section>
      <div className="p-4 container mx-auto">
        <section>
          {query && <p>search results for {query}</p>}
          {query?.length && !evList.length ? (
            <p>No results found!</p>
          ) : (
            <EvGridContainer evData={evList} />
          )}
        </section>
      </div>
    </>
  );
}
