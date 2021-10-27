/*
 * @Author: hp
 * @Date: 2021-01-13 14:57:17
 * @LastEditTime: 2021-01-13 15:37:19
 * @LastEditors: your name
 * @Description: 重构localStorage
 * @FilePath: /zxkf/src/api/local_storage.js
 */
/*
 * 重写localStorage
 * 加入有效时间
 */
class local_storage {
  constructor(props) {
    this.props = props || {};
    this.source = this.props.source || window.localStorage;
    this.initRun();
  }
  initRun() {
    /*
     * set 存储方法
     * @ params {String} key 键
     * @ params {String} value 值 存储的值可以是数组或对象， 不能直接存储， 需要JSON.stringify()
     * @ params {String} expired 过期时间， 以分钟为单位
     * @ 由hepeng提供
     */
    const reg = new RegExp("__expires__");
    let data = this.source;
    let list = Object.keys(data);
    if (list.length > 0) {
      // eslint-disable-next-line no-unused-vars
      list.map((key, v) => {
        if (!reg.test(key)) {
          let now = Date.now();
          let expires = data[`${key}__expires__`] || Date.now() + 1;
          if (now > expires) {
            this.remove(key);
          }
        }
        return key;
      });
    }
  }
  set(key, value, expired) {
    let source = this.source;
    source[key] = JSON.stringify(value);
    if (expired) {
      source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired; // 以分钟为基础
    }
    return value; // 返回值
  }
  get(key) {
    /*
     * 先同当前时间比较，判断存储时间是否有效、
     * 存储时间expired非必须参数，默认当前时间+1， 即长期有效
     * 若有存储过期时间，且小于当前时间，执行删除操作， 并返回空值
     * 注意： 存储的数据可能是数组或对象， 取出后不能直接返回， 需要JSON.parse转换
     */
    const source = this.source,
      /* 构造函数中已经优化 */
      expired = source[`${key}__expires__`] || Date.now() + 1;
    const now = Date.now();
    if (now >= expired) {
      this.remove(key);
      return;
    }
    return source[key]
      ? JSON.parse(source[key]) /* 数组、对象需要转换 */
      : source[key];
    // Boolean([]) === Boolean({}) === true , Boolean('') === false
  }
  remove(key) {
    let data = this.source,
      value = data[key];
    delete data[key]; // 删除属性
    delete data[`${key}__expires__`]; // 删除属性对应的过期时间
    return value; // 返回删除的值
  }
}

export default new local_storage();
