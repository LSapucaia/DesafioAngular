export interface Vehicle {
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export type Vehicles = Array<Vehicle>;
