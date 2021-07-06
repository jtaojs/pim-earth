<template>
  <div :id="id" ref="echarts" class="echarts"></div>
</template>

<script>
import * as echarts from "echarts";
import { on, off } from "./tools";

export default {
  name: "PimEcharts",
  props: {
    id: {
      type: String,
      required: true,
    },
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    option: {
      handler: "init",
      deep: true,
    },
    series: {
      handler: "init",
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
  methods: {
    init() {
      if (!this.option || Object.keys(this.option).length === 0) {
        return;
      }
      if (this.chart) {
        this.chart = echarts.dispose(this.chart);
      }
      this.chart = echarts.init(this.$refs.echarts);
      this.chart.setOption(this.option);
      on(window, "resize", this.resize);
    },
    resize() {
      this.chart.resize();
    },
  },
};
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
