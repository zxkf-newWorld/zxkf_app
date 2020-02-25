<template>
    <div class="house-search-details">
        <div class="house-list" @click="toDetails" v-for="(ele,index) in 10" :key="index">
            <div class="house-card">
                <div class="base-info">
                    <div class="main-photo">
                        <img src="../../../public/zhengzu/01.jpg">
                        <div class="photo-info">房东提供 · 6</div>
                    </div>
                    <div class="details">
                        <p class="title">
                            <span>整租</span>
                            <span> 玫瑰坊</span>
                        </p>
                        <p class="room-info">18M² | 朝北</p>
                        <p class="labels">
                            <span class="red">租金月付</span>
                            <span>近地铁</span>
                            <span>新上架</span>
                            <span>电梯房</span>
                        </p>
                        <p class="trafic">
                            <img src="../../../public/zhengzu/position.png">
                            <span>1号线(康复路站),步行14分钟</span>
                        </p>
                    </div>
                </div>
                <div class="extra-info">
                    <div class="agency-info">
                        <div class="header">
                            <span>美丽屋公寓（分散式）</span>
                            <img src="../../../public/zhengzu/pinpai.png">
                        </div>
                        <div class="btn">进店</div>
                    </div>
                    <div class="price-info">
                        <div class="price">
                            <span>￥1350</span>/月
                        </div>
                        <div class="use-time">
                            <span>&nbsp;随时入住</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <ToBottom></ToBottom>
    </div>
</template>

<script>
import ToBottom from '../../views/common/ToBottom'
export default {
    name: 'houseSearchDetails',
    data() {
        return {

        };
    },
    components: {
      ToBottom,
    },
    created() {

    },
    mounted() {

    },
    methods: {
        toDetails(){//跳转到详情页
            this.$router.push('/Details');
        },
    }
};
</script>

<style scoped >
    .house-search-details {
      overflow: hidden;
      margin-bottom: 2rem;
    }
    .house-search-details::-webkit-scrollbar{
      display: none;
    }
    /***********************房源信息*************************/
    .house-list{
        width:100%;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom:15px;
    }
    .house-card{
        box-sizing: border-box;
        margin:0 .3rem;
    }
    .base-info{
        width:100%;
        display: flex;
        justify-content:flex-start;
    }
    .main-photo{
        width:2.1rem;
        height:1.6rem;
        border-radius:.08rem;
        overflow: hidden;
        margin:.4rem .3rem .4rem 0;
        position: relative;
    }
    .main-photo>img{
        width:100%;
        height:100%;
    }
    .photo-info{
        width: 100%;
        height:.34rem;
        position: absolute;
        background-color: rgba(28,28,28,.4);
        bottom:0px;
        color:#fff;
        font-size: .2rem;
        text-align: center;
        line-height: .34rem;
    }
    .details{
        width:4.2rem;
    }
    .details .title{
        font-size: .34rem;
        color:#1c1c1c;
        font-weight: 700;
        line-height: .54rem;
        margin-top: .2rem;
        overflow: hidden;
    }
    .details .room-info{
        font-size: .28rem;
        color:#1c1c1c;
        line-height: .48rem;
        overflow: hidden;
    }
    .details .labels{
        height:.38rem;
        display: flex;
        justify-content: flex-start;
        margin-top: .1rem;
    }
    .details .labels>span{
        height:100%;
        font-size: .22rem;
        color:#9b9b9b;
        line-height: .38rem;
        margin-right: .1rem;
    }
    .details .labels>span.red{
        color:#f3787a;
    }
    .trafic{
        width:100%;
        height:.64rem;
        position: relative;
    }
    .trafic>img{
        position: absolute;
        left: 0;
        top: .2rem;
        display: inline-block;
        width: .2rem;
        height: .24rem;
    }
    .trafic>span{
        box-sizing: border-box;
        padding-left: .32rem;
        width: 100%;
        color: #9b9b9b;
        font-size: .22rem;
        line-height: .64rem;
        overflow: hidden;
        position: absolute;
        left:.05rem;
    }
    .extra-info{
        display: flex;
        justify-content: space-between;
    }
    .agency-info{
        width:2.1rem;
        height:0.92rem;
    }
    .agency-info>.header{
        display: flex;
        align-items: center;
        margin-bottom: .2rem;
    }
    .agency-info>.header>span{
        font-size: .24rem;
        color: #1c1c1c;
        margin-right: .12rem;
        max-width: 1.54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .agency-info>.header>img{
        width:.44rem;
        height:.22rem;
    }
    .agency-info>.btn{
        width:1rem;
        height:.4rem;
        font-size: .24rem;
        color:#646464;
        border:1px solid #d9d9d9;
        border-radius: .2rem;
        text-align: center;
        line-height: .4rem;
        margin:0 auto;
    }
    .price-info{
        display:flex;
        flex-direction: column;
        text-align: right;
    }
    .price-info>.price{
        align-items: center;
        color: #FE0036;
        font-size: .24rem;
    }
    .price-info>.price>span{
        font-size: .32rem;
        font-weight: 700;
    }
    .use-time{
        font-size:.28rem;
        margin-top:.1rem;
    }
    .use-time span{
        color: #f58f32;
        font-weight:700;
    }

</style>
