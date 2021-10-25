import { createStore } from 'vuex'

// Modules stores
import journal from '@/modules/daybook/store/journal'

const store = createStore({
  modules: {
    journal
  }
})

export default store;