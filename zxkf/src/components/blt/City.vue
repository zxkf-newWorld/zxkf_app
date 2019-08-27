<template>
    <div>
        <mt-popup class="cities" v-model="cityShow" position="right">
                <div class="city-option">
                    <div class="select-city-title">
                        <img @click="cities" src="../../../public/zhengzu/left-arrow.png" alt="返回">选择城市
                    </div>
                </div>
                <div class="cityList">
                    <h2>当前城市</h2>
                    <ul>
                        <li>{{citychosed}}</li>
                    </ul>
                </div>
                <div class="cityList">
                    <h2>热门城市</h2>
                    <ul>
                        <li @click="chooseCity(i)" v-for="(city,i) of hotCityList" :key="i">{{city}}</li>
                    </ul>
                </div>
            </mt-popup>      
    </div>
</template>
<script>
export default {
    data(){
        return{
            hotCityList:["上海","北京","深圳","杭州","南京","苏州","广州","成都","大连","天津","武汉","西安","郑州"],
            citychosed:"西安",
        }
    },
    props:['cityShow','cityChecked'],//接收父组件传过来的变量cityShow
    methods: {
        cities(){
            this.$emit("update:cityShow",false);//通过$emit修改父组件中cityShow的值为false,关闭当前组件
        },
        chooseCity(i){//选择城市
            this.citychosed=this.hotCityList[i];
            this.$emit('update:cityChecked',this.citychosed);
            this.$emit("update:cityShow",false);
        }
    },
}
</script>
<style scoped>
    .cities{
        height:100%;
        width: 100%;
    }
    .city-option{
        width:100%;
    }
    .select-city-title{
        height: .88rem;
        line-height: .88rem;
        background-color: #ee3943;
        text-align: center;
        font-size: .32rem;
        padding: 0 .8rem;
        position: relative;
        color: #fff;
    }
    .select-city-title>img{
        position: absolute;
        padding: .3rem;
        height: .35rem;
        left: 0;
        top: 0;
    }
    .cityList{
        width:100%;
        padding: .6rem 0 0 .3rem;
    }
    .cityList>h2{
        color: #5a5c5d;
        font-size: .28rem;
        font-weight: normal;
    }
    .cityList ul{
        overflow: hidden;
    }
    .cityList ul li{
        float: left;
        width: 1.58rem;
        height: .66rem;
        line-height: .66rem;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: .04rem;
        margin: .2rem .2rem 0 0;
        font-size: .3rem;
        color:#3a3b3c;
    }
</style>