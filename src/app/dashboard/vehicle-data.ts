export interface VehiclesData extends Array<VehicleData> {}

export interface VehicleData {
  id: number | string;
  vin: string;
  odometer: number | string;
  tirePressure: string;
  status: string;
  batteryStatus: string;
  fuelLevel: number;
  lat: number;
  long: number;
}

export interface VehiclesDataAPI{
  vehicleData: VehiclesData;
}
