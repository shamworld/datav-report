<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-10 23:05:57
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 00:01:09
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/LiquidFill/index.vue
-->
<template>
    <v-chart :option="chartOption" />
</template>
<script>
import { reactive } from 'vue'
function getColor (value) {
  return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)'
      : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
}
export default {
  setup () {
    const chartOption = reactive({
      series: [{
        type: 'liquidFill',
        radius: '100px',
        data: [0.399], // 比例
        label: { // 文字样式
          normal: {
            formatter: (v) => {
              return `${(v.data * 100).toFixed(2)}%`
            },
            color: '#999',
            insideColor: 'transparent',
            textStyle: {
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          insideColor: '#fff'
        },
        // amplitude: 8,
        color: [getColor(0.399)],
        // 设置水球波动的渐变颜色
        // color: [{
        //   type: 'linear',
        //   x: 0,
        //   y: 1,
        //   x2: 0,
        //   y2: 0,
        //   colorStops: [{ // 颜色
        //     offset: 1,
        //     color: ['#6a7feb'] // 0% 处的颜色
        //   }, {
        //     offset: 0,
        //     color: ['#27e5f1'] // 100% 处的颜色
        //   }],
        //   global: false // 缺省为 false
        // }],
        outline: { // 外边框
          show: true,
          borderDistance: 0,
          itemStyle: {
            borderColor: '#aaa4a4',
            borderWidth: 1,
            color: 'none',
            shadowColor: '#fff',
            shadowBlur: 0
          }
        },
        backgroundStyle: {
          color: '#fff'
        },
        itemStyle: {
          shadowColor: '#fff',
          shadowBlur: 0
        }
      }],
      tooltip: { // 设置鼠标移入图标得信息显示
        trigger: 'item',
        formatter: function (params) {
          return `rate:${(params.data * 100).toFixed(2)}%`
        }
      }
    })

    return {
      chartOption
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts{
    width: 100%;
    height: 100%;
}
</style>
