import type { LngLatLike } from 'maplibre-gl';

export interface CoordinatesModelI {
  Portland: LngLatLike;
  Berlin: LngLatLike;
}

export type CityListT = keyof CoordinatesModelI
