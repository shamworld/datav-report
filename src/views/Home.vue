<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:34:58
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-01 23:03:26
 * @Deprecated: 否
 * @FilePath: /datav-report/src/views/Home.vue
-->
<template>
  <div class="home">
    <top-view />
    <sales-view />
    <map-view />
    <bottom-view />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import MapView from '../components/MapView'
import BottomView from '../components/BottomView'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>
