import axios from 'axios'
// 获取emoji头像
export function getEmojiData() {
  return axios({
      method: 'get',
      url: 'http://127.0.0.1:8090/json/emojiDB.json',
<<<<<<< HEAD
=======
      // url: '/public/json/emojiDB.json',
>>>>>>> 7d4fb8855f9c11c67990b124c91712a3a0cb17cb
    })
    .then(function(res) {
      return Promise.resolve(res.data);
    });
}