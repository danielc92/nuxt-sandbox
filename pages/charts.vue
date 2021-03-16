<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart/LineChart.js'

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#1ea843',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: 'Data One',
            backgroundColor: '#d6c71c',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
  },
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
