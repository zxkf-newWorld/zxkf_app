<template>
  <div class="search-history">
    <div class="searchHistory">
      <!-- 标题 -->
      <div
        class="searchHis dis-flex"
        v-if="searchList.length > 0"
      >
        <div class="searchHis-title">历史搜索</div>
        <div class="ml-4">
          <!-- 删除标志 -->
          <span class="iconfont icon-shanchu" @click="closeHistory"></span>
        </div>
      </div>
      <!-- 搜索历史 -->
      <ul
        class="searchList"
        v-if="searchList.length > 0"
      >
        <li
          class=" dis-flex "
          v-for="(ele, i) in searchList"
          :key="i"
          @click="goDetails"
        >
          <div>
            <span class="iconfont icon-clock"></span>
          </div>
          <div class="searchRes">
            <p>{{ ele }}</p>
            <p>品牌公寓-全部户型</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 热搜 -->
    <div class="hotSearch">
      <div class="hot-title">热门搜索</div>
      <div class="hot-content">
        <div @click="searchFor($event)" v-for="i in 12" :key="i">
          雁塔{{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "SearchHistry",
  data() {
    return {
      show: false,
      searchList: []
    };
  },
  computed: {
    ...mapGetters([
      "user" /* 用户手机号 */,
      "status" /* 登录状态 */,
      "searchHistoryList" /* 搜索历史列表 */,
      "searchHistory" /* 用户搜索历史 */
    ])
  },
  created() {
    if (this.status === "on") {
      this.axios
        .get(`/search_history/userSearchHistory?phone=${this.user}`)
        .then(result => {
          /*
           * 处理用户登录的更新this.searchList
           *
           */

          let handleRef = result.data.res.split(",");
          console.log(handleRef.length, '<<<<<< handleRef.length');
          // 更新searchList
          if (handleRef.length === 1 && handleRef[0] === '') {
            // 数据为空
            handleRef = [];
          }
          // 数组去重
          handleRef = new Set(handleRef);
          this.searchList = [...handleRef];
          console.log(handleRef, "<<<<<handleRef");
          this.$store.dispatch('queryUserSearchHistory', {ref: handleRef});
        })
        .catch(err => {});
    } else {
      // this.querySearchHistory();
      // 在本地存储中查找历史搜索记录列表数据
      // console.log(this.$local_storage, '<<<<<< this.$local_storage');
      let list = this.$local_storage.get('querySearchHistory');
      console.log(list, '<<<< list');
      if (list === undefined) {
        // 不存在属性searchHistoryList;搜索历史列表为空
        this.searchList = [];
        this.$store.dispatch('querySearchHistory', {ref: []});
      } else {
        // 搜索历史列表不为空
        // 数组去重
        list = new Set(list);
        this.searchList = [...list];
        this.$store.dispatch('querySearchHistory', {ref: list});
      }
    }
  },
  mounted() {

  },
  methods: {
    ...mapMutations({
      addSearchHistory: "SEARCH_HISTORY_LIST" /* 搜索历史列表 */,
      addUserSearchHistory: "USER_SEARCH_HISTORY" /* 用户搜索历史 */
    }),
    ...mapActions([
      "querySearchHistory" /* 查询搜索历史 */,
      "queryUserSearchHistory" /* 查询用户搜索历史 */
    ]),
    goDetails() {
      this.$router.push("/SearchDetail");
    },
    // 点击热门搜索
    searchFor(event) {
      /*
       * 获取用户登录状态 （后续用到，统一管理（全局使用））
       * 未登录： 获取搜索历史列表状态管理
       * 已登录: 获取用户搜索历史列表状态管理
       * 通过判断添加、删除作出相关操作
       */
      let search = event.target.innerText;
      if (this.searchList.length < 7) {
        this.searchList.unshift(search);
      } else {
        this.searchList.pop();
        this.searchList.unshift(search);
      }
      if (this.status === "on") {
        console.log(this.searchList, '<<<<< this.searchList');
        this.addUserSearchHistory({type: 'add', ref: this.searchList});
        // 新增
        let formdata = `phone=${this.user}&searchHistory=${this.searchList}`;
        // let formdata = {
        //   phone: this.user,
        //   searchHistory: this.searchList
        // }
        console.log(formdata, '<<<<< formdata');
        this.axios.post(`/search_history/updateSearchHistory`, formdata)
        .then((result) => {
          console.log(result, '<<<<< result');
        }).catch((err) => {
          console.log(err, '<<<<<err');
        });
      } else {
        this.addSearchHistory({type: 'add', ref: this.searchList});
        let res = this.$local_storage.set('querySearchHistory', this.searchList, 60*24*10 /*10天有效时间 */);
        // console.log(res , '<<<<<< 存储的数据为');
        console.log(this.$local_storage.get('querySearchHistory'), '<<<<<< 本地存储数据');
        // console.log(this.$local_storage, '<<<<< this.$local_storage');
        // console.log(this.$local_storage,'<<<<< this.$local_storage');
      }
      // 跳转详情页面
      this.$router.push("/SearchDetail");
    },
    /* 关闭历史搜索记录 */
    closeHistory() {
      this.$dialog
        .confirm({
          title: "删除搜索历史",
          message: "确认删除搜索历史"
        })
        .then(() => {
          console.log('删除历史记录以确认');
          // 清空搜索历史列表
          /*
           * 判断用户登录装填
           * 未登录：删除搜索历史列表状态管理中的信息
           * 已登录： 删除用户搜索历史列表状态管理中的信息,并同步更新数据库数据
           */
          if (this.status === "on") {
            // 用户已登录
            this.addUserSearchHistory({type: 'del', ref: []});
            let formdata = `phone=${this.user}&searchHistory=`,
              url = `/search_history/updateSearchHistory`;
            this.axios.post(url, formdata)
            .then((result) => {
              console.log(result, '<<<<< delete result');
              this.searchList = this.searchHistory;
              console.log('搜索历史记录清空');
            }).catch((err) => {
              console.log(err,'<<<<<搜索历史记录清空--失败');
            });
            // this.$store.state.user_info.searchHistory = [];
          } else {
            // 用户未登录
            this.addSearchHistory({type: 'del', ref: []});
            this.$local_storage.remove('querySearchHistory');
            this.searchList = [];
            console.log("删除搜索历史记录");
            // this.$store.state.search_history_list.searchHistoryList = [];
          }
        })
        .catch(() => {
          console.log("未删除搜索历史记录");
        });
    }
  }
};
</script>

<style scoped>
.search-history {
  margin-top: 0.3rem;
  font-size: 0.28rem;
}
.dis-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchHis-title {
  margin-left: 0.4rem;
  font-weight: 700;
  font-size: 0.3rem;
}
.ml-4 {
  margin-right: 0.4rem;
}
ul.searchList {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
ul.searchList > li {
  margin-top: 0.5rem;
  padding-bottom: 0.3rem;
  text-align: left;
  border-bottom: 1px solid #f8f8f8;
}
ul.searchList > li:last-child {
  border: none;
}
ul.searchList > li > .searchRes {
  position: relative;
  left: -54%;
}
ul.searchList > li > .searchRes > p {
  /* margin: 0;
        position: absolute;
        left: -7rem; */
}
ul.searchList > li > .searchRes > p:nth-child(1) {
  /* position: absolute;
        left: -6.5rem; */
  font-weight: 500;
  top: -0.4rem;
}
ul.searchList > li > .searchRes > p:nth-child(2) {
  font-size: 0.2rem;
  color: #ccc;
}

/* 热门搜索 */
.hot-title {
  font-weight: 700;
  font-size: 0.3rem;
  text-align: left;
  padding-left: 0.4rem;
}
div.hot-content {
  display: flex;
  align-content: flex-start;
  /* justify-content: space-around; */
  flex-flow: row wrap;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 0.2rem;
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
}
.hot-content > div {
  box-sizing: border-box;
  margin-top: 0.2rem;
  flex: 0 0 22%;
  margin: 0.2rem 2px 0 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.1rem;
  background-color: #f8f8f8;
  font-size: 0.1rem;
}
</style>
