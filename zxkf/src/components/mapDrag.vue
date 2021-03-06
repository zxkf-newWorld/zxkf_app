<!--
  描述：拖放地图组件，默认尺寸是 500 * 300

  接收属性参数：
    lat: 纬度
    lng: 经度

  自定义事件：
    drag: 拖放完成事件

  示例：
    <mapDrag @drag="dragMap" lat="22.574405" lng="114.095388"></mapDrag>
-->
<template>
  <div class="m-map">
    <div class="search" v-if="placeSearch">
      <input type="text" placeholder="请输入关键字" v-model="searchKey" />
      <button type="button" @click="handleSearch">搜索</button>
      <div id="js-result" v-show="searchKey" class="result"></div>
    </div>
    <div id="js-container" class="map">正在加载数据 ...</div>
  </div>
</template>

<script>
import remoteLoad from "@/config/remoteLoad.js";
import { MapKey, MapCityName } from "@/config/config";
export default {
  props: ["lat", "lng"],
  data() {
    return {
      searchKey: "长乐坊18号",
      placeSearch: null,
      dragStatus: false,
      AMapUI: null,
      AMap: null,
      ccity: MapCityName
    };
  },
  watch: {
    searchKey() {
      if (this.searchKey === "") {
        this.placeSearch.clear();
      }
    }
  },
  methods: {
    // 搜索
    handleSearch() {
      if (this.searchKey) {
        this.placeSearch.search(this.searchKey);
        this.searchKey = "";
      }
    },
    // 实例化地图:src="imgurl"
    initMap() {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = (this.AMapUI = window.AMapUI);
      let AMap = (this.AMap = window.AMap);
      // 加载拖拽选址
      AMapUI.loadUI(["misc/PositionPicker"], PositionPicker => {
        let mapConfig = {
          zoom: 16, //缩放级别
          cityName: MapCityName //搜索城市名
        };
        if (this.lat && this.lng) {
          //设置经纬度
          mapConfig.center = [this.lng, this.lat];
        }
        let map = new AMap.Map("js-container", mapConfig);
        // 加载地图搜索插件
        // 提供搜索周边
        AMap.service("AMap.PlaceSearch", () => {
          this.placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            citylimit: true,
            city: MapCityName,
            map: map,
            panel: "js-result"
          });
        });
        // 启用工具条：plugin([],function(){ 异步加载插件});
        // ToolBar控制地图的缩放+平移等
        AMap.plugin(["AMap.ToolBar", "AMap.MapType"], function() {
          map.addControl(
            new AMap.ToolBar({
              position: "RB"
            })
          );
        });
        // 创建地图拖拽
        let positionPicker = new PositionPicker({
          // mode：地图模式：
          mode: "dragMap", // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: map // 依赖地图对象
        });
        // 拖拽完成发送自定义 drag 事件
        positionPicker.on("success", positionResult => {
          // 过滤掉初始化地图后的第一次默认拖放
          if (!this.dragStatus) {
            this.dragStatus = true;
          } else {
            this.$emit("drag", positionResult);
          }
        });
        // 启动拖放
        positionPicker.start();
      });
    }
  },
  async created() {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap();
      // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`);
      await remoteLoad("http://webapi.amap.com/ui/1.0/main.js");
      this.initMap();
    }
  }
  // 向Mapbus传递参数
  // transParams(ct){
  //   this.$emit("func",this.ccity);
  // }
};
</script>

<style lang="css" scoped>
#js-container {
  width: 100%;
  height: 100%;
}
.amap-touch-toolbar .amap-zoomcontrol {
  left: 0% !important;
  bottom: 0;
}
.m-map {
  min-width: 500px;
  min-height: 300px;
  position: relative;
}
.m-map .map {
  width: 100%;
  height: 100%;
}
.m-map .search {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 285px;
  z-index: 1;
}
.m-map .search input {
  width: 180px;
  border: 1px solid #ccc;
  line-height: 20px;
  padding: 5px;
  outline: none;
}
.m-map .search button {
  line-height: 26px;
  background: #fff;
  border: 1px solid #ccc;
  width: 50px;
  text-align: center;
}
.m-map .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
</style>
