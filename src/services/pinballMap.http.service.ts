import axios from 'axios';
import type { PinballMapNS } from '@/models/pinballMap.model';
import type { GeoPointModelI, GeoPointPropertiesPinballMapI } from '@/models/geoPoint.model';
import type { CityListT } from '@/models/coordinates.model';

class PinballMapHttpService {
  apiUrl: string = 'https://pinballmap.com/api/v1';

  fetchPointList(region: CityListT = 'Portland'): Promise<GeoPointModelI<GeoPointPropertiesPinballMapI>[]> {
    return axios({
      method: 'get',
      url: `${this.apiUrl}/locations.json`,
      params: {
        region,
      },
    })
      .then(({ data }: { data: PinballMapNS.PinballResponse }) => {
        return data.locations?.map(({ id, lat, lon, name }) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lon, lat]
          },
          properties: { name, id, type: 'pinball', color: 'red' }
        }));
      });
  }
}

export default new PinballMapHttpService()