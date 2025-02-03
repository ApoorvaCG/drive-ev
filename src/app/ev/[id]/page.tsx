import React from "react";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import { getEvById } from "@/mock/getEvData";
import { formatPrice } from "@/scripts";
import EVSpecifications from "@/components/EvSpecifications";

interface PageProps {
  params: Promise<{ id: string }>;
}

const EvDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const ev = await getEvById(id);

  return (
    <>
      <Navbar />
      <div className=" mt-6 max-w-5xl mx-auto p-6 border-2 rounded-lg border-solid border-slate-400">
        {/* EV images Section */}
        <ImageGallery images={ev.images} />
        {/* EV Details Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold">
              {ev.brand} {ev.model} ({ev.year})
            </h2>
            <p className="text-lg text-gray-600">📍 {ev.location}</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">{formatPrice(ev.price)}</p>
            <p className="text-gray-500">
              {ev.condition} | {ev.color}
            </p>
          </div>

          <EVSpecifications ev={ev}/>
        </div>
      </div>
    </>
  );
};

export default EvDetailsPage;
