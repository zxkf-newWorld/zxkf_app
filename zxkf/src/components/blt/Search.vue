<template>
    <div>
        <div class="searchTitle">
            <form action="">
                <img @click="clear" v-show="isInput" src="../../../public/search/empty.png">
                <input type="text" autocomplete="off" placeholder="请输入商圈、地铁、小区" v-model="kw" >
                <span @click="closeSearch" v-show="!isInput">取消</span>
                <span @click="search" v-show="isInput">搜索</span>
            </form>
        </div>
        <div class="empty" v-show="!isInput">
            <div class="hotSearch">
                <div class="hotSearchTitle">
                    热门搜索
                </div>
                <div class="hotSearchList">
                    <ul>
                        <li @click="searchItem" v-for="(item,i) of hotSearchList" :key="i">{{item}}</li>
                    </ul>    
                </div>     
            </div>
        </div>
        <div class="notEmpty" v-show="isInput">
            <ul>
                <li v-for="(item,i) of result" :key="i">
                    <div class="smartTitle">
                        <div><span class="keyword">{{item.kw}}</span></div>
                        <div><span>{{item.details}}</span></div>
                    </div>
                    <div>{{item.houseCount}}套</div>
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            kw:"",//输入框的内容
            isInput:false,//是否输入内容的变量
            result:[
                {kw:"小寨",details:"雁塔-商圈",houseCount:4},
                {kw:"小寨",details:"2号线-地铁站",houseCount:12},
                {kw:"小寨",details:"小寨 东路11号",houseCount:23},
            ],//保存搜索到的结果
            hotSearchList:["雁塔","长安","小寨"],
        }
    },
    methods: {
        clear(){
            this.kw="";
            this.isInput=false;
        },
        closeSearch(){
            this.$router.go(-1);
        },
        search(){
            //发送jaax请求
            
        } ,
        searchItem(){
            this.$emit('update:');
            this.$router.push('/Zhengzu');
        }
    },
    updated() {
        if(this.kw){
            this.isInput=true;
        }else{
            this.isInput=false;
        }
    },
    props:[]
}
</script>
<style scoped>
    /***************************搜索头******************************/
    .searchTitle{
        font-size: .26rem;
        color: #666;
        width: 100%;
        height: 1.08rem;
        background: #ee3943;
        text-align: center;
    }
    .searchTitle img{
        position: absolute;
        top: .415rem;
        right: 1.6rem;
        float: right;
        height: .2666rem;
        width: .26rem;
    }
    .searchTitle input{
        width: 5.4rem;
        height: .68rem;
        border: none;
        border-radius: .05rem;
        padding-left: .7rem;
        background-image: url(../../../public/search/search.png);
        background-position: .3rem;
        background-repeat: no-repeat;
        background-size: .24rem;
        margin-top: .2rem;
    }
    .searchTitle span{
        font-size: .28rem;
        color: #fff;
        margin-left: .1rem;
    }
    /***************************热门搜索区域******************************/
    .hotSearch{
        padding: .5rem 0 .4rem .4rem;
        font-size: .28rem;
    }
    .hotSearchTitle {
        font-size: .3rem;
        color: #5a5c5d;
        margin-bottom: .3rem;
        font-weight: 700;
    }
    .hotSearchList li{
        width: auto;
        height: .66rem;
        background: #f8f8f8;
        border-radius: .05rem;
        line-height: .66rem;
        text-align: center;
        margin-right: .2rem;
        margin-bottom: .2rem;
        display: inline-block;
        padding: 0 .2rem;
    }
    /****************************查询出来的列表区域********************************/
    .notEmpty li {
        width: 86%;
        margin:0 auto;
        height: 1.3rem;
        line-height: 1.3rem;
        font-size: .3rem;
        color: #5a5c5d;
        padding: 0 .3rem;
        border-bottom: 1px solid #ededed;
        display: flex;
    }
    .smartTitle {
        flex: 6;
        margin-top: .3rem;
    }
    .smartTitle>div {
        line-height: .3rem;
    }
    .keyword {
        color: #ee3943;
    }
    .smartTitle>div:nth-child(2) {
        margin-top: .16rem;
        color: #a0a0a0;
        font-size: .26rem;
    }
    
</style>