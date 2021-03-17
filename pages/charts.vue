<template>
  <div class="small">
    <h1>Charts page</h1>
    <button @click="fillData()">Randomize</button>
    <h3>Line chart example</h3>
    <line-chart :chart-data="lineData"></line-chart>

    <h3>Bar chart example</h3>
    <bar-chart :chart-data="barData"></bar-chart>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart/LineChart.js'
import BarChart from '~/components/BarChart/BarChart.js'

export default {
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      barData: null,
      lineData: null,
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.fillLineData()
      this.fillBarData()
    },
    fillLineData() {
      this.lineData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: '#326ba8',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: 'Flooding levels',
            backgroundColor: '#7da2c9',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      }
    },
    fillBarData() {
      this.barData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Oranges',
            backgroundColor: 'orange',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: 'Apples',
            backgroundColor: 'red',
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
