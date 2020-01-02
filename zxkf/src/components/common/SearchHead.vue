<template>
    <div class="SearchHead">
        <div class="searchTitle">
            <!-- <form action=""> -->
                <img @click="clear" v-show="isInput" src="../../../public/search/empty.png">
                <input type="text" autocomplete="off" autofocus placeholder="请输入商圈、地铁、小区" v-model="kw"  @keydown.13="handleSearchHistory" maxlength="20">
                <span @click="closeSearch" v-show="!isInput">取消</span>
                <!-- <span @click="search" v-show="isInput">搜索</span> -->
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchHead',
    data() {
        return {
            kw:"",//输入框的内容
            isInput:false,//是否输入内容的变量
            timeout: null,//加入了防抖
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        clear(){
            this.kw="";
            this.isInput=false;
        },
        closeSearch(){
            // let data = this.$store.getters.catch_components;
            // console.log(data instanceof Array, data, '<<<<< data');
            // this.$store.commit('GET_CATCH_COMPONENT', data.push('Search'));
            this.$router.go(-1);
        },
        search(){
            //发送jaax请求
            
        },
        handleSearchHistory () {
            /*
             * 获取输入的值，发送请求，查询相关值
             * 将有效查询值添加到查询数组中
             * 
             */
            if (this.timeout !== null) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                console.log(this.kw, '<<<<< 搜索框关键字');
                this.$Bus.$emit('search-list', this.kw);
            }, 1000);
            // this.debounce(this.handle, 1000);
            // console.log(this.kw, '<<<<< 搜索框的关键字');
            // this.$Bus.$emit('search-list', this.kw); 
        },
        /* debounce (fn, await) {
            let timeout = null;
            return function () {
                if (timeout !== null) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(fn, await);
            }
        },
        handle () {
            console.log(this.kw, '<<<<< 搜索框的关键字');
            this.$Bus.$emit('search-list', this.kw);
        } */
    }
};
</script>

<style scoped >
/***************************搜索头******************************/
    .searchTitle{
        font-size: .26rem;
        color: #666;
        width: 100%;
        height: 1.08rem;
        background: #FE0036;
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
        border-radius: .5rem;
        padding-left: .7rem;
        background-image: url(../../../public/search/search.png);
        background-position: .3rem;
        background-repeat: no-repeat;
        background-size: .24rem;
        margin-top: .2rem;
    }
    .searchTitle span{
        font-size: .28rem;
        word-spacing: .1rem;
        color: #fff;
        margin-left: .4rem;
    }
</style>
