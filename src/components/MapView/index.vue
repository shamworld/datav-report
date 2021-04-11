<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:54:13
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 00:17:56
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/MapView/index.vue
-->
<template>
  <div class="map-view">
    <div class="left">
      <b-map-scatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template #header>
          <div class="title">用户月同比增长</div>
        </template>
        <div class="chart-wrapper">
          <LiquidFill />
        </div>
      </el-card>
      <el-card shadow="hover">
        <template #header>
          <div class="title">热门搜索</div>
        </template>
        <div class="chart-wrapper">
          <word-cloud />
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import BMapScatter from '../BMapScatter/index'
import LiquidFill from '../LiquidFill'
import WordCloud from '../WordCloud'
export default {
  components: {
    BMapScatter,
    LiquidFill,
    WordCloud
  }
}
</script>
<style lang="scss" scoped>
.map-view {
  margin-top: 20px;
  display: flex;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
    .chart-wrapper{
        width: 100%;
        height: 190px;
    }
  }
}
</style>
