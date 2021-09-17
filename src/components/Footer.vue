<template>
  <footer>
      <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style>
footer {
  padding: 0.5rem;
  background-color: var(--primary-color);
  color: white;
}
</style>
