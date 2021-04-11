<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 23:08:39
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 22:07:33
 * @Deprecated: 否
 * @FilePath: /datav-report/src/components/TotalSales/index.vue
-->

<template>
  <common-card :title="'累计销售额'" :value="salesToday">
    <template v-slot:chart>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{salesGrowthLastDay}}</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{salesGrowthLastMonth}}</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">{{salesLastDay}}</span>
    </template>
  </common-card>
</template>
<script>
import CommonCard from '../CommonCard'
import { inject, computed } from 'vue'
import { wrapperPercentage, wrapperMoney } from '../../utils/commonData'
export default {
  components: {
    CommonCard
  },
  setup () {
    const salesToday = computed(() => {
      return wrapperMoney(inject('mapScatters'), 'salesToday')
    })
    const salesGrowthLastDay = computed(() => {
      return wrapperPercentage(inject('mapScatters'), 'salesGrowthLastDay')
    })
    const salesGrowthLastMonth = computed(() => {
      return wrapperPercentage(inject('mapScatters'), 'salesGrowthLastMonth')
    })
    const salesLastDay = computed(() => {
      return wrapperMoney(inject('mapScatters'), 'salesLastDay')
    })

    return {
      salesToday,
      salesGrowthLastDay,
      salesGrowthLastMonth,
      salesLastDay
    }
  }
}
</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
