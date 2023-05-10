<template>
  <form class="catalog-search">
    <i 
      class="catalog-search__icon material-icons"
      @click="searchByName(searchQuery)"  
    >
      search
    </i>
    <input 
      name="query"
      placeholder="Search..."
      class="catalog-search__input"
      v-model="searchQuery"
    />
    <i 
      class="catalog-search__clear material-icons"
      @click="clearSearch"
    >clear</i>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: "CatalogSearch",
    data(){
      return {
        searchQuery: ''
      }
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_QUERY'
      ]),
      searchByName(value){
        this.GET_SEARCH_QUERY(value)
      },
      clearSearch(){
        this.searchQuery = ''
        this.GET_SEARCH_QUERY()
      }
    }
  }
</script>

<style lang="scss">
  .catalog-search{
    position: relative;
    &__icon, &__clear {
      position: absolute;
      color: $main-color;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
      &__icon {
        top: 3px;
        left: 5px;
        border-right: 1px solid $color-border;
      }
      &__clear {
        top: 3px;
        right: 25px;
      }
      &__input {
        border: 1px solid $color-border;
        margin-right: 24px;
        padding: 6px 0 6px 35px;
        width: 200px;
      }
    

  }
</style>