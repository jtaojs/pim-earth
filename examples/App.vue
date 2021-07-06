<template>
  <div id="app">
    <PimEcharts id="app" :option="option"></PimEcharts>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      option: {
        color: ["#37A2FF"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          top: "15%",
          left: "13%",
          right: "10%",
          bottom: "15%",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
            axisLabel: {
              interval: 0,
              rotate: 0,
              textStyle: {
                color: "#ffffff",
                fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ffffff",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: 14,
              },
            },
            splitNumber: 3,
          },
        ],
        series: [
          {
            name: "数量",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              // color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: "rgba(128, 255, 165)",
              //   },
              //   {
              //     offset: 1,
              //     color: "rgba(1, 191, 236)",
              //   },
              // ]),
              color: "rgba(128, 255, 165)",
            },
            emphasis: {
              focus: "series",
            },
            data: [23, 12, 25, 17, 23, 9, 16],
          },
        ],
      },
    };
  },
};
</script>
<style lang="less">
#app {
  width: 100%;
  height: 1000px;
}
</style>
