'use client'
import { formatPrice } from "@/scripts";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { EVDetails } from "./types";
import { useSearchParams } from "next/navigation";

const ListItem = ({ item }: { item: EVDetails }) => {
  // Preserving filters & pagination in the URL for navigations
  const searchParams = useSearchParams();
  const queryParams = searchParams.toString();
  const detailsUrl = `/ev/${item.id}${queryParams ? `?${queryParams}` : ""}`;

  return (
    <>
      <li className="bg-white border-[1px] border-gray py-5 px-5 rounded-2xl shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100">
        <div className="relative h-64 sm:h-64 w-full">
          <Image
            src={item.images[0]}
            alt="EV Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="py-2 flex justify-between">
          <p className="font-bold text-xl">
            {item.brand} - {item.model}
          </p>
          {item.condition === "Used" ? (
            <div className="rounded-lg self-center bg-blue-200 text-sm text-blue-900 px-2 py-1">
              {item.condition}
            </div>
          ) : (
            <div className="rounded-lg self-center bg-lime-200 text-sm text-lime-900 px-2 py-1">
              {item.condition}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 text-slate-500">
          <div className="flex gap-2">
            <p className="text-slate-900">{item.year} </p>•
            <p className="text-slate-900">{item.seats} Seater</p>•
            <p className="text-slate-900">{item.color} </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-2xl text-black">
              {formatPrice(item.price)}
            </p>
            <button className="rounded-xl border-[1px]  text-small text-slate-900 px-2">
              <Link href={detailsUrl}>Details</Link>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ListItem;
