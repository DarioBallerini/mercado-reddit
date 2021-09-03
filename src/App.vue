<template>
  <Header @searchProducts="searchProducts($event)" @goHome="goHome()"/>
  <div class="loader-container" v-if="loading">
    <SpinningCart />
  </div>
  <ProductGrid class="paddings" :products="products" v-if="!loading"/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductGrid from './components/ProductGrid.vue'
import Header from './components/Header.vue'
import SpinningCart from './components/SpinningCart.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    ProductGrid,
    Header,
    SpinningCart,
    Footer
  },
  data () {
    return {
      products: null,
      api: process.env.VUE_APP_API,
      loading: true
    }
  },
  created () {
    this.goHome()
  },
  methods: {
    searchProducts (searchInput: string) {
      if (!this.loading) {
        this.loading = true
        fetch(`https://api.pushshift.io/reddit/search/submission/?q=${searchInput}&subreddit=mercadoreddit`)
          .then(response => response.json())
          .then(data => {
            this.products = data.data
            this.loading = false
          })
      }
    },
    goHome () {
      this.loading = true
      fetch(this.api)
        .then(response => response.json())
        .then(data => {
          this.products = data.data
          this.loading = false
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
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}
body {
  margin: 0;
}
.paddings {
  padding: 2rem;
}
.loader-container {
  display: grid;
  place-items: center;
}
@media only screen and (max-width: 600px) {
  .paddings {
    padding: 1rem;
  }
}
</style>
