<template>
  <div class="catalog-cart-item">
    <div class="catalog-cart-item__wrap">
    <img 
      class="catalog-cart-item__image"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"      
    />
  </div>
    <div class="catalog-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.Price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="catalog-cart-item__quantity">
      <p>qty</p>
      <p>
        <span 
          class="catalog-cart-item__btn"
          @click="decrementItem"
        >-</span>
        {{ cart_item_data.quantity }}
        <span 
          class="catalog-cart-item__btn"
          @click="incrementItem"
        >+</span>
      </p>
    </div>
    <button class="btn" @click="deleteFromCart">
      delete
    </button>
  </div>
</template>

<script>
  export default {
    name: 'CatalogCartItem',
    components: {},
    props: {
      cart_item_data: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      decrementItem(){
        this.$emit('decrementItem')
      },
      incrementItem(){
        this.$emit('incrementItem')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }
</script>

<style lang="scss" scoped>
 .catalog-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: $padding*2;
  margin-bottom: $margin*2;
  box-shadow: 0 0 8px $color-shadow;
  &__wrap {
    width: 100px;
    overflow: hidden;
  }
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__btn {
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
 }
</style>