<template>
  <div class="container">
    <div v-for="product in products" :key="product.id" >
      <Product
        :title="product.data.title"
        :headerClass="getClassName(product.data.link_flair_css_class)"
        :link="product.data.permalink"
        :time="product.data.created_utc.toString()"
        :thumbnail="(product.data.media_metadata && Object.values(product.data.media_metadata)[0].p) ? Object.values(product.data.media_metadata)[0].p[2].u.replaceAll('amp;', '') : 'self'"
      />
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
      switch (name) {
        case 'COMPRO':
          return 'COMPRO'
        case 'class_compra':
          return 'COMPRO'
        case 'SERVICIO':
          return 'SERVICIO'
        case 'GRATIS':
          return 'GRATIS'
        case 'CANJEO':
          return 'CANJEO'
        default:
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
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}
</style>
