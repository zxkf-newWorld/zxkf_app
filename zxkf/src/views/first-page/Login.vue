<template>
  <div class="app-login">
    <!--xz/Login.vue-->
    <div class="tabLogin">
      <div @click="toHome">
        <img src="../../assets/newlogo2.png" class="imgs" />
      </div>
      <img src="../../assets/newlogo2.png" class="imgs1" />
    </div>
    <div class="login-register">
      <van-tabs v-model="activeName">
        <van-tab title="快速登录" name="a">
          <div class="inputStyle" v-if="activeName.split().includes('a')">
            <!--手机号-->
            <mt-field
              label="手机号"
              :placeholder="unameholder"
              class="myinput1"
              v-model="uname"
            >
              <span class="verify" @click="getVerifyCode($event, state)"
                >{{verifyTip}}</span
              >
              <van-popup @click-overlay="popupClosed" v-model="slideShow">
                <verify></verify>
              </van-popup>
            </mt-field>
            <!--密码-->
            <mt-field
              label="验证码"
              :placeholder="upwdholder"
              class="myinput"
              type="password"
              v-model="upwd"
              state="verifyState"
            ></mt-field>
            <div class="tips">
              收不到验证码？重新获取
            </div>
          </div>
        </van-tab>
        <van-tab title="账号登录" name="b">
          <div class="inputStyle" v-if="activeName.split().includes('b')">
            <!--手机号-->
            <mt-field
              label="手机号"
              :placeholder="unameholder"
              class="myinput1"
              v-model="uname"
            ></mt-field>
            <!--密码-->
            <mt-field
              label="密码"
              :placeholder="upwdholder"
              class="myinput"
              type="password"
              v-model="upwd"
            ></mt-field>
            <div class="tips">
              <div>忘记密码</div>
              <div @click="reg">快速注册</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!--登录按钮-->
    <mt-checklist
      style="margin-left:-25px"
      v-model="check"
      :options="['登录即视为同意《服务协议》']"
    ></mt-checklist>
    <mt-button size="large" class="mbutton1" @click="login">登录 </mt-button>
  </div>
</template>
<script>
/* eslint-disable */
import Verify from "../../components/common/SlideVerify.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      slideShow: false,
      // count: this.time,
      state: false /* 点击状态：在一定时间范围内只允许点击一次  */,
      verifyTip: "获取验证码",
      verifyState: "" /* 验证码验证状态 */,
      activeName: "a",
      unameholder: "请输入手机号",
      upwdholder: "请输入密码",
      uname: "",
      upwd: "",
      check: []
    };
  },
  computed: {
    ...mapState({
      'time': state => state.clock_count.time,
    })
  },
  components: {
    Verify
  },
  methods: {
    ...mapMutations({
      loginStatus: "USER_LOGIN_LOGINOUT" /* 提交用户登录、未登录状态 */,
      getTimeCount: "TIME_GET" /* 验证计时 */
    }),
    /*点击遮罩层触发关闭 */
    popupClosed() {
      this.$Bus.$off("slide");
    },
    /* 获取验证码 */
    getVerifyCode(event, state) {
      if (state === false) {
        /* 允许点击获取验证码 */
        /* 滑块验证 */
        this.slideShow = true; /* 打开滑块验证 */
        // 生成事件slide
        this.$Bus.$on("slide", ref => {
          console.log(ref, "<<<<< ref");
          if (ref === "success") {
            this.slideShow = false; /* 关闭滑块验证 */
            this.state = true; /* 禁止点击获取验证码 */
            /* 发送请求 */
            let timer = setInterval(() => {
              if (this.time <= 0) {
                /* 时间超时 */
                this.verifyTip = `获取验证码`;
                clearInterval(timer);
                this.state = false; /* 允许打开滑块验证 */
                this.$store.state.clock_count.time = 60;
              } else if(this.time > 0 && this.time <= 59) {
                this.$Bus.$off("slide"); /* 防止多次出发监听事件 */
                // console.log(this.time, '<<<<< this.time');
                this.verifyTip = `${this.time}s后重新发送`;
                // 将计时进行状态管理
                this.getTimeCount(1)
              } else if(this.time === 60) {
                this.getTimeCount(1);
              }
            }, 1000);
          }
        });
      } else {/* 禁止在有效时间内再次点击获取验证码 */}
    },
    toHome() {
      // 跳转到首页
      this.$router.push("Index");
    },
    reg() {
      this.$router.push("Reg");
    },
    login() {
      //完成登录 47
      let u = this.uname,
          p = this.upwd;
      //2:创建一个正则表达式
      // var reg = /^[a-z0-9_]{3,12}$/i;
      //  字母数字下划3~12
      //3:验证用户名 出错提示，并停止执行
      if (!u) {
        this.$toast("用户名不能为空");
        return;
      }
      //4:验证密码   出错提示，并停止执行
      if (!p) {
        this.$toast("密码不能为空");
        return;
      }
      if (this.check.length < 1) {
        this.$notify({
          message: "请先同意协议",
          color: "#fff",
          background: "#FEDB01"
        });
        return;
      }
      //5:发送ajax请求 axios
      var url = "login_reg/login";
      var obj = { uname: u, upwd: p };
      //params 库指定的参数
      this.axios.post(url, this.qs.stringify(obj)).then(res => {
        //获取服务器返回的结果，登陆成功或者失败
        // if(err) throw err;
        console.log(res);
        if (res.data.code == -1) {
          this.$toast("用户名或密码有误");
        } else {
          // 改变登录状态
          let userState = {
            status: "on",
            user: this.uname,
            password: this.upwd
          };
          this.loginStatus(userState); /* 提交登录成功状态 */
          console.log(this.$store.state.user_info, "user_info information");
          this.$toast("登陆成功");
          sessionStorage.setItem("uname", this.uname);
          this.$router.push("/");
        }
      });
    }
  },
  beforeDestroy() {
    // 清空计时器，
    this.$store.state.clock_count.time = 0;
  },
};
</script>

<style scoped>
.app-login {
  background: #fff;
  padding-top: 40px;
  position: relative;
  text-align: center;
}
.app-login > .mhbutton {
  background: url();
  margin: 0 35px;
  border-bottom: none;
  border: none !important;
  box-shadow: none;
}
.app-login > .myinput {
  width: 100%;
  padding-left: 35px;
  position: relative;
  /* background-image: url("../img/pwd.png"); */
  background-repeat: no-repeat;
  background-size: 7%;
  background-position: 50px 12px;
  /* border:2px solid #F2F2F2; */
  /* border-radius: 30%; */
}
.app-login > .myinput1 {
  width: 100%;
  padding-left: 35px;
  position: relative;
  background-repeat: no-repeat;
  background-size: 6%;
  background-position: 50px 15px;
}
.app-login > .mhbutton:hover {
  border-bottom: 2px solid red;
}
.tabLogin {
  background-color: #e8323f !important;
}
.tabLogin > img {
  height: 1.2rem;
  margin-top: 1.2rem;
}
.tabLogin > div .imgs {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 0.8rem;
}
.tabLogin > .imgs1 {
  position: absolute;
  top: 17px;
  left: 105px;
  width: 150px;
}
.tabLogin > button {
  padding: 15px;
  color: aliceblue;
  top: 150px;
  left: 3px;
}
.tabLogin {
  text-align: center;
  height: 200px;
  margin-top: -50px;
  background-color: red;
}
.mbutton1 {
  background-color: #e8323f;
  color: #fff;
}
.call {
  position: absolute;
  top: 0px;
  left: 0px;
  /* width:20px; */
}
.botText-login {
  font-size: 0.2rem;
  box-shadow: none;
}
.mint-cell-wrapper {
  width: 90% !important;
}
.inputStyle {
  margin-top: 0.4rem;
}
.inputStyle >>> .mint-cell-wrapper {
  width: 82%;
  border-radius: 0.5rem;
  margin: auto;
  margin-bottom: 0.2rem;
  background: #f8f8f8;
}
.inputStyle >>> .mint-cell-title {
  width: 1.3rem;
}
.inputStyle .tips {
  display: flex;
  justify-content: space-between;
  color: #e8323f;
  width: 74%;
  margin: auto;
}
.verify {
  display: inline-block;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.1rem;
  width: auto;
  font-size: 0.25rem;
  color: #e8323f;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
}
/* 输入框的背景色 */
.inputStyle >>> .mint-field-core {
  background: #f8f8f8;
  text-align: left;
}
.commitProtocol {
  position: fixed;
  left: 25%;
  bottom: 1rem;
}
.commitProtocol >>> .mint-checkbox-core::after {
  font-size: 0.25rem;
}
.commitProtocol >>> .mint-checkbox-label {
  font-size: 0.25rem;
}
.login-register >>> .van-tab__text {
  font-size: 0.34rem;
}
</style>
