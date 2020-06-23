import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export default function (/* { ssrContext } */) {
  const hostname = 'http://woju.chinaqwe.top:4321/';
  const Store = new Vuex.Store({
    modules: {
      // example
    },
    state: {
      code: null,
      user_info: {
        access_token: null
      },
      dorm: null,
      device_info: {
        device_id: null,
        device_name: '洗衣机',
      },
      url_paths: {
        getCode: hostname + 'getCode',
        washBegin: hostname + 'washBegin',
        findOrderByToken: hostname + 'findOrderByToken',
      }
    },
    mutations: {
      getCode(state, code) {
        state.code = code;
      },
      getDeviceInfo(state, device_info) {
        state.device_info = device_info;
      },
      getUserInfo(state, user_info) {
        state.user_info = user_info;
      },
      getDormInfo(state, dorm) {
        state.dorm = dorm;
      },
      getShopDeviceId(state, device_id) {
        state.device_info.device_id = device_id;
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store
}
