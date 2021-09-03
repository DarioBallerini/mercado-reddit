<template>
  <header>
      <img src="../assets/cart-loader.svg" alt="" class="img-mobile" @click="goHome()">
      <img src="../assets/cart-header.svg" alt="" class="img-desktop" @click="goHome()">
      <form action="" @submit.prevent @keyup.enter="searchProducts()">
        <div class="input-container">
          <input type="text" class="search-input" placeholder="Busca productos, servicios, etc" v-model="searchInput">
          <i class="material-icons" @click="searchProducts()">search</i>
        </div>
      </form>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    },
    goHome () {
      this.searchInput = ''
      this.$emit('goHome')
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
    color: #170a1c;
    font-weight: 500;
    background-color: #42b983;
  }
  form {
    display: inherit;
    margin-left: 2rem;
  }
  .search-input {
    padding: 1rem;
    min-width: 400px
  }
  .input-container {
    display: flex;
  }
  i {
    display: grid !important;
    place-items: center;
    background: #ffc007;
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
    width: 100%
  }
  form {
    width: 100%;
    margin-left: 0;
  }
  .img-desktop {
    display: none;
  }
  .img-mobile {
    display: inline;
    height: 64px;
    margin-right: 1rem;
  }
}
</style>
