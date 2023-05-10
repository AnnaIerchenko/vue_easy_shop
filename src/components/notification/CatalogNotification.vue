<template>
  <div class="catalog-notification">
    <TransitionGroup
      name="transition-animate"
      class="catalog-notification__list"
      tag="div"
    >
    <div 
      class="catalog-notification__content"
      v-for="message in messages"
      :key="message.id"
    >
      <span>{{ message.name }}</span>
      <i class="material-icons">check_circle</i>
    </div>
  </TransitionGroup>
  </div>
</template>

<script>
// import { TransitionGroup } from 'vue';
  export default {
    name: 'CatalogNotification',
    props: {
      messages: {
        type: Array,
        default(){
          return []
        }
      }
    } ,
    // components: { TransitionGroup},
    methods: {
      hideNotification(){
        let vm = this
        if(!this.messages.length){
          setInterval(function(){
            vm.messages.splice(vm.messages.length - 1, 1)
          }, 3000)
        }
      }
    },
    mounted(){
      this.hideNotification()
    }
  }
</script>

<style lang="scss">
  .catalog-notification {
    position: fixed;
    top: 80px;
    right: 16px;
    z-index: 10;
  
    &__content {
      padding: $padding*3;
      border-radius: 4px;
      color: $color-light;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 16px;
      margin-bottom: $margin*2;
      background-color: $color-special;
      max-width: 200px;
      text-align: left;
      gap: 10px;
    }
  }
  .transition-animate {
    &-enter-from {
      transform: translateX(120px);
      opacity: 0;
    }
    &_enter-active {
      transition: all .6s ease;
    }
      &-leave-active {
        transition: transform .6s ease, opacity .6s, height .6s .2s;
      }
      &-leave-to {
        height: 0;
        transform: translateX(120px);
        opacity: 0;
      }
      &-move {
        transition: transform .6s ease;
      
    }
  }
</style>