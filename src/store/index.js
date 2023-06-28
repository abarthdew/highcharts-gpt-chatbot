import { createStore } from 'vuex'
import chartStore from './modules/chartStore';

export default createStore({
  modules: {
    chartStore,
  },
});