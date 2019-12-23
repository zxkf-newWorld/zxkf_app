<template>
    <div class="search-history">
        <div class="searchHistory">
            <!-- 标题 -->
            <div class="searchHis">
                <div>历史搜索</div>
                <div>
                    <!-- 删除标志 -->
                    <span class="iconfont icon-shanchu"></span>
                </div>
            </div>
            <!-- 搜索历史 -->
            <ul class="searchList">
                <li>
                    <div>搜索图标</div>
                    <div>
                        <p>搜索关键字</p>
                        <p>品牌公寓-全部户型</p>
                    </div>
                </li>
            </ul>
        </div>  
        <!-- 热搜 -->
        <div class="hotSearch"></div>
    </div>
</template>

<script>
export default {
    name: 'searchHistory',
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
    .search-history {
        font-size: .28rem;
    }
</style>
