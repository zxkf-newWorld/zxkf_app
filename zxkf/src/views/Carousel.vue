<template>
  <div>
    <swiper :options="swiperOption" class="swiper-container swiper-pagination2" ref="mySwiper">
      <!-- 添加的图片 -->
      <swiper-slide>
        <img class="banner-img" src="../assets/carouselpic1.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner-img" src="../assets/carouselpic2.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner-img" src="../assets/carouselpic3.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="banner-img" src="../assets/firsthead.jpg" />
      </swiper-slide>
      <!-- Optional controls -->
       <div class="swiper-scrollbar" slot="scrollbar"></div>
      <!-- <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
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
</style>