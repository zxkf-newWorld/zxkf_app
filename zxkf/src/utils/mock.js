const baseUrl = `http://127.0.0.1:8090`
// devapi mockjs api
const URL = {
  // user login & reg api
  userLogin: baseUrl + '/login_reg/login', // user login
  userReg: baseUrl + '/login_reg/reg', // user reg
  // about user search history(config:phone) api
  updateSearchHistory: baseUrl + '/search_history/updateSearchHistory', //update user search history
  userSearchHistory: baseUrl + '/search_history/userSearchHistory', // user search history
  // get fullrent information api
  getFullRent: baseUrl + '/index/fullrent',
  // get jointrent information api
  getJointRent: baseUrl + '/index/jointrent',
  // get pinpai information api
  getPinPai: baseUrl + '/index/pinpai',
  // get findroommate information api
  getFindRoomMate: baseUrl + '/index/findRoomMates',
  // get findRoomMatesDetails  api
  getFindRoomMateDetails: baseUrl + '/index/findRoomMatesDetails',
  // search user avator api
  getUserAvator: baseUrl + '/index/searchUserAvatar',
  // to functions api
  getToFunctions: baseUrl + '/index/tofunctions'
}
var Mock = require('mockjs')
// 合租
var data = Mock.mock({
  "data": {
    "code": 1,
    "msg": "查询成功",
    "dataArray|3": [{
      "did|+1": 3,
      "bed": 1,
      "closet": 1,
      "writetable": 1,
      "sofa": 1,
      "tv": 1,
      "kitchen": 1,
      "toilet": 1,
      "aircondition": 1,
      "onlyrestroom": 1,
      "notfirstfloor": 1,
      "refrigerator": 1,
      "nearsubway": 1,
      "elevatorrome": 1,
      "fid": 8,
      "newpublish": 1,
      "paymonth": 0,
      "imgurl": "./img/like/like5.png",
      "address": "雁塔区 锦业路 锦业五街",
      "housesize": 25,
      "floor": 8,
      "price": "2000"
    }]
  }
})
const myResponse = function () {
  return data.data;
}
// 合租： joint rent - mockjs api
Mock.mock(URL.getJointRent, "get", (options) => {
  console.log(options, '<<<<< options');
  let {
    city,
    cityBelong
  } = JSON.parse(options.body);
  console.log(city, cityBelong, '<<<<< city & cityBelong');
  return data.data
})
// 输出结果
// console.log(data);
// 定义数据类型
// var data = Mock.mock({
//   // 20条数据
//   "jointrent|3": [{
//     // 商品种类
//     "goodsClass": "女装",
//     // 商品Id
//     "goodsId|+1": 1,
//     //商品名称
//     "goodsName": "@ctitle(10)",
//     //商品地址
//     "goodsAddress": "@county(true)",
//     //商品等级评价★
//     "goodsStar|1-5": "★",
//     //商品图片
//     "goodsImg": "@Image('100x100','@color','小甜甜')",
//     //商品售价
//     "goodsSale|30-500": 30,

//     // 邮箱：
//     "email": "@email",
//     // 颜色
//     "color": "@color",

//     // name
//     "name": "@name",

//     //img,参数1：背景色，参2：前景色，参3：图片的格式，默认png，参4：图片上的文字

//     "img": "@image('100*100','@color')",
//     //英文文本(句子)参1：句子的个数，参2：句子的最小个数  参3：句子的最大个数，没有参1时，参2参3才会生效
//     "Etext": "@paragraph(1,1,3)",

//     //中文文本(句子)参1：句子的个数，参2：句子的最小个数  参3：句子的最大个数，没有参1时，参2参3才会生效
//     "Ctext": "@cparagraph(1,1,3)",

//     //中国大区
//     "cregion": "@region",
//     // 省
//     "cprovince": "@province",
//     //市
//     "ccity": "@city",
//     //省 + 市
//     "ss": "@city(true)",
//     //县
//     "country": "@county",
//     //省市县
//     "countrysx": "@county(true)",
//     //邮政编码
//     "code": "@zip",
//     "myString01|1-4": "hello",
//     "myString02|4": "哈哈哈·",
//     // 从2开始 每次+2
//     "myNum|+2": 2,
//     "myNum02|2-8": 2,
//     "myNum03|4-6.2-4": 2,
//     // Boolean 布尔型
//     // 1.true and  flase 概率为1/2
//     'myBoolean01|1': false,
//     // 布尔值为： value and !value 概率分别为： min/(min+max)  max/(min+max)
//     "myBoolean02|1-4": true,
//     // 对象
//     // 1.从属性值：对象中随机选取 几个值
//     "object01|2": {
//       "attr01": 'attr01',
//       "attr02": 'attr02',
//       "attr03": 'attr03',
//       "attr04": 'attr04'
//     },
//     // 2. 从对象中选取2-4个属性
//     "myObject02|2-4": {
//       "attr01": 'attr01',
//       "attr02": 'attr02',
//       "attr03": 'attr03',
//       "attr04": 'attr04'
//     },
//     // 函数 Function
//     "foo": "Syntax Demo",
//     "name": function () {
//       return this.goodsImg
//     },
//     // 数组
//     // 1.从属性中随机选取一个元素
//     "myArr01|1": [{
//       "attr01": "attr01"
//     }]
//   }]
// })
module.exports = URL
