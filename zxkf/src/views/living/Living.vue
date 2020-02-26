<template>
  <div class="living">
    <header class="header">
      <h1>青年人生活</h1>
      <div class="info">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
      </div>
    </header>
    <main class="living-content">
      <section class="banner">
        <img src="../../../public/img/living-banner.jpg" alt="banner">
      </section>
      <section class="scanner">
        <table></table>
        <div class="scanner-wrap">
          <table></table>
          <div class="scanner-icon">
            <span class="iconfont icon-icon-"></span>
          </div>
        </div>
        <p class="scanner-title">闪电付</p>
        <p class="scanner-tip">扫一扫，立即支付</p>
      </section>
      <section class="functinons">
        <div class="functions-floor-first">
          <div class="first-one">
            <div class="icon-wrap">
              <span class="iconfont icon-zufang"></span>
            </div>
            <p>续租</p>
          </div>
          <div class="first-two">
            <div class="icon-wrap">
              <span class="iconfont icon-zhangdan"></span>
            </div>
            <p>账单</p>
          </div>
          <div class="first-three">
            <div class="icon-wrap">
              <span class="iconfont icon-shuidianjiaofei"></span>
            </div>
            <p>生活缴费</p>
          </div>
        </div>
        <div class="functions-floor-second">
           <div class="second-one">
            <div class="icon-wrap">
              <span class="iconfont icon-weixiugongren"></span>
            </div>
            <p>维修</p>
          </div>
          <div class="second-two">
            <div class="icon-wrap">
              <span class="iconfont icon-yanchituifang"></span>
            </div>
            <p>退房</p>
          </div>
          <div class="second-three">
            <div class="icon-wrap">
              <span class="iconfont icon-bangongshizhuanzuliucheng"></span>
            </div>
            <p>转租</p>
          </div>
        </div>
        <div class="functions-floor-third">
           <div class="third-one">
            <div class="icon-wrap">
              <span class="iconfont icon-zhinengshebei"></span>
            </div>
            <p>智能设备</p>
          </div>
          <div class="third-two">
            <div class="icon-wrap">
              <span class="iconfont icon-kefuzhongxin"></span>
            </div>
            <p>客服中心</p>
          </div>
          <div class="third-three">
            <div class="icon-wrap">
              <span class="iconfont icon-jifenshangcheng"></span>
            </div>
            <p>积分商城</p>
          </div>
        </div>
      </section>
    </main>
    <FootBar></FootBar>
  </div>
</template>

<script>
import FootBar from '../FootTab';
export default {
  name: "Living",
  data() {
    return {};
  },
  components: {
    FootBar
  },
  created() {},
  mounted() {},
  methods: {
  }
};
</script>

<style scoped lang="scss">
  .icon-wrap {
    text-align: center;
    & > span.iconfont {
      font-size: .5rem;
      color: #fff;
    }
  }
  .icon {
  width: 1.6em;
  height: 1.6em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.living {
  width: 100%;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: .2rem 0;
  // border-bottom: 1px solid #000;
  & > h1 {
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    padding-left: .4rem;
  }
  & > div.info {
    flex: 1;
    text-align: right;
    padding-right: .4rem;
    & > svg {
      margin-left: .3rem;
    }
  }
}
.living-content {
  margin: .1rem .2rem 0 .2rem;
  text-align: center;
  & > .banner {
    & > img {
      width: 98%;
      border-radius: 6px;
      box-shadow: -1px 2px 8px #ccc;
    }
  }
  & > .scanner {
    width: 98%;
    height: 3rem;
    margin-top: .2rem;
    margin-left: .1rem;
    border-radius: 6px;
    box-shadow: 1px 1px 6px #ccc;
    & > div.scanner-wrap {
      width: 1.5rem;
      height: 1.5rem;
      margin: .2rem auto;
      border-radius: 50%;
      background: #EC424D;
      & > div.scanner-icon {
        margin: .14rem auto;
        & > span {
          font-size: .8rem !important;
          color: #fff;
        }
      }
    }
    & > p.scanner-title {
      font-size: 16px;
      font-weight: bolder;
    }
    & > p.scanner-tip {
      color: #B3B3B3;
    }
  }
  & > .functinons {
    margin-top: -.2rem;
    & > .functions-floor-first,
    & > .functions-floor-second,
    & > .functions-floor-third {
      display: flex;
      justify-content: space-around;
      margin: .6rem 0;
    }
    & > .functions-floor-first {
      & > .first-one,
      & > .first-two,
      & > .first-three {
        width: .8rem;
        height: .8rem;
        border-radius:50%;
        & > p {
          width: 1.12rem;
          margin: .1rem -8px;
          text-align: center;
          color: #5C5C5C;
        }
      }

      & > .first-one {
        background: #42BCB7;
      }
      & > .first-two {
        background: #48BAB0;
      }
      & > .first-three {
        background: #03C200;
      }
    }
    & > .functions-floor-second {
      & > .second-one,
      & > .second-two,
      & > .second-three {
        width: .8rem;
        height: .8rem;
        border-radius:50%;
        & > p {
          width: 1.12rem;
          margin: .1rem -8px;
          text-align: center;
          color: #5C5C5C;
        }
      }

      & > .second-one {
        background: #EB7476;
      }
      & > .second-two {
        background: #F8C04A;
      }
      & > .second-three {
        background: #4195CB;
      }
    }
    & > .functions-floor-third{
      & > .third-one,
      & > .third-two,
      & > .third-three {
        width: .8rem;
        height: .8rem;
        border-radius:50%;
        & > p {
          width: 1.12rem;
          margin: .1rem -8px;
          text-align: center;
          color: #5C5C5C;
        }
      }
      & > .third-one {
        background: #3E95CE;
      }
      & > .third-two {
        background: #EA7574;
      }
      & > .third-three {
        background: #04C200;
      }
    }
  }
}
</style>
