<template>
    <div class="wrapper">
        <!-- 红色头顶部 -->
        <div class="redhead">
            <div class="redhead-header">
                <div @click="goBack">
                    <img src="../../assets/left.png" alt="">
                </div>
                <p style="text-align:center;font-size:0.4rem;color:#fff; font-weight:bold">我的</p>
            </div>
            <div class="redhead-button">
                <div class="profile">
                    <img src="../../assets/profile.png" alt="资源不存在">
                </div>
                <div class="font-span">
                    <span @click="toLogin" v-if="islogin">登录 / </span>
                    <span v-if="!islogin">欢迎：{{uname}}  /  &nbsp;&nbsp;</span>
                    <span v-show="!islogin" @click="loginout">注销</span>
                    <span @click="toReg" v-if="islogin"> 注册</span>
                </div>  
            </div>
        </div>
        <!-- 在线交租-->
        <div class="onlinepay">
            <div class="icon">
                <img src="../../assets/jiaozu.png" alt="">
                <div>在线交租</div>
            </div>
            <div class="right">
                <img src="../../assets/right.png" alt="">
            </div>
        </div>
        <!-- 推荐房源、收藏房源、预约房源 -->
        <div class="house-source">
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/tuijian.png" alt="">
                    <div>推荐房源</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/shoucang.png" alt="">
                    <div>收藏房源</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/yuyue.png" alt="">
                    <div>预约房源</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
        </div>
        <!-- 意见反馈 -->
        <div class="suggest">
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/yuyue.png" alt="">
                    <div>预约反馈</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
        </div>
        <!--底部栏：下载app、联系在线看房 -->
        <div class="footbar">
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/download.png" alt="">
                    <div>下载APP</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/iphone.png" alt="">
                    <div>联系我们</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
            <div class="onlinepay">
                <div class="icon">
                    <img src="../../assets/aboutUs.png" alt="">
                    <div>关于我们</div>
                </div>
                <div class="right">
                    <img src="../../assets/right.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    data(){
        return{
              islogin:false,
              uname:""
        }
    },
    mounted() {
        this.uname=sessionStorage.getItem("uname");
        console.log(this.uname);
        if(this.uname == null){
            this.islogin=true;
        }
    },
    methods: {
        loginout(){
            sessionStorage.removeItem("uname")
            this.islogin=true;
            // this.$router.push('Login');
        },
        toLogin(){
            // 跳转到登录页面
            this.$router.push('Login');
        },
        toReg(){
            // 跳转都爱注册页面
            this.$router.push('Reg');
        },
        goBack(){
            //调到前一页
            this.$router.go(-1);
        },
    },
}
</script>
<style scoped>
    .wrapper{
        margin:0;
        padding:0;
        background-color: #f0f0f0;
        box-sizing: border-box;
    }

    p,div{margin: 0rem;padding: 0rem;}
    .redhead{
        position: relative;
        width: 100%;
        height: 156px;
        background: #e8323f;
        /*下外边距 */
        margin-bottom: 0.2rem;
    }
    .redhead .redhead-header > div{
        position: absolute;
        left: 0.2rem;
        top: 0.3rem;
    }
    .redhead .redhead-header > div > img{
        width: 60%;
    }
    .redhead .redhead-header > p{
        padding: 0.2rem;
    }
    /* 头像+按钮跳转登录+注册 */
    .redhead .redhead-button{
        position: relative;
        display: flex;
        justify-content: flex-start;
    }
    .redhead .redhead-button::after{
        display: block;
        content: "";
        clear: both;
    }
    .redhead .redhead-button .profile > img{
        width: 1.2rem;
        margin-left: .6rem;
        margin-top: 0.4rem;
    }
    .redhead .redhead-button .font-span{
        color: #fff;
        line-height: 1.8rem;
        font-size: 0.4rem;
        margin-bottom: 0rem;
        display: flex;
        margin-left: 0.4rem;
    }
    /* 在线交租 */
    .onlinepay{
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        border: 1px solid #f0f0f0;
        box-shadow: 1px 1px 1px #ccc;
    }
    .onlinepay .icon{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .onlinepay .icon >img{
        width: .3rem;
        padding-left: 0.2rem;
    }
    .onlinepay .icon >div{
        font-size: .35rem;
        padding-left: .4rem;
    }
    .onlinepay .right >img{
        margin-right: 0.2rem;
    }
    .house-source{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
</style>