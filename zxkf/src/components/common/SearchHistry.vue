<template>
  <div class="search-history">
    <div class="searchHistory">
      <!-- 标题 -->
      <div class="searchHis dis-flex" v-if="this.searchHistoryList.length !== 0">
        <div class="searchHis-title">历史搜索</div>
        <div class="ml-4">
          <!-- 删除标志 -->
          <span class="iconfont icon-shanchu" @click="closeHistory"></span>
        </div>
      </div>
      <!-- 搜索历史 -->
      <ul class="searchList" v-if="this.searchHistoryList.length !== 0">
        <li
          class=" dis-flex "
          v-for="(ele, i) in searchHistoryList"
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
import { mapMutations, mapState } from 'vuex'
export default {
  name: "SearchHistry",
  data() {
    return {
      show: false,
      searchList: [],
    };
  },
  computed: {
    // ...mapGetters(['searchList_get']),
    // 使用mapState
    ...mapState({
      searchHistoryList: state => state.search_history_list.searchHistoryList,
    }),
  },
  created() {
  },
  mounted() {
  },
  methods: {
    ...mapMutations({
      addSearchHistory: 'SEARCH_HISTORY_LIST'
    }),
    goDetails() {
      this.$router.push("/SearchDetail");
    },
    searchFor(event) {
      let search = event.target.innerText;
      this.searchList = this.searchHistoryList;
      if (this.searchList.length < 7) {
          this.searchList.unshift(search);
      } else {
        this.searchList.pop();
        this.searchList.unshift(search);
      }
      this.addSearchHistory({type:'add', ref:this.searchList});
      // 跳转详情页面
      this.$router.push('/SearchDetail');
    },
    /* 关闭历史搜索记录 */
    closeHistory() {
      this.$dialog
        .confirm({
          title: "删除搜索历史",
          message: "确认删除搜索历史"
        })
        .then(() => {
          // 清空搜索历史列表
          this.$store.state.search_history_list.searchHistoryList = [];
          console.log("删除搜索历史记录");
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
