/* eslint-disable */
import path from 'path';
import { defineConfig, Plugin as VitePlugin } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import htmlTemplate from 'vite-plugin-html-template';

export default defineConfig({
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    htmlTemplate({
      entry: '/base/main.js',
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, 'src') },
      { find: 'src', replacement: path.join(__dirname, 'src') },
      { find: 'base', replacement: path.join(__dirname, 'base') },
      { find: /* ~/ *//^~(?=\/)/, replacement: path.join(__dirname, 'node_modules') },
      { find: /* ~ *//^~(?!\/)/, replacement: path.join(__dirname, 'node_modules/') },
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
  },
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    include: optimizedInclude(),
    exclude: [
      '@hb/vue-bd-header-nav/src/components/hb-bd-navbar',
    ],
  },
});

function optimizedInclude() {
  return [
    "echarts/lib/chart/bar",
    "echarts/lib/chart/line",
    "echarts/lib/chart/pie",
    "echarts/lib/chart/radar",
    "echarts/lib/chart/gauge",
    "echarts/lib/chart/sankey",
    "echarts/lib/chart/scatter",
    "echarts/lib/component/tooltip",
    "echarts/lib/component/title",
    "echarts/lib/component/legend",
    "echarts/lib/component/toolbox",
    "echarts/lib/component/dataZoom",
    "echarts/lib/component/markLine",
    "echarts/lib/component/visualMap",
    "echarts/lib/echarts",
    "element-ui/src/utils/resize-event",
    "moment/moment",
    "lodash-es",
    "qs",
    "vue",
    "element-ui",
    "@hb/container",
    "vue-amap",
    "echarts",
    "@hb/bi-ui",
    "@hb/sso-auth",
    "@hb/tianqi/lib/ubt.pc",
    "element-ui/lib/locale/lang/zh-CN",
    "vue-clipboard2",
    "moment",
    "vuex",
    "vue-router",
    "axios",
    "nprogress",
    "@hb/vue-bd-header-nav",
  ]
}
