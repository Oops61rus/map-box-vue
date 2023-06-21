export default {
  state() {
    return {
      isLoading: false,
    }
  },
  getters: {
    getLoading(state) {
      return state.isLoading
    },
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading
    },
  }
}