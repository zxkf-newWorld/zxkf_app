<template>
  <div>
    <!-- 条件搜索ZhengzuSelect组件 -->
    <zselect
      v-show="zselectShow"
      :style="zselectStyle"
      ref="zselect"
      :zselectShow.sync="zselectShow"
      :tabList[0].sync="tabList[0]"
      :tabList[1].sync="tabList[1]"
      :tabList[2].sync="tabList[2]"
      :tabList[3].sync="tabList[3]"
      :tabChangedList.sync="tabChangedList"
    ></zselect>
    <!-- 返回顶部ToTop组件 -->
    <totop></totop>
    <!-- 页头 -->
    <div class="search-choice">
      <div class="search-header">
        <div class="home-icon" @click="toHome">
          <img src="../../../public/zhengzu/home.png" />
        </div>
        <!-- <div @click="cities" class="city-select">
                  <span>{{cityChecked}}</span>
                  <img src="../../../public/zhengzu/sanjiao.png">
              </div> -->
        <!-- 隐藏显示的城市选择列表 -->
        <city
          :cityShow.sync="cityShow"
          :cityChecked.sync="cityChecked"
          v-model="cityShow"
        ></city>
        <div class="search-box" @click="toSearch">
          <img src="../../../public/zhengzu/fangdajin.png" />{{ searchMSG }}
        </div>
        <div class="my" @click="toMyself">
          <img src="../../../public/zhengzu/my.png" />
        </div>
      </div>
      <!-- 主体-条件设置 -->
      <drop-down></drop-down>
      <select-tab></select-tab>
      <!-- <div class="tab-out">
              <ul class="tab">
                  <li v-for="(item,i) in tabList" :key="i" :class="{active:tabChangedList.includes(i)}" data-tab=0 @click="toTab(i)"><span>{{item}}</span><span class="tab-icon"></span></li>
              </ul>
          </div> -->
      <!-- 主体-条件搜索 -->
      <!-- <div class="short-cut">
              <ul>
                  <li @click="addShortcut(i)" :class="{active:shortcutChecked.includes(i)}" v-for="(item,i) of shortcutList" :key="i"><img v-if="item=='平台认证'" src="../../../public/zhengzu/trust.png"><span>{{item}}</span></li>
              </ul>
          </div> -->
    </div>
    <!-- 排序按钮 -->
    <!-- <div class="sort" @click="show">
            <p>排序</p>
        </div> -->
    <!-- 显示的排序列表 -->

    <mt-popup class="sort-container" v-model="sortShow" position="bottom">
      <ul class="sortBox">
        <li
          @click="chooseSort(i)"
          :class="{ active: i == sortIndex }"
          v-for="(item, i) of sortList"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </mt-popup>

    <!-- 主体-房源信息 -->
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/01.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/02.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/03.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/04.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/05.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/06.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/hezu/07.jpg" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-list" @click="toDetails">
      <div class="house-card">
        <div class="base-info">
          <div class="main-photo">
            <img src="../../../public/zhengzu/house.png" />
            <div class="photo-info">房东提供 · 6</div>
          </div>
          <div class="details">
            <p class="title">
              <span>合租</span>
              <span> 玫瑰坊</span>
            </p>
            <p class="room-info">18M² | 朝北</p>
            <p class="labels">
              <span class="red">租金月付</span>
              <span>近地铁</span>
              <span>新上架</span>
              <span>电梯房</span>
            </p>
            <p class="trafic">
              <img src="../../../public/zhengzu/position.png" />
              <span>1号线(康复路站),步行14分钟</span>
            </p>
          </div>
        </div>
        <div class="extra-info">
          <div class="agency-info">
            <div class="header">
              <span>美丽屋公寓（分散式）</span>
              <img src="../../../public/zhengzu/pinpai.png" />
            </div>
            <div class="btn">进店</div>
          </div>
          <div class="price-info">
            <div class="price"><span>￥1350</span>/月</div>
            <div class="use-time">
              <span>&nbsp;随时入住</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapMutations } from "vuex";
import City from "./City.vue";
import ToTop from "./ToTop.vue";
import ZhengzuSelect from "./ZhengzuSelect.vue";
import DropDown from "../common/DropDown";
import SelectTab from "../common/SelectTab";
import mixin from "./full_joint";
export default {
  mixins: [mixin],
  data() {
    return {
      searchMSG: "输入区域、小区搜索源",
      cityChecked: "西安",
      sortIndex: 0, //控制sort选中样式的中间量
      sortList: [
        "默认排序",
        "最新上架时间",
        "租金从低到高",
        "租金从高到低",
        "面积从小到大",
        "面积从大到小"
      ],
      zselectShow: false, //控制Zhengzuselect组件的隐藏与显示
      zselectStyle: {
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 999,
        width: "100%"
      },
      sortShow: false, //控制sort()
      cityShow: false, //控制城市选择列表的变量
      data: [],
      shortcutList: ["租金月付", "近地铁", "平台认证", "独卫"],
      shortcutChecked: [],
      tabList: ["位置", "租金", "合租", "更多"], //保存四个大板块的列表
      tabSelected: 0,
      tabChangedList: []
    };
  },
  created() {
    console.log("合租列表页面", this.name);
    this.searchHouseList(0, "index/fullrent");
  },
  computed: {
    ...mapGetters({
      status: "status" /* 用户登录状态 */
    })
  },
  methods: {
    ...mapMutations({
      handleFootTab: "FOOTTAB_CHANGE" /* 切换foot-tab */
    }),
    toMyself() {
      if (this.status === "on") {
        // 跳转到我的页面
        this.$router.push("/Myself");
      } else {
        this.$router.push("Login");
      }
      this.handleFootTab("我的");
    },
    toHome() {
      // 跳转到首页
      this.$router.push("/");
    },
    toDetails() {
      //跳转到详情页
      this.$router.push("/Details");
    },
    addShortcut(i) {
      if (this.shortcutChecked.includes(i)) {
        this.shortcutChecked = this.shortcutChecked.filter(el => {
          return el != i;
        });
      } else {
        this.shortcutChecked.push(i);
      }
      // 发送ajax请求查表
    },
    show() {
      if (!this.sortShow) {
        this.sortShow = true;
      } else {
        this.sortShow = false;
      }
    },
    cities() {
      if (!this.cityShow) {
        this.cityShow = true;
      } else {
        this.cityShow = false;
      }
    },
    toTab(i) {
      //跳转到条件选择页面
      this.$refs.zselect.tabIndex = i;
      this.zselectShow = true;
    },
    chooseSort(i) {
      this.sortIndex = i;
      this.sortShow = false;
    },
    toSearch() {
      this.$router.push("/Search");
    }
  },
  components: {
    city: City,
    totop: ToTop,
    zselect: ZhengzuSelect,
    DropDown,
    SelectTab
  }
};
</script>
<style scoped>
.search-header {
  /*表头样式*/
  width: 100%;
  background: #fe0036;
  position: relative;
  height: 0.88rem;
  color: #fff;
  font-size: 0.24rem;
}
.search-header > .home-icon {
  /*首页图标容器样式*/
  float: left;
  width: 1rem;
  height: 0.8rem;
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
}
.search-header > .home-icon img {
  /*首页图标样式*/
  width: 100%;
  height: 100%;
  display: block;
}
.city-select {
  /*城市选择框样式*/
  float: left;
  padding: 0.3rem 0;
  font-size: 0;
  display: flex;
  align-items: center;
}
.city-select > span {
  /*城市选择框文字*/
  font-size: 0.28rem;
  color: #fff;
  display: block;
  float: left;
  margin-right: 0.2rem;
}
.city-select > img {
  /*城市选择框三角图标*/
  width: 0.21rem;
  float: right;
}
.search-box {
  /*搜索框样式*/
  float: left;
  width: 4.31rem;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 0.13rem;
  margin-left: 0.25rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  color: #cbcbcb;
}
.search-box > img {
  /*搜索框搜索图标样式*/
  width: 0.3rem;
  height: 0.3rem;
  padding: 0 0.2rem 0 0.3rem;
  vertical-align: middle;
}
.search-header > .my {
  /*个人图标盒子样式*/
  float: right;
  width: 0.33rem;
  height: 0.4rem;
  padding: 0.22rem 0.3rem 0.15rem;
}
.search-header > .my > img {
  /*个人图标图片样式*/
  width: 100%;
  height: 100%;
  display: block;
}
.search-choice {
  position: -webkit-sticky; /* safari 浏览器 */
  position: sticky;
  top: 0;
  z-index: 5;
  overflow: hidden;
}
/**************************搜索条件设置***************************/
.tab-out {
  width: 100%;
  height: 0.86rem;
  background-color: #fff;
}
.tab-out > ul {
  height: 100%;
  width: 100%;
  justify-content: space-around;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.26rem;
  color: #5a5c5d;
}
.tab-out > ul > li.active {
  color: #fe0036;
}
.tab-out > ul img {
  width: 0.17rem;
  height: 0.1rem;
  vertical-align: middle;
  margin-left: 0.1rem;
}
.tab-icon {
  display: inline-block;
  width: 0.17rem;
  height: 0.1rem;
  vertical-align: middle;
  background: url(../../../public/zhengzu/arrow-down.png) no-repeat 50%;
  background-size: 100% 100%;
  margin-left: 0.1rem;
}
/****************************检索条件*******************************/
.short-cut {
  width: 100%;
  background-color: #fff;
  height: 0.88rem;
  border-bottom: 1px solid #ececec;
}
.short-cut > ul {
  list-style: none;
  width: 100%;
  font-size: 0.26rem;
  color: #a0a0a0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.short-cut > ul > li {
  padding: 0 0.28rem;
  height: 0.56rem;
  border-radius: 0.28rem;
  background-color: #f6f6f6;
  line-height: 0.56rem;
  display: flex;
}
.short-cut > ul > li.active {
  background-color: #fc6d79;
  color: #fff;
}
.short-cut > ul img {
  width: 0.24rem;
  height: 0.28rem;
  padding-right: 0.1rem;
  margin-top: 0.15rem;
}
/*************************排序按钮***************************/
.sort {
  position: fixed;
  width: 0.9rem;
  height: 0.9rem;
  font-size: 0.2rem;
  color: #fff;
  bottom: 2.56rem;
  right: 0.3rem;
  background: url(../../../public/zhengzu/sort.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.sort > p {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  text-align: center;
}
/***********************房源信息*************************/
.house-list {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
}
.house-card {
  box-sizing: border-box;
  margin: 0 0.3rem;
}
.base-info {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.main-photo {
  width: 2.1rem;
  height: 1.6rem;
  border-radius: 0.08rem;
  overflow: hidden;
  margin: 0.4rem 0.3rem 0.4rem 0;
  position: relative;
}
.main-photo > img {
  width: 100%;
  height: 100%;
}
.photo-info {
  width: 100%;
  height: 0.34rem;
  position: absolute;
  background-color: rgba(28, 28, 28, 0.4);
  bottom: 0px;
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.34rem;
}
.details {
  width: 4.2rem;
}
.details .title {
  font-size: 0.34rem;
  color: #1c1c1c;
  font-weight: 700;
  line-height: 0.54rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.details .room-info {
  font-size: 0.28rem;
  color: #1c1c1c;
  line-height: 0.48rem;
  overflow: hidden;
}
.details .labels {
  height: 0.38rem;
  display: flex;
  justify-content: flex-start;
  margin-top: 0.1rem;
}
.details .labels > span {
  height: 100%;
  font-size: 0.22rem;
  color: #9b9b9b;
  line-height: 0.38rem;
  margin-right: 0.1rem;
}
.details .labels > span.red {
  color: #f3787a;
}
.trafic {
  width: 100%;
  height: 0.64rem;
  position: relative;
}
.trafic > img {
  position: absolute;
  left: 0;
  top: 0.2rem;
  display: inline-block;
  width: 0.2rem;
  height: 0.24rem;
}
.trafic > span {
  box-sizing: border-box;
  padding-left: 0.32rem;
  width: 100%;
  color: #9b9b9b;
  font-size: 0.22rem;
  line-height: 0.64rem;
  overflow: hidden;
  position: absolute;
  left: 0.05rem;
}
.extra-info {
  display: flex;
  justify-content: space-between;
}
.agency-info {
  width: 2.1rem;
  height: 0.92rem;
}
.agency-info > .header {
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
}
.agency-info > .header > span {
  font-size: 0.24rem;
  color: #1c1c1c;
  margin-right: 0.12rem;
  max-width: 1.54rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.agency-info > .header > img {
  width: 0.44rem;
  height: 0.22rem;
}
.agency-info > .btn {
  width: 1rem;
  height: 0.4rem;
  font-size: 0.24rem;
  color: #646464;
  border: 1px solid #d9d9d9;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  margin: 0 auto;
}
.price-info {
  display: flex;
  flex-direction: column;
  text-align: right;
}
.price-info > .price {
  align-items: center;
  color: #fe0036;
  font-size: 0.24rem;
}
.price-info > .price > span {
  font-size: 0.32rem;
  font-weight: 700;
}
.use-time {
  font-size: 0.28rem;
  margin-top: 0.1rem;
}
.use-time span {
  color: #f58f32;
  font-weight: 700;
}
/* .toTop{
        position: fixed;
        width: .9rem;
        height: .9rem;
        background-image: url(../../../public/zhengzu/toTop.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        font-size: .2rem;
        color: #fff;
        bottom: 1.28rem;
        right: .3rem;
        animation: .7s opacity2 0s;
        -webkit-animation: .7s opacity2 0s;
    }
    .toTop>p{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        text-align: center;
    } */
/*****************************************排序列表*******************************************/
.sort-container {
  width: 100%;
}
.sortBox {
  list-style: none;
  width: 100%;
  background-color: #fff;
  text-align: center;
}
.sortBox > li {
  height: 0.9rem;
  line-height: 0.9rem;
  box-sizing: border-box;
  padding-right: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #5a5c5d;
  font-size: 0.28rem;
  margin-left: 0.3rem;
  border-bottom: 1px solid #ececec;
}
.sortBox > li.active {
  color: red;
}
/************************************城市列表***********************************/
</style>
