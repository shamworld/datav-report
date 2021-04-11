<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:34:58
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 21:48:38
 * @Deprecated: 否
 * @FilePath: /datav-report/src/views/Home.vue
-->
<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import { ref, reactive, provide } from 'vue'
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import MapView from '../components/MapView'
import BottomView from '../components/BottomView'
import { wordcloud, mapScatter, screenData } from '../api'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  },
  setup: () => {
    const wordclouds = ref(wordcloud())
    const mapScatters = reactive(mapScatter())
    const screenDatas = reactive(screenData())
    provide('wordclouds', wordclouds)
    provide('mapScatters', mapScatters)
    provide('screenDatas', screenDatas)
  }
}
</script>

<style>
.home {
  width: 100%;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>
