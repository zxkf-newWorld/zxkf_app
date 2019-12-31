<template>
  <div class="dropDown">
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item title="地铁" ref="subway" @closed="handleClosed('subway')">
        <!-- active-id:右侧高亮选项id -->
        <!-- main-active-index:左侧高亮选项索引 -->
        <van-tree-select
          :items="subwayItems"
          :active-id.sync="subwayActiveId"
          :main-active-index.sync="subwayActiveIndex"
          @click-nav="handleSelect('subway')"
          @click-item="
            handleClick(
              subwayItems[subwayActiveIndex].children[subwayActiveId].text
            )
          "
        >
        </van-tree-select>
        <clear :selected="[subwaySelec, toggle, 'subway']"></clear>
      </van-dropdown-item>
      <van-dropdown-item title="区域" ref="area"  @closed="handleClosed('area')">
        <van-tree-select
          :items="items"
          :active-id.sync="areaActiveId"
          :main-active-index.sync="areaActiveIndex"
          @click-nav="handleSelect('area')"
          @click-item="
            handleClick(items[areaActiveIndex].children[areaActiveId].text)
          "
        >
        </van-tree-select>
        <clear :selected="[areaSelec, toggle, 'area']"></clear>
      </van-dropdown-item>
      <van-dropdown-item title="租金" v-model="value3" :options="option3" @close="handleClose('rentPrice')" @closed="handleClosed('rentPrice')"/>
      <van-dropdown-item title="筛选" ref="select" @close="handleClose('select')" @closed="handleClosed('select')">
        <template>
          <div class="choice">
            <div class="type">
              <div class="title">类型</div>
              <div class="content">
                <div
                  :class="{ 'color-red': typeSelected.includes(i) }"
                  @click.self.stop="
                    singleSelect($event, typeSelected, typeContents, ele, i)
                  "
                  v-for="(ele, i) in typeContents"
                  :key="i"
                >
                  {{ ele }}
                </div>
              </div>
            </div>
            <div class="house-type">
              <div class="title">户型</div>
              <div class="content">
                <div
                  :class="{ 'color-red': houseTypeSelected.includes(i) }"
                  @click.self.stop="
                    singleSelect(
                      $event,
                      houseTypeSelected,
                      houseTypeContents,
                      ele,
                      i
                    )
                  "
                  v-for="(ele, i) in houseTypeContents"
                  :key="i"
                >
                  {{ ele }}
                </div>
              </div>
            </div>
            <div class="service">
              <div class="title">服务保障</div>
              <div class="content">
                <div
                  :class="{ 'color-red': serviceSelected.includes(i) }"
                  v-for="(ele, i) in serviceContents"
                  :key="i"
                  @click.self.stop="
                    multipleSelect(
                      $event,
                      serviceSelected,
                      serviceContents,
                      ele,
                      i
                    )
                  "
                >
                  {{ ele }}
                </div>
              </div>
            </div>
            <div class="activity">
              <div class="title">活动</div>
              <div class="content">
                <div
                  :class="{ 'color-red': activitySelected.includes(i) }"
                  v-for="(ele, i) in activityContents"
                  :key="i"
                  @click.self.stop="
                    singleSelect(
                      $event,
                      activitySelected,
                      activityContents,
                      ele,
                      i
                    )
                  "
                >
                  {{ ele }}
                </div>
              </div>
            </div>
            <div class="feature">
              <div class="title">特色</div>
              <div class="content">
                <div
                  :class="{ 'color-red': featuresSelected.includes(i) }"
                  v-for="(ele, i) in featuresContents"
                  :key="i"
                  @click.self.stop="
                    multipleSelect(
                      $event,
                      featuresSelected,
                      featuresContents,
                      ele,
                      i
                    )
                  "
                >
                  {{ ele }}
                </div>
              </div>
            </div>
            <div class="clear">
              <clear :selected="[allSelected, toggle, 'select']"></clear>
            </div>
          </div>
        </template>
      </van-dropdown-item>
      <van-dropdown-item title="排序" v-model="value4" :options="option4" @close="handleClose('sort')" @closed="handleClosed('sort')"/>
      <!-- <van-dropdown-item v-model="value5" :options="option5"/> -->
    </van-dropdown-menu>
  </div>
</template>

<script>
import mixin from "./mixin.js";
import Clear from "./Clear.vue";
export default {
  name: "dropDown",
  mixins: [mixin],
  data() {
    return {
      typeSelected: [] /* 类型（单选） */,
      houseTypeSelected: [] /* 户型（单选） */,
      activitySelected: [] /* 特惠活动（单选） */,
      serviceSelected: [] /* 服务保障（多选） */,
      featuresSelected: [] /* 特色（多选） */,
      selected: false,
      typeContents: ["全部", "单间", "整套", "公寓"],
      houseTypeContents: ["1室", "2室", "3室", "3室+"],
      serviceContents: [
        "免费带看",
        "费用透明",
        "全网低价",
        "平台认证",
        "品牌优选",
        "精品房型"
      ],
      activityContents: ["限时优惠"],
      featuresContents: [
        "有视频",
        "租金月付",
        "有视频",
        "近地铁",
        "带阳台",
        "保洁服务",
        "维修服务",
        "可养宠物",
        "新上架",
        "电梯房",
        "独立厨房",
        "智能电表",
        "精装修",
        "复式",
        "别墅改造",
        "非一楼",
        "主卧",
        "朝南",
        "转租",
        "家电齐全"
      ],

      items: [
        {
          text: "附近",
          children: [
            { text: "附近（智能范围）", id: 0, disable: false },
            { text: "500m", id: 1, disable: false },
            { text: "1000m", id: 2, disable: false },
            { text: "2000m", id: 3, disable: false },
            { text: "5000m", id: 4, disable: false },
            { text: "不限", id: 5, disable: false }
          ]
        },
        {
          text: "灞桥",
          children: [
            { text: "全灞桥", id: 0, disable: false },
            { text: "世博公园", id: 1, disable: false },
            { text: "十里铺", id: 2, disable: false },
            { text: "希王", id: 3, disable: false },
            { text: "桃花潭", id: 4, disable: false },
            { text: "洪庆街道", id: 5, disable: false },
            { text: "浐河西路", id: 6, disable: false },
            { text: "港务大道", id: 7, disable: false },
            { text: "纺织城", id: 8, disable: false }
          ]
        },
        {
          text: "灞桥",
          children: [
            { text: "全灞桥", id: 0, disable: false },
            { text: "世博公园", id: 1, disable: false },
            { text: "十里铺", id: 2, disable: false },
            { text: "希王", id: 3, disable: false },
            { text: "桃花潭", id: 4, disable: false },
            { text: "洪庆街道", id: 5, disable: false },
            { text: "浐河西路", id: 6, disable: false },
            { text: "港务大道", id: 7, disable: false },
            { text: "纺织城", id: 8, disable: false }
          ]
        },
        {
          text: "灞桥",
          children: [
            { text: "全灞桥", id: 0, disable: false },
            { text: "世博公园", id: 1, disable: false },
            { text: "十里铺", id: 2, disable: false },
            { text: "希王", id: 3, disable: false },
            { text: "桃花潭", id: 4, disable: false },
            { text: "洪庆街道", id: 5, disable: false },
            { text: "浐河西路", id: 6, disable: false },
            { text: "港务大道", id: 7, disable: false },
            { text: "纺织城", id: 8, disable: false }
          ]
        },
      ],
      subwayItems: [
        {
          text: "1号线",
          children: [
            { text: "不限", id: 0, disable: false },
            { text: "后卫寨", id: 1, disable: false },
            { text: "三桥", id: 2, disable: false },
            { text: "皂河", id: 3, disable: false },
            { text: "枣园", id: 4, disable: false },
            { text: "汉城路", id: 5, disable: false },
            { text: "汉城路", id: 6, disable: false },
            { text: "开远门", id: 7, disable: false },
            { text: "劳动路", id: 8 , disable: false },
            { text: "玉祥门", id: 9, disable: false },
            { text: "洒金桥", id: 10, disable: false },
            { text: "北大街", id: 11, disable: false },
            { text: "五路口", id: 12, disable: false },
            { text: "朝阳门", id: 13, disable: false },
            { text: "康复路", id: 14, disable: false },
            { text: "通化门", id: 15, disable: false },
            { text: "万寿路", id: 16, disable: false },
            { text: "长乐坡", id: 17, disable: false },
            { text: "浐河", id: 18, disable: false },
            { text: "半坡", id: 19, disable: false },
            { text: "纺织城", id: 20, disable: false }
          ]
        },
        {
          text: "2号线",
          children: [
            { text: "不限", id: 0, disable: false },
            { text: "韦曲南", id: 1, disable: false },
            { text: "航天城", id: 2, disable: false },
            { text: "凤栖原", id: 3, disable: false },
            { text: "三爻", id: 4, disable: false },
            { text: "会展中心", id: 5, disable: false },
            { text: "纬一街", id: 6, disable: false },
            { text: "小寨", id: 7, disable: false },
            { text: "体育场", id: 8, disable: false },
            { text: "南稍门", id: 9, disable: false },
            { text: "永宁门", id: 10, disable: false },
            { text: "钟楼", id: 11, disable: false },
            { text: "北大街", id: 12, disable: false },
            { text: "安远门", id: 13, disable: false },
            { text: "龙首原", id: 14, disable: false },
            { text: "大明宫西", id: 15, disable: false },
            { text: "市图书馆", id: 16, disable: false },
            { text: "凤城五路", id: 17, disable: false },
            { text: "行政中心", id: 18, disable: false },
            { text: "运动公园", id: 19, disable: false },
            { text: "北苑", id: 20, disable: false }
          ]
        },
        {
          text: "3号线",
          children: [
            { text: "不限", id: 0, disable: false },
            { text: "保税区", id: 1, disable: false },
            { text: "新筑", id: 2, disable: false },
            { text: "双寨", id: 3, disable: false },
            { text: "国际港务区", id: 4, disable: false },
            { text: "香湖湾", id: 5, disable: false },
            { text: "浐灞中心", id: 6, disable: false },
            { text: "桃花源", id: 7, disable: false },
            { text: "广泰门", id: 8, disable: false },
            { text: "辛家庙", id: 9, disable: false },
            { text: "石家桥", id: 10, disable: false },
            { text: "胡家庙", id: 11, disable: false },
            { text: "通化门", id: 12, disable: false },
            { text: "长乐公园", id: 13, disable: false },
            { text: "咸宁路", id: 14, disable: false },
            { text: "延兴门", id: 15, disable: false },
            { text: "青龙寺", id: 16, disable: false },
            { text: "北池头", id: 17, disable: false },
            { text: "大雁塔", id: 18, disable: false },
            { text: "小寨", id: 19, disable: false },
            { text: "吉祥村", id: 20, disable: false },
            { text: "科技路", id: 21, disable: false },
            { text: "延平门", id: 22, disable: false },
            { text: "丈八北路", id: 23, disable: false },
            { text: "鱼化寨", id: 24, disable: false }
          ]
        }
      ],
      subwayActiveId: 0,
      areaActiveId: 0,
      subwayActiveIndex: -1,
      areaActiveIndex: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      option1: [
        { text: "地铁1号线", value: 1 },
        { text: "地铁2号线", value: 2 },
        { text: "地铁3号线", value: 3 }
      ],
      option3: [
        { text: "不限", value: 0 },
        { text: "1500元以下", value: 1 },
        { text: "1500-2000元", value: 2 },
        { text: "2000-3000元", value: 3 },
        { text: "3000-4000元", value: 4 },
        { text: "4000-5000元", value: 5 },
        { text: "5000元以上", value: 6 }
      ],
      option4: [
        { text: "综合排序", value: 0 },
        { text: "价格从高到低", value: 1 },
        { text: "价格从低到高", value: 2 },
        { text: "距离当前位置最近", value: 3 },
        { text: "距离公司最近", value: 4 }
      ]
    };
  },
  components: {
    Clear
  },
  created() {},
  mounted() {
    // 监听事件
    console.log("mounted被触发了....");
    this.reset();
  },
  destroyed() {
    this.$Bus.$off("clearStatus");
    console.log("clearStatus监听事件已经销毁");
  },
  computed: {
    // 筛选状态
    allSelected() {
      let result =
        this.typeContents[this.typeSelected[0]] +
        "," +
        this.houseTypeContents[this.houseTypeSelected[0]] +
        "," +
        this.activityContents[this.activitySelected[0]] +
        "," +
        this.serviceContents
          .filter((ele, index) => {
            return this.serviceSelected.includes(index);
          })
          .join(",") +
        "," +
        this.featuresContents
          .filter((ele, index) => {
            return this.featuresSelected.includes(index);
          })
          .join(",");
      return result.split(",");
    },
    // 地铁筛选状态
    subwaySelec() {
      let result = [];
      if (this.subwayActiveIndex === -1) {
        // 即未作出任何选择，不做任何操作
      } else {
        result.push(
          this.subwayItems[this.subwayActiveIndex].text,
          this.subwayItems[this.subwayActiveIndex].children[this.subwayActiveId].text
        );
      }
      return result;
    },
    // 区域筛选状态
    areaSelec() {
			let result = [];
      result.push(
        this.items[this.areaActiveIndex].text,
        this.items[this.areaActiveIndex].children[this.areaActiveId].text
      );
      return result;
    }
  },
  watch: {},
  methods: {
    toggle(type) {
      console.log(type, "<<<< type");
      // type是字符串，必须用[]来访问对象的属性
      this.$refs[type].toggle();
    },
    // 清空事件
    reset() {
      this.$Bus.$on("clearStatus", arg => {
				if (arg === 'subway') {
					console.log(arg, "<<<<< arg");
					this.subwayActiveIndex = -1;
					this.subwayActiveId = 0;

				} else if (arg === 'area') {
					console.log(arg, "<<<<< arg");
					this.areaActiveIndex = 0;
					this.areaActiveId = 0;

				} else if (arg === 'select') {
					console.log(arg, "<<<<< arg");
					this.typeSelected = [];
					this.houseTypeSelected = [];
					this.activitySelected = [];
					this.serviceSelected = [];
					this.featuresSelected = [];
				}
      });
    },
    handleSelect(type) {
      switch (type) {
        case "subway" /* 地铁 */:
          console.log(
            this.subwayItems[this.subwayActiveIndex].text,
            "<<<<< 左侧被选项目"
          );
          break;
        case "area" /* 区域 */:
          console.log(
            this.items[this.areaActiveIndex].text,
            "<<<<< 左侧被选中的项目"
          );

          break;

        default:
          break;
      }
    },
    handleClick(data) {
      console.log(data, "<<<<< 右侧选中的项目");
		},
		// 处理租金及排序
		handleClose (type) {
				switch (type) {
					case 'rentPrice':
						console.log(this.value3, this.option3[this.value3].text);
						// 发送请求查询房屋信息
						break;
					case 'sort':
						console.log(this.value4, this.option4[this.value4].text);
						// 发送请求查询房屋信息
						break;
				
					default:
						break;
				}
    },
    // 处理下拉菜单关闭的样式
    handleClosed (type) {
      let res = false;
      switch (type) {
        case 'subway':/* 地铁 */
          console.log(type + '已选择');
          let element1 = document.querySelector('.dropDown > div > div:nth-child(1) > span > div');
          if (this.subwaySelec.length >= 1) {
            element1.style.color = '#f00';
          } else {
            element1.style.color = '#000';
          }
          break;
        case 'area':/* 区域 */
          console.log(type + '已选择');
          console.log('默认选中区域的状态', this.areaSelec);
          let element2 = document.querySelector('.dropDown > div > div:nth-child(2) > span > div');
          element2.style.color = "#f00";
          
          break;
        case 'rentPrice':/* 租金 */
          console.log(type + '已选择');
          /* 只要关闭选项框，样式变添加：红色字体 */
          let element3 = document.querySelector('.dropDown > div > div:nth-child(3) > span > div');
          element3.style.color = '#f00';
          
          break;
        case 'select':/* 筛选 */
          console.log(type + '已选择');
          if (this.allSelected) {
            this.allSelected.forEach(element => {
              if ( !(element === 'undefined' || element === '') ) {
                res = true;
              }
            });
          } else {
            res = false;
          }
          let element4 = document.querySelector('.dropDown > div > div:nth-child(4) > span > div');
          res ? element4.style.color = '#f00' : element4.style.color = "#000";
          // res ? console.log('未作出任何选择') : console.log('已经作出了选择');
          break;
        case 'sort':/* 排序 */
          console.log(type + '已选择');
          /* 只要关闭选项框，样式变添加：红色字体 */
          let element5 = document.querySelector('.dropDown > div > div:nth-child(5) > span > div');
          element5.style.color = '#f00';
          break;
      
        default:
          break;
      }
    },
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
  },
};
</script>

<style scoped>
.dropDown {
  position: relative;
}
.dropDown >>> .van-dropdown-item__content {
  position: relative;
}
.dropDown >>> .van-sidebar-item {
  border: none !important;
}
.dropDown >>> .van-sidebar-item--select {
  color: #f00 !important;
  background: #fff;
}
.title {
  margin-top: 0.2rem;
  text-align: left;
  margin-left: 0.4rem;
  font-weight: 600;
  color: #7c7777;
}
.content {
  margin: 0.1rem 0.4rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.content div {
  text-align: center;
  flex: 0 0 20%;
  padding: 0.1rem 0;
  margin: 0.1rem 0.15rem;
  border: 1px solid #f0f0f0;
  border-radius: 0.1rem;
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
  border-color: #f00 !important;
  color: red;
}

</style>
