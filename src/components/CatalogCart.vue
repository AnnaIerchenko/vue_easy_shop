<template>
  <div class="catalog-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">There are no products in the cart</p>
    <cart-item-wrap
      v-if="CART.length"
      :cart_data="CART"  
   />
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import CartItemWrap from './CartItemWrap.vue';
  export default {
    name: 'CatalogCart',
    components: {
      CartItemWrap,
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    } 
  }
</script>

<style lang="scss" scoped>

</style>