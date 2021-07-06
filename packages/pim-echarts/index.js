// 导入组件，组件必须声明 name 单个到处组件
import PimEcharts from "./src/echarts.vue";

// 为组件提供 install 安装方法，供按需引入
PimEcharts.install = function (Vue) {
  Vue.component(PimEcharts.name, PimEcharts);
};

// 默认导出组件
export default PimEcharts;
