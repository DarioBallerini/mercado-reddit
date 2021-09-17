<template>
  <header>
    <div class="item">
      <img src="../assets/cart-loader.svg" alt="" class="img-mobile" @click="goHome()">
      <img src="../assets/cart-header.svg" alt="" class="img-desktop" @click="goHome()">
      <form action="" @submit.prevent @keyup.enter="searchProducts()">
        <div class="input-container">
          <input type="text" class="search-input" placeholder="Busca productos, servicios, etc" v-model="searchInput">
          <i class="search-icon material-icons" @click="searchProducts()">search</i>
        </div>
      </form>
    </div>
    <div class="item dark-theme-button">
      <i class="dark-theme-icon material-icons" @click="toggleTheme()">dark_mode</i>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { event } from 'vue-gtag'

export default defineComponent({
  name: 'Header',
  data () {
    return {
      searchInput: ''
    }
  },
  methods: {
    searchProducts () {
      this.$emit('searchProducts', this.searchInput)
      event('search', {
        event_category: 'interactions',
        event_label: 'product search',
        value: this.searchInput
      })
    },
    goHome () {
      this.searchInput = ''
      this.$emit('goHome')
    },
    toggleTheme () {
      document.body.classList.toggle('dark-theme')
      let theme = 'light'
      if (document.body.classList.contains('dark-theme')) {
        theme = 'dark'
      }
      localStorage.setItem('theme', theme)
    }
  }
})
</script>

<style>
  header {
    display: flex;
    place-items: center;
    padding: 2rem;
    font-size: 2rem;
    color: var(--font-color);
    font-weight: 500;
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: flex;
  }
  .dark-theme-button {
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
  }
  .dark-theme-icon {
    font-size: 30px;
    color: white;
    user-select: none;
  }
  form {
    display: grid;
    place-items: center;
    margin-left: 2rem;
  }
  .search-input {
    padding: 1rem;
    min-width: 400px
  }
  .input-container {
    display: flex;
    max-height: 55px;
  }
  i.search-icon {
    display: grid !important;
    place-items: center;
    background: var(--secondary-color);
    padding: 0.5rem;
    border: 1px solid #767676;
    border-left: 0;
    cursor: pointer;
  }
  .img-mobile {
    display: none;
  }
  .img-desktop {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    header {
      padding: 1rem;
    }
    .search-input {
      min-width: unset;
      width: 100%;
    }
    .input-container {
      width: 100%;
      max-height: 46px;
    }
    form {
      width: 100%;
      margin-left: 0.5rem;
    }
    .img-desktop {
      display: none;
    }
    .img-mobile {
      display: inline;
      height: 55px;
    }
  }
</style>
