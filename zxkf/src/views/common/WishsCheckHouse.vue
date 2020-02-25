<template>
    <div class="wish-check-house">
      <table></table>
      <div v-for="(ele, index) in 2" :key="index">
        <div class="check-house">
          <p>预约看房时间：<span>随时可看</span></p>
          <div class="check-house-content">
            <div class="check-house-content-img">
              <img src="../../../public/hezu/02.jpg" alt="租房">
            </div>
            <div class="check-house-content-detail">
              <p class="title">人民大厦</p>
              <div class="detail">
                <p>整租 | 2室1厅 | 88M² </p>
                <p>纬二街与文景路十字路向西100m</p>
              </div>
              <p class="price">￥2000</p>
            </div>
          </div>
          <div class="check-house-button">
            <van-button plain type='danger' size="small" >评价</van-button>
            <van-button type="danger" size="small">联系公寓</van-button>
          </div>
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
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="scss">
  .wish-check-house {
    width: 100vw;
    height: 100vh;
    background: #f2f2f2;
  }
  .check-house {
    width: 96%;
    height: auto;
    margin: 0 auto;
    background: #fff;
    border-radius: 4px;
    & > p {
      padding: .4rem;
      text-align: left;
      color: #929292;
      & > span{
        font-weight: bold;
        color: #000;
      }
    }
    & > div.check-house-content {
      display: flex;
      justify-content: space-between;
      & > div.check-house-content-img {
        flex: 1;
        & > img {
          width: 82%;
          height: 70%;
          border-radius: 6px;
        }
      }
      & > div.check-house-content-detail {
        flex: 1;
        align-self: left;
        text-align: left;
        & > p.title {
          font-size: 16px;
          font-weight: bold;
        }
        & > div.detail {
          font-size: 14px;
          color: #929292;
        }
        & > p.price {
          color: #f00;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
  div.check-house-button {
    margin-top: -.5rem;
    padding: 0 .4rem .2rem 0;
    text-align: right;
    & > button {
      margin-left: .2rem;
    }
  }
  div.check-house:first-child {
    margin-top: .4rem;
  }


</style>
