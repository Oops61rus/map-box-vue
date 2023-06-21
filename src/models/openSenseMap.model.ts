export namespace OpenSenseMapNS {
  export interface LocationItemI {
    _id: string
    createdAt: string
    updatedAt: string
    name: string
    currentLocation: CurrentLocationI
    exposure: string
    sensors: SensorI[]
    model: string
    lastMeasurementAt: string
    description: string
    grouptag: string[]
  }

  export interface CurrentLocationI {
    timestamp: string
    coordinates: number[]
    type: string
  }

  export interface SensorI {
    title: string
    unit: string
    sensorType: string
    icon: string
    _id: string
    lastMeasurement: string
  }
}

