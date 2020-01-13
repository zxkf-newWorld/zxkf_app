<template>
    <div class="search-header">
        <div class="home-icon" @click="toHome">
            <img src="../../../public/zhengzu/home.png">
        </div>
        <div @click="cities" class="city-select">
            <span>西安</span>
            <img src="../../../public/zhengzu/sanjiao.png">
        </div>
        <!-- 隐藏显示的城市选择列表 -->
        <city :cityShow.sync="cityShow" v-model="cityShow"></city>
        <div class="search-box">
            <input class="input_msg" type="text" placeholder="输入区域、小区搜索源" v-model="msg" @keydown="updown($event)">
            <img src="../../../public/zhengzu/fangdajin.png">
        </div>
        <div class="my" @click="toMyself">
            <img src="../../../public/zhengzu/my.png">
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import City from './City.vue'
export default {
    data() {
        return {
             cityShow:false,//控制城市选择列表的变量
             msg:""
        }
    },
    methods: {
        updown(e){
            if(e.keyCode==13){
                console.log(this.msg)
                // this.$router.push("/Roommate")
                location.reload()
                 this.msg="";
            }

        },
        cities(){
            if(!this.cityShow){
                this.cityShow=true;
            }else{
                this.cityShow=false;
            }
        },
        toHome(){
            // 跳到首页
            this.$router.push("Index");
        },
        toMyself(){
            // 跳到我的页面
            this.$router.push("Myself");
        },
    },
    components:{
        "city":City
    },
}
</script>
<style>
    .search-header{/*表头样式*/
        width: 100%;
        background: #FE0036;
        position:relative;
        height:0.88rem;
        color:#fff;
        font-size: .24rem;
    }
    .search-header>.home-icon{/*首页图标容器样式*/
        float:left;
        width:1rem;
        height:0.8rem;
        padding:0.2rem 0.3rem;
        box-sizing: border-box;
    }
    .input_msg{
        /* padding: 5px; */
        border: 0;
    }
    .search-header>.home-icon img{/*首页图标样式*/
        width:100%;
        height:100%;
        display: block;
    }
    .city-select{/*城市选择框样式*/
        float:left;
        padding:.3rem 0;
        font-size: 0;
        display: flex;
        align-items: center;
    }
    .city-select>span{/*城市选择框文字*/
        font-size:0.28rem;
        color:#fff;
        display:block;
        float: left;
        margin-right: 0.2rem;

    }
    .city-select>img{/*城市选择框三角图标*/
        width:.21rem;
        float:right;
    }
    .search-box{/*搜索框样式*/
        float: left;
        width:4.31rem;
        height:.6rem;
        background-color: #fff;
        border-radius: 5px;
        margin-top: .13rem;
        margin-left: .25rem;
        font-size: .24rem;
        line-height: .6rem;
        color:#cbcbcb;
    }
    .search-box>img{/*搜索框搜索图标样式*/
        width:0.3rem;
        height:0.3rem;
        /* padding: 0 .2rem 0 .3rem; */
        vertical-align: middle;
    }
    .search-header>.my{/*个人图标盒子样式*/
        float:right;
        width: 0.33rem;
        height:0.4rem;
        padding:.22rem .3rem .15rem;
    }
    .search-header>.my>img{/*个人图标图片样式*/
        width:100%;
        height:100%;
        display:block;
    }
</style>
