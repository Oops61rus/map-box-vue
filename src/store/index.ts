import { createStore } from 'vuex'
import mapPoints from '@/store/modules/mapPoints.module';
import loading from '@/store/modules/loading.module';

export const store = createStore({
  modules: {
    mapPoints,
    loading,
  }
})