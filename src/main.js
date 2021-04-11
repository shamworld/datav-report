/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:34:58
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 00:14:33
 * @Deprecated: 否
 * @FilePath: /datav-report/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import 'element-plus/lib/theme-chalk/index.css'
import {
  ElButton,
  ElCard,
  ElCol,
  ElRow,
  ElMenu,
  ElMenuItem,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElPagination
} from 'element-plus'
import ECharts from 'vue-echarts'
// 设置语言
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
import 'echarts-liquidfill'
import 'echarts-wordcloud'
// import VCharts from 'v-charts'
// import 'v-charts/lib/style.css'
locale.use(lang)

const app = createApp(App)
app.component('v-chart', ECharts)
app.use(router)
  .use(ElButton)
  .use(ElCard)
  .use(ElCol)
  .use(ElRow)
  .use(ElMenu)
  .use(ElMenuItem)
  .use(ElRadio)
  .use(ElRadioGroup)
  .use(ElRadioButton)
  .use(ElDatePicker)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElPagination)
  // .use(VCharts)
  .mount('#app')
