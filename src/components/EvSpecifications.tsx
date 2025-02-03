import { VehicleSpecs } from "./types";

const EVSpecifications = ({ ev }: { ev: VehicleSpecs }) => {
  const specs = [
    {
      icon: "🔋",
      label: "Battery",
      value: `${ev.battery_capacity_kWh} kWh`,
    },
    {
      icon: "⚡",
      label: "Charging",
      value: `${ev.charging_speed_kW} kW`,
    },
    {
      icon: "🚘",
      label: "Drivetrain",
      value: ev.drivetrain,
    },
    {
      icon: "🔄",
      label: "Autopilot",
      value: ev.autopilot ? "Yes" : "No",
    },
    {
      icon: "📏",
      label: "Range",
      value: `${ev.range_km} km`,
    },
    {
      icon: "🛑",
      label: "Accidents",
      value: ev.accidents ? "Yes" : "No",
    },
    {
      icon: "💺",
      label: "Seats",
      value: ev.seats,
    },
  ];

  return (
    <div className="max-w-md p-6  rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Vehicle Specifications</h2>
      <div className="rounded-lg grid grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-xl">{spec.icon}</span>
            <div className="flex-1">
              <span className="text-gray-600">{spec.label}:</span>{" "}
              <span className="font-semibold">{spec.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EVSpecifications;
