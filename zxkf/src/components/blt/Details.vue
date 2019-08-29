<template>
    <div>
        <!-- 详情部分 -->
        <div class="details">
            <!--返回按钮-->
            <div class="backBtn" @click="goBack">
                <span>&nbsp;</span>
            </div>
            <!-- 返回顶部按钮 -->
            <totop></totop>
            <!--轮播图-->
            <div class="swipe-box">
                <mt-swipe id="swipe" @change="handleChange">
                    <mt-swipe-item v-for="(img,i) of details.imgs" :key="i"><img :src="img"></mt-swipe-item>
                </mt-swipe>
                <div class="swiper-count-text">{{index+1}}/{{details.imgs.length}}</div>
            </div>
            
            <!--认证-->
            <div class="renzheng"><img src="../../../public/details/renzheng.png"></div>
            <!--房屋详情信息-->
            <div class="details-info">
                <ul>
                    <!-- 详情文字内容-->
                    <li>
                        <h1>{{details.rentType}} - {{details.hName}}</h1>
                        <p class="house-price"><span class="house-price-numble">¥{{details.price}}/月</span></p>
                        <p style="height: 0.2rem;">&nbsp;</p>
                    </li>
                    <li>
                        <ul class="house-ms">
                            <li>{{details.direction}}-{{details.roomType}}</li>
                            <li>{{details.area}}</li>
                            <li>{{details.liftNum}}</li>
                        </ul>    
                    </li>
                    <li>
                        <ul class="house-label">
                            <li v-for="(item,i) of details.trait" :key="i">{{item}}</li>
                        </ul>
                    </li>
                </ul>
                <!-- 详情地理信息 -->
                <div class="mapText">
                    <ul>
                        <li @click="changeMapText(i)" v-for="(item,i) of mapTextList" :key="i"><div :class="{active:i==mapTextIndex}"><img :src="i==mapTextIndex?mapTextUrlChecked[i]:mapTextUrl[i]">{{item.title}}</div></li>
                        
                    </ul>
                    <div class="mapTextConter" v-show="0==mapTextIndex">{{details.address}}
                    </div>
                    <div class="mapTextConter" v-show="1==mapTextIndex">
                        {{details.traffic}}
                    </div>
                    <div class="mapTextConter" v-show="2==mapTextIndex">
                        <ul>
                            <li v-for="(item,i) of details.around" :key="i"><span> {{item.nName}}：</span>{{item.items}}
                            </li>
                            <!-- <li><span> 购物：</span>华东万悦城、西北商贸中心、益田假日世界、东门美博城、五环交大Outlets工厂店
                            </li>
                            <li><span> 生活：</span>西安碑林郭西京诊所、交通银行ATM、雅诗美发沙龙
                            </li> -->
                        </ul>
                    </div>
                </div>
                <!-- 详情地图 -->
                <div class="mapImg">
                    <img src="../../../public/details/map.png" v-if="show" @click="showMap">
                    <div v-if="isShow">
                        <mymap></mymap>
                    </div>
                    <div class="map-text-wrapper">
                        <p  class="map-text"><span class="dingwei"></span>
                            {{details.address}}
                        </p>
                    </div>
                </div>
                <!-- 详情配套设施 -->
                <div>
                    <div class="tabSheshi">
                        <ul>
                            <li><span @click="sheshiTab" :class="{active:sheshiIndex==0}" data-index=0>独用设施</span></li> 
                            <li><span @click="sheshiTab" :class="{active:sheshiIndex==1}" data-index=1>公用设施</span></li>
                        </ul>
                    </div>
                    <ul class="icon-list" v-show="sheshiIndex==0">
                        <li><img src="../../../public/details/1.png"></li>
                        <li><img src="../../../public/details/2.png"></li>
                        <li><img src="../../../public/details/3.png"></li>
                        <li><img src="../../../public/details/4.png"></li>
                        <li><img src="../../../public/details/5.png"></li>
                    </ul>
                    <ul class="icon-list" v-show="sheshiIndex==1">
                        <li><img src="../../../public/details/6.png"></li>
                        <li><img src="../../../public/details/7.png"></li>
                        
                    </ul>
                </div>
            </div>
            <!-- 用户点评区域 -->
            <div class="argue">
                <h2>— 用户点评 —</h2>  
                <div class="commentNull">
                    <p>还没有评价，评一条占个沙发</p> 
                    <span class="btn">看房评价赢积分好礼</span>
                </div>
            </div>
            <!-- 点评区域下方广告 -->
            <div class="adv">
                <a href="">
                    <img src="../../../public/details/tongqinzufang.jpg">
                </a>
            </div>
            <!-- 举报 -->
            <div class="jubao">
                <img src="../../../public/details/jubao.png">
            </div>
            <!-- 页面顶部功能区 -->
            <div class="details-footer">
                <ul>
                    <li class="shoucang" @click="collect">
                        <img src="../../../public/details/sc.png" v-show="!isSC">
                        <img src="../../../public/details/ysc.png" v-show="isSC">
                    </li>
                    <li class="into" @click="showMSG">预约看房</li>
                    <li class="call" @click="callOwner">电话房东
                        <img class="tishi" src="../../../public/details/tishi_phone.png">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import ToTop from './ToTop.vue'
import Mymap from '../Mapbus.vue'
export default {
    data(){
        return {
            index:0,//轮播图索引
            show:true,//地图图片显示
            isShow:false,//地图默认不显示，只有点击图片之后才显示
            popupVisible:true,
            mapTextIndex:0,//控制mapText三个板块切换的中间量
            mapTextList:[
                {title:"地址",imgUrl:"../../../public/details/position.png"},
                {title:"交通",imgUrl:"../../../public/details/traffic.png"},
                {title:"周边配套",imgUrl:"../../../public/details/near.png"},
            ],
            sheshiIndex:0,
            details:{
                hName:"玫瑰坊",
                rentType:"合租",
                roomType:"次卧",
                direction:"朝北",
                area:"18㎡",
                liftNum:"电梯28/33层",
                price:"2000",
                trait:["近地铁","电梯房","非一楼","新上架"],
                address:"碑林-东关正街-长乐坊18号",
                traffic:"203路;228路;237路;240路;408路;410路;512路;517路;709路;709路区间;K622路 ",
                around:[
                    {nName:"饮食",items:"李家大院、兄弟大灶台、亨牛老火锅、雷子面馆、兄弟大灶台"},
                    {nName:"购物",items:"东泰商城、华东购物广场、中泰广场、汉娜尚妃、精品百货购物中心"},
                    {nName:"生活",items:"西安铁一中滨河学校、信誉药行、灞桥生态湿地公园"},
                ],
                equipment:[
                    {equipType:"独用设施",items:[]}
                ],
                imgs:[
                "./details/house1.png",
                "./details/house2.png",
                "./details/house3.png",
                "./details/house4.png",
                "./details/house5.png",
                "./details/house6.png",
                ],
            },
            isSC:false,
            mapTextUrl:[
                "./details/position.png",
                "./details/traffic.png",
                "./details/near.png"
            ],
            mapTextUrlChecked:[
                "./details/position-red.png",
                "./details/traffic-red.png",
                "./details/near-red.png"
            ],

        }
    },
    methods:{
        showMap(){
            this.show = false;//图片不显示
            this.isShow = true;//地图显示
        },
        handleChange(index){
            this.index = index;
        },
        changeMapText(i){//切换mapText三个板块的切换函数
            this.mapTextIndex=i;
        },
        sheshiTab(e){
            console.log(e.target);
            this.sheshiIndex=e.target.dataset.index;
            console.log(this.sheshiIndex);
        },
        collect(){
            if(this.isSC==false){
                this.isSC=true;
                this.$toast({
                    message:"收藏成功",
                    duration:1500,

                });
            }else{
                this.isSC=false;
                this.$toast("已取消收藏");
            }
        },
        goBack(){
            this.$router.go(-1);
        },
        showMSG(){
            this.$messagebox.prompt("请填写您的手机号码，我们会尽快联系您")
            .then(({value,action})=>{
                this.$toast('已接收您的预约，请耐心等待');
            })
            .catch(err=>{
               console.log(err);
            });
        },
        callOwner(){
            this.$messagebox.alert("是否拨通房东电话？").then(action=>{

            })
        }
    },
    components:{
        "totop":ToTop,
        "mymap":Mymap
    },
}
</script>
<style scoped>
    .details{
        width:100%;
        height:100%;
        background-color: #f0f0f0;
        padding-bottom: 1rem;
    }
    /***************************返回按钮***************************/
    .backBtn{
        z-index: 999;
        position: absolute;
        top: .3rem;
        left: .3rem;
        width: .8rem;
        height: .8rem;
        text-align: center;
        background-color: rgba(0,0,0,.5);
        border-radius: 50%;
    }
    .backBtn>span{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        border: 2px solid #fff;
        border-width: 2px 2px 0 0;
        transform: rotate(-135deg);
        margin: .22rem 0 0 .15rem;
        z-index: 200;
    }
    /*******************************返回顶部按钮***********************************/
    .toTop{
        position: fixed;
        width: .9rem;
        height: .9rem;
        background-image: url(../../../public/zhengzu/toTop.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        font-size: .2rem;
        color: #fff;
        bottom: 1.28rem;
        right: .3rem;
        animation: .7s opacity2 0s;
    }
    .toTop>p{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        text-align: center;
    }
    /***************************轮播图样式*******************************/
    .swipe-box{
        position: relative;
    }
    #swipe{
        width:100%;
        height:4.16rem;
        position: relative;
        z-index: 99;    
    }
    #swipe img{
        width:100%;
        vertical-align: middle;
        font-size: 0;
    }
    .swiper-count-text{
        z-index: 110;
        width: .8rem;
        height: .8rem;
        position: absolute;
        bottom: .2rem;
        right: .2rem;
        text-align: center;
        background-color: rgba(0,0,0,.5);
        border-radius: 50%;
        color:#fff;
    }
    /* .carousel{
        width:100%;
        height:4.16rem;
        position: relative;
    }
    .carousel>ul{
        list-style: none;
        width: 100%;
        height:100%;
        overflow: hidden;
    }
    .carousel>ul>li{
        height:4.16rem;
        width:100%;
        display: flex;
        align-items: center;
    }
    .carousel li img{
        width:100%;
        vertical-align: middle;
        font-size: 0;
    } */
    /************************轮播图数量**************************/
    .swiper-count-text{
        z-index: 100;
        text-align: center;
        line-height: .8rem;
        color: #fff;
        width: .8rem;
        height: .8rem;
        position: absolute;
        bottom: .2rem;
        right: .2rem;
        font-size: .24rem;
    }   
    .swiper-count-bg{
        width: .8rem;
        height: .8rem;
        background-color: #000;
        opacity: .5;
        border-radius: 50%;
        position: absolute;
        bottom: .2rem;
        right: .2rem;
    }
    /********************认证******************* */
    .renzheng{
        width: 100%;
        height:.86rem;
        overflow: hidden;
        font-size: 0;
    }
    .renzheng>img{
        width:100%;
    }
    /********************房屋详情信息******************* */
    .details-info{
        width:100%;
        box-sizing: border-box;
        padding-bottom: .2rem;
    }
    .details-info>ul{
        margin-bottom: 10px;
        background-color: #fff;
        font-size:0;
    }
    .details-info>ul>li:first-child>h1{
        font-size: .36rem;
        font-weight: 700;
        color: #424445;
        padding: 10px 4% 4px;
        width: 92%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        margin-top:0;
    }
    .house-price{
        padding: 0 4%;
        position: relative;
        overflow: hidden;
        line-height: .4rem;
        margin-top:-.3rem;
        margin-bottom:-.2rem;
        text-align: left; 
    }
    .house-price>span{
        color: #FE0036;
        overflow: hidden;
        line-height: .52rem;
        font-size: .32rem;
    }
    .house-ms{
        list-style:none;
        display: flex;
        justify-content: space-between;
        padding: .24rem 0;
        border: 1px solid #e7e7e7;
        border-width: 1px 0;
    }
    .house-ms>li{
        width:33.3%;
        text-align: center;
        border-right: 1px solid #f0f0f0;
        margin-right: -1px;
        height: .38rem;
        line-height: .38rem;
        color:#505050;
        font-size: .28rem;
    }
    .house-label{
        list-style: none;
        overflow: hidden;
        padding: 10px;
        border-bottom: 1px solid #e7e7e7;
    }
    .house-label>li{
        float: left;
        background-color: #f6f6f6;
        padding: 3px 9px;
        text-align: center;
        color: #9b9b9b;
        font-size: .28rem;
        margin: 5px 8px 5px 2px;
        border-radius: 2px;
        text-align: center;
    }
    /***********************************************地理信息*******************************************/
    .mapText>ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
    }
    .mapText>ul>li{
        width:33.3%;
        text-align: center;
        font-size: 0;
    }
    .mapText>ul>li>div{
        display: inline-block;
        padding: .3rem 0;
        font-size: .32rem;
        color: #5a5c5d;
    }
    .mapText>ul>li>div.active{
        color: #FE0036;
        border-bottom: .04rem solid #FE0036;
    }
    .mapText>ul>li>div img{
        vertical-align: middle;
        width:.22rem;
        height:.26rem;
        margin-right:.1rem;
    }
    .mapTextConter{
        padding: .4rem;
        line-height: .56rem;
        font-size: .28rem;
        color:#505050;
        background-color: #fff;
    }
    .mapTextConter>ul{
        list-style:none;
    }
    .mapTextConter li{
        margin-bottom: .1rem;
    }
    /*****************************************************地图************************************/
    .mapImg{
        width: 100%;
        height: 6rem;
        position: relative;
        padding-bottom: .4rem;
        background-color: #fff;
        margin-bottom: .2rem;
    }
    .mapImg>img{
        width:100%;
        height:100%;
    }
    .mapImg .map-text-wrapper{
        width: 5.57rem;
        height: .66rem;
        line-height: .66rem;
        margin: 0 auto;
        background: rgba(0,0,0,.6);
        color: #fff;
        border-radius: 4px;
        position: relative;
        top: -.76rem;
        margin-top: -.36rem;
        padding: 0 .5rem;
    }
    .mapImg .map-text-wrapper .map-text{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .28rem;
    }
    .mapImg .map-text-wrapper .map-text .dingwei{
        display: inline-block;
        width: .25rem;
        height: .3rem;
        background: url(../../../public/details/dingwei.png) top no-repeat;
        background-size: 100% 100%;
        vertical-align: sub;
    }
    /* ************************************设施区域********************************************** */
    .tabSheshi{
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        font-size: 0;
    }
    .tabSheshi>ul{
        display: flex;
        list-style: none;
    }
    .tabSheshi>ul>li{
        width:50%;
        text-align: center;
    }
    .tabSheshi li span.active{
        color: #FE0036;
        border-bottom: 2px solid #FE0036;
    }
    .tabSheshi li span{
        display: inline-block;
        padding: 10px 0;
        font-size: .32rem;
        color:#505050;
    }
    .icon-list{
        list-style: none;
        overflow: hidden;
        padding: 20px 0;
        background-color: #fff;
    }
    .icon-list>li{
        float: left;
        width: 20%;
        text-align: center;
        height: .92rem;
        margin-bottom: 10px;
    }
    .icon-list>li>img{
        height:100%;
    }
    /****************************************用户评论*************************************************/
    .argue{
        width:100%;
        margin-bottom: 10px;
        background-color: #fff;
        font-size: 0;
    }
    .argue>h2{
        font-size: .32rem;
        color: #5a5c5d;
        text-align: center;
        line-height: 1.12rem;
        font-weight: normal;
    }
    .argue>.commentNull{
        text-align: center;
        font-size: .28rem;
        color: #c4c4c4;
        padding: .4rem 0;
        min-height: .6rem;
    }
    .argue>.commentNull>p{
        margin: 0 0 .4rem;
    }
    .argue>.commentNull .btn{
        display: inline-block;
        color: #f85355;
        width: 3rem;
        height: .6rem;
        line-height: .6rem;
        border: 1px solid #f85355;
        border-radius: .04rem;
    }
    /********************************************广告区域**************************************************/
    .adv{
        width:100%;
        margin-bottom: .2rem;
        font-size: 0;
    }
    .adv>a{
        width:100%;
        text-decoration: none;
        font-size:0;
        display: inline-block;
    }
    .adv img{
        width:100%;
    }
    /************************************************举报***************************************************/
    .jubao{
        text-align: center;
        padding: .2rem 0;
        margin-bottom: 1.5rem;
        font-size: 0;
    }
    .jubao>img{
        width:.46rem;
        vertical-align: middle;
        font-size: 0;
    }
    /*********************************底部功能区******************************************/
    .details-footer{
        width: 100%;
        height:.98rem;
        font-size: .28rem;
        position:fixed;
        bottom:0;
        left:0;
        background-color: #fff;
        box-shadow: 0 0 14px #999;
    }
    .details-footer>ul{
        display: flex;
        list-style: none;
        width:100%;
    }
    .details-footer li{
        text-align: center;
        font-size: .28rem;
        width: 40%;
        height: .98rem;
        line-height: .98rem;
    }
    .details-footer .shoucang{
        width:20%;
    }
    .details-footer .shoucang>img{
        height:.64rem;
        vertical-align: middle;
        font-size: 0;
    }
    .details-footer .into{
        background-color: #e5e5e8;
        color: #FE0036;
    }
    .details-footer .call{
        background-color: #FE0036;
        color: #fff;
        position: relative;
    }
    .details-footer .tishi{
        width: 3.5rem;
        right: .2rem;
        position:absolute;
        left:-.72rem;
        top:-.8rem;
    }
</style>