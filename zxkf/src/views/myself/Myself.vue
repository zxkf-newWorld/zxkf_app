<template>
  <div class="wrapper">
    <!-- 红色头顶部 -->
    <div class="redhead">
      <div class="redhead-header">
        <div class="back"> </div>
        <!-- <div class="iconfont back" @click="goBack">&#xe670;</div> -->
        <!-- <div @click="goBack" class="back">
          <img src="../../assets/left.png" alt="" />
        </div> -->
        <p
          style="text-align:center;font-size:0.4rem;color:#fff; font-weight:bold"
        >
          我的
        </p>
        <!-- 个人设置 -->
        <div class="iconfont setting" @click="toSetting">&#xe722;</div>
      </div>
      <div class="redhead-button">
        <div class="profile">
          <img src="../../assets/profile.png" alt="资源不存在" />
        </div>
        <div class="font-span">
          <!-- <span @click="toLogin" v-if="islogin">登录 /</span> -->
          <span v-if="!islogin">欢迎：{{ uname }}</span>
          <!-- <span v-show="!islogin" @click="loginout">注销</span>
          <span @click="toReg" v-if="islogin"> &nbsp;注册</span> -->
        </div>
      </div>
    </div>
    <!-- 在线交租-->
    <div class="onlinepay">
      <div class="icon">
        <img src="../../assets/jiaozu.png" alt="" />
        <div>在线交租</div>
      </div>
      <div class="right">
        <img src="../../assets/right.png" alt="" />
      </div>
    </div>
    <!-- 推荐房源、收藏房源、预约房源 -->
    <div class="house-source">
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/tuijian.png" alt="" />
          <div>推荐房源</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/shoucang.png" alt="" />
          <div>收藏房源</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/yuyue.png" alt="" />
          <div>预约房源</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 意见反馈 -->
    <div class="suggest">
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/yuyue.png" alt="" />
          <div>预约反馈</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
    </div>
    <!--底部栏：下载app、联系在线看房 -->
    <div class="footbar">
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/download.png" alt="" />
          <div>下载APP</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/iphone.png" alt="" />
          <div>联系我们</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
      <div class="onlinepay">
        <div class="icon">
          <img src="../../assets/aboutUs.png" alt="" />
          <div>关于我们</div>
        </div>
        <div class="right">
          <img src="../../assets/right.png" alt="" />
        </div>
      </div>
    </div>
    <footTab></footTab>
  </div>
</template>
<script>
import FootTab from "../FootTab.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      islogin: false, /* 默认未登录 */
      uname: ""
    };
  },
  computed: {
    ...mapState({
      'status': state => state.user_info.status,
      'user': state => state.user_info.user,
      'password': state => state.user_info.password
    })
  },
  created() {
    if (this.status === 'on') {
      console.log('用户已登录账户');
    } else {
      console.log('用户未登录账户');
    }
    if (this.status === "on") {
      // 登录
      this.uname = this.user;
    } else {
      // 未登录
      this.islogin = true;
    }
    if (this.uname == null && this.uname === '') {
      // 未登录
      this.islogin = true;
    }
  },
  components: {
    FootTab
  },
  methods: {
    ...mapMutations({
      logoutStatus: 'USER_LOGIN_LOGINOUT',
    }),
    // loginout() {
    //   sessionStorage.removeItem("uname");
    //   let userStatus = {
    //     status: 'off',
    //     user: '',
    //     password: ''
    //   };
    //   this.logoutStatus(userStatus);
    //   this.islogin = true;
    //   this.$toast({
    //     message: '您已退出登录',
    //     position: 'center',
    //     duration: 2000
    //   });
    //   this.$router.push('/Login');
    //   console.log('用户账户注销', userStatus);
    // },
    toLogin() {
      // 跳转到登录页面
      this.$router.push("Login");
    },
    toReg() {
      // 跳转都爱注册页面
      this.$router.push("Reg");
    },
    toSetting () {
      this.$router.push('/AccountSetting');
    },
    // goBack() {
    //   //调到前一页
    //   this.$router.go(-1);
    // }
  }
};
</script>
<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

p,
div {
  margin: 0rem;
  padding: 0rem;
}
.redhead {
  position: relative;
  width: 100%;
  height: 156px;
  background: #e8323f;
  /*下外边距 */
  margin-bottom: 0.2rem;
}
.redhead .redhead-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
/* .redhead .redhead-header > div {
  position: absolute;
  left: 0.2rem;
  top: 0.3rem;
} */
/* .redhead .redhead-header > div > img {
  width: 60%;
} */
/* .redhead .redhead-header > p {
  padding: 0.2rem;
} */
.redhead .redhead-header > div.back {
  margin-top: 0.3rem;
  flex: 1;
  font-size: .4rem;
  color: #fff;
}
.redhead .redhead-header > p {
  margin-top: 0.3rem;
  flex: 5;
}
.redhead .redhead-header > div.setting {
  margin-top: 0.3rem;
  flex: 1;
  color: #fff;
  font-size: 0.44rem;
}
/* 头像+按钮跳转登录+注册 */
.redhead .redhead-button {
  position: relative;
  display: flex;
  justify-content: flex-start;
}
.redhead .redhead-button::after {
  display: block;
  content: "";
  clear: both;
}
.redhead .redhead-button .profile > img {
  width: 1.2rem;
  margin-left: 0.6rem;
  margin-top: 0.4rem;
}
.redhead .redhead-button .font-span {
  color: #fff;
  line-height: 1.8rem;
  font-size: 0.4rem;
  margin-bottom: 0rem;
  display: flex;
  margin-left: 0.4rem;
}
/* 在线交租 */
.onlinepay {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #f0f0f0;
  box-shadow: 1px 1px 1px #ccc;
}
.onlinepay .icon {
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.onlinepay .icon > img {
  width: 0.25rem;
  padding-left: 0.2rem;
}
.onlinepay .icon > div {
  font-size: 0.3rem;
  padding-left: 0.2rem;
}
.onlinepay .right > img {
  margin-right: 0.2rem;
}
.house-source {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
</style>
