/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-11 21:03:25
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-11 21:37:17
 * @Deprecated: 否
 * @FilePath: /datav-report/src/api/index.js
 */
// import request from '../utils/request'

// const icode = '07EA3FDF12AF1904'

export function wordcloud () {
  return [
    { word: '北京', count: 3077, user: 194 },
    { word: '上海', count: 9011, user: 5024 },
    { word: '广州', count: 8286, user: 3655 },
    { word: '深圳', count: 243, user: 123 },
    { word: '南京', count: 9715, user: 5243 },
    { word: '杭州', count: 816, user: 612 },
    { word: '合肥', count: 90, user: 18 },
    { word: '济南', count: 6420, user: 4311 },
    { word: '太原', count: 1884, user: 217 },
    { word: '成都', count: 3064, user: 2739 },
    { word: '重庆', count: 6273, user: 2021 },
    { word: '苏州', count: 3553, user: 2678 },
    { word: '无锡', count: 7875, user: 5890 },
    { word: '常州', count: 5950, user: 2279 },
    { word: '温州', count: 5935, user: 4266 },
    { word: '哈尔滨', count: 1287, user: 908 },
    { word: '长春', count: 4523, user: 1389 },
    { word: '大连', count: 4245, user: 4063 },
    { word: '沈阳', count: 7431, user: 2096 },
    { word: '拉萨', count: 109, user: 22 },
    { word: '呼和浩特', count: 6846, user: 768 },
    { word: '武汉', count: 5828, user: 4794 },
    { word: '南宁', count: 6896, user: 470 },
    { word: '必胜客', count: 6029, user: 1834 },
    { word: '肯德基', count: 7592, user: 2948 },
    { word: '麦当劳', count: 3750, user: 196 },
    { word: '海底捞', count: 11, user: 1 },
    { word: '美食', count: 9332, user: 8539 },
    { word: '商超', count: 3874, user: 3534 },
    { word: '水果', count: 3757, user: 827 },
    { word: '跑腿', count: 9928, user: 7216 },
    { word: '送药', count: 9448, user: 1093 },
    { word: '烩饭', count: 9188, user: 3231 },
    { word: '面条', count: 8697, user: 955 },
    { word: '小龙虾', count: 2739, user: 641 },
    { word: '牛肉', count: 4271, user: 294 },
    { word: '鸡腿', count: 8088, user: 6797 },
    { word: '全家桶', count: 6020, user: 2751 },
    { word: '麦乐鸡', count: 6975, user: 4051 },
    { word: '炭烤', count: 8482, user: 1164 },
    { word: '麻辣', count: 2794, user: 1919 },
    { word: '冒菜', count: 7471, user: 7126 }]
//   request({
//     url: '/screen/wordcloud',
//     method: 'get',
//     params: { icode }
//   })
}

export function mapScatter () {
  return {
    userToday: 3446062,
    userLastDay: 1000000,
    userLastMonth: 800000,
    userGrowthLastDay: '144.51',
    userGrowthLastMonth: '205.63',
    age: [
      { key: '0-20', value: 481317 },
      { key: '20-30', value: 681706 },
      { key: '30-50', value: 901306 },
      { key: '>50', value: 381733 }],
    averageAge: '30.41',
    totalDevices: 1718916,
    devices: [
      { key: 'Android', value: 639928 },
      { key: 'iOS', value: 590270 },
      { key: 'PC', value: 488718 }],
    gender: [{ key: 'male', value: 1223056 },
      { key: 'female', value: 1223006 }],
    rider: { axisX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], orderData: { legend1: '去年骑手月人均接单', legend2: '今年骑手月人均接单', data1: ['330', '420', '560', '450', '610', '890', '720', '610', '580', '750', '770', '600'], data2: ['430', '510', '660', '550', '710', '990', '620', '550', '760', '810', '930', '720'] }, rateData: { legend1: '去年月新增骑手', legend2: '今年月新增骑手', data1: ['129', '223', '202', '197', '300', '112', '333', '249', '178', '322', '401', '167'], data2: ['179', '263', '282', '297', '330', '344', '222', '299', '190', '455', '566', '233'] } },
    category: { data1: { axisX: ['粉面粥店', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系', '轻食简餐'], data1: [95, 91, 50, 57, 47, 18, 8], data2: [5, 9, 50, 43, 53, 82, 92] }, data2: { axisX: ['草莓', '甘蔗', '榴莲', '菠萝', '香蕉', '梨', '苹果'], data1: [30, 56, 58, 66, 77, 60, 33], data2: [70, 44, 42, 34, 23, 40, 67] } },
    orderGrowthLastDay: '146.48',
    orderGrowthLastMonth: '208.10',
    orderLastMonth: 1600000,
    orderLastDay: 2000000,
    orderToday: 4929537,
    orderTrend: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
    orderUserTrend: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
    orderUserTrendAxis: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    orderFullYearAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    orderFullYear: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290],
    userFullYearAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    userFullYear: [110, 120, 90, 220, 175, 212, 192, 95, 88, 120, 250, 310],
    orderRank: [{ no: 1, name: '肯德基', money: '323,234' }, { no: 2, name: '麦当劳', money: '299,132' }, { no: 3, name: '肯德基', money: '283,998' }, { no: 4, name: '海底捞', money: '266,223' }, { no: 5, name: '西贝筱面村', money: '223,445' }, { no: 6, name: '汉堡王', money: '219,663' }, { no: 7, name: '真功夫', money: '200,997' }],
    userRank: [{ no: 1, name: '麦当劳', money: '211,335' }, { no: 2, name: '肯德基', money: '210,597' }, { no: 3, name: '必胜客', money: '200,998' }, { no: 4, name: '海底捞', money: '199,220' }, { no: 5, name: '西贝筱面村', money: '195,444' }, { no: 6, name: '汉堡王', money: '180,161' }, { no: 7, name: '真功夫', money: '172,995' }],
    salesGrowthLastDay: '177.37',
    salesGrowthLastMonth: '258.67',
    salesLastMonth: 23200000,
    salesLastDay: 30000000,
    salesToday: 83212114,
    orderPrice: 19,
    orderUser: 1455653,
    covertRate: '10.15',
    returnRate: '5.31',
    areaSales: [
      { order: '北京 -5%', shop: '北京 -7%', rider: '北京 -16%', newShop: '北京 -13%', avgOrder: '北京 +5%' },
      { order: '上海 +18%', shop: '上海 -16%', rider: '上海 -8%', newShop: '上海 +2%', avgOrder: '上海 -20%' },
      { order: '广州 -21%', shop: '广州 -20%', rider: '广州 -4%', newShop: '广州 -21%', avgOrder: '广州 +19%' },
      { order: '深圳 +19%', shop: '深圳 +21%', rider: '深圳 +5%', newShop: '深圳 -18%', avgOrder: '深圳 +5%' },
      { order: '南京 +15%', shop: '南京 +21%', rider: '南京 +23%', newShop: '南京 +4%', avgOrder: '南京 +22%' },
      { order: '杭州 -23%', shop: '杭州 +8%', rider: '杭州 -12%', newShop: '杭州 +9%', avgOrder: '杭州 -16%' },
      { order: '合肥 -14%', shop: '合肥 +17%', rider: '合肥 +21%', newShop: '合肥 -19%', avgOrder: '合肥 +15%' },
      { order: '济南 -4%', shop: '济南 -24%', rider: '济南 +8%', newShop: '济南 +10%', avgOrder: '济南 +15%' },
      { order: '太原 -18%', shop: '太原 +21%', rider: '太原 -16%', newShop: '太原 -9%', avgOrder: '太原 +16%' },
      { order: '成都 +5%', shop: '成都 -10%', rider: '成都 -21%', newShop: '成都 +6%', avgOrder: '成都 -10%' },
      { order: '重庆 +20%', shop: '重庆 -18%', rider: '重庆 -20%', newShop: '重庆 +19%', avgOrder: '重庆 -15%' },
      { order: '苏州 -14%', shop: '苏州 +16%', rider: '苏州 -8%', newShop: '苏州 -5%', avgOrder: '苏州 +7%' },
      { order: '无锡 +9%', shop: '无锡 +17%', rider: '无锡 +24%', newShop: '无锡 -19%', avgOrder: '无锡 +8%' },
      { order: '常州 +15%', shop: '常州 -18%', rider: '常州 +21%', newShop: '常州 +21%', avgOrder: '常州 +7%' },
      { order: '温州 +7%', shop: '温州 +11%', rider: '温州 +14%', newShop: '温州 -20%', avgOrder: '温州 +15%' },
      { order: '哈尔滨 -4%', shop: '哈尔滨 +6%', rider: '哈尔滨 +5%', newShop: '哈尔滨 +9%', avgOrder: '哈尔滨 +7%' },
      { order: '长春 +16%', shop: '长春 -8%', rider: '长春 +24%', newShop: '长春 +14%', avgOrder: '长春 +7%' },
      { order: '大连 +8%', shop: '大连 -7%', rider: '大连 -3%', newShop: '大连 -24%', avgOrder: '大连 +17%' },
      { order: '沈阳 +10%', shop: '沈阳 +17%', rider: '沈阳 -13%', newShop: '沈阳 +23%', avgOrder: '沈阳 +20%' },
      { order: '拉萨 -4%', shop: '拉萨 +20%', rider: '拉萨 -7%', newShop: '拉萨 -3%', avgOrder: '拉萨 -13%' },
      { order: '呼和浩特 +6%', shop: '呼和浩特 +8%', rider: '呼和浩特 -14%', newShop: '呼和浩特 -21%', avgOrder: '呼和浩特 +5%' },
      { order: '武汉 +21%', shop: '武汉 +4%', rider: '武汉 -8%', newShop: '武汉 -19%', avgOrder: '武汉 -5%' },
      { order: '南宁 -9%', shop: '南宁 -24%', rider: '南宁 -5%', newShop: '南宁 -12%', avgOrder: '南宁 +9%' }],
    areaTop: [
      { city: '北京', rate: '+3%', shop: [{ shop: '必胜客', order: 346, sales: 4390 }, { shop: '肯德基', order: 299, sales: 3725 }, { shop: '麦当劳', order: 493, sales: 4944 }, { shop: '海底捞', order: 105, sales: 1401 }] }, { city: '上海', rate: '-19%', shop: [{ shop: '必胜客', order: 892, sales: 16216 }, { shop: '肯德基', order: 890, sales: 17559 }, { shop: '麦当劳', order: 295, sales: 4336 }, { shop: '海底捞', order: 184, sales: 3455 }] }, { city: '广州', rate: '+11%', shop: [{ shop: '必胜客', order: 574, sales: 7111 }, { shop: '肯德基', order: 595, sales: 5973 }, { shop: '麦当劳', order: 352, sales: 5420 }, { shop: '海底捞', order: 804, sales: 8056 }] }, { city: '深圳', rate: '+8%', shop: [{ shop: '必胜客', order: 923, sales: 15026 }, { shop: '肯德基', order: 385, sales: 5159 }, { shop: '麦当劳', order: 923, sales: 18386 }, { shop: '海底捞', order: 249, sales: 3759 }] }, { city: '南京', rate: '+19%', shop: [{ shop: '必胜客', order: 666, sales: 7286 }, { shop: '肯德基', order: 203, sales: 3708 }, { shop: '麦当劳', order: 963, sales: 12509 }, { shop: '海底捞', order: 339, sales: 4810 }] }, { city: '杭州', rate: '+21%', shop: [{ shop: '必胜客', order: 861, sales: 12622 }, { shop: '肯德基', order: 257, sales: 3749 }, { shop: '麦当劳', order: 475, sales: 7880 }, { shop: '海底捞', order: 125, sales: 1407 }] }, { city: '合肥', rate: '-14%', shop: [{ shop: '必胜客', order: 38, sales: 583 }, { shop: '肯德基', order: 668, sales: 9899 }, { shop: '麦当劳', order: 124, sales: 1573 }, { shop: '海底捞', order: 655, sales: 7322 }] }, { city: '济南', rate: '-15%', shop: [{ shop: '必胜客', order: 554, sales: 6166 }, { shop: '肯德基', order: 193, sales: 2622 }, { shop: '麦当劳', order: 199, sales: 2857 }, { shop: '海底捞', order: 183, sales: 3628 }] }, { city: '太原', rate: '+19%', shop: [{ shop: '必胜客', order: 337, sales: 5786 }, { shop: '肯德基', order: 703, sales: 9321 }, { shop: '麦当劳', order: 204, sales: 3051 }, { shop: '海底捞', order: 969, sales: 16715 }] }, { city: '成都', rate: '+10%', shop: [{ shop: '必胜客', order: 110, sales: 1195 }, { shop: '肯德基', order: 432, sales: 7577 }, { shop: '麦当劳', order: 901, sales: 13893 }, { shop: '海底捞', order: 762, sales: 12252 }] }, { city: '重庆', rate: '-17%', shop: [{ shop: '必胜客', order: 651, sales: 11099 }, { shop: '肯德基', order: 534, sales: 6568 }, { shop: '麦当劳', order: 988, sales: 19592 }, { shop: '海底捞', order: 649, sales: 12668 }] }, { city: '苏州', rate: '-21%', shop: [{ shop: '必胜客', order: 289, sales: 5228 }, { shop: '肯德基', order: 407, sales: 4216 }, { shop: '麦当劳', order: 459, sales: 9060 }, { shop: '海底捞', order: 555, sales: 7126 }] }, { city: '无锡', rate: '-11%', shop: [{ shop: '必胜客', order: 678, sales: 7864 }, { shop: '肯德基', order: 684, sales: 10492 }, { shop: '麦当劳', order: 451, sales: 5583 }, { shop: '海底捞', order: 744, sales: 10929 }] }, { city: '常州', rate: '-11%', shop: [{ shop: '必胜客', order: 87, sales: 1414 }, { shop: '肯德基', order: 944, sales: 11686 }, { shop: '麦当劳', order: 854, sales: 15064 }, { shop: '海底捞', order: 42, sales: 805 }] }, { city: '温州', rate: '-13%', shop: [{ shop: '必胜客', order: 235, sales: 2526 }, { shop: '肯德基', order: 655, sales: 11979 }, { shop: '麦当劳', order: 795, sales: 8331 }, { shop: '海底捞', order: 24, sales: 250 }] }, { city: '哈尔滨', rate: '+15%', shop: [{ shop: '必胜客', order: 893, sales: 15582 }, { shop: '肯德基', order: 502, sales: 6771 }, { shop: '麦当劳', order: 590, sales: 10738 }, { shop: '海底捞', order: 424, sales: 5473 }] }, { city: '长春', rate: '+14%', shop: [{ shop: '必胜客', order: 39, sales: 526 }, { shop: '肯德基', order: 463, sales: 4764 }, { shop: '麦当劳', order: 623, sales: 8092 }, { shop: '海底捞', order: 94, sales: 1865 }] }, { city: '大连', rate: '+23%', shop: [{ shop: '必胜客', order: 633, sales: 11615 }, { shop: '肯德基', order: 91, sales: 1399 }, { shop: '麦当劳', order: 489, sales: 5002 }, { shop: '海底捞', order: 331, sales: 4746 }] }, { city: '沈阳', rate: '-14%', shop: [{ shop: '必胜客', order: 622, sales: 7190 }, { shop: '肯德基', order: 806, sales: 16063 }, { shop: '麦当劳', order: 787, sales: 10836 }, { shop: '海底捞', order: 196, sales: 2610 }] }, { city: '拉萨', rate: '+17%', shop: [{ shop: '必胜客', order: 139, sales: 2609 }, { shop: '肯德基', order: 737, sales: 11018 }, { shop: '麦当劳', order: 580, sales: 9952 }, { shop: '海底捞', order: 513, sales: 8946 }] }, { city: '呼和浩特', rate: '+5%', shop: [{ shop: '必胜客', order: 585, sales: 11530 }, { shop: '肯德基', order: 701, sales: 7479 }, { shop: '麦当劳', order: 748, sales: 13306 }, { shop: '海底捞', order: 564, sales: 10558 }] }, { city: '武汉', rate: '+16%', shop: [{ shop: '必胜客', order: 62, sales: 867 }, { shop: '肯德基', order: 330, sales: 6299 }, { shop: '麦当劳', order: 250, sales: 4330 }, { shop: '海底捞', order: 350, sales: 3510 }] }, { city: '南宁', rate: '+9%', shop: [{ shop: '必胜客', order: 954, sales: 18402 }, { shop: '肯德基', order: 478, sales: 7399 }, { shop: '麦当劳', order: 83, sales: 1408 }, { shop: '海底捞', order: 675, sales: 9207 }] }],
    realTimeOrder: 774,
    growthLastDay: '144.61',
    growthLastMonth: '205.76'
  }

  //   request({
  //     url: '/screen/map/scatter',
  //     method: 'get',
  //     params: { icode }
  //   })
}

export function screenData () {
  return {
    data:
    [
      { name: '海门', value: 9 },
      { name: '鄂尔多斯', value: 12 },
      { name: '招远', value: 12 },
      { name: '舟山', value: 12 },
      { name: '齐齐哈尔', value: 14 },
      { name: '盐城', value: 15 },
      { name: '赤峰', value: 16 },
      { name: '青岛', value: 118 },
      { name: '乳山', value: 18 },
      { name: '金昌', value: 19 },
      { name: '泉州', value: 21 },
      { name: '莱西', value: 21 },
      { name: '日照', value: 21 },
      { name: '胶南', value: 22 },
      { name: '南通', value: 123 },
      { name: '拉萨', value: 24 }, { name: '云浮', value: 24 }, { name: '梅州', value: 25 }, { name: '文登', value: 25 }, { name: '上海', value: 125 }, { name: '攀枝花', value: 25 }, { name: '威海', value: 25 }, { name: '承德', value: 25 }, { name: '厦门', value: 26 }, { name: '汕尾', value: 26 }, { name: '潮州', value: 26 }, { name: '丹东', value: 27 }, { name: '太仓', value: 27 }, { name: '曲靖', value: 27 }, { name: '烟台', value: 28 }, { name: '福州', value: 29 }, { name: '瓦房店', value: 30 }, { name: '即墨', value: 30 }, { name: '抚顺', value: 31 }, { name: '玉溪', value: 31 }, { name: '张家口', value: 31 }, { name: '阳泉', value: 31 }, { name: '莱州', value: 32 }, { name: '湖州', value: 32 }, { name: '汕头', value: 32 }, { name: '昆山', value: 33 }, { name: '宁波', value: 33 }, { name: '湛江', value: 33 }, { name: '揭阳', value: 34 }, { name: '荣成', value: 34 }, { name: '连云港', value: 35 }, { name: '葫芦岛', value: 35 }, { name: '常熟', value: 36 }, { name: '东莞', value: 36 }, { name: '河源', value: 36 }, { name: '淮安', value: 36 }, { name: '泰州', value: 36 }, { name: '南宁', value: 37 }, { name: '营口', value: 37 }, { name: '惠州', value: 37 }, { name: '江阴', value: 37 }, { name: '蓬莱', value: 37 }, { name: '韶关', value: 38 }, { name: '嘉峪关', value: 38 }, { name: '广州', value: 38 }, { name: '延安', value: 38 }, { name: '太原', value: 39 }, { name: '清远', value: 39 }, { name: '中山', value: 39 }, { name: '昆明', value: 39 }, { name: '寿光', value: 40 }, { name: '盘锦', value: 40 }, { name: '长治', value: 41 }, { name: '深圳', value: 41 }, { name: '珠海', value: 42 }, { name: '宿迁', value: 43 }, { name: '咸阳', value: 43 }, { name: '铜川', value: 44 }, { name: '平度', value: 44 }, { name: '佛山', value: 44 }, { name: '海口', value: 44 }, { name: '江门', value: 45 }, { name: '章丘', value: 45 }, { name: '肇庆', value: 46 }, { name: '大连', value: 47 }, { name: '临汾', value: 47 }, { name: '吴江', value: 47 }, { name: '石嘴山', value: 49 }, { name: '沈阳', value: 50 }, { name: '苏州', value: 50 }, { name: '茂名', value: 50 }, { name: '嘉兴', value: 51 }, { name: '长春', value: 51 }, { name: '胶州', value: 52 }, { name: '银川', value: 52 }, { name: '张家港', value: 52 }, { name: '三门峡', value: 53 }, { name: '锦州', value: 54 }, { name: '南昌', value: 54 }, { name: '柳州', value: 54 }, { name: '三亚', value: 54 }, { name: '自贡', value: 56 }, { name: '吉林', value: 56 }, { name: '阳江', value: 57 }, { name: '泸州', value: 57 }, { name: '西宁', value: 57 }, { name: '宜宾', value: 58 }, { name: '呼和浩特', value: 58 }, { name: '成都', value: 58 }, { name: '大同', value: 58 }, { name: '镇江', value: 59 }, { name: '桂林', value: 59 }, { name: '张家界', value: 59 }, { name: '宜兴', value: 59 }, { name: '北海', value: 60 }, { name: '西安', value: 61 }, { name: '金坛', value: 62 }, { name: '东营', value: 62 }, { name: '牡丹江', value: 63 }, { name: '遵义', value: 63 }, { name: '绍兴', value: 63 }, { name: '扬州', value: 64 }, { name: '常州', value: 64 }, { name: '潍坊', value: 65 }, { name: '重庆', value: 66 }, { name: '台州', value: 67 }, { name: '南京', value: 267 }, { name: '滨州', value: 70 }, { name: '贵阳', value: 71 }, { name: '无锡', value: 71 }, { name: '本溪', value: 71 }, { name: '克拉玛依', value: 72 }, { name: '渭南', value: 72 }, { name: '马鞍山', value: 72 }, { name: '宝鸡', value: 72 }, { name: '焦作', value: 75 }, { name: '句容', value: 75 }, { name: '北京', value: 279 }, { name: '徐州', value: 79 }, { name: '衡水', value: 80 }, { name: '包头', value: 80 }, { name: '绵阳', value: 80 }, { name: '乌鲁木齐', value: 84 }, { name: '枣庄', value: 84 }, { name: '杭州', value: 384 }, { name: '淄博', value: 85 }, { name: '鞍山', value: 86 }, { name: '溧阳', value: 86 }, { name: '库尔勒', value: 86 }, { name: '安阳', value: 90 }, { name: '开封', value: 90 }, { name: '济南', value: 192 }, { name: '德阳', value: 93 }, { name: '温州', value: 95 }, { name: '九江', value: 96 }, { name: '邯郸', value: 98 }, { name: '临安', value: 99 }, { name: '兰州', value: 99 }, { name: '沧州', value: 10 }, { name: '临沂', value: 13 }, { name: '南充', value: 104 }, { name: '天津', value: 195 }, { name: '富阳', value: 6 }, { name: '泰安', value: 12 }, { name: '诸暨', value: 20 }, { name: '郑州', value: 113 }, { name: '哈尔滨', value: 114 }, { name: '聊城', value: 56 }, { name: '芜湖', value: 97 }, { name: '唐山', value: 29 }, { name: '平顶山', value: 19 }, { name: '邢台', value: 19 }, { name: '德州', value: 40 }, { name: '济宁', value: 20 }, { name: '荆州', value: 27 }, { name: '宜昌', value: 130 }, { name: '义乌', value: 32 }, { name: '丽水', value: 33 }, { name: '洛阳', value: 34 }, { name: '秦皇岛', value: 36 }, { name: '株洲', value: 43 }, { name: '石家庄', value: 147 }, { name: '莱芜', value: 48 }, { name: '常德', value: 22 }, { name: '保定', value: 13 }, { name: '湘潭', value: 14 }, { name: '金华', value: 37 }, { name: '岳阳', value: 29 }, { name: '长沙', value: 175 }, { name: '衢州', value: 17 }, { name: '廊坊', value: 23 }, { name: '菏泽', value: 19 }, { name: '合肥', value: 129 }, { name: '武汉', value: 173 }, { name: '大庆', value: 12 }],
    geo: { 海门: [121.15, 31.89], 鄂尔多斯: [109.781327, 39.608266], 招远: [120.38, 37.35], 舟山: [122.207216, 29.985295], 齐齐哈尔: [123.97, 47.33], 盐城: [120.13, 33.38], 赤峰: [118.87, 42.28], 青岛: [120.33, 36.07], 乳山: [121.52, 36.89], 金昌: [102.188043, 38.520089], 泉州: [118.58, 24.93], 莱西: [120.53, 36.86], 日照: [119.46, 35.42], 胶南: [119.97, 35.88], 南通: [121.05, 32.08], 拉萨: [91.11, 29.97], 云浮: [112.02, 22.93], 梅州: [116.1, 24.55], 文登: [122.05, 37.2], 上海: [121.48, 31.22], 攀枝花: [101.718637, 26.582347], 威海: [122.1, 37.5], 承德: [117.93, 40.97], 厦门: [118.1, 24.46], 汕尾: [115.375279, 22.786211], 潮州: [116.63, 23.68], 丹东: [124.37, 40.13], 太仓: [121.1, 31.45], 曲靖: [103.79, 25.51], 烟台: [121.39, 37.52], 福州: [119.3, 26.08], 瓦房店: [121.979603, 39.627114], 即墨: [120.45, 36.38], 抚顺: [123.97, 41.97], 玉溪: [102.52, 24.35], 张家口: [114.87, 40.82], 阳泉: [113.57, 37.85], 莱州: [119.942327, 37.177017], 湖州: [120.1, 30.86], 汕头: [116.69, 23.39], 昆山: [120.95, 31.39], 宁波: [121.56, 29.86], 湛江: [110.359377, 21.270708], 揭阳: [116.35, 23.55], 荣成: [122.41, 37.16], 连云港: [119.16, 34.59], 葫芦岛: [120.836932, 40.711052], 常熟: [120.74, 31.64], 东莞: [113.75, 23.04], 河源: [114.68, 23.73], 淮安: [119.15, 33.5], 泰州: [119.9, 32.49], 南宁: [108.33, 22.84], 营口: [122.18, 40.65], 惠州: [114.4, 23.09], 江阴: [120.26, 31.91], 蓬莱: [120.75, 37.8], 韶关: [113.62, 24.84], 嘉峪关: [98.289152, 39.77313], 广州: [113.23, 23.16], 延安: [109.47, 36.6], 太原: [112.53, 37.87], 清远: [113.01, 23.7], 中山: [113.38, 22.52], 昆明: [102.73, 25.04], 寿光: [118.73, 36.86], 盘锦: [122.070714, 41.119997], 长治: [113.08, 36.18], 深圳: [114.07, 22.62], 珠海: [113.52, 22.3], 宿迁: [118.3, 33.96], 咸阳: [108.72, 34.36], 铜川: [109.11, 35.09], 平度: [119.97, 36.77], 佛山: [113.11, 23.05], 海口: [110.35, 20.02], 江门: [113.06, 22.61], 章丘: [117.53, 36.72], 肇庆: [112.44, 23.05], 大连: [121.62, 38.92], 临汾: [111.5, 36.08], 吴江: [120.63, 31.16], 石嘴山: [106.39, 39.04], 沈阳: [123.38, 41.8], 苏州: [120.62, 31.32], 茂名: [110.88, 21.68], 嘉兴: [120.76, 30.77], 长春: [125.35, 43.88], 胶州: [120.03336, 36.264622], 银川: [106.27, 38.47], 张家港: [120.555821, 31.875428], 三门峡: [111.19, 34.76], 锦州: [121.15, 41.13], 南昌: [115.89, 28.68], 柳州: [109.4, 24.33], 三亚: [109.511909, 18.252847], 自贡: [104.778442, 29.33903], 吉林: [126.57, 43.87], 阳江: [111.95, 21.85], 泸州: [105.39, 28.91], 西宁: [101.74, 36.56], 宜宾: [104.56, 29.77], 呼和浩特: [111.65, 40.82], 成都: [104.06, 30.67], 大同: [113.3, 40.12], 镇江: [119.44, 32.2], 桂林: [110.28, 25.29], 张家界: [110.479191, 29.117096], 宜兴: [119.82, 31.36], 北海: [109.12, 21.49], 西安: [108.95, 34.27], 金坛: [119.56, 31.74], 东营: [118.49, 37.46], 牡丹江: [129.58, 44.6], 遵义: [106.9, 27.7], 绍兴: [120.58, 30.01], 扬州: [119.42, 32.39], 常州: [119.95, 31.79], 潍坊: [119.1, 36.62], 重庆: [106.54, 29.59], 台州: [121.420757, 28.656386], 南京: [118.78, 32.04], 滨州: [118.03, 37.36], 贵阳: [106.71, 26.57], 无锡: [120.29, 31.59], 本溪: [123.73, 41.3], 克拉玛依: [84.77, 45.59], 渭南: [109.5, 34.52], 马鞍山: [118.48, 31.56], 宝鸡: [107.15, 34.38], 焦作: [113.21, 35.24], 句容: [119.16, 31.95], 北京: [116.46, 39.92], 徐州: [117.2, 34.26], 衡水: [115.72, 37.72], 包头: [110, 40.58], 绵阳: [104.73, 31.48], 乌鲁木齐: [87.68, 43.77], 枣庄: [117.57, 34.86], 杭州: [120.19, 30.26], 淄博: [118.05, 36.78], 鞍山: [122.85, 41.12], 溧阳: [119.48, 31.43], 库尔勒: [86.06, 41.68], 安阳: [114.35, 36.1], 开封: [114.35, 34.79], 济南: [117, 36.65], 德阳: [104.37, 31.13], 温州: [120.65, 28.01], 九江: [115.97, 29.71], 邯郸: [114.47, 36.6], 临安: [119.72, 30.23], 兰州: [103.73, 36.03], 沧州: [116.83, 38.33], 临沂: [118.35, 35.05], 南充: [106.110698, 30.837793], 天津: [117.2, 39.13], 富阳: [119.95, 30.07], 泰安: [117.13, 36.18], 诸暨: [120.23, 29.71], 郑州: [113.65, 34.76], 哈尔滨: [126.63, 45.75], 聊城: [115.97, 36.45], 芜湖: [118.38, 31.33], 唐山: [118.02, 39.63], 平顶山: [113.29, 33.75], 邢台: [114.48, 37.05], 德州: [116.29, 37.45], 济宁: [116.59, 35.38], 荆州: [112.239741, 30.335165], 宜昌: [111.3, 30.7], 义乌: [120.06, 29.32], 丽水: [119.92, 28.45], 洛阳: [112.44, 34.7], 秦皇岛: [119.57, 39.95], 株洲: [113.16, 27.83], 石家庄: [114.48, 38.03], 莱芜: [117.67, 36.19], 常德: [111.69, 29.05], 保定: [115.48, 38.85], 湘潭: [112.91, 27.87], 金华: [119.64, 29.12], 岳阳: [113.09, 29.37], 长沙: [113, 28.21], 衢州: [118.88, 28.97], 廊坊: [116.7, 39.53], 菏泽: [115.480656, 35.23375], 合肥: [117.27, 31.86], 武汉: [114.31, 30.52], 大庆: [125.03, 46.58] }
  }

  //   request({
  //     url: '/screen/data',
  //     method: 'get',
  //     params: { icode }
  //   })
}
