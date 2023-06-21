import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import mapPoints from '@/store/modules/mapPoints';
import type { GeoPointModelI, GeoPointPropertiesOpenSenseI, GeoPointPropertiesPinballMapI } from '@/models/geoPoint.model';

export interface State {
  pinballPoints: Array<GeoPointModelI<GeoPointPropertiesPinballMapI>>,
  openSensePoints: Array<GeoPointModelI<GeoPointPropertiesOpenSenseI>>,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    mapPoints,
  }
})