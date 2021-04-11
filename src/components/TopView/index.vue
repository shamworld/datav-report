<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:53:14
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-10 21:48:20
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TopView/index.vue
-->
<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TotalSales from '../TotalSales'
import TodayUsers from '../TodayUsers'
import TotalOrders from '../TotalOrders'
import TotalUsers from '../TotalUsers'
export default {
  components: {
    TotalSales,
    TodayUsers,
    TotalUsers,
    TotalOrders
  }
}
</script>

<style>
</style>
