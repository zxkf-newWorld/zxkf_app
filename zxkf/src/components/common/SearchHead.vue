<template>
  <div class="SearchHead">
    <div class="searchTitle">
      <!-- <form action=""> -->
      <img
        @click="clear"
        v-show="isInput"
        src="../../../public/search/empty.png"
      />
      <input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="请输入商圈、地铁、小区"
        v-model="kw"
        @keydown.13="handleSearchHistory"
        @blur="handleSearchHistory"
        maxlength="20"
      />
      <span @click="closeSearch" v-show="!isInput">取消</span>
      <!-- <span @click="search" v-show="isInput">搜索</span> -->
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SearchHead",
  data() {
    return {
      kw: "", //输入框的内容
      isInput: false, //是否输入内容的变量
      timeout: null //加入了防抖
    };
  },
  computed: {
    ...mapGetters([
      'status', /* 登录状态 */
      'searchHistory', /* 用户对应的搜索历史记录 */
      'searchHistoryList', /* 未登录下的搜索历史列表 */
    ]),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({
      handleFootTab: "FOOTTAB_CHANGE" /* foot_tab切换 */
    }),
    clear() {
      this.kw = "";
      this.isInput = false;
    },
    closeSearch() {
      console.log(this.$router, "<<<<< this.$router");
      // 如果是/Search，处理foot_tab，跳转到首页
      if (this.$route.name === "Search") {
        /*
         * 判断用户登录状态,并分别作出存储搜索历史记录
         * 将搜索历史记录存入相关的数据库中
         * 成功：跳转页面
         * 失败：打印 搜索历史记录存入数据库失败
         */
        if (this.status === 'on') {
          // 将数据存入用户对应的searchHistory
          // 获取数据
          let send = this.searchHistory;
          // 发送请求，存储数据

        } else {
          // 将数据存入未登录的searchHistrory
          // 暂时不做操作
        }
        this.handleFootTab("首页");
        this.$router.push("/");
      } else {
        this.$router.go(-1);
      }
    },
    search() {
      //发送jaax请求
    },
    handleSearchHistory() {
      /*
       * 获取输入的值，发送请求，查询相关值
       * 将有效查询值添加到查询数组中
       *
       */
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        console.log(this.kw, "<<<<< 搜索框关键字");
        this.$Bus.$emit("search-list", this.kw);
      }, 1000);
      // this.debounce(this.handle, 1000);
      // console.log(this.kw, '<<<<< 搜索框的关键字');
      // this.$Bus.$emit('search-list', this.kw);
    }
    /* debounce (fn, await) {
            let timeout = null;
            return function () {
                if (timeout !== null) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(fn, await);
            }
        },
        handle () {
            console.log(this.kw, '<<<<< 搜索框的关键字');
            this.$Bus.$emit('search-list', this.kw);
        } */
  }
};
</script>

<style scoped>
/***************************搜索头******************************/
.searchTitle {
  font-size: 0.26rem;
  color: #666;
  width: 100%;
  height: 1.08rem;
  background: #fe0036;
  text-align: center;
}
.searchTitle img {
  position: absolute;
  top: 0.415rem;
  right: 1.6rem;
  float: right;
  height: 0.2666rem;
  width: 0.26rem;
}
.searchTitle input {
  width: 5.4rem;
  height: 0.68rem;
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.7rem;
  background-image: url(../../../public/search/search.png);
  background-position: 0.3rem;
  background-repeat: no-repeat;
  background-size: 0.24rem;
  margin-top: 0.2rem;
}
.searchTitle span {
  font-size: 0.28rem;
  word-spacing: 0.1rem;
  color: #fff;
  margin-left: 0.4rem;
}
</style>
