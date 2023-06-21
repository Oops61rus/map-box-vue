import PinballMapHttpService from '@/services/pinballMap.http.service';
import OpenSenseMapHttpService from '@/services/openSenseMap.http.service';

export default {
  state() {
    return {
      pinballPoints: [],
      openSensePoints: [],
    }
  },
  getters: {
    getPinballPoints(state) {
      return state.pinballPoints
    },
    getOpenSensePoints(state) {
      return state.openSensePoints
    }
  },
  mutations: {
    setPoints(state, { points, field }) {
      if (field) {
        state[field] = points
      }
    },
  },
  actions: {
    async fetchPinballPoints({ commit })  {
      try {
        const points = await PinballMapHttpService.fetchPointList()

        commit('setPoints', { points, field: 'pinballPoints' })
      } catch (e) {
        console.log(e)
      }
    },
    async fetchOpenSensePoints({ commit }) {
      try {
        const points = await OpenSenseMapHttpService.fetchPointList()

        commit('setPoints', { points, field: 'openSensePoints' })
      } catch (e) {
        console.log(e)
      }
    },
  },
}