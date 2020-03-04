<template>
  <div class="wrapper">
    <!-- 红色头顶部 -->
    <div class="redhead">
      <div class="redhead-header">
        <div class="back"></div>
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
          <!-- 隐藏的图片上传 -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            accept="image/*"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <!-- 默认头像图片，点击可设置头像图片， -->
            <!-- build 替换地址：http://youthhouse.applinzi.com/profile.jpg  本地地址 http://127.0.0.1:3000/profile.jpg-->
            <img
              v-if="isDefault"
              class="default-img"
              src="http://127.0.0.1:3000/profile.jpg"
              alt="资源不存在"
            />
          </el-upload>
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
      islogin: false /* 默认未登录 */,
      uname: "",
      imageUrl: "",
      isDefault: true /* 是否为默认头像 */
    };
  },
  computed: {
    ...mapState({
      status: state => state.user_info.status,
      user: state => state.user_info.user /* 用户手机号 */,
      password: state => state.user_info.password
    })
  },
  created() {
    if (this.status === "on") {
      console.log("用户已登录账户");
    } else {
      console.log("用户未登录账户");
    }
    if (this.status === "on") {
      // 登录
      this.uname = this.user;
    } else {
      // 未登录
      this.islogin = true;
    }
    if (this.uname == null && this.uname === "") {
      // 未登录
      this.islogin = true;
    }
    this.axios
      .get("/index/searchUserAvatar", {
        params: {
          phone: this.user
        }
      })
      .then(result => {
        console.log(result, "<<<<<< result");
        // build 替换地址：http://youthhouse.applinzi.com/profile.jpg
        const defaultImageUrl = 'http://youthhouse.applinzi.com/profile.jpg';
        // const defaultImageUrl = "http://youthhouse-zxkf.stor.sinaapp.com/avatar/cute.jpg";
        console.log(defaultImageUrl === result.data.avatar, defaultImageUrl === result.data.avatar);
        console.log(result.data.avatar, '<<<<<< result.data.avatar');
        if (result.data.avatar !== defaultImageUrl) {
          this.isDefault = false;
          this.imageUrl = result.data.avatar;
        } else {
          this.isDefault = true;
        }
      })
      .catch(err => {
        throw err;
      });
  },
  components: {
    FootTab
  },
  methods: {
    ...mapMutations({
      logoutStatus: "USER_LOGIN_LOGINOUT"
    }),
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      // 查找数据库zxkf_login 的 avatar字段 设置 imagUrl
      console.log(this.imageUrl, "<<<<< this.imageUrl");
    },
    beforeAvatarUpload(file /* 上传头像文件 */) {
      // const isJPG = file.type === 'image/*';
      console.log(file, "<<<<< file");
      const formdata = new FormData();
      // console.log(formdata, '<<<<< formdata');
      formdata.append("img", file);
      formdata.append("userPhone", this.user);
      console.log(formdata.get("img"), "formdata");
      console.log(formdata.get("userPhone"), "userPhone");
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像只能是图片');
      //   // this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      // 发送图片上传的异步请求
      this.axios
        .post(`/login_reg/crop`, formdata)
        .then(result => {
          console.log(result, "<<<<< result");
          if (result.data.code === 1) {
            //  图片上传成功，更新我的头像
            this.isDefault = false; /* 默认图片隐藏 */
            this.imageUrl = result.data.imgUrl;
            console.log(`上传图片成功`);
          }
        })
        .catch(err => {
          console.log(`上传图片失败`);
          throw err;
        });
      // return isJPG && isLt2M;
      return isLt2M;
    },
    toLogin() {
      // 跳转到登录页面
      this.$router.push("Login");
    },
    toReg() {
      // 跳转都爱注册页面
      this.$router.push("Reg");
    },
    toSetting() {
      this.$router.push("/AccountSetting");
    }
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
  font-size: 0.4rem;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  display: block;
  width: 100px;
  height: 100px;
  margin-left: 0.5rem;
  box-shadow: 0 0 4px #ccc;
}
.default-img {
  width: 100px;
  height: 100px;
  margin-left: 0.5rem;
}
</style>
