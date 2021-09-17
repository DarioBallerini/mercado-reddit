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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      products: [] as any[],
      api: process.env.VUE_APP_API,
      loading: true,
      searchQuery: '',
      lastTime: 0
    }
  },
  created () {
    this.goHome()
    this.getNextPage()
  },
  methods: {
    searchProducts (searchInput: string) {
      this.searchQuery = searchInput
      if (!this.loading) {
        this.loading = true
        fetch(`https://www.reddit.com/r/Mercadoreddit/search.json?q=${searchInput}&restrict_sr=1&sort=new`)
          .then(response => response.json())
          .then(data => {
            this.products = data.data.children
            this.loading = false
          })
      }
    },
    goHome () {
      this.loading = true
      this.searchQuery = ''
      fetch(this.api)
        .then(response => response.json())
        .then(data => {
          this.products = data.data.children
          this.loading = false
        })
    },
    getNextPage () {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + document.documentElement.offsetHeight + 600 >= (document.documentElement.scrollHeight) ||
        document.documentElement.scrollTop + document.documentElement.offsetHeight >= (document.documentElement.scrollHeight)
        const indexLastItem = this.products.length - 1
        if (bottomOfWindow) {
          var now = new Date().getTime()
          if ((now - this.lastTime) < 3000) return
          this.lastTime = now
          if (this.searchQuery) {
            fetch(`https://www.reddit.com/r/Mercadoreddit/search.json?q=${this.searchQuery}&after=${this.products[indexLastItem].kind}_${this.products[indexLastItem].data.id}&restrict_sr=1&sort=new`)
              .then(response => response.json())
              .then(data => {
                this.products.push(...data.data.children)
              })
          } else {
            fetch(`${this.api}?after=${this.products[indexLastItem].kind}_${this.products[indexLastItem].data.id}`)
              .then(response => response.json())
              .then((data) => {
                this.products.push(...data.data.children)
              })
          }
        }
      }
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
