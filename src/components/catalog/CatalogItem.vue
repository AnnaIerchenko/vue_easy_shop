<template>
  <div class="catalog-item">
    <catalog-popup
      v-if="isPopupVisible"
      rightBtnPopup="Add to Cart"
      :popup-title="product_data.name"
      @closePopup="closePopup"
      @rightBtnAction="addToCart"
    >
    <div class="catalog-item__popup">
    <div class="catalog-item__image-wrap">
    <img 
      class="catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"      
    />
    </div>
      <div class="catalog-item__content">
      <p class="catalog-item__name">{{ product_data.name }}</p>
      <p class="catalog-item__price">Price: {{ product_data.price }} $</p>
      <p class="catalog-item__price">Price: {{ product_data.category }} </p>
      </div>
    </div>
    </catalog-popup>
    <div class="catalog-item__image-wrap">
    <img 
      class="catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"      
    />
  </div>
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">Price: {{ product_data.price }} $</p>
    <div class="catalog-item__btns">
    <button
      class="catalog-item__show-info btn"
      @click="showPopup"
    >Show info</button>
    <button 
      class="catalog-item__btn btn"
      @click="addToCart"
    >
      Add to cart</button>
    </div>
  </div>
</template>

<script>
import CatalogPopup from "../popup/CatalogPopup.vue"

  export default {
    name: 'CatalogItem',
    components: {
      CatalogPopup
    },
    data(){
      return {
        isPopupVisible: false
      }
    },
    props: {
      product_data: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data)
      },
      showPopup() {
        this.isPopupVisible = true
      },
      closePopup() {
        this.isPopupVisible = false
      },
    }
  }
</script>

<style lang="scss" scoped>
 .catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px $color-shadow;
  padding: $padding*2;
  margin: 0 auto $margin*2;
  min-width: 150px;
 
  @media(max-width: 670px) {
    padding: $padding;
  }
  &__image-wrap {
    width: 100px;
    overflow: hidden;
    margin: 0 auto;
  }
  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  &__show-info.btn{
    background-color: $main-color;
  }
  &__btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 0 $margin*3;
    gap: $padding;
  }
  &__popup {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__content {
    padding-left: $padding;
  }
}
</style>