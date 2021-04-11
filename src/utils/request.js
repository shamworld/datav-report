/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-11 21:00:14
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 21:10:45
 * @Deprecated: 否
 * @FilePath: /datav-report/src/utils/request.js
 */
import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      console.log(response.data)
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
