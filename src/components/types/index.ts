
export interface VehicleSpecs {
  range_km: number;
  battery_capacity_kWh: number;
  charging_speed_kW: number;
  seats: number;
  drivetrain: string;
  location: string;
  autopilot: boolean;
  kilometer_count: number;
  accidents: boolean;
}

export interface EVDetails extends VehicleSpecs{
    id: number;
    brand: string;
    model: string;
    price: number;
    year: number;
    color: string;
    condition: string;
    images: Array<string>;
  }
  
  export type EVListData = Array<EVDetails>;

  export type SortOrder = "asc" | "desc" | "";
