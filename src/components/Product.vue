<template>
  <div class="card" @click="goTo()">
    <div class="header" :class="headerClass">
      <span>{{ headerClass }}</span>
    </div>
    <div class="body">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Product',
  props: {
    title: String,
    author: String,
    headerClass: String,
    link: String
  },
  methods: {
    goTo () {
      window.open(this.link)
    }
  }
})
</script>

<style>
  .card {
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
  .header {
    background-color: #42b983;
    display: grid;
    place-items: center;
    color: white;
    font-size: 24px;
    font-weight: 500;
    padding: 1rem;
  }
  .header.COMPRO {
    background-color: #D14081;
  }
  .header.SERVICIO {
    background-color: #6D9DC5;
  }
  .body {
    min-height: 200px;
    display: grid;
    place-items: center;
    font-size: 18px;
    padding: 1rem;
  }
</style>
