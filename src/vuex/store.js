import { createApp } from "vue";

import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    cart: [],
    searchQuery: ''
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_TO_CART: (state, product) => {
      if(state.cart.length){
        let isProductExist = false
        state.cart.map((item) => {
          if(item.article == product.article){
            isProductExist = true
            item.quantity++
          }
        })
        if(!isProductExist) {
          state.cart.push(product)
        }
      }else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if(state.cart(index).quantity > 1){
        state.cart[index].quantity--
      }
    },
    SET_SEARCH_QUERY: (state, value) => {
      state.searchQuery = value
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
    },

    ADD_TO_CART({commit}, product){
      commit('SET_TO_CART', product)
    },
    INCREMENT_CART_ITEM({commit}, index){
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index){
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({commit}, index){
      commit('REMOVE_FROM_CART', index)
    },
    GET_SEARCH_QUERY({commit}, value){
      commit('SET_SEARCH_QUERY', value)
    }
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    CART(state) {
      return state.cart
    },
    SEARCH_QUERY(state){
      return state.searchQuery
    }
  }
})

export default store

const app = createApp({})
app.use(store)