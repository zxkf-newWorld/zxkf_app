<template>
    <div>
        <div class="goodhouse">
            <!-- <h2>接受发送的参数：{{receive}}</h2> -->
            <div class="good-title">
                <span>猜你喜欢</span>
            </div>
            <ul class="good-list">
                <li class="good-item" v-for="(elem,i) of arrs" :key="i" @click="toDetails">
                    <div class="house-card">
                        <!-- 列表上半部分信息 -->
                        <div class="base-info">
                            <!-- 左侧：图片+图片覆盖信息 -->
                            <div class="main-photo">
                                <img :src="elem.imgurl"/>
                                <div class="live-photo">平台实拍 · 8</div>
                            </div>
                            <!-- 右侧：房屋详情：租住类型+地址+具体信息 -->
                            <div class="detail">
                                <p class="title">
                                    <span>{{arrs[i].title==1?'整租':'合租'}}&nbsp;</span>
                                    <span>{{arrs[i].address}}</span>
                                </p>
                                <p class="room-info">{{arrs[i].housesize}}M² | {{arrs[i].floor}}层 | {{arrs[i].houselayout}}</p>
                                <p class="lables">
                                    <span class="lable">{{arrs[i].onlyrestroom === 1 ? '独卫' : ''}}</span>
                                    <span class="lable">{{arrs[i].newpublish === 1 ? '最新发布' : ''}}</span>
                                    <span class="lable">{{arrs[i].elevatorrome === 1 ? '电梯' : ''}}</span>
                                    <span class="lable">{{arrs[i].notfirstfloor === 1 ? '非一楼' : ''}}</span>
                                </p>
                            </div>
                        </div>
                        <!-- 列表下半部分信息 -->
                        <div class="extra-info">
                            <!-- 左侧： 房东+评分+评价 -->
                            <div class="landlord-info">
                                <div class="owner">
                                    <div class="logo">
                                    </div>
                                    <div class="name">朱先生</div>
                                    <div class="tag"></div>
                                </div>
                                <div class="score_comment">
                                    <div class="score">
                                        评分：
                                        <b>4.5</b>
                                    </div>
                                    <div class="comment_number">125条评论</div>
                                </div>
                                <div class="one_comment">"干净舒适"</div>
                            </div>
                            <!-- 右侧： 价钱+优惠广告 -->
                            <div class="price-info">
                                <div class="price">
                                    <span class="number">￥{{arrs[i].price }}</span>/月
                                </div>
                                <div class="shuidianmeiwang-text">
                                    <span>{{arrs[i].annoucement}}</span>
                                    <span>&nbsp;{{arrs[i].liverandom}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
import Bus from './bus.js'
/* elsint-disable */
export default {
    data(){
        return{
            imageUrl:[],//图片路径
            arrs:[],//商品列表
            title:0,//租住类型：0:整租、1：合租
            citybelong:"西安",//所在城市：默认：西安
            receive: ''
        }
    },
    methods: {
        // 首页加载猜你喜欢商品列表展示
        onLoad(){
            // 选中的城市
            let cityBelong = this.citybelong;
            // 默认显示合租：1：整租， 0：合租
            let title = this.title;
            var obj = {title,cityBelong};
            let url = "/index/jointrent";
            this.axios.get(url,{
                params:obj
            })//已经发送过去了数据
            .then(res=>{
                console.log(res);
                if(res.data.code == 1){
                    // 动态获取数据+并将图片信息放入
                    this.arrs = res.data.dataArray;
                    console.log(this.arrs,'<<<<< this.arrs获取的数据 ');
                    for (let i = 0; i < this.arrs.length; i++) {
                        console.log("首页--猜你喜欢商品列表-"+i+"-加载成功");
                    }
                    console.log("首页--猜你喜欢商品列表--加载完成");
                }else{
                    console.log("首页--猜你喜欢商品列表--加载失败");
                }
            })
            .catch(err=>{
                console.log("出现异常"+err);
            });
        },
        toDetails(){
            this.$router.push("Details");
        }
    },
    created() {
        Bus.$on('sendor', rece => {
            this.receive = rece;
        })
        this.onLoad();
    },
}
</script>
<style scoped>
    .goodhouse{
        background-color: #fff;
    }
    .good-title{
        height: 1.18rem;
        line-height: 1.18rem;
        margin-top: -.2rem;
        margin-bottom: -.5rem;
        padding: 0.3rem;
        /* padding-top: 0; */
        padding-bottom: -0.3rem;
        font-size: .38rem;
        color: #3a3b3c;
        font-weight: 700;
        text-align: left;
    }
    .house-card {
        border-bottom: 1px solid #ececec;
    }
    .house-card,.extra-info{
        margin: 0 .3rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .house-card .base-info{
        width: 100%;
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    /* 猜你喜欢商品图片展示 */
    .house-card .base-info .main-photo{
        position: relative;
        margin: .4rem .3rem .4rem 0;
        width: 2.1rem;
        height: 1.6rem;
        border-radius: .08rem;
        overflow: hidden;
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        -ms-flex-negative: 0;
        flex-shrink: 0;
    }
    .house-card .base-info .main-photo > img{
        width: 100%;
    }
    /* 商品图片的底部在线实拍的信息展示 */
    .house-card .base-info .main-photo .live-photo{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .34rem;
        line-height: .34rem;
        font-size: .2rem;
        text-align: center;
        color: #fff;
        background-color: rgba(28,28,28,.4);
        border-bottom-left-radius: .08rem;
        border-bottom-right-radius: .08rem;
    }
    /* 商品基础信息 */
    .house-card .base-info .detail{
        width: 4.2rem;
        padding: 0;
        margin: 0;
        outline: none;
    }
    /* 商品信息标题*/
    .house-card .base-info .detail .title{
        font-size: .34rem;
        color: #1c1c1c;
        font-weight: 700;
        margin-top: .2rem;
        line-height: .54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .house-card .base-info .detail .room-info{
        color: #1c1c1c;
        font-size: .28rem;
        line-height: .48rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: right;

    }
    .house-card .base-info .detail .lables{
        height: .38rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin-top: .1rem;
        margin-left: 0.74rem;
    }
    .house-card .base-info .detail .lables .lable{
        height: 100%;
        font-size: .22rem;
        line-height: .38rem;
        margin-right: .1rem;
        color: #9b9b9b;
        background-color: #f6f6f6;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 .02rem;
        border-radius: .02rem;
    }
    .extra-info{
        display: flex;
        justify-content: space-between;
    }
    /* 房东信息 */
    .extra-info .landlord-info{
        margin-left: -10px;
    }
    .extra-info .landlord-info .owner{
        display: flex;
        align-items: center;
        -webkit-box-align: center;
        margin-left: -.2rem;
    }
    .extra-info .landlord-info .owner .logo{
        width: .48rem;
        height: .48rem;
        margin-left: 0px;
        background-image: url(../../../public/img/like/baletu.jpg);
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 50%;
        margin-right: .12rem;
        overflow: hidden;
    }
    .extra-info .landlord-info .owner .name{
        display: inline-block;
        color: #1c1c1c;
        font-size: .24rem;
        line-height: .48rem;
        margin-right: .12rem;
    }
    .extra-info .landlord-info .owner .tag{
        width: .44rem;
        height: .24rem;
        background-image: url(../../../public/img/like/host.png);
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
    }
    /* 房东信息评分栏 */
    .house-card .extra-info .landlord-info .score_comment {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: .1rem;
        margin-left: -0.2rem;
    }
    .house-card .extra-info .landlord-info .score_comment .score{
        color: #1c1c1c;
        font-size: .22rem;
        margin-right: .16rem;
    }
    .house-card .extra-info .landlord-info .score_comment .comment_number{
        color: #9b9b9b;
        font-size: .22rem;
    }
    /* 商品评论 */
    .house-card .extra-info .landlord-info .one_comment{
        margin-top: .1rem;
        margin-left: -5.8rem;
        display: inline-block;
        max-width: 2.4rem;
        color: gray;
        font-size: .22rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .house-card .extra-info .landlord-info .price-info{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
    }
    .house-card .extra-info .price-info .price{
        /* display: flex; */
        color: #FE0036;
        font-size: .24rem;
        text-align: right ;
   }
    .house-card .extra-info .price-info .price span{

    }
    .house-card .extra-info .price-info .price .number{
        font-size: .32rem;
        font-weight: 700;
    }
    .house-card .extra-info .price-info .shuidianmeiwang-text{
        color: #f58f32;
        font-size: .28rem;
        font-weight: 700;
        margin-top: .1rem;
        max-width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }




    .good-list{
        list-style: none;
    }
    .good-item{}

</style>
