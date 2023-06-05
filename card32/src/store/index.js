import { createStore } from 'vuex'
import products from './modules/products'
import school from './modules/school'
export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    products,
    school
  }
})
