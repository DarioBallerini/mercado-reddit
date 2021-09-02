<template>
  <div class="container">
    <Product v-for="product in products" :key="product.id" :title="product.title" :author="product.author" :headerClass="product.link_flair_css_class" :link="product.url" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Product from './Product.vue'

export default defineComponent({
  name: 'ProductGrid',
  props: {
    products: Array
  },
  components: {
    Product
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
</style>
