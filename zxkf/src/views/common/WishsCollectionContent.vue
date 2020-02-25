<template>
  <div>
    <div v-for="(ele, index) in 10" :key="index">
      <div class="wish-collection-content">
        <div class="wish-image">
          <span>3图</span>
          <img src="../../../public/hezu/01.jpg" alt="图片" />
        </div>
        <div class="wish-content">
          <p class="title">联福大厦</p>
          <div class="price">
            <span>￥2400</span>
            <span>可月付</span>
          </div>
          <p class="house-detail">整租 | 2室1厅 | 88M²</p>
          <P class="house-detail">2号线，步行12分钟</P>
          <div class="house-owned">
            <div class="house-owned-now">
              <span>朝南</span>
              <span>电梯房</span>
              <span>非一楼</span>
            </div>
            <div class="house-owned-more">
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishsCollectionContent",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.wish-collection-content {
  width: 100vw;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.1rem;
  border-bottom: 1px solid #ccc;
}
.wish-image {
  flex: 1;
  position: relative;
  & > span {
    position: absolute;
    z-index: 2;
    right: 10%;
    top: 10.22%;
    padding: 4px 9px;
    border-top-right-radius: 0.14rem;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.4);
  }
  & > img {
    position: absolute;
    top: 10.22%;
    width: 80%;
    left: 10%;
    height: 80%;
    border-radius: 0.14rem;
  }
}
.wish-content {
  flex: 1;
  text-align: left;
  font-size: 12px;
  margin-top: 2%;
  & > .title,
  & > .price {
    padding-top: 4px;
    font-weight: bold;
    font-size: 14px;
  }
  & > .price {
    color: #f00;
    & > span:first-child {
      font-size: 14px !important;
    }
    & > span:nth-child(2) {
      padding: 4px;
      margin-left: 2px;
      border-radius: 2px;
      background: #f5dfe0;
      color: #e98690;
      font-weight: 400;
    }
  }
  & > .house-detail {
    margin: {
      top: 2px;
      bottom: 2px;
    }
    color: #9d9d9d;
  }
  & > .house-owned {
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
    & > .house-owned-now {
      & > span {
        margin-right: 2px;
        padding: 4px 4px;
        border-radius: 2px;
        background: #f1f5fc;
        color: #a9ccde;
      }
    }
    & > .house-owned-more {
      & > span {
        padding-right: 0.5rem;
        font-size: 20px;
        font-weight: bold;
        color: #9d9d9d;
      }
    }
  }
}
</style>
