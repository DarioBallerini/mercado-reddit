<template>
  <div class="card" @click="goTo()">
    <div class="header" :class="headerClass">
      <span>{{ headerClass }}</span>
      <span class="time-span"><span class="material-icons">schedule</span>{{ relativeTime() }}</span>
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
    link: String,
    time: String
  },
  methods: {
    goTo () {
      window.open(this.link)
    },
    relativeTime () {
      const msPerMinute = 60 * 1000
      const msPerHour = msPerMinute * 60
      const msPerDay = msPerHour * 24
      const msPerMonth = msPerDay * 30
      const msPerYear = msPerDay * 365

      var elapsed = new Date() - new Date(this.time * 1000)

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + 's'
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + 'm'
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + 'h'
      } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + 'd'
      } else if (elapsed < msPerYear) {
        const cant = Math.round(elapsed / msPerMonth)
        return cant + (cant > 1 ? ' meses' : ' mes')
      } else {
        const cant = Math.round(elapsed / msPerYear)
        return cant + (cant > 1 ? ' años' : ' año ')
      }
    }
  }
})
</script>

<style>
  .card {
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
  .card:hover {
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);
  }
  .header {
    background-color: #42b983;
    display: flex;
    justify-content: space-between;
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
  .header.GRATIS {
    background-color: #ED9B40;
  }
  .header.CANJEO {
    background-color: #D8663B;
  }
  .body {
    min-height: 200px;
    display: grid;
    place-items: center;
    font-size: 18px;
    padding: 1rem;
  }
  .time-span {
    display: flex;
    align-items: center;
    font-size: 20px;
  }
</style>
