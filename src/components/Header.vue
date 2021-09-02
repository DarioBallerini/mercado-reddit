<template>
  <header>
      <img src="../assets/cart-svg.svg" alt="">
      <form action="">
        <div class="input-container">
          <input type="text" class="search-input" placeholder="Busca productos, servicios, etc">
          <i class="material-icons">search</i>
        </div>
      </form>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
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
    margin-bottom: 2rem;
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
  @media only screen and (max-width: 600px) {
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
  img {
    display: none;
  }
}
</style>
