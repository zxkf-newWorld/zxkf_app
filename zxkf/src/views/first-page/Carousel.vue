<template>
  <div>
    <swiper :options="swiperOption" class="swiper-container swiper-pagination2" ref="mySwiper">
      <!-- 添加的图片 -->
      <swiper-slide>
        <img class="banner-img" src="../../../public/carou/timg.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner-img" src="../../../public/carou/timg2.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner-img" src="../../../public/carou/timg3.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner-img" src="../../../public/carou/timg4.jpg" />
      </swiper-slide>
      <!-- Optional controls -->
       <div class="swiper-scrollbar" slot="scrollbar"></div>
      <!-- <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <div class="login-city">
      <!-- 右上登录按钮 -->
      <div class="top-left-img" @click="toCityPosition">
        <a href="javascript:;">
          <img src="../../assets/position-dark.png" alt="">
          <span style="color:#fff">西安</span>
        </a>
      </div>
      <!-- 左上定位按钮 -->
      <div class="top-right-img" @click="toLogin">
        <a href="javascript:;">
          <img src="../../assets/login-dark.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
require("swiper/dist/css/swiper.css");//引入swiper样式文件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination2",
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        spaceBetween: 0,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //循环
        loop: true,
        direction:'horizontal',
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }
    };
  },
  //定义swiper对象
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    // 跳转到登录
    toLogin(){
      this.$router.push('/Myself')
    },
    // 城市定位
    toCityPosition(){}
  },
  mounted() {
    this.swiper.slideTo(0, 0, false);
  }
};
</script>
<style scoped>
  div>img{
    width: 100%;
    height: 257px;
  }
  .login-city  img{
    width: 25px;
    height: 25px;
    margin-top: 8px ;
    margin-right: 4px;
  }
  .login-city .top-left-img,.login-city .top-right-img{
    width: 40px;
    height: 40px;
    background:rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  .login-city .top-left-img{
    position: absolute;
    z-index: 20;
    top: 10px;
    left: 10px;
  }
  .login-city .top-right-img{
    position: absolute;
    z-index: 20;
    top: 10px;
    right: 10px;
    opacity: 0.9;
  }
</style>