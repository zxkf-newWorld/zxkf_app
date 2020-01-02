<template>
  <div class="app-login">
    <!--xz/Login.vue-->
    <div class="tabLogin">
      <div @click="toHome">
        <span class="iconfont icon-ico_leftarrow imgs"></span>
      </div>
      <img src="../../assets/newlogo2.png" class="imgs1">
    </div>
    <div class="login-register">
      <van-tabs v-model="activeName">
            <van-tab title="快速登录" name="a">
              <div class="inputStyle" v-if="activeName.split().includes('a')">
                <!--用户名-->
                <mt-field label="用户名" :placeholder="unameholder" class="myinput1" v-model="uname">
                  <span class="verify" @click="getVerifyCode($event)">获取验证码</span>
                  <van-popup v-model="slideShow">
                    <verify></verify>
                  </van-popup>
                </mt-field>
                <!--密码-->
                <mt-field label="验证码" :placeholder="upwdholder" class="myinput" type="password" v-model="upwd" state="verifyState"></mt-field>
                <div class="tips">
                 收不到验证码？重新获取
                </div>
              </div>
            </van-tab>
            <van-tab title="账号登录" name="b">
              <div class="inputStyle" v-if="activeName.split().includes('b')">
                <!--用户名-->
                <mt-field label="用户名" :placeholder="unameholder" class="myinput1" v-model="uname"></mt-field>
                <!--密码-->
                <mt-field label="密码" :placeholder="upwdholder" class="myinput" type="password" v-model="upwd"></mt-field>
                <div class="tips">
                  <div>忘记密码</div>
                  <div @click="reg">快速注册</div>
                </div>
              </div>
            </van-tab>
        </van-tabs>
    </div>
    <!--登录按钮-->
    <div class="commitProtocol">
      <mt-checklist style="margin-left:-25px"  v-model="check" :options="['登录即视为同意《服务协议》']"></mt-checklist>
    </div>
    <mt-button size="large" class="mbutton1" @click="login">登录 </mt-button>
  </div>
</template>
<script>
/* eslint-disable */
import Verify from '../../components/common/SlideVerify.vue'
export default {
  components: {
      Verify,
  },
  data() {
    return {
      slideShow: false,
      count: 59,
      verifyState: '',/* 验证码验证状态 */
      activeName: 'a',
      unameholder: "请输入用户名",
      upwdholder: "请输入密码",
      uname: "",
      upwd: "",
      check:[]
    };
  },
  methods: {
    /* 获取验证码 */
    getVerifyCode (event) {
      /* 滑块验证 */
      this.slideShow = !this.slideShow;
      this.$Bus.$on('slide', (ref) => {
        console.log(ref,'<<<<< ref');
        if (ref === 'success') {
          this.slideShow = false;/* 关闭滑块验证 */
        /* 发送请求 */
          let timer = setInterval(() => {
            if (this.count < 0) {
              clearInterval(timer); 
              event.target.innerText = `获取验证码`;
            } else {
              event.target.innerText = `重新发送${this.count}s`;
              this.count = this.count-1;
              this.slideShow = false;
            }
          }, 1000);
        }
      });
    },
    toHome(){
      // 跳转到首页
      this.$router.go(-1);
    },
    reg(){
      this.$router.push("Reg");
    },
    login() {
      //完成登录 47
      var u = this.uname;
      var p = this.upwd;
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
      if(this.check.length<1){
        this.$toast("请先同意");
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
          this.$toast("登陆成功");
          sessionStorage.setItem("uname",this.uname)
          this.$router.push('/');
        }
        //创建xz/Home1vue组件
        // code<0
      });
    }
  }
};
</script>

<style scoped>
.app-login {
  background:#fff;
  padding-top: 40px;
  position: relative;
  text-align: center;
}
.app-login > .mhbutton {
  background: url();
  margin: 0 35px;
  border-bottom: none;
  border: none!important;
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
.tabLogin{
  background-color: #e8323f !important;
}
.tabLogin > img{
  height: 1.2rem;
  margin-top: 1.2rem;
}
.tabLogin > div .imgs {
  position: absolute;
  top: 20px;
  left: 10px;
  width: .8rem;
  color: #fff;
}
.tabLogin > .imgs1 {
  position: absolute;
  top: .2rem;
  left: 2.5rem;
  /* width: 150px; */
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
  background: linear-gradient(to right bottom, #e6a1a6, #e8323f);
  /* background-color: #e8323f; */
}
.mbutton1 {
  width: 30%;
  margin: auto;
  margin-top: .5rem;
  font-size: .35rem;
  background: linear-gradient(to right bottom, #e6a1a6, #e8323f);
  /* background-color: #e8323f; */
  color: #fff;
  border-radius: 1rem;
}
.call {
  position: absolute;
  top: 0px;
  left: 0px;
  /* width:20px; */
}
.botText-login{
  font-size: .2rem;
  box-shadow: none;
}
.mint-cell-wrapper{
  width:90% !important;
}
.inputStyle {
  margin-top: .4rem;
}
.inputStyle >>> .mint-cell-wrapper {
  width: 80%;
  border-radius: .5rem;
  margin: auto;
  margin-bottom: .2rem;
  background: #f8f8f8;
}
.inputStyle .tips {
  display: flex;
  justify-content: space-between;
  color: #e8323f;
  width: 74%;
  margin: auto;
}
.verify {
  font-size: .25rem;
  color: #e8323f;
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
  font-size: .25rem;
}
.commitProtocol >>> .mint-checkbox-label {
  font-size: .25rem;
}
.login-register >>> .van-tab__text {
  font-size: .34rem;
}
</style>

