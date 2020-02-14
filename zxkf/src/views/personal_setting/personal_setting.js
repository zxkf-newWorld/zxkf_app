import { mapState, mapMutations } from 'vuex'
export default {
  name: 'personal-setting',
  data () {
    return {

    }
  },
  components: {},
  computed: {
    ...mapState({
      'time': state => state.clock_count.time, /* 验证码计时 */
      'phoneNum': state => state.user_info.user, /* 用户账号，登录的手机号 */
      'userPwd': state => state.user_info.password, /* 登录手机号，对应的密码 */
      'veriCode': state => state.user_info.verifyCode, /* 登录验证码 */
    }),
  },
  created () {},
  mounted () {},
  methods: {
    ...mapMutations({
      getTimeCount: "TIME_GET", /* 验证计时 */
      logoutStatus: 'USER_LOGIN_LOGINOUT', /* 退出登录 */
    }),
    goBack() {
      // 返回上一级
      this.$router.go(-1);
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
            console.log('验证成功');
            this.slideShow = false; /* 关闭滑块验证 */
            this.state = true; /* 禁止点击获取验证码 */
            /* 发送请求，获取验证码 */
            let vcode = '123456';
            /* 将请求的验证码进行状态管理 */
            this.$store.state.user_info.verifyCode = vcode;
            let timer = setInterval(() => {
              console.log('进入计时');
              console.log(this.time, '<<<<< this.time');
              if (this.time <= 0) {
                /* 时间超时 */
                this.verifyTip = `获取验证码`;
                clearInterval(timer);
                this.state = false; /* 允许打开滑块验证 */
                this.$store.state.clock_count.time = 60;
              } else if(this.time > 0 && this.time <= 59) {
                this.$Bus.$off("slide"); /* 防止多次出发监听事件 */
                // console.log(this.time, '<<<<< this.time');
                this.verifyTip = `(${this.time})s后重新发送`;
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
    /*点击遮罩层触发关闭 */
    popupClosed() {
      this.$Bus.$off("slide");
    },
    // 退出登录
    loginout(from /* 退出登录操作的地方 */) {
      let userStatus = {
        status: 'off',
        user: '',
        password: ''
      };
      // 提示是否退出登录
      switch (from) {
        case 'accountSetting':
          this.$messagebox.confirm('确定退出登录?')
            .then(action => {
              // 确定退出
              sessionStorage.removeItem("uname");
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
          break;
        case 'changePhone':
          // 退出登录
          sessionStorage.removeItem("uname");
          this.logoutStatus(userStatus);
          // 将修改后的手机号存储起来
          // 1.查询数据库是否有此手机号： 有： 登录手机号 无：直接在数据表中添加用户数据，并登录手机号
          // 按照修改的手机号登录
          this.$notify({
            message: '保存成功，请重新登录',
            color: '#fff',
            background: '#FEDB01'
          });
          this.$router.push('/Login');
          console.log('用户账户注销', userStatus);
          break;
        default:
          break;
      }
    },
  },
}
