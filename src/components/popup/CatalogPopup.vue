<template>
  <div class="catalog-popup__wrapper" ref="popup_wrapper">
  <div class="catalog-popup">
    <div class="catalog-popup__header">
      <span>{{ popupTitle }}</span>
      <span>
        <i 
          class="material-icons catalog-popup__icon"
          @click="closePopup"
        >close</i>
      </span>
    </div>
    <div class="catalog-popup__content">
      <slot></slot>
    </div>
    <div class="catalog-popup__footer">
      <button 
        class="btn catalog-popup__close"
        @click="closePopup"
        >Close</button>
      <button 
        class="btn"
        @click="rightBtnAction" 
      >{{ rightBtnPopup }}</button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'CatalogPopup',
    methods: {
      closePopup(){
        this.$emit('closePopup')
      },
      rightBtnAction() {
        this.$emit('rightBtnAction')
      }
    },
    props: {
      rightBtnPopup: {
        type: String,
        default: 'Ok'
      },
      popupTitle: {
        type: String,
        default: 'Popup name'
      }
    },
    mounted(){
      let c = this;
      document.addEventListener('click', function(item) {
        if(item.target === c.$refs['popup_wrapper']){
          c.closePopup()
        }
      })
    }
  }
</script>

<style lang="scss">
  .catalog-popup {
    position: fixed;
    padding: $padding*2;
    top: 250px;
    width: 400px;
    box-shadow: 0 0 $padding*2 0 $color-shadow;
    left: calc(50% - 200px);
    z-index: 50;
    background-color: $color-light;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $color-popup;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 30;
      max-height: 100%;
    }
    &__content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__icon {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    &__close.btn {
      background-color: $color-btn;
    }
  }
</style>

