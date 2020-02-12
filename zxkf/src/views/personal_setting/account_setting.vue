<template>
  <div class="account_setting">
    <header class="setting-head">
      <span class="iconfont" @click="goBack">&#xe670;</span>
      <span>账号设置</span>
    </header>
    <main class="setting-body">
      <div class="phone-set">
        <div class="phone-head">
          <span class="iconfont">&#xe60c;</span>
          <span class="name-title">手机号</span>
        </div>
        <span class="account">{{this.account}}</span>
        <span class="iconfont" @click="toChangePhone">&#xe646;</span>
      </div>
      <div class="change-pwd">
        <div class="phone-head">
          <span class="iconfont">&#xe61f;</span>
          <span class="pwd-set">修改密码</span>
        </div>
        <span class="account"></span>
        <span class="iconfont" @click="toChangePwd">&#xe646;</span>
      </div>
      <div class="privacy-set">
        <div class="phone-head">
          <span class="iconfont">&#xe5d4;</span>
          <span class="private">隐私设置</span>
        </div>
        <span class="account"></span>
        <span class="iconfont" @click="toChangeSetting">&#xe646;</span>
      </div>
    </main>
    <footer class="setting-foot">
      <mt-button type="danger" size="large" @click="loginout">退出登录</mt-button>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'account_setting',
  data() {
    return {

    }
  },
  components: {},
  computed: {
    ...mapGetters({
      'account': 'user', /* 用户登录账户 */
    })
  },
  created() {
    console.log(this.account, '<<<<< 用户登录账户');
  },
  mounted() {},
  methods: {
    ...mapMutations({
      logoutStatus: 'USER_LOGIN_LOGINOUT',
    }),
    // 返回上一级
    goBack() {
      this.$router.go(-1);
    },
    toChangePhone() {
      // 跳转到修改手机页面
    },
    toChangePwd () {},
      // 跳转到修改密码页面
    toChangeSetting () {
      // 跳转到修改隐私页面
    },
    // 退出登录
    loginout() {
      // 提示是否退出登录
      this.$messagebox.confirm('确定退出登录?')
        .then(action => {
          // 确定退出
          sessionStorage.removeItem("uname");
          let userStatus = {
            status: 'off',
            user: '',
            password: ''
          };
          this.logoutStatus(userStatus);
          this.$toast({
            message: '您已退出登录',
            position: 'center',
            duration: 2000
          });
          this.$router.push('/Login');
          console.log('用户账户注销', userStatus);
        }, cancel => {
          console.log('取消退出登录操作');
        });
    },
  }

}
</script>

<style scoped>
  .account_setting {
    background: #f0f0f0;
    height: 100vh;
  }
  /* 头部设置 */
  .setting-head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #EE3943;
    color: #fff;
    font-size: .45rem;
  }
  .setting-head > span:nth-child(1) {
    flex: 1;
  }
  .setting-head > span:nth-child(2) {
    display: inline-block;
    flex: 9;
    padding-right: 7.4%;
  }
  .setting-foot {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  /* 中间内容设置 */
  .setting-body {
    display: flex;
    flex-direction: column;
    margin-top: .2rem;
    background: #fff;
    color: #686868;
    font-size: .4rem;
    font-weight: bold;
  }
  .setting-body div {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .setting-body .phone-set,.setting-body .change-pwd,.setting-body .privacy-set {
    display: flex;
    justify-content: space-between;
  }
  .setting-body .phone-set > .phone-head,
  .setting-body .change-pwd > .phone-head,
  .setting-body .privacy-set > .phone-head {
    flex: 4;
    padding-left: .4rem;
    text-align: left;
  }
  .setting-body .phone-set > .phone-head > span:last-child,
  .setting-body .change-pwd > .phone-head > span:last-child,
  .setting-body .privacy-set > .phone-head > span:last-child {
    margin-left: .4rem;
  }
  .setting-body .phone-set .account,
  .setting-body .change-pwd .account,
  .setting-body .privacy-set .account {
    flex: 1;
  }
  .setting-body .phone-set span:last-child,
  .setting-body .change-pwd span:last-child,
  .setting-body .privacy-set span:last-child {
    display: inline-block;
    flex: 1;
    text-align: right;
    padding-right: .4rem;
  }


  /* 尾部设置 */
  /* 登录按钮样式修改 */
  .setting-foot >>> .mint-button {
    border-radius: 0;
    height: 46px;
  }
  /* 登录按钮的颜色 */
  .setting-foot >>> .mint-button--danger{
    background-color: #EE3943;
  }
</style>
