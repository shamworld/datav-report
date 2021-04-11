/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-11 22:00:02
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 22:10:06
 * @Deprecated: 否
 * @FilePath: /datav-report/src/utils/commonData.js
 */
export function format (v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

export function wrapperObject (o, k) {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

export function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}
// 钱 千分位 ￥1,000
export function wrapperMoney (o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}

export function wrapperOriginalNumber (o, k) {
  return o && o[k] ? o[k] : 0
}
// 千分位 1,000
export function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : 0
}
// 百分比
export function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}
