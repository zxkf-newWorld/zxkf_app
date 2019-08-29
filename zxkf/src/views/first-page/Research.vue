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
            <div class="wrap bor" @click="toFunctions($event)" >
              <img src="../../assets/research-pic1.png" data-choice="近地铁"/>
              <div class="title">地铁周边</div>
              <div class="des">地铁站附近2公里房源</div>
            </div>
          </li>
          <li>
            <div class="wrap pl-3 bor" @click="toFunctions($event)" >
              <img src="../../assets/research-pic2.png" data-choice="近地铁"/>
              <div class="title">品质好房</div>
              <div class="des">2000元左右，理想生活</div>
            </div>
          </li>
          <li>
            <div class="wrap bor" @click="toFunctions($event)" >
              <img src="../../assets/research-pic3.png" data-choice="近地铁"/>
              <div class="title">轻松月付</div>
              <div class="des">从此告别押一付三</div>
            </div>
          </li>
          <li>
            <div class="wrap pl-3 bor" @click="toFunctions($event)" >
              <img src="../../assets/research-pic4.jpg" data-choice="近地铁"/>
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
    return {
    };
  },
  methods: {
    toFunctions(e){
      // 跳转到相关的房屋信息列表
      let url = "index/tofunctions";
      // 获取自定义属性值，并创建参数对象params
      let datas = e.target.dataset;
      console.log(datas.choice);
      let params = {
        choice:datas.choice
      }
      // 发送请求
      this.axios.get(url,//传递参数
        params
      )
        .then(success=>{
          if (success.data.code == 1) {
            this.$router.push('/Details');
          }
        })
        .catch(err=>{
          console.log(err);
        });
    },
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