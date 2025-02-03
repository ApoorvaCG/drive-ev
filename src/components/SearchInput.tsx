"use client";
import React from "react";
import Form from "next/form";
import Link from "next/link";

type SearchInputProps = {
  searchTerm?: string;
};

const SearchInput = ({ searchTerm }: SearchInputProps) => {

  const resetInput = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <>
      <Form action="" className="search-form text-black">
        <input
          name="query"
          type="text"
          placeholder="Search your EV here..."
          defaultValue={searchTerm}
          className="px-4 py-2 rounded-lg border-none w-1/2"
        />
        {searchTerm ? (
          <button
            type="submit"
            onClick={resetInput}
            className="ml-4 bg-yellow-500 text-black py-2 px-6 rounded-lg"
          >
            <Link href={"/"}>clear</Link>
          </button>
        ) : (
          <button
            type="submit"
            className="ml-4 bg-yellow-500 text-black py-2 px-6 rounded-lg"
          >
            Browse EVs
          </button>
        )}
      </Form>
    </>
  );
};

export default SearchInput;
