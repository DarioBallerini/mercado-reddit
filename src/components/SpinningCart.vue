<template>
  <div class="loading-animation">
    <img class="carrito" src="../assets/cart-loader.svg" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpinningCart'
})
</script>

<style>
.loading-animation {
  position: relative;
  width: 200px;
  height: 200px;
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  transform: rotate(0deg);
  transition: transform 0.7s linear;
  animation: rotate 3s infinite linear;
}
img.carrito {
  display: block;
  position: absolute;
  width: 100px;
  margin: -22px;
  top: 50%;
  left: 50%;
  transform: translate(110px) rotate(105deg);
}
@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@media only screen and (max-width: 600px) {
  .loading-animation {
    width: 100px;
    height: 100px;
  }
  img.carrito {
    width: 60px;
    margin: -79px;
    transform: translate(110px) rotate(55deg);
  }
}

</style>
