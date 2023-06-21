import type { OpenSenseMapNS } from '@/models/openSenseMap.model';

export interface GeoPointModelI<PropertiesI> {
  type: string;
  geometry: {
    type: string;
    coordinates: number[] | string[];
  };
  properties: PropertiesI;
}

export interface GeoPointPropertiesOpenSenseI {
  name: string;
  id: string;
  color: string;
  sensors?: OpenSenseMapNS.SensorI[];
  type: 'opensense';
}

export interface GeoPointPropertiesPinballMapI {
  name: string;
  id: number;
  color: string;
  type: 'pinball';
}