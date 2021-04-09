<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 23:08:39
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-06 23:06:30
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TodayUsers/index.vue
-->

<template>
  <common-card title="今日交易用户数" value="81,014">
    <template v-slot:chart>
      <v-chart :option="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.14%</span>
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
        color: ['#3398DB'],
        series: [
          {
            type: 'bar',
            barWidth: '60%', // 柱体宽度
            data: [
              410,
              82,
              200,
              334,
              390,
              330,
              220,
              150,
              82,
              200,
              134,
              290,
              330,
              150
            ]
          }
        ],
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ],
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
    }
    return {
      getOptions
    }
  }
}
</script>
<style scoped>
</style>
