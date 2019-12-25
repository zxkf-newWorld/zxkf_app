<template>
    <div class="dropDown">
        <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item title="地铁" v-model="value1" :options="option1"/>
            <van-dropdown-item title="区域">
                <van-tree-select
                    :items = 'items'
                    :active-id.sync = 'activeId'
                    :main-active-index.sync = 'activeIndex'    
                >

                </van-tree-select>
            </van-dropdown-item>
            <van-dropdown-item title="租金" v-model="value3" :options="option3"/>
            <van-dropdown-item title="筛选" >
                <template>
                    <div class="type">
                        <div class="title">类型</div>
                        <div class="content">
                            <div :class="titleColors" :selected="selected" @click="changeType(index,i)" v-for="(index,i) in typeContents" :key="index">{{index}}</div>
                        </div>
                    </div>
                    <div class="house-type">
                        <div class="title">户型</div>
                        <div class="content">
                            <div>1室</div>
                            <div>2室</div>
                            <div>3室</div>
                            <div>4室</div>
                        </div>
                    </div>
                    <div class="service">
                        <div class="title">服务保障</div>
                        <div class="content">
                            <div>免费带看</div>
                            <div>费用透明</div>
                            <div>全网低价</div>
                            <div>平台认证</div>
                            <div>品牌优选</div>
                            <div>精品房型</div>
                        </div>
                    </div>
                    <div class="activity">
                        <div class="title">活动</div>
                        <div class="content">
                            <div>限时优惠</div>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="title">特色</div>
                        <div class="content">
                            <div>有视频</div>
                            <div>租金月付</div>
                            <div>近地铁</div>
                            <div>独卫</div>
                            <div>带阳台</div>
                            <div>保洁服务</div>
                            <div>维修服务</div>
                            <div>可养宠物</div>
                            <div>新上架</div>
                            <div>电梯房</div>
                            <div>独立厨房</div>
                            <div>智能电表</div>
                            <div>精装修</div>
                            <div>复式</div>
                            <div>别墅改造</div>
                            <div>非一楼</div>
                            <div>主卧</div>
                            <div>朝南</div>
                            <div>转租</div>
                            <div>家电齐全</div>
                        </div>
                    </div>
                </template>
                <template>
                    <div class="clear">
                        <div>清空</div>
                        <div>
                            <van-button type="danger">确定</van-button>
                        </div>
                    </div>
                </template>
            </van-dropdown-item>
            <van-dropdown-item title="排序" v-model="value4" :options="option4"/>
            <!-- <van-dropdown-item v-model="value5" :options="option5"/> -->
        </van-dropdown-menu>
    </div>
</template>

<script>
export default {
    name: 'dropDown',
    data() {
        return {
            typeSelected: [],/* 类型（单选） */
            houseTypeSelected: [],/* 户型（单选） */
            activitySelected: [],/* 户型（单选） */
            serviceSelected: [],/* 户型（多选） */
            featruesSelected: [],/* 户型（多选选） */
            selected: false,
            typeContents: [
                '全部','单间','整套','公寓'
            ],

            items: [
                { text: '附近' , 
                  children: [
                      { text: '附近（智能范围）' , id: 1, disable: false},
                      { text: '500m' , id: 2, disable: false},
                      { text: '1000m' , id: 3, disable: false},
                      { text: '2000m' , id: 4, disable: false},
                      { text: '5000m' , id: 5, disable: false},
                      { text: '不限' , id: 6, disable: false},
                  ]
                },
                { text: '灞桥' , 
                  children: [
                      { text: '全灞桥' , id: 1, disable: false},
                      { text: '世博公园' , id: 2, disable: false},
                      { text: '十里铺' , id: 3, disable: false},
                      { text: '希王' , id: 4, disable: false},
                      { text: '桃花潭' , id: 5, disable: false},
                      { text: '洪庆街道' , id: 6, disable: false},
                      { text: '浐河西路' , id: 7, disable: false},
                      { text: '港务大道' , id: 8, disable: false},
                      { text: '纺织城' , id: 9, disable: false},
                  ]
                },
                { text: '灞桥' , 
                  children: [
                      { text: '全灞桥' , id: 1, disable: false},
                      { text: '世博公园' , id: 2, disable: false},
                      { text: '十里铺' , id: 3, disable: false},
                      { text: '希王' , id: 4, disable: false},
                      { text: '桃花潭' , id: 5, disable: false},
                      { text: '洪庆街道' , id: 6, disable: false},
                      { text: '浐河西路' , id: 7, disable: false},
                      { text: '港务大道' , id: 8, disable: false},
                      { text: '纺织城' , id: 9, disable: false},
                  ]
                },
                { text: '灞桥' , 
                  children: [
                      { text: '全灞桥' , id: 1, disable: false},
                      { text: '世博公园' , id: 2, disable: false},
                      { text: '十里铺' , id: 3, disable: false},
                      { text: '希王' , id: 4, disable: false},
                      { text: '桃花潭' , id: 5, disable: false},
                      { text: '洪庆街道' , id: 6, disable: false},
                      { text: '浐河西路' , id: 7, disable: false},
                      { text: '港务大道' , id: 8, disable: false},
                      { text: '纺织城' , id: 9, disable: false},
                  ]
                },
                { text: '灞桥' , 
                  children: [
                      { text: '全灞桥' , id: 1, disable: false},
                      { text: '世博公园' , id: 2, disable: false},
                      { text: '十里铺' , id: 3, disable: false},
                      { text: '希王' , id: 4, disable: false},
                      { text: '桃花潭' , id: 5, disable: false},
                      { text: '洪庆街道' , id: 6, disable: false},
                      { text: '浐河西路' , id: 7, disable: false},
                      { text: '港务大道' , id: 8, disable: false},
                      { text: '纺织城' , id: 9, disable: false},
                  ]
                },
                
            ],
            activeId: 1,
            activeIndex: 0,

            titleColors: {
                titleColor: false,
            },
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            option1: [
                { text: '地铁1号线', value:1},
                { text: '地铁2号线', value:2},
                { text: '地铁3号线', value:3},
            ],
            option3: [
                { text: '不限', value:0},
                { text: '1500元以下', value:1},
                { text: '1500-2000元', value:2},
                { text: '2000-3000元', value:3},
                { text: '3000-4000元', value:4},
                { text: '4000-5000元', value:5},
                { text: '5000元以上', value:6},
            ],
            // option4: [
            //     { text: '地铁', value:0},
            //     { text: '地铁1号线', value:1},
            //     { text: '地铁2号线', value:2},
            //     { text: '地铁3号线', value:3},
            // ],
            option4: [
                { text: '综合排序', value:0},
                { text: '价格从高到低', value:1},
                { text: '价格从低到高', value:2},
                { text: '距离当前位置最近', value:3},
                { text: '距离公司最近', value:4},
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    watch: {
        selected () {

        }
    },
    methods: {
        /* 更改类型选中样式 */
        changeType (index,i) {
            this.selected = !this.selected;
            console.log(index,i, '<<<<< index,i');
            if (i === 0) {
                this.typeSelected = !this.selected;
            }
            this.titleColors.titleColor = this.typeSelected;
            // let divs = document.querySelectorAll('div.type > .content > div');
            // console.log(divs[i]);
            // console.log(divs[i].attributes);
            // if (this.selected) {
            //     this.titleColors.titleColor = this.;
            // }
        },
    }
}
</script>

<style scoped >
    .dropDown {
        position: relative;
    }
    .dropDown >>> .van-dropdown-item__content {
        position: relative;
    }
    .dropDown >>> .van-dropdown-menu__title {
        /* color: #f00!important; */
    }
    .dropDown >>> .van-sidebar-item {
        border: none !important;
    }
    .dropDown >>> .van-sidebar-item--select {
        color: #f00 !important;
        background: #fff;
    }
    .title {
        margin-top: .2rem;
        text-align: left;
        margin-left: .4rem;
    }
    .content {
        margin: .1rem .4rem;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
    }
    .content  div {
        text-align: center;
        flex: 0 0 20%;
        padding: .1rem 0;
        margin: .1rem .15rem;
        border: 1px solid #f0f0f0;
        border-radius: .1rem;
    }
    .clear {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        border-top: 1px solid #f0f0f0;
        padding: .2rem .4rem;
        line-height: 100%;
    }
    .clear > div:first-child {
        color: #000;
        font-weight: 700;
        line-height: 32px;
    }
    .clear >>> .van-button {
        height: 32px;
        line-height: 32px;
    }
    .titleColor {
        border-color: #f00!important;
        color: #f00;
    }

</style>
