import type { LngLatLike } from 'maplibre-gl';
import maplibregl from 'maplibre-gl';

import coordinates from './mapBox.config';
import type { CityListT } from '@/models/coordinates.model';
import type {
  GeoPointModelI,
  GeoPointPropertiesOpenSenseI,
  GeoPointPropertiesPinballMapI,
} from '@/models/geoPoint.model';

export class MapBoxHelper {
  map: any = null;
  container: string = 'map';
  mapStyle: string = 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL';
  mapLibre: string = 'https://unpkg.com/maplibre-gl@3.0.1/dist/maplibre-gl.css';
  defaultCity: CityListT = 'Portland';
  defaultCenter: LngLatLike = coordinates[this.defaultCity];
  defaultZoom: number = 12;
  points: { type: string, features: GeoPointModelI<GeoPointPropertiesOpenSenseI | GeoPointPropertiesPinballMapI>[] } = {
    type: 'FeatureCollection',
    features: []
  }
  sourceName: string = 'places'
  layersList: string[] = []

  constructor() {
    this.map = new maplibregl.Map({
      container: this.container,
      style: this.mapStyle,
      center: this.defaultCenter,
      zoom: this.defaultZoom,
    });

    this.map.on('load', () => {
      this.addStyles();
      this.addSource();
    })
  }

  private addStyles(): void {
    const link = document.createElement('link');
    link.setAttribute('href', this.mapLibre);
    link.setAttribute('rel', 'stylesheet');
    document.head.appendChild(link);
  }

  private addSource() {
    this.map.addSource(this.sourceName, {
      type: 'geojson',
      data: this.points,
    });
  }

  private recreateSource() {
    this.layersList.forEach(layerID => {
      this.map.removeLayer(layerID)
    })
    this.map.removeSource(this.sourceName)

    this.addSource()
  }

  public jumpTo(city: CityListT) {
    this.map.jumpTo({
      center: coordinates[city],
      zoom: 12,
    });
  }

  public addLayer(layerID: string) {
    this.recreateSource()

    this.points.features.forEach((feature: GeoPointModelI<GeoPointPropertiesOpenSenseI | GeoPointPropertiesPinballMapI>) => {
      const { type, color } = feature.properties;
      const layerID = 'poi-' + type;

      if (!this.map.getLayer(layerID)) {
        this.layersList.push(layerID)

        this.map.addLayer({
          id: layerID,
          type: 'symbol',
          source: 'places',
          filter: ['==', 'type', type],
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 12,
            'icon-image': 'circle' + '_15',
          },
          paint: {
            'icon-color': color,
            'text-color': 'black',
            'text-translate': [0, 15],
            'text-halo-color': '#fff',
            'text-halo-width': 2,
          },
        });
      }
    });

    this.showLayout(layerID, true)
  }

  public showLayout(layerId: string, isChecked: boolean) {
    this.map.setLayoutProperty(
      layerId,
      'visibility',
      isChecked ? 'visible' : 'none',
    );
  }

  public addPoints(points: GeoPointModelI<GeoPointPropertiesOpenSenseI | GeoPointPropertiesPinballMapI>[], layerID: string) {
    this.points.features.push(...points)
    this.addLayer(layerID)
  }
}