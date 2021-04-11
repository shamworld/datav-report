<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:54:13
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 23:26:00
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/SalesView/index.vue
-->
<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template #header>
        <div class="menu-wrapper">
          <el-menu
            :default-active="selectActive"
            mode="horizontal"
            @select="handleSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group
              v-model="radioSelect"
              size="small"
              style="margin-right: 20px"
            >
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>

            <el-date-picker
              v-model="datePickerValue"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :shortcuts="shortcuts"
              size="small"

            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <div class="sales-view-chart-wrapper">
        <v-chart :option="chartOption" />
        <div class="sales-view-list">
          <div class="sales-view-list-title">排行榜</div>
          <div class="sales-view-list-wrapper">
            <div class="list-item" v-for="item in rankData" :key="item.no">
              <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                {{ item.no }}
              </div>
              <div class="list-item-name">{{ item.name }}</div>
              <div class="list-item-money">{{ item.money }}</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { ref, reactive, inject, computed } from 'vue'
import { wrapperArray } from '../../utils/commonData'
export default {
  setup () {
    const orderFullYear = ref(wrapperArray(inject('mapScatters'), 'orderFullYear'))
    const orderFullYearAxis = ref(wrapperArray(inject('mapScatters'), 'orderFullYearAxis'))
    const userFullYear = ref(wrapperArray(inject('mapScatters'), 'userFullYear'))
    const userFullYearAxis = ref(wrapperArray(inject('mapScatters'), 'userFullYearAxis'))

    const selectActive = ref('1')
    const radioSelect = ref('今日')
    const datePickerValue = ref('')
    const shortcuts = ref([
      {
        text: '最近一周',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          return [start, end]
        })()
      },
      {
        text: '最近一个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        })()
      },
      {
        text: '最近三个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        })()
      }
    ])
    const chartOption = reactive({
      title: {
        text: '年度销售额',
        textStyle: {
          fontSize: 12,
          color: '#666'
        },
        left: 25,
        top: 20
      },
      xAxis: {
        type: 'category',
        data: orderFullYearAxis,
        axisTick: {
          alignWithLabel: true, // 柱状图在x轴点得中间
          lineStyle: {
            color: '#999'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#333'
        }
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            type: 'dotted',
            color: '#eee'
          }
        }
      },
      series: [
        {
          type: 'bar',
          barWidth: '35%',
          data: orderFullYear
        }
      ],
      color: ['#3398DB'],
      grid: {
        top: 70,
        left: 60,
        right: 60,
        bottom: 50
      }
    })
    const rankData = computed(() => {
      return selectActive.value === '1' ? wrapperArray(inject('mapScatters'), 'orderRank') : wrapperArray(inject('mapScatters'), 'userRank')
    })

    const render = (title, axis, data) => {
      chartOption.title.text = title
      chartOption.xAxis.data = axis
      chartOption.series[0].data = data
    }
    // ref([
    //   { no: 1, money: '322,234', name: '麦当劳' },
    //   { no: 2, money: '322,234', name: '麦当劳' },
    //   { no: 3, money: '322,234', name: '麦当劳' },
    //   { no: 4, money: '322,234', name: '麦当劳' },
    //   { no: 5, money: '322,234', name: '麦当劳' },
    //   { no: 6, money: '322,234', name: '麦当劳' },
    //   { no: 7, money: '322,234', name: '麦当劳' }
    // ])
    const handleSelect = (key, keyPath) => {
      selectActive.value = key
      if (key === '1') {
        render('年度销售额', orderFullYearAxis, orderFullYear)
      } else {
        render('年度用户访问量', userFullYearAxis, userFullYear)
      }
    }

    return {
      selectActive,
      radioSelect,
      handleSelect,
      shortcuts,
      datePickerValue,
      chartOption,
      rankData
    }
  }
}
</script>
<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      height: 100%;
      width: 100%;
      overflow: hidden;
      .sales-view-list-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .sales-view-list-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              border-radius: 50%;
              background: #000;
              font-weight: 500;
              color: #fff;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
