<template>
  <div class="catalog">
    <router-link 
      class="link"
      :to="{name: 'cart'}">
      <div class="catalog__link">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <catalog-select 
      :options="categories"
      @select="sortByCategories"
      :selected="selected"
    />
    <div class="catalog__list">
      <catalog-item 
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import {mapActions, mapGetters} from 'vuex';
import CatalogSelect from './CatalogSelect.vue'

  export default {
    name: 'CatalogMain',
    components: {
      CatalogItem,
      CatalogSelect
    },
    data(){
      return {
        categories: [
          {name: 'All', value: 'All'},
          {name: 'Male', value: 'M'},
          {name: 'Female', value: 'F'}
        ],
        selected: 'All',
        sortedProducts: [],
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      filteredProducts(){
        if(this.sortedProducts.length){
          return this.sortedProducts
        }else {
        return this.PRODUCTS
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(el){
        this.ADD_TO_CART(el)
      }
    },
    sortByCategories(category){
      this.sortedProducts = []
      let select = this
      this.PRODUCTS.map(function(item) {
        if(category.name === item.category){
          select.sortedProducts.push(item)
        }
      })
      this.selected = category.name
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    }
  }
</script>

<style lang="scss" >
.catalog {
  padding-top: 64px;
  // @media (max-width: 470px){
  //   padding-top: 80px;
  // }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link {
    position: absolute;
    top: 30px;
    right: 10px;
    padding: $padding;
    border: 1px solid $color-border;
    cursor: pointer;
  }
}
</style>