<template>
  <Header @searchProducts="searchProducts($event)"/>
  <ProductGrid class="paddings" :products="products"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductGrid from './components/ProductGrid.vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    ProductGrid,
    Header
  },
  data () {
    return {
      products: null,
      api: process.env.VUE_APP_API
    }
  },
  created () {
    fetch(this.api)
      .then(response => response.json())
      .then(data => {
        this.products = data.data
      })
  },
  methods: {
    searchProducts (searchInput: string) {
      fetch(`https://api.pushshift.io/reddit/search/submission/?q=${searchInput}&subreddit=mercadoreddit`)
        .then(response => response.json())
        .then(data => {
          this.products = data.data
        })
    }
  }
})
</script>

<style>
#app {
  font-family: Noto Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
body {
  margin: 0;
}
.paddings {
  padding: 0 2rem 2rem 2rem;
}
@media only screen and (max-width: 600px) {
  .paddings {
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
