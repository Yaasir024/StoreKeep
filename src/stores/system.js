import { defineStore } from 'pinia'

export const useSystemStore = defineStore({
  id: 'system',
  state: () => ({
    darkMode: false
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    toggleDark() {
      this.darkMode = !this.darkMode
    }
  }
})
