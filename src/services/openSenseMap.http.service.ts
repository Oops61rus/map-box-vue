import axios from 'axios';
import type { OpenSenseMapNS } from '@/models/openSenseMap.model';
import type {
  GeoPointModelI,
  GeoPointPropertiesOpenSenseI,
} from '@/models/geoPoint.model';

export class OpenSenseMapHttpService {
  apiUrl: string = 'https://api.opensensemap.org/boxes'

  async fetchPointList(): Promise<GeoPointModelI<GeoPointPropertiesOpenSenseI>[]> {
    return await axios<OpenSenseMapNS.LocationItemI[]>({
      method: 'get',
      url: `${this.apiUrl}`,
      params: {
        near: '13.424900,52.507076',
        maxDistance: '200000'
      }
    })
      .then(({ data }) => {
        return data.map(({ currentLocation, name, _id, sensors } ) => ({
          type: 'Feature',
            geometry: {
            type: 'Point',
              coordinates: currentLocation.coordinates
            },
            properties: { name: `${name} ${sensors.length}`, id: _id, sensors, type: 'opensense', color: 'blue' }
        }))
      })
  }
}

export default new OpenSenseMapHttpService()
