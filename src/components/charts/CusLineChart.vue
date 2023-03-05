<template>
    <apexchart :options="chartOptions" :series="chartSeries" type="line" />
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: "LineChartTwo",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          zoom: {
            enabled: false
          },
        },
        colors: ['#6525FF']
      },
      chartSeries: [
        {
          name: '',
          data: this.chartData
        }
      ]
    }
  }
};
</script>