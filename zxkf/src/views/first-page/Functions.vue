<template>
    <div>
        <!-- 功能栏：首页：整租，合租，品牌公寓，找室友 -->
        <ul class="myUl">
            <li>
                <a href="javascirpt:;" data-city="citys[0]" @click="toFullRent">
                    <img src="../../assets/zhengzu.png">
                    <div>整租</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;" data-city="citys[1]" @click="toJointRent">
                    <img src="../../assets/hezu.png">
                    <div>合租</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;" data-city="citys[2]" @click="Pinpai">
                    <img src="../../assets/gongyu.png">
                    <div>品牌公寓</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;" data-city="citys[3]" @click="FindRoomMates">
                    <img src="../../assets/shiyou.png">
                    <div>找室友</div>
                </a>
            </li>
        </ul>
        <div style="clear: both;"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            citys:["西安","榆林","延安","新平"],
        }
    },
    methods: {
        toFullRent(e){
            // 整租
            let url = "/index/fullrent";
            // city：动态通过城市动态获取
            // let city = e.target.dataset.citys[0]
            // 动态获取定位城市，默认为西安
            let cityBelong = "西安";
            let title = 1;
            var obj = {title,cityBelong};
            this.axios.get(url,{
                params:obj
            })
            .then((res)=>{
                console.log(res);
                if (res.data.code == 1) {
                    this.$toast("您已进入整租");
                    this.$router.push('/Zhengzu');//进入整租页面，再在整租页面（加载完成时）查询相关的整租商品列表
                }
            })

        },
        toJointRent(){
            //合租
            let url = "/index/jointrent";
            // city：动态通过城市动态获取
            // let city = e.target.dataset.citys[0]
            let cityBelong = "西安";//默认所在城市是西安
            let title = 0;
            var obj = {title,cityBelong};
            this.axios.get(url,{
                params:obj
            })
            .then((res)=>{
                console.log(res);//测试接收的数据是否请求成功
                if (res.data.code == 1) {
                    this.$toast("您已进入合租");
                    // 进入合租页面
                    // this.$router.push("/hezu");//进入整租页面，再在整租页面（加载完成时）查询相关的整租商品列表
                }else{
                    this.$toast("暂无相关信息，我们会尽快处理");
                }
            })
        },
        Pinpai(){
            // 品牌公寓 title:2
            let url = "/index/pinpai";
            // city：动态通过城市动态获取
            // let city = e.target.dataset.citys[0]
            let cityBelong = "西安";
            let title = 2;
            var obj = {title,cityBelong};
            this.axios.get(url,{
                params:obj
            })
            .then((res)=>{
                console.log(res);
                if (res.data.code == 1) {
                    this.$toast("您已进入品牌公寓");
                }else{
                    this.$toast("暂无相关信息，我们会尽快处理");
                }
            })
        },
        FindRoomMates(){
            // 找室友 title:3
            let url = "/index/findRoomMates";
            // city：动态通过城市动态获取
            // let city = e.target.dataset.citys[0]
            let cityBelong = "西安";
            let title = 3;
            var obj = {title,cityBelong};
            this.axios.get(url,{
                params:obj
            })
            .then((res)=>{
                console.log(res);
                if (res.data.code == 1) {
                    //查询成功跳转到找室友页面
                    this.$router.push("Roommate");
                    this.$toast("您已进入找室友");
                
                
                }else{
                    this.$toast("暂无相关信息，我们会尽快处理");
                }
            })
        },
    },
}
</script>
<style scoped>
    .myUl{
        display: flex;
        justify-content: space-around;
        align-items: middle;
        width: 100%;
        margin: 0;
        outline: none;
        padding: .4rem 0;
        overflow: hidden;
        background: #fff;
    }
    .myUl li{
        list-style: none;
        font-size:14px;
    }
    .myUl li img{
        width:65%;
    }
    .myUl li a,.myUl li a:active{
        color: #5a5c5d;
        text-decoration: none;
    }
</style>