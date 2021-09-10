<template>
  <div class="card" @click="goTo()">
    <div class="body">
      <div class="images">
        <img v-if="thumbnail !== 'self'" :src="thumbnail" alt="">
        <!-- <img v-if="thumbnail == 'self'" src="../assets/cart-loader.svg" alt=""> -->

      </div>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="header" :class="headerClass">
      <span>{{ headerClass }}</span>
      <span class="time-span"><span class="material-icons">schedule</span>{{ relativeTime() }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Product',
  props: {
    title: String,
    headerClass: String,
    link: String,
    time: String,
    thumbnail: String
  },
  methods: {
    goTo () {
      window.open(`https://www.reddit.com${this.link}`)
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
    grid-template-rows: 1fr auto;
    box-shadow: 0 -4px 6px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
  .card:hover {
    box-shadow: 0 -4px 8px 2px rgba(0,0,0,0.2);
  }
  .header {
    background-color: #42b983;
    display: flex;
    justify-content: space-between;
    place-items: center;
    color: white;
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
    display: grid;
    place-items: center;
  }
  .body .title {
    font-size: 14px;
    min-height: 70px;
    max-height: 70px;
    display: grid;
    place-items: center;
    padding: 0.5rem 1rem;
    overflow: hidden;
    background-color: white;
  }
  .images {
    width: 100%;
    height: 250px;
  }
  .images>img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .time-span {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    .body {
      max-height: unset;
    }
    .body .title {
      max-height: unset;
    }
  }
</style>
