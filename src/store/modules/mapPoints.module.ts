import PinballMapHttpService from '@/services/pinballMap.http.service';
import OpenSenseMapHttpService from '@/services/openSenseMap.http.service';

export default {
  state() {
    return {
      pinballPoints: [],
      openSensePoints: [],
      isPinballPointsLoaded: false,
      isOpenSensePointsLoaded: false,
    }
  },
  getters: {
    getPinballPoints(state) {
      return state.pinballPoints
    },
    getOpenSensePoints(state) {
      return state.openSensePoints
    },
    getPinballPointsLength(state) {
      return state.pinballPoints.length
    },
    getOpenSensePointsLength(state) {
      return state.openSensePoints.length
    },
    getIsPinballPointsLoaded(state) {
      return state.isPinballPointsLoaded
    },
    getIsOpenSensePointsLoaded(state) {
      return state.isOpenSensePointsLoaded
    }
  },
  mutations: {
    setPoints(state, { points, field }) {
      if (field) {
        state[field] = points
      }
    },
    setSourceLoadedPoints(state, source) {
      if (source) {
        state[source] = true
      }
    },
  },
  actions: {
    async fetchPinballPoints({ commit })  {
      try {
        commit('setLoading', true)
        const points = await PinballMapHttpService.fetchPointList()

        commit('setPoints', { points, field: 'pinballPoints' })
        commit('setSourceLoadedPoints', 'isPinballPointsLoaded')
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchOpenSensePoints({ commit }) {
      try {
        commit('setLoading', true)
        const points = await OpenSenseMapHttpService.fetchPointList()

        commit('setPoints', { points, field: 'openSensePoints' })
        commit('setSourceLoadedPoints', 'isOpenSensePointsLoaded')
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
  },
}