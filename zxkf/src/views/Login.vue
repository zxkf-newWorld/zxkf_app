<template>
  <div class="app-login">
    <!--xz/Login.vue-->
    <!--用户名-->
    <mt-field :placeholder="unameholder" v-model="uname" class="myinput" type="text"></mt-field>
    <!--密码-->
    <mt-field :placeholder="upwdholder" v-model="upwd" class="myinput" type="password"></mt-field>
    <!--登录按钮-->
    <mt-button size="large" class="mybutton" @click="login">登录</mt-button>
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
  background-color: #ddd;
}
.app-login > button {
  background: #ddd;
}
</style>

