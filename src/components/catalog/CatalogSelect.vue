<template>
  <div class="catalog-select">
    <p    
      class="catalog-select__title"
      @click="areOptionsVisible = !areOptionsVisible"
      >
    {{ selected }}  
    </p>
    <div 
      v-if="areOptionsVisible"
      class="catalog-select__options">
      <p 
        class="catalog-select__options-item"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >{{ option.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogSelect',
  props: {
    options: {
      type: Array,
      default(){
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  },
  mounted(){
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  unmounted(){
    document.removeEventListener('click', this.hideSelect)
  }
}
  
</script>

<style lang="scss">
.catalog-select{
  position: relative;
  width: 100px;
  cursor: pointer;
  margin-left: $margin*2;
  // @media (max-width: 348px) {
  //           margin: 0 auto;
  // }
  &__title{
    border: 1px solid $color-border;
  }
  &__options {
    border: 1px solid $color-border;
    position: absolute;
    top: 20px;
    right: 0;
    width: calc((100% - 2px));
    background-color: $color-light;
    text-align: left;
  }
  &__options-item {
    margin: 0;
    cursor: pointer;
    &:hover {
      background-color: $color-shadow;
    }
  }
}
</style>