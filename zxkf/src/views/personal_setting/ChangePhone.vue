<template>
  <div class="change-phone">
    <header class="setting-head">
      <span class="iconfont" @click="goBack">&#xe670;</span>
      <span class="title">更改手机号</span>
      <span class="right-content"></span>
    </header>
    <main class="setting-body">
      <div class="pwd">
        <span class="iconfont">&#xe61f;</span>
        <span>
          <mt-field type="password" v-model="password" placeholder="密码"  :attr="{autofocus:true}"></mt-field>
        </span>
        <span class="right-cont"></span>
      </div>
      <div class="phone">
        <span class="iconfont">&#xe64b;</span>
        <span>
          <mt-field type="phone" v-model="phone" placeholder="新手机号">
          </mt-field>
        </span>
        <span class="verify-style" @click="getVerifyCode($event, state)">{{verifyTip}}</span>
        <van-popup @click-overlay="popupClosed" v-model="slideShow">
          <verify></verify>
        </van-popup>
        <!-- <span class="right-cont">
          <mt-button type="danger" size="small">获取验证码</mt-button>
        </span> -->
      </div>
      <div class="verify">
        <span class="iconfont">&#xe61f;</span>
        <span>
          <mt-field  v-model="verifyCode" placeholder="验证码"></mt-field>
        </span>
        <span class="right-cont"></span>
      </div>
    </main>
    <footer class="setting-foot">
      <div class="foot">
        <mt-button :disabled="disabled" :type="buttonColor" size="large" @click="reserve">保存</mt-button>
      </div>
    </footer>
  </div>
</template>

<script>
import mixin from './personal_setting.js'
import { mapState, mapMutations } from 'vuex'
import Verify from '../../components/common/SlideVerify.vue'
export default {
  name: "changePhone",
  mixins: [mixin],
  data() {
    return {
      // buttonColor: "primary",
      disabled: true,
      verifyTip: '获取验证码',
      slideShow: false,
      password: '',
      phone: '',
      verifyCode: '',
      state: false /* 点击状态：在一定时间范围内只允许点击一次  */,
      timer: null, /* 计时器 */
    };
  },
  computed: {
    buttonColor() {
      if( this.phone !=='' && this.password !== '' && this.verifyCode !== '') {
        this.disabled = false;
        return 'danger';
      } else {
        return 'primary'
      }
    }
  },
  components: {
    Verify,
  },
  created() {},
  mounted() {},
  beforeDestroy() {
    // 清空计时器，
    clearInterval(this.timer);
    this.timer = null;
    this.$store.state.clock_count.time = 60;
  },
  methods: {
    queryPwd () {
      //查询密码是否匹配用户账户
    },
    reserve() {
      // 保存，此时都有值了
      let pwd = this.password, /* 密码 */
        pho = this.phone, /* 新手机号 */
        vcode = this.verifyCode; /* 验证码 */
      console.log(pwd, pho, vcode);
      console.log(this.userPwd, this.phoneNum, this.veriCode);
      // 比较状态管理中的用户账户所对应的密码
      if (this.userPwd !== pwd) {
        this.$notify({
          message: '密码错误！',
          color: '#fff',
          background: "#FEDB01"
        });
        return;
      }
      // 比较状态管理中的用户账户所对应的手机号
      if (this.phoneNum === pho) {
        this.$notify({
          message: '手机号不能为旧手机号',
          color: '#fff',
          background: '#FEDB01'
        });
        return;
      }
      // 比较验证码是否相同
      if (this.veriCode !== vcode) {
        this.$notify({
          message: '验证码错误！',
          color: '#fff',
          background: '#FEDB01',
        });
        return;
      }
      /*
      * 向后端发送请求
      * 响应成功： 提示保存成功，并注册手机号，退出到登录页面
      * 响应失败：提示未保存成功，提示重新设置
      */
     let url = 'login_reg/reg';
     let formdata = `phone=${pho}&upwd=${pwd}`; /* 数据主体：字符串类型 */
     this.axios.post(url, /* this.qs.stringify(formdata) */ formdata).then((result) => {
      console.log(result, '<<<<< response res');
      if (result.data.code === 200) {
        this.$toast('保存成功，请登录');
        // 注册成功，并推出到登录页面
        this.$router.push('Login');
      }
     }).catch((err) => {
       console.log(err, '<<<<< response err');
       this.$toast('未保存成功，请重新设置');
     });;
    },
  },
};
</script>

<style scoped>
  .change-phone {
    height: 100vh;
  }
  .change-phone > .setting-head {
    margin-bottom: .6rem;
  }
  .change-phone > .setting-body,
  .change-phone > .setting-foot {
    width: 88%;
    margin: 0 auto;
    color: #9c9b9bc2;
  }
  /* 头部设置 */
  .setting-head {
    display: flex;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    justify-content: space-between;
    background: #EE3943;
    color: #fff;
    font-size: .4rem;
  }
  .setting-head span:first-child {
    flex:1;
  }
  .setting-head span:nth-child(2) {
    flex: 4;
  }
  .setting-head span:nth-child(3) {
    flex: 1;
  }
  /* 中间内容设置 */
  .setting-body {
    display: flex;
    flex-direction: column;
  }
  .setting-body  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #9c9b9bc2;
  }
  .setting-body  div.phone span.verify-style {
    display: inline-block;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.1rem;
    margin-top: 3%;
    font-size: 0.3rem;
    color: #fff;
    /* color: #e8323f; */
    /* background: rgba(0, 0, 0, 0.3); */
    background: #e8323f;
    border-radius: 4px;
  }
  .setting-body div span {
    display: inline-block;
  }
  .setting-body div span:first-child {
    flex: 1;
    padding-top: 3%;
  }
  .setting-body div span:nth-child(2) {
    flex: 4;
    text-align: left;
  }
  .setting-body div span:nth-child(3) {
    flex: 3;
    padding-top: 2%;
  }

  /* 底部设置 */
  .setting-foot {
  }
  .setting-foot .foot {
    margin-top: 1rem;
  }



  /* 保存按钮设置 */
  .setting-foot >>> .mint-button--primary {
    background-color: #9c9b9bc2;
  }
  .setting-foot >>> .mint-button {
    /* border-radius: 0; */
  }
</style>
