<template>
    <div class="SearchTab">
        <van-tabs v-model="activeName">
            <van-tab title="全部" name="a">
                
            </van-tab>
            <van-tab title="整租" name="b">
                
            </van-tab>
            <van-tab title="单间" name="c">
                
            </van-tab>
            <van-tab title="公寓" name="d">
                
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: 'SearchTab',
    data() {
        return {
            activeName: 'a'
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

<style scoped>
    /* tab文字样式 */
    .SearchTab >>> .van-tab__text {
        font-weight: bold !important;
    }
    /* tab下滑线样式 */
    .SearchTab >>> .van-tabs__line {
        width: 25% !important;
    }
    .SearchTab >>> .van-tab--active  {
        color: red;
    }
</style>
