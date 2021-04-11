<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 23:08:39
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 22:23:44
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TotalOrders/index.vue
-->

<template>
  <common-card :title="'累计订单量'" :value="orderToday">
    <template v-slot:chart>
      <v-chart :option="getOptions"/>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{orderLastDay}}</span>
    </template>
  </common-card>
</template>
<script>
import CommonCard from '../CommonCard'
import { inject, computed } from 'vue'
import { wrapperNumber, wrapperArray } from '../../utils/commonData'
export default {
  components: {
    CommonCard
  },
  setup () {
    const orderToday = computed(() => {
      return wrapperNumber(inject('mapScatters'), 'orderToday')
    })
    const orderLastDay = computed(() => {
      return wrapperNumber(inject('mapScatters'), 'orderLastDay')
    })
    const getOptions = computed(() => {
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
            data: wrapperArray(inject('mapScatters'), 'orderTrend'),
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
    })
    return {
      orderToday,
      getOptions,
      orderLastDay
    }
  }
}
</script>
<style scoped>
</style>
