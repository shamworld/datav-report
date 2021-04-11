/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-01 22:34:58
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-10 21:16:54
 * @Deprecated: 否
 * @FilePath: /datav-report/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap.vue'
import BMap2 from '../views/BMap2.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: BMap2
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
