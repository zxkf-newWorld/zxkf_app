<template>
  <div class="wishs">
    <van-tabs @click="onClick" :lazy-render='true' :sticky="true">
      <van-tab title="收藏房源">
        <!-- 收藏 -->
          <WishsCollectionContent></WishsCollectionContent>
      </van-tab>
      <van-tab title="看房行程" >
        <!-- 看房 -->
        <WishsCheckHouse></WishsCheckHouse>
      </van-tab>
    </van-tabs>
    <ToBottom class="background-white"></ToBottom>
    <footBar></footBar>
  </div>
</template>

<script>
import FootBar from "./FootTab.vue";
import ToBottom from './common/ToBottom'
import WishsCollectionContent from './common/WishsCollectionContent'
import WishsCheckHouse from './common/WishsCheckHouse'
export default {
  name: 'Wishs',
  data() {
    return {};
  },
  components: {
    FootBar,
    ToBottom,
    WishsCollectionContent,
    WishsCheckHouse,
  },
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onClick(index, title) {
      // this.$toast(title);
    }
  }
};
</script>

<style scoped lang='scss'>
  .wishs {
    margin-bottom: 2rem;
  }
  .background-white {
    background: #9d9d9d;
  }
</style>

