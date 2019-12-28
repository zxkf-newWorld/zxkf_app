<template>
    <div class="cleared">
        <div @click="clear">清空</div>
        <div>
            <van-button type="danger" @click="submitDetails(selected)">确定</van-button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'selected'
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
            console.log(selected);
            let [select, toggle, type] = [...selected];
            switch (type) {
                case 'select':
                    console.log('select,我是筛选组件');
                    console.log(select,'<<<<< 选中的状态');
                    toggle(type);
                    break;
                case 'subway':
                    console.log('subway,我是地铁筛选组件');
                    console.log(select,'<<<<< 选中的状态');
                    toggle(type);
                    break;
                case 'area':
                    console.log('area,我是区域筛选组件');
                    console.log(select,'<<<<< 选中的状态');
                    toggle(type);
                    break;
            
                default:
                    break;
            }
            this.$toast('信息查询中...',2, success => {
                console.log('查询成功');
            }),
            fail => {
                console.log('查询失败');
            }
           
        },
        // 清空所选状态
        clear () {
            // 触发清空事件
            this.$Bus.$emit('clearStatus', this.selected[this.selected.length-1]);
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
