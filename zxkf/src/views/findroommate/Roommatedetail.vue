<template>
    <div class="roommatedetails">
        <div class="top-head">
             <span class="icon iconfont icon-fanhui" @click="back"></span>
             <span>详情</span>
        </div>
        <div class="d-header-info clearfix">
            <img   class="d-header-left"  :src="details.img" alt="">
            <div class="d-header-right">
                <p>Yan.Zhan</p>
                <p>6天前</p>
            </div>
            <div class="d-header-openapp">
                打开APP立即沟通
            </div>
        </div>
        <div class="list">
            <div class="house-title clearfix">
                <div class="house-title-left"> 房源位置</div>
                <div class="house-title-right" @click="roommate">找室友</div>
            </div>
            <div class="house-content clearfix">
                <ul>
                    <li><span class="icon iconfont icon-kangjuxiangcun"></span> {{details.address}}</li>
                    <li><span class="icon iconfont icon-weizhi"></span> {{details.ditie}}</li>
                    <li><span class="icon iconfont icon-qian"></span> ￥{{details.price}}</li>
                    <li><span class="icon iconfont icon-shijian"></span> {{details.newDate}}</li>
                    <li><span class="icon iconfont icon-icond"></span> {{details.type}} (两室一厅)</li>
                </ul>
            </div>
        </div>
        <div class="describe">
            <p class="describe-title">更多描述</p>
            <div class="describe-content">
                {{details.content}}
            </div>
            <ul class="describe-img clearfix"> 
                <li @click="fullPic">
                    <img  :src="details.img" alt="" >
                </li>
                <li @click="fullPic">
                    <img  :src="details.img" alt="">
                </li>
                <li @click="fullPic">
                    <img  :src="details.img" alt="">
                </li>
            </ul>
        </div>
        <div id="detail_img" class="detail_img" v-show="isif">
            <span class="icon iconfont icon-guanbi clone" @click="closeFullPic"></span>
            <img  :src="details.img" alt="">
        </div>
        <div class="foot">
            <button>立即下载APP查看更多精彩回复哦~</button>
        </div>
    </div>
</template>
<script>
import '../../assets/iconfont/demo.css'
import '../../assets/iconfont/iconfont.css'
import '../../assets/iconfont/iconfont.js'

export default {
    data(){
        return{
          details:[],
          isif:false,
          clientHeight:""
        }
    },
    mounted() {
        let rid = this.$route.params.rid;
        // console.log(rid);
        var url = "index/findRoomMatesDetails?rid="+rid;
        this.axios.get(url).then(res => {
            //获取服务器返回的结果，登陆成功或者失败
        this.details=res.data.dataArray[0];
        // console.log(this.details)
        }).catch(err=>{
            // console.log(err);
            throw err;
        })
        // this.clientHeight =   `${document.getElementById("app").clientHeight}`  
        this.clientHeight =   document.documentElement.clientHeight 
        document.getElementById("detail_img").style.height=this.clientHeight+"px";
    },
    methods: {
        roommate(){
            this.$router.push('/Roommate');
        },
        back(){
            this.$router.push('/Roommate');
        },
        fullPic(){ 
          this.isif=true
           var body= document.body
           body.style.overflow="hidden"
        },
        closeFullPic(){ 
            this.isif=false;
             var body= document.body
            body.style.overflow="auto"
        },
    },
}
</script>
<style  scoped>
    .top-head{
        text-align: center;
        width: 100%;
        background: #ee3943;
        color: #fff;
        height:0.78rem;
        line-height: 0.78rem;
        position: relative;
    }
    .top-head .icon{
        position: absolute;
        left: 10px;
    }
    .roommatedetails{
        text-align: left;
    }
    .clearfix{
        clear: both;
    }
    p{
        margin: 0;
        padding: 0;
    }
    /* 头部 */
    .d-header-info{
        height: 1.7rem;
        width: 100%;
        background: #fff;
        position: relative;
    }
    .d-header-left{
        margin: 10px;
        width: 20%;
        float: left;
        height: 70%;
    }
    .d-header-right{
        padding: .3rem;
        padding-bottom: 0;
        padding-left: 0;
        float: left;
    }
     .d-header-right p{
         margin-bottom: 10px;
     }
    .d-header-openapp{
        float: right;
        width: 2.3rem;
        height: .5rem;
        border: 1px solid #399bee;
        position: absolute;
        right: .3rem;
        top: 50%;
        margin-top: -.225rem;
        border-radius: .05rem;
        color: #399bee;
        font-size: .24rem;
        text-align: center;
        line-height: .52rem;
    }
    .house-title{
        border-bottom: 1px solid #f0f0f0;
    }
    .house-title-left{
        padding: .3rem 0;
        font-size: .3rem;
        color: #5a5c5d;
        float:left;
    }
    .house-title-right{
        float:right;
        width: 1.3rem;
        height: .5rem;
        font-size: .26rem;
        color: #ee3943;
        text-align: center;
        line-height: .5rem;
        margin-top: .25rem;
    }
    /* 房源位置 */
    .list{
        background: #fff;
        margin: .3rem .2rem;
        padding: 0 .3rem .3rem;
    }
    .house-content{
         border-top: 1px solid #ccc;
    }
    .house-content ul li{
        padding: 0.1rem;
    }
    .house-content ul li span{
        padding: 5px;
    }
    /* 更多描述 */
    .describe{
        padding: .3rem;
        margin-bottom: .2rem;
        background-color: #fff;
    }
    .describe-title{
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
    .describe-content{
        padding: 10px 5px;
    }
    .describe-img{
        max-height: 2.0rem;
        overflow: hidden;
        padding-bottom: .2rem;

    }
    .describe-img li{
        margin-right:6px; 
        width: 2.15rem;
        height: 2.15rem;
        overflow: hidden;
        float: left;
    }
    .describe-img li img{
        width: 100%;
        min-height: 100%;
    }
    /* 页面底部 */
    .foot{
        position: relative;
        width: 100%;
        height: 2.4rem;
        background-color: #fff;
    }
    .foot button{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 5.8rem;
        height: .8rem;
        border: 1px solid #ee3943;
        border-radius: .05rem;
        line-height: .8rem;
        color: #ee3943;
        text-align: center;
        font-size: .28rem;
    }
    .detail_img{
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        /* height: 100%; */ 
        /* top:0.78rem; */
        background: rgba(0,0,0,.8);
        z-index: 999;
     }
     .detail_img img{
         margin-top: 3rem;
         width: 100%;
         height: 270px;
     }
     .clone{
         position: absolute;
         top:5px;
         right:6px;
         color:#fff;
         font-size: 32px;
     }
</style>