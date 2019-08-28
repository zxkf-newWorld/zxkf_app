<template>
  <div class="app-reg">
    <!-- zxkf/reg.vue  -->
    <!-- <div >
      <img src="../../assets/left.png" alt="">
    </div> -->
    <div class="reg-head" >
      <div @click="toHome">
        <img src="../../assets/left.png">
      </div>
      <div class="welcome-zxkf">
        欢迎注册
      </div>
      <!-- <img src="../img/left (2).png" class="imgs"> -->
      <!-- <span class="app-res-reg">欢迎注册</span> -->
    </div>
    <div>
      
    </div>
    <!--用户名-->
    <mt-field label="用户名称：" :placeholder="unameholder" class="myinput" v-model="uname"></mt-field>
    <!--密码-->
    <mt-field label="用户密码：" :placeholder="upwdholder" class="myinput" type="password" v-model="upwd"></mt-field>
    <!-- 手机-->
    <mt-field label="手机号码：" :placeholder="phoneholder"  class="myinput" type="tel" v-model="phone"></mt-field>
    <!-- 邮箱 -->
    <mt-field label="电子邮箱：" :placeholder="emailholder"  class="myinput"  type="email" v-model="email"></mt-field>
    <!-- 生日 -->
    <mt-field label="出生日期：" :placeholder="birthday"  class="myinput" type="date" v-model="birthday"></mt-field>
    <!-- 上传头像 -->
     <p class="images">上传头像：
        <img src="../../assets/login-icon.png" @click="upload" slot="icon">
    </p>
    <upload :uploadType="`head`" :imgWidth="`85px`" :imgHeight="`104px`" :imgUrl="imgUrl"
     @upload="getImgUrl">
    </upload>
     <br>
    <!--注册按钮-->
    <mt-button type="danger" class="primary"  @click="reg" size="large">注册</mt-button>
    <br>
    <mt-button type="primary" class="primary"  @click="login" size="large">登录</mt-button>
  </div>
</template>
<script>
//上述为处理脚手架警告
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      phone: "",
      email: "",
      birthday:"",
      unameholder: "用户名4-12位",
      upwdholder: "密码8-12",
      phoneholder: "请输入正确的11位手机号",
      emailholder: "请输入正确的邮箱地址",
      birthday:"请输入出生日期"
    };
  },
  // mounted(){
  //   this.reg();
  // },
  methods: {
    // 上传头像
    upload(){
      console.log(1)
      this.$router.push("Upload");
    },
    toHome(){
      // 跳转到首页
      this.$router.go(-1); 
    },
    login(){
       this.$router.push("Login");
    },
    reg() {
      // console.log(this.qs);
      // 完成注册
      var u = this.uname;
      var p = this.upwd;
      var h = this.phone;
      var e = this.email;
      var b=this.birthday;
      var obj = { uname: u, upwd: p, phone: h, email: e ,birthday:b};
      //  字母数字下划3~12
      //3:验证用户名 出错提示，并停止执行
      if (!/^[a-zA-Z0-9_-]{4,16}$/.test(u)) {
        this.$toast("用户名格式不正确");
        return;
      } else {
        var url = "login_reg/login_uname";
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
         var url = "login_reg/login_phone";
        this.axios.get(url + "?phone=" + this.phone).then(res => {
          if (res.data.code == -1) {
            this.$toast("手机已被注册");
            return;
          }
        });
      }
      if(!this.birthday){
         this.$toast("请选择出生日期");
         return;
      }
      //4:验证密码   出错提示，并停止执行
      // if (!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)) {
      //   this.$toast("邮箱格式不正确");
      //   return;
      // } else {
      //   this.axios.get(url + "?email=" + this.email).then(res => {
      //     if (res.data.code == -1) {
      //       this.$toast("邮箱已被注册");
      //       return;
      //     }
      //   });
      // }
      //5:发送ajax请求 axios
      // setTimeout(function() {  }, 1000);
      var url1 = "login_reg/reg";
      this.axios.post(url1, this.qs.stringify(obj)).then(res => {
        //获取服务器返回的结果，注册成功或者失败
        if (res.data.code == -1) {
          this.$toast("注册失败");
          return;
        } else {
          this.$toast("注册成功");
          this.$router.push("Login");
        }
      });
    }
  }
};

</script>
<style>
.images{
  text-align: left;
  font-size: 16px;
  margin-left:20px; 
}
.images img{
  width: 70%;
}
.app-reg{
  position: relative;
  background:#fff;
}
.reg-head{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
   background: #FE0036;
}
.reg-head div > img{
  width: .4rem;
}
.reg-head .welcome-zxkf{
  margin-left: 50%;
  position: absolute;
  height: .4rem;
  line-height: .4rem;
  left: -1rem;
  /* top:.2rem; */
  font-size: .4rem;
  color: #fff;
}
/* .reg-head div{
  text-align: left;
} */
.app-reg> a>.app-res-reg{
  position:absolute;
  top:6px;
  left:163px;
}
.app-reg>a{
  text-decoration:none;
  text-align: center;
}
 .app-reg> a img{
   display: inline-block;
   height: 30px;
   vertical-align:middle;
   top:0px;
   left: 0px;
 }
</style>
