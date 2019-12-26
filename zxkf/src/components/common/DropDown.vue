<template>
    <div class="dropDown">
        <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item title="地铁">
                <van-tree-select
                    :items = 'subwayItems'
                    :active-id.sync = 'activeId'
                    :main-active-index.sync = 'activeIndex'
                >
                </van-tree-select>
                <clear></clear>
            </van-dropdown-item>
            <van-dropdown-item title="区域">
                <van-tree-select
                    :items = 'items'
                    :active-id.sync = 'activeId'
                    :main-active-index.sync = 'activeIndex'    
                >
                </van-tree-select>
                <clear></clear>
            </van-dropdown-item>
            <van-dropdown-item title="租金" v-model="value3" :options="option3"/>
            <van-dropdown-item title="筛选" >
                <template>
                    <div class="choice">
                        <div class="type">
                            <div class="title">类型</div>
                            <div class="content">
                                <div :class="{'color-red': typeSelected.includes(i)}"  @click="singleSelect($event,typeSelected, typeContents ,ele,i)" v-for="(ele,i) in typeContents" :key="i">{{ele}}</div> 
                            </div>
                        </div>
                        <div class="house-type">
                            <div class="title">户型</div>
                            <div class="content">
                                <div :class="{'color-red': houseTypeSelected.includes(i)}" @click="singleSelect($event,houseTypeSelected, houseTypeContents ,ele,i)" v-for="(ele,i) in houseTypeContents" :key="i">{{ele}}</div>
                            </div>
                        </div>
                        <div class="service">
                            <div class="title">服务保障</div>
                            <div class="content">
                                <div :class="{'color-red': serviceSelected.includes(i)}" v-for="(ele,i) in serviceContents" :key="i" @click="multipleSelect($event,serviceSelected,serviceContents,ele,i)">{{ele}}</div>
                            </div>
                        </div>
                        <div class="activity">
                            <div class="title">活动</div>
                            <div class="content">
                                <div :class="{'color-red': activitySelected.includes(i)}" v-for="(ele,i) in activityContents" :key="i" @click="singleSelect($event,activitySelected,activityContents,ele,i)">{{ele}}</div>
                            </div>
                        </div>
                        <div class="feature">
                            <div class="title">特色</div>
                            <div class="content">
                                <div :class="{'color-red': featuresSelected.includes(i)}" v-for="(ele,i) in featuresContents" :key="i" @click="multipleSelect($event,featuresSelected,featuresContents,ele,i)">{{ele}}</div>
                            </div>
                        </div>
                        <div class="clear">
                            <clear :selected="allSelected"></clear>
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
import mixin from './mixin.js'
import Clear from './Clear.vue'
export default {
    name: 'dropDown',
    mixins: [ mixin ],
    data() {
        return {
            typeSelected: [],/* 类型（单选） */
            houseTypeSelected: [],/* 户型（单选） */
            activitySelected: [],/* 特惠活动（单选） */
            serviceSelected: [],/* 服务保障（多选） */
            featuresSelected: [],/* 特色（多选） */
            selected: false,
            typeContents: [
                '全部','单间','整套','公寓'
            ],
            houseTypeContents: [
                '1室','2室','3室','3室+'
            ],
            serviceContents: [
                '免费带看','费用透明','全网低价','平台认证','品牌优选','精品房型'
            ],
            activityContents: [ '限时优惠' ],
            featuresContents: [
                '有视频','租金月付','有视频','近地铁','带阳台','保洁服务','维修服务',
                '可养宠物','新上架','电梯房','独立厨房','智能电表','精装修','复式',
                '别墅改造','非一楼','主卧','朝南','转租','家电齐全'
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
            subwayItems: [
                { text: '1号线' , 
                  children: [
                      { text: '不限' , id: 1, disable: false},
                      { text: '后卫寨' , id: 2, disable: false},
                      { text: '三桥' , id: 3, disable: false},
                      { text: '皂河' , id: 4, disable: false},
                      { text: '枣园' , id: 5, disable: false},
                      { text: '汉城路' , id: 6, disable: false},
                      { text: '汉城路' , id: 7, disable: false},
                      { text: '开远门' , id: 8, disable: false},
                      { text: '劳动路' , id: 9, disable: false},
                      { text: '玉祥门' , id: 10, disable: false},
                      { text: '洒金桥' , id: 11, disable: false},
                      { text: '北大街' , id: 12, disable: false},
                      { text: '五路口' , id: 13, disable: false},
                      { text: '朝阳门' , id: 14, disable: false},
                      { text: '康复路' , id: 15, disable: false},
                      { text: '通化门' , id: 16, disable: false},
                      { text: '万寿路' , id: 17, disable: false},
                      { text: '长乐坡' , id: 18, disable: false},
                      { text: '浐河' , id: 19, disable: false},
                      { text: '半坡' , id: 20, disable: false},
                      { text: '纺织城' , id: 21, disable: false},
                  ]
                },
                { text: '2号线' , 
                  children: [
                      { text: '不限' , id: 1, disable: false},
                      { text: '韦曲南' , id: 2, disable: false},
                      { text: '航天城' , id: 3, disable: false},
                      { text: '凤栖原' , id: 4, disable: false},
                      { text: '三爻' , id: 5, disable: false},
                      { text: '会展中心' , id: 6, disable: false},
                      { text: '纬一街' , id: 7, disable: false},
                      { text: '小寨' , id: 8, disable: false},
                      { text: '体育场' , id: 9, disable: false},
                      { text: '南稍门' , id: 10, disable: false},
                      { text: '永宁门' , id: 11, disable: false},
                      { text: '钟楼' , id: 12, disable: false},
                      { text: '北大街' , id: 13, disable: false},
                      { text: '安远门' , id: 14, disable: false},
                      { text: '龙首原' , id: 15, disable: false},
                      { text: '大明宫西' , id: 16, disable: false},
                      { text: '市图书馆' , id: 17, disable: false},
                      { text: '凤城五路' , id: 18, disable: false},
                      { text: '行政中心' , id: 19, disable: false},
                      { text: '运动公园' , id: 20, disable: false},
                      { text: '北苑' , id: 21, disable: false},
                  ]
                },
                { text: '3号线' , 
                  children: [
                      { text: '不限' , id: 1, disable: false},
                      { text: '保税区' , id: 2, disable: false},
                      { text: '新筑' , id: 3, disable: false},
                      { text: '双寨' , id: 4, disable: false},
                      { text: '国际港务区' , id: 5, disable: false},
                      { text: '香湖湾' , id: 6, disable: false},
                      { text: '浐灞中心' , id: 7, disable: false},
                      { text: '桃花源' , id: 8, disable: false},
                      { text: '广泰门' , id: 9, disable: false},
                      { text: '辛家庙' , id: 10, disable: false},
                      { text: '石家桥' , id: 11, disable: false},
                      { text: '胡家庙' , id: 12, disable: false},
                      { text: '通化门' , id: 13, disable: false},
                      { text: '长乐公园' , id: 14, disable: false},
                      { text: '咸宁路' , id: 15, disable: false},
                      { text: '延兴门' , id: 16, disable: false},
                      { text: '青龙寺' , id: 17, disable: false},
                      { text: '北池头' , id: 18, disable: false},
                      { text: '大雁塔' , id: 19, disable: false},
                      { text: '小寨' , id: 20, disable: false},
                      { text: '吉祥村' , id: 21, disable: false},
                      { text: '科技路' , id: 22, disable: false},
                      { text: '延平门' , id: 23, disable: false},
                      { text: '丈八北路' , id: 24, disable: false},
                      { text: '鱼化寨' , id: 25, disable: false},
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
            option4: [
                { text: '综合排序', value:0},
                { text: '价格从高到低', value:1},
                { text: '价格从低到高', value:2},
                { text: '距离当前位置最近', value:3},
                { text: '距离公司最近', value:4},
            ],
            /* 筛选内容选中，标题颜色 */
            selectColor: {
                'color-red': true,
            }
        };
    },
    components: {
        Clear,
    },
    created() {

    },
    mounted() {

    },
    computed: {
        allSelected () {
            let result = [];
            result.concat(this.typeContents[this.typeSelected[0]]);
            return result;
            // let result = [];
            // return  result.concat(this.typeContents[this.typeSelected[0]])
            //     .concat(this.houseTypeContents[this.houseTypeSelected[0]])
            //     .concat(this.activityContents[this.activitySelected[0]])
            //     .concat(this.serviceContents.filter((ele) => {
            //         return this.serviceContents.includes(this.serviceSelected.forEach( (element) => {
            //             return this.serviceContents[element]
            //         } ));
            //         // let res = this.serviceSelected.forEach(element => {
            //         //     return this.serviceContents.includes(this.serviceContents[element])
            //         // });
            //         // Object.keys(this.serviceSelected).forEach(element => {
            //         //     return this.serviceSelected.includes(elements);
            //         // });
            //     })
            //     .concat(this.featuresContents.filter( () => {
            //        return this.featuresContents.includes(this.featuresSelected.forEach( (element) => {
            //             return this.featuresContents[element]
            //         } ));
            //     })
        }
    },
    methods: {
        /* 
         * 更改类型选中样式: 单选
         * 提交选中状态
         */
       /*  changeType (event, ele, i) {
            if (!this.typeSelected.includes(i)) {
                if (this.typeSelected.length === 1) {
                    let cancel = this.typeContents[this.typeSelected[0]];
                    console.log(`取消了${cancel}`);
                    this.typeSelected.length = 0;
                } 
                this.typeSelected.push(i);
                console.log(`选中了${ele}`);
                // 提交选中项目
            } else {
                for (const key in this.typeSelected) {
                    if (this.typeSelected.hasOwnProperty(key)) {
                        if ( this.typeSelected[key] === i)
                        this.typeSelected.splice(key,1);
                        console.log(`取消了${ele}`);
                    }
                }
            }
        }, */
        /* 
         * 更改户型选中样式: 单选
         * 提交选中状态
         */
        /* changeHouseType (event, ele, i) {
            if (!this.houseTypeSelected.includes(i)) {
                if (this.houseTypeSelected.length === 1) {
                    let cancel = this.houseTypeContents[this.houseTypeSelected[0]];
                    console.log(`取消了${cancel}`);
                    this.houseTypeSelected.length = 0;
                }
                this.houseTypeSelected.push(i);
                console.log(`选中了${ele}`);
            } else {
                for (const key in this.houseTypeSelected) {
                    if (this.houseTypeSelected.hasOwnProperty(key)) {
                        this.houseTypeSelected.splice(key, 1);
                        console.log(`取消了${ele}`);
                    }
                }

            }
        } */
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
        font-weight: 600;
        color: #7c7777;
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
    .choice {
        position: relative;
        margin-bottom: 60px;
    }
    .clear {
        position: fixed;
        z-index: 2;
        width: 100%;
        bottom: 118px;
        left: 0;
        background: #fff;
    }
    .color-red {
        border-color: #f00!important;
        color: red;
    }
    
</style>
