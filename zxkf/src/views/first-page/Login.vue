<template>
  <div class="app-login">
    <!--xz/Login.vue-->
    <div class="tabLogin">
      <a href>
        <img src="" class="imgs">
      </a>
      <img src="" class="imgs1">
    </div>
    <mt-button class="mhbutton" @click="login">快速登陆</mt-button>
    <mt-button class="mhbutton" @click="login">账号登陆</mt-button>
    <!--用户名-->
    <mt-field :placeholder="unameholder" v-model="uname" class="myinput1" type="text"></mt-field>
    <!-- <img src="../img/call.png" class="call">  -->
    <!--密码-->
    <mt-field :placeholder="upwdholder" v-model="upwd" class="myinput" type="password"></mt-field>
    <!-- <img src="../img/pwd.png" class="call"> -->
    <!--登录按钮-->
    <mt-button size="large" class="mbutton1" @click="login">登录</mt-button>
    <mt-button class="botText-login">登录即视为同意《服务协议》</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      unameholder: "请输入用户名",
      upwdholder: "请输入密码",
      uname: "",
      upwd: ""
    };
  },
  methods: {
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
      //5:发送ajax请求 axios
      var url = "login";
      var obj = { uname: u, upwd: p };
      //params 库指定的参数
      this.axios.post(url, this.qs.stringify(obj)).then(res => {
        //获取服务器返回的结果，登陆成功或者失败
        if (res.data.code == -1) {
          this.$toast("用户名或密码有误");
        } else {
          // this.$router.push("");
          this.$toast("登陆成功");
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
  padding-top: 40px;
  position: relative;
  text-align: center;
}
.app-login > .mhbutton {
  background: url();
  margin: 0 35px;
  border-bottom: none;
}
.app-login > .myinput {
  width: 100%;
  padding-left: 70px;
  position: relative;
  /* background-image: url("../img/pwd.png"); */
  background-repeat: no-repeat;
  background-size: 7%;
  background-position: 50px 12px;
  border:2px solid #F2F2F2;
  border-radius: 30%;
}
.app-login > .myinput1 {
  width: 100%;
  padding-left: 70px;
  position: relative;
  /* background-image: url("../img/call.png"); */
  background-repeat: no-repeat;
  background-size: 6%;
  background-position: 50px 15px;
  border:2px solid #F2F2F2;
  border-radius: 30%;
}
.app-login > .mhbutton:hover {
  border-bottom: 2px solid red;
}
.tabLogin > a .imgs {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 20px;
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
  background-color: #fff;
}
.call {
  position: absolute;
  top: 0px;
  left: 0px;
  /* width:20px; */
}
</style>

