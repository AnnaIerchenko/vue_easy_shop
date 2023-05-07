import { createApp } from "vue";

import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}){
      return axios('http://localhost:3000/products', {
        methods: 'GET'
      })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    }
  },
  getters: {
    PRODUCTS(state){
      return state.products
    }
  }
})

export default store

const app = createApp({})
app.use(store)