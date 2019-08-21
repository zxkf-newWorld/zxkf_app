<template>
  <div class="app-reg">
    <!-- zxkf/reg.vue  -->
    <!--用户名-->
    <mt-field :placeholder="unameholder" v-model="uname" class="myinput"></mt-field>
    <!--密码-->
    <mt-field :placeholder="upwdholder" v-model="upwd" class="myinput" type="password"></mt-field>
    <!-- 手机-->
    <mt-field :placeholder="phoneholder" v-model="phone" class="myinput" type="text"></mt-field>
    <!-- 邮箱 -->
    <mt-field :placeholder="emailholder" v-model="email" class="myinput" type="text"></mt-field>
    <!--注册按钮-->
    <mt-button size="large" class="mybutton" @click="reg">注册</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "jason",
      upwd: "123456748496",
      phone: "13366669996",
      email: "qq@qq.com",
      unameholder: "用户名4-12位",
      upwdholder: "密码8-12",
      phoneholder: "请输入正确的11位手机号",
      emailholder: "请输入正确的邮箱地址"
    };
  },
  // mounted(){
  //   this.reg();
  // },
  methods: {
    reg() {
      // console.log(this.qs);
      // 完成注册
      var u = this.uname;
      var p = this.upwd;
      var h = this.phone;
      var e = this.email;
      var url = "reg";
      var obj = { uname: u, upwd: p, phone: h, email: e };
      //  字母数字下划3~12
      //3:验证用户名 出错提示，并停止执行
      if (!/^[a-zA-Z0-9_-]{4,16}$/.test(u)) {
        this.$toast("用户名格式不正确");
        return;
      } else {
        this.axios.get(url + "?uname=" + this.uname).then(res => {
          if (res.data.code == -1) {
            this.$toast("用户名已被注册");
            return;
          }
        });
      }

      //4:验证密码   出错提示，并停止执行
      if (!/^(\w){6,20}$/.test(p)) {
        this.$toast("密码格式不正确");
        return;
      }

      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(h)) {
        this.$toast("手机格式不正确");
        return;
      } else {
        this.axios.get(url + "?phone=" + this.phone).then(res => {
          if (res.data.code == -1) {
            this.$toast("手机已被注册");
            return;
          }
        });
      }

      //4:验证密码   出错提示，并停止执行
      if (!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)) {
        this.$toast("邮箱格式不正确");
        return;
      } else {
        this.axios.get(url + "?email=" + this.email).then(res => {
          if (res.data.code == -1) {
            this.$toast("邮箱已被注册");
            return;
          }
        });
      }

      //5:发送ajax请求 axios
      setTimeout(()=>{
        this.axios.post(url, this.qs.stringify(obj)).then(res => {
          //获取服务器返回的结果，注册成功或者失败
          if (res.data.code == -1) {
            this.$toast("注册失败");
            // console.log(2222);
            return;
          } else {
            // this.$router.push("/Product");
            this.$toast("注册成功");
          }
        });
      }, 1000);
    }
  }
};
</script>