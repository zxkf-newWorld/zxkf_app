<template>
    <div class="search-history">
        <div class="searchHistory">
            <!-- 标题 -->
            <div class="searchHis dis-flex" v-if="show">
                <div class="searchHis-title">历史搜索</div>
                <div class="ml-4">
                    <!-- 删除标志 -->
                    <span class="iconfont icon-shanchu" @click="closeHistory"></span>
                </div>
            </div>
            <!-- 搜索历史 -->
            <ul class="searchList" v-if="show">
                <li class=" dis-flex " v-for=" (ele,i) in searchList" :key="i" @click="goDetails">
                    <div>
                        <span class="iconfont icon-clock"></span>
                    </div>
                    <div class="searchRes">
                        <p>{{ele}}</p>
                        <p>品牌公寓-全部户型</p>
                    </div>
                </li>
            </ul>
        </div>  
        <!-- 热搜 -->
        <div class="hotSearch">
            <div class="hot-title">热门搜索</div>
            <div class="hot-content">
                <div @click="searchFor($event)" v-for="i in 12" :key="i"> 雁塔{{i}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchHistry',
    data() {
        return {
            show: false,
            searchList: [],
        };
    },
    created() {

    },
    mounted() {
        this.$Bus.$on('search-list', ref => {
            console.log(ref, '<<<<< searchHead send');
            /* 可以加入判断条件，判断是否符合搜索条件 */
            if (this.searchList.length < 7) {
                this.searchList.push(ref);
            } else {
                this.searchList.pop();
                this.searchList.unshift(ref);
            }
        });
    },
    destroyed () {
        this.$Bus.$off('search-list');
    },
    watch: {
        searchList () {
            this.searchList.length === 0 ? this.show = false : this.show = true;
            // this.$emit('search-list', this.searchList);
        }
    },
    methods: {
        goDetails () {
            this.$router.push('/SearchDetail');
        },
        searchFor (event) {
            // 跳转详情页面
            if (this.searchList.length < 7) {
                this.searchList.push(event.target.innerText);
            } else {
                this.searchList.pop();
                this.searchList.unshift(event.target.innerText);
            }
            console.log(this.searchList, '<<<<< this.searchList');
            // this.$router.push('/SearchDetail');
            
        },
        /* 关闭历史搜索记录 */
        closeHistory () {
            this.$dialog.confirm({
                title: '删除搜索历史',
                message: '确认删除搜索历史'
            }).then( () => {
                this.show = false;
                this.searchList = [];
                console.log('删除搜索历史记录');
            }).catch( () => {
                console.log('未删除搜索历史记录');
            });
        }
    }
};
</script>

<style scoped >
    .search-history {
        margin-top: .3rem;
        font-size: .28rem;
        
    }
    .dis-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .searchHis-title {
        margin-left: 0.4rem;
        font-weight: 700;
        font-size: 0.3rem;
    }
    .ml-4 {
        margin-right: .4rem;
    }
    ul.searchList {
        padding-left: .4rem;
        padding-right: .4rem;
    }
    ul.searchList > li {
        margin-top: .5rem;
        padding-bottom: .3rem;
        text-align: left;
        border-bottom: 1px solid #f8f8f8;
    }
    ul.searchList > li:last-child {
        border: none;
    }
    ul.searchList > li > .searchRes {
        position: relative;
    }
    ul.searchList > li > .searchRes > p {
        margin: 0;
        position: absolute;
        left: -7rem;
    }
    ul.searchList > li > .searchRes > p:nth-child(1) {
        /* position: absolute;
        left: -6.5rem; */
        font-weight: 500;
        top: -.4rem;
    }
    ul.searchList > li > .searchRes > p:nth-child(2) {
        font-size: .2rem;
        color: #ccc;
    }

    /* 热门搜索 */
    .hot-title {
        font-weight: 700;
        font-size: 0.3rem;
        text-align: left;
        padding-left: .4rem;
    }
    div.hot-content {
        display: flex;
        align-content: flex-start;
        /* justify-content: space-around; */
        flex-flow: row wrap;
        padding-left: .4rem;
        padding-right: .4rem;
        padding-top: .2rem;
        /* justify-content: space-around; */
        /* flex-wrap: wrap; */
        /* align-items: center; */
    }
    .hot-content > div{
        box-sizing: border-box;
        margin-top: .2rem;
        flex: 0 0 22%;
        margin: .2rem .1rem 0  .1rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: .1rem;
        background-color: #f8f8f8;
        font-size: .1rem;
    }

    
    
</style>
