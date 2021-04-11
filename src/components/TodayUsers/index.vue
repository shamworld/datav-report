<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 23:08:39
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 22:33:11
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TodayUsers/index.vue
-->

<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <template v-slot:chart>
      <v-chart :option="getOptions"/>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{returnRate}}</span>
    </template>
  </common-card>
</template>
<script>
import CommonCard from '../CommonCard'
import { inject, computed, ref } from 'vue'
import { wrapperNumber, wrapperArray, wrapperPercentage } from '../../utils/commonData'
export default {
  components: {
    CommonCard
  },
  setup () {
    const orderUser = ref(wrapperNumber(inject('mapScatters'), 'orderUser'))
    const returnRate = ref(wrapperPercentage(inject('mapScatters'), 'returnRate'))
    const getOptions = computed(() => {
      return {
        color: ['#3398DB'],
        series: [
          {
            type: 'bar',
            barWidth: '60%', // 柱体宽度
            data: wrapperArray(inject('mapScatters'), 'orderUserTrend')
          }
        ],
        xAxis: {
          type: 'category',
          data: wrapperArray(inject('mapScatters'), 'orderUserTrendAxis'),
          show: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      }
    })
    return {
      orderUser,
      returnRate,
      getOptions
    }
  }
}
</script>
<style scoped>
</style>
