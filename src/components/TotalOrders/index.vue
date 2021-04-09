<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 23:08:39
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-06 23:06:21
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TotalOrders/index.vue
-->

<template>
  <common-card :title="'累计订单量'" :value="'2,157,420'">
    <template v-slot:chart>
      <v-chart :option="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>
<script>
import CommonCard from '../CommonCard'
export default {
  components: {
    CommonCard
  },
  setup () {
    const getOptions = () => {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false // 距x是否留间距
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [620, 432, 220, 543, 790, 430, 220, 320, 532, 320, 834],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
    }
    return {
      getOptions
    }
  }
}
</script>
<style scoped>
</style>
