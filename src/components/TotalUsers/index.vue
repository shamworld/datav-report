<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 23:08:39
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-06 23:07:03
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TotalUsers/index.vue
-->

<template>
  <common-card title="累计用户数" value="1,087,503">
    <template v-slot:chart>
      <div
        id="total-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>
        <span class="month">月同比 </span>
        <span class="emphasis">35.91%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>
<script>
import CommonCard from '../CommonCard'
import { onMounted } from 'vue'
import * as echarts from 'echarts'
export default {
  components: {
    CommonCard
  },
  setup () {
    onMounted(() => {
      const chatDom = document.getElementById('total-users-chart')
      const chart = echarts.init(chatDom)
      chart.setOption({
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          data: [100],
          stack: '总量',
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          data: [250],
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom', // 自定义
          stack: '总量',
          data: [100],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'

                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'

                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.total-users-footer{
  display: flex;
  align-items: center;
  .month{
    margin-left: 10px;
  }
}
</style>
