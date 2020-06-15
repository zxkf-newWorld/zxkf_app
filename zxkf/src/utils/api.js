// dev baseUrl
let baseUrl = 'http://127.0.0.1:3000';
// production baseUrl
// let baseUrl = "http://youthhouse.applinzi.com"
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

module.exports = URL;
//
