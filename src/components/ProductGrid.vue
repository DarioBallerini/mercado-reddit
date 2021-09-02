<template>
  <div class="container">
    <div v-for="product in products" :key="product.id" >
      <Product :title="product.title" :author="product.author" :headerClass="getClassName(product.link_flair_css_class)" :link="product.full_link" />
    </div>
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
  },
  methods: {
    getClassName (name: string): string {
      if (name === 'COMPRO' || name === 'class_compra') {
        return 'COMPRO'
      } else if (name === 'class_venta') {
        return 'VENDO'
      } else {
        return 'VENDO'
      }
    }
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
