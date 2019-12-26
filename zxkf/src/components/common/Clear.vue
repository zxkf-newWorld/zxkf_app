<template>
    <div class="cleared">
        <div>清空</div>
        <div>
            <van-button type="danger" @click="submitDetails(selected)">确定</van-button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'selected',
    ],
    data() {
        return {

        };
    },
    created() {
        // console.log(allSelected);

    },
    mounted() {
        
        },
    methods: {
        submitDetails (selected) {
            /* 
             * 获取选中信息
             * 发送请求，查询相关房源信息
             * 获取返回信息，将信息传递给信息显示页面
             * 跳转（信息显示页面）
             */
            // console.log(this.typeSelected);
            console.log(this.selected);
            console.log(`selected,选中的所有信息：${this.selected}`);
            this.$toast('信息查询中...',2, success => {
                console.log('查询成功');
            }),
            fail => {
                console.log('查询失败');
            }
        }
    }
};
</script>

<style scoped>
    .cleared {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        border-top: 1px solid #f0f0f0;
        padding: .2rem .4rem;
        line-height: 100%;
    }
    .cleared > div:first-child {
        color: #000;
        font-weight: 700;
        line-height: 32px;
    }
    .cleared >>> .van-button {
        height: 32px;
        line-height: 32px;
    }
</style>
