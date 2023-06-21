import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import mapPoints from '@/store/modules/mapPoints';

export interface State {
  pinballPoints: Array<any>,
  openSensePoints: Array<any>,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    mapPoints,
  }
})