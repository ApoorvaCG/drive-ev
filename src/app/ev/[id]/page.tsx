import React from "react";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import { getEvById } from "@/mock/getEvData";

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
            <p className="mt-2 text-3xl font-bold text-blue-600">${ev.price}</p>
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

// import React from 'react';

const EVSpecifications = ({ ev }) => {
  const specs = [
    {
      icon: '🔋',
      label: 'Battery',
      value: `${ev.battery_capacity_kWh} kWh`
    },
    {
      icon: '⚡',
      label: 'Charging',
      value: `${ev.charging_speed_kW} kW`
    },
    {
      icon: '🚘',
      label: 'Drivetrain',
      value: ev.drivetrain
    },
    {
      icon: '🔄',
      label: 'Autopilot',
      value: ev.autopilot ? 'Yes' : 'No'
    },
    {
      icon: '📏',
      label: 'Range',
      value: `${ev.range_km} km`
    },
    {
      icon: '🛑',
      label: 'Accidents',
      value: ev.accidents ? 'Yes' : 'No'
    },
    {
      icon: '💺',
      label: 'Seats',
      value: ev.seats
    }
  ];

  return (
    <div className="max-w-md p-6  rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Vehicle Specifications</h2>
      <div className="rounded-lg grid grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-xl">{spec.icon}</span>
            <div className="flex-1">
              <span className="text-gray-600">{spec.label}:</span>{' '}
              <span className="font-semibold">{spec.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
