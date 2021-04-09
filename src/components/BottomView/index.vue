<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:54:13
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-07 12:17:04
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/BottomView/index.vue
-->
<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <div class="chart-wrapper">
          <div class="chart-inner">
            <div class="chart">
              <div class="chart-title">搜索用户</div>
              <div class="chart-data">93,634</div>
              <v-chart :option="searchOption" />
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">198,782</div>
              <v-chart :option="searchOption" />
            </div>
          </div>
          <div class="table-wrapper">
            <el-table :data="tableData">
              <el-table-column prop="rank" label="排名" width="180" />
              <el-table-column prop="keyword" label="关键字" width="180" />
              <el-table-column prop="count" label="总搜索量" />
              <el-table-column prop="users" label="搜索用户数" />
            </el-table>
            <el-pagination
              layout="prev, pager, next"
              :total="100"
              :page-size="4"
              background
              @current-change="onPageChange"
            />
          </div>
        </div>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <div class="chart-wrapper">
          <v-chart :option="categoryOption"></v-chart>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from 'vue'
export default {
  setup: () => {
    const searchOption = reactive({
      xAxis: {
        type: 'category',
        boundaryGap: false, // 边界间隙
        data: []
      },
      yAxis: {
        show: false
      },
      series: [
        {
          type: 'line',
          data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true // 设置当前的折线为平滑折线
        }
      ],
      grid: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }
    })
    const searchNumberOption = reactive({})
    const tableData = ref([
      { id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%' },
      { id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%' },
      { id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%' },
      { id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%' }
    ])
    const radioSelect = ref('品类')
    const categoryOption = reactive({
      title: [
        {
          text: '品类分部',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        },
        {
          text: '累计订单量',
          subtext: '320',
          x: '34.5%', // 偏移
          y: '42.5%',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          textAlign: 'center'
        }
      ],
      series: [
        {
          type: 'pie',
          data: [],
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (params) {
                return params.data.legendname
              }
            }
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'], // 半径 [内半径，外半径]
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          clockwise: false, // 默认true 顺时针排列 false 逆时针排列
          itemStyle: { // 添加边距
            borderWidth: 4,
            borderColor: '#fff'
          }
        }
      ],
      legend: {
        type: 'scroll', // 滑动
        orient: 'vertical', // 设置为方向
        height: 250,
        left: '70%',
        top: 'middle',
        textStyle: {
          color: '#8c8c8c'
        }
      },
      tooltip: { // 设置鼠标移入图标得信息显示
        trigger: 'item',
        formatter: function (params) {
          const str = params.seriesName + '<br />' +
                params.marker + params.data.legendname + '<br />' +
                '数量：' + params.data.value + '<br />' +
                '占比：' + params.data.percent + '%'
          return str
        }
      }
    })

    const renderPieChart = () => {
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.40',
          itemStyle: { color: '#e7e702' },
          name: '粉面粥店 | 15.40%'
        },
        {
          legendname: '简餐便当',
          value: 97,
          percent: '22.30',
          itemStyle: { color: '#8d7fec' },
          name: '简餐便当 | 22.30%'
        },
        {
          legendname: '汉堡披萨',
          value: 92,
          percent: '21.15',
          itemStyle: { color: '#5085f2' },
          name: '汉堡披萨 | 21.15%'
        }
      ]
      categoryOption.series[0].data = mockData
    }
    const onPageChange = (page) => {
      console.log(`当前页: ${page}`)
    }

    onMounted(() => {
      renderPieChart()
    })

    return {
      searchOption,
      searchNumberOption,
      tableData,
      radioSelect,
      categoryOption,
      onPageChange
    }
  }
}
</script>
<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
