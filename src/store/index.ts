import { createDirectStore } from 'direct-vuex'

const { store } = createDirectStore({
  state: {
    count: 0
  },
  getters: {
    countString(state) {
      if (state.count === 0) return 'zero'
      if (state.count === 1) return 'once'
      return `${state.count} times`
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store.original

export type Store = typeof store
export const useStore = (): Store => store
