import axios from 'axios'
// 获取emoji头像
export function getEmojiData() {
  return axios({
      method: 'get',
      // 打包替换地址 http://youthhouse.applinzi.com/json/emojiDB.json http://127.0.0.1:8090/json/emojiDB.json
      url: 'http://127.0.0.1:8090/json/emojiDB.json',
      // url: '/public/json/emojiDB.json',
    })
    .then(function(res) {
      return Promise.resolve(res.data);
    });
}
