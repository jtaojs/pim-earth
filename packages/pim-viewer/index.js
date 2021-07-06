// 导入组件，组件必须声明 name 单个到处组件
import PimViewer from "./src/pim-viewer.vue";

// 为组件提供 install 安装方法，供按需引入
PimViewer.install = function (Vue) {
  Vue.component(PimViewer.name, PimViewer);
};

// 默认导出组件
export default PimViewer;
