<template>
  <div>
    <mt-tabbar v-model="selected" id="footBar" >
      <mt-tab-item id="首页">
        <img slot="icon" src="../../public/img/footbar/1.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="心愿">
        <img slot="icon" src="../../public/img/footbar/wodexinyuan.png"/>
        心愿
      </mt-tab-item>
      <mt-tab-item id="交流">
        <img slot="icon" src="../../public/img/footbar/liaotian.png"/>
        交流
      </mt-tab-item>
      <mt-tab-item id="生活">
        <img slot="icon" src="../../public/img/footbar/shenghuo.png"/>
        生活

      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../public/img/footbar/wode.png"/>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
   data() {
    return {
        selected: this.$store.state.foot_bar.myselect,
    }
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations([
        'FOOTTAB_CHANGE',//底部导航状态
    ]),
  },
  watch: {
    //   选项卡选中，跳转到对应的路由（页面）
    selected(old, newValue) {
        console.log(old,'<<<<< old');
        console.log(newValue,'<<<<< newValue');
        this.selected = old;
        switch (this.selected) {
            case '首页':
                this.$store.commit('FOOTTAB_CHANGE', '首页');
                this.$router.push('/Index');
                break;
            case '心愿':
                this.$store.commit('FOOTTAB_CHANGE', '心愿');
                this.$router.push('/Wishs');
                break;
            case '交流':
                this.$store.commit('FOOTTAB_CHANGE', '交流');
                this.$router.push("/Service");
                
                break;
            case '生活':
                this.$store.commit('FOOTTAB_CHANGE', '生活');
                this.$router.push('/Living');
                break;
            case '我的':
                this.$store.commit('FOOTTAB_CHANGE', '我的');
                this.$router.push('/Myself');
                break;
        
            default:
                break;
        }
    } 
  }
};
</script>

<style scoped>
#footBar {
  position: fixed !important;
  z-index: 5;
  background-color: #fff;
  box-sizing: border-box;
  border-top: 1px solid #fff;
  /* box-shadow: -1px 1px #cccc; */
}
</style>
