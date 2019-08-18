<template>
  <div>
    <div class="study">
      <!-- 在线看房研究院 -->
      <div class="study-title">
        <span>在线研究院</span>
      </div>
      <div class="containul">
        <!-- 房间商品列表:显示4个商品 -->
        <ul>
          <li>
            <div class="wrap bor" @click="nearSubway">
              <img src="../assets/research-pic1.png" />
              <div class="title">地铁周边</div>
              <div class="des">地铁站附近2公里房源</div>
            </div>
          </li>
          <li>
            <div class="wrap pl-3 bor" @click="pinzhi">
              <img src="../assets/research-pic2.png" />
              <div class="title">品质好房</div>
              <div class="des">2000元左右，理想生活</div>
            </div>
          </li>
          <li>
            <div class="wrap bor" @click="payMonth">
              <img src="../assets/research-pic3.png" />
              <div class="title">轻松月付</div>
              <div class="des">从此告别押一付三</div>
            </div>
          </li>
          <li>
            <div class="wrap pl-3 bor" @click="singleRoom">
              <img src="../assets/research-pic4.jpg" />
              <div class="title">精选单间</div>
              <div class="des">1500以下，精致合租</div>
            </div>
          </li>
        </ul>
        <div style="clear:both;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    nearSubway(){
      // 查询地址
      let url = "/index/fullrent"
      let subway = 1;
      var obj = {subscribe}
      this.axios.get(url,);
    },
    pinzhi(){},
    payMonth(){},
    singleRoom(){},
  },
};
</script>
<style scoped>
.study {
  width: 100%;
  background: #fff !important;
  margin-top: 0.3rem;
}
ul {
  padding: 0.3rem;
  padding-top: 0px;
  background-color: #fff!important;
}

ul li {
  width: 47.5%;
  float: left;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 0.32rem;
}
.study-title {
  height: 1.12rem;
  line-height: 1.12rem;
  font-size: .38rem;
  font-weight: 700;
  padding: 0.3rem;
  padding-bottom: 0;
  text-align: left;
}
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.wrap > img {
  width: 100%;
  height: 2.1rem;
  border-radius: 0.12rem;
}
.title {
  font-size: 0.26rem;
  font-weight: 700;
  margin-top: 0.22rem;
  text-align: left;
}
.des {
  font-size: 0.24rem;
  text-overflow: ellipsis;
  margin-top: 0.12rem;
  margin-bottom: 0.32rem;
  text-align: left;
}
.pl-3 {
  padding-left: 0.3rem;
}
/* 底边线 */
.bor {
  border-bottom: 1px solid #ccc;
}
.study .containul{
  width: 100%;
  height: 7.6rem;
  background: #fff!important;
}
/* .wrap li{
        position: relative;
        float: left;
        width: 47.5%;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: .32rem;
        overflow: hidden;
        color: #505050;
    } */
/* .wrap li div img{
        width: 100%;
    } */
</style>