    <template>
<div id="mymap">
  <div class="ap" v-hljs>
    <div class="m-part">
      <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
    </div>
  </div>

</div>
</template>

<script>
import mapDrag from "./mapDrag.vue";
export default {
  components: {
    mapDrag
  },
  data() {
    return {
      dragData: {
        lng: null, //经度
        lat: null, //维度
        address: null, //地址
        nearestJunction: null, //最近路口
        nearestRoad: null, //最近的路
        nearestPOI: null //最近的POI信息点
      }
    };
  },
  methods: {
    dragMap(data) {
      // 动态修改data-dragData的所有数据
      this.dragData = {
        lng: data.position.lng,
        lat: data.position.lat,
        address: data.address,
        nearestJunction: data.nearestJunction,
        nearestRoad: data.nearestRoad,
        nearestPOI: data.nearestPOI
      };
    }
  }
};
</script>

<style>

body {
  margin: 0;
}
.page-header {
  color: #fff;
  text-align: center;
  background: #159957;
  background-image: -webkit-linear-gradient(330deg, #155799, #159957);
  background-image: linear-gradient(120deg, #155799, #159957);
  padding: 3rem 4rem;
  margin-bottom: 30px;
}
.page-header h1 {
  margin: 0;
  font-size: 40px;
}
.page-header p {
  color: #ccc;
  margin: 0;
  margin-bottom: 30px;
}
.page-header a {
  display: inline-block;
  border: 1px solid #fff;
  margin-right: 10px;
  line-height: 40px;
  padding: 0 20px;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
}
.page-header a:hover {
  background: #fff;
  color: #333;
}
.g-wraper {
  width: 100%;
  margin: 0 auto !important;
  color: #666;
  font-size: 16px;
  line-height: 30px;
}
.m-map{
    max-width: 400px;
    max-height: 200px;
    min-width: 300px!important;
}
.m-part::after {
  content: "";
  display: block;
  clear: both;
}
.m-part .title {
  font-size: 30px;
  line-height: 60px;
  margin-bottom: 10px;
  color: #333;
}
.m-part .mapbox {
  width: 100%;
  height: 400px;
  float: left;
}
.m-part .info {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 30px;
  margin-left: 620px;
}
.m-part .info span {
  display: block;
  color: #999;
}
.m-part ol {
  line-height: 40px;
  margin-left: 0;
  padding-left: 0;
}
.m-part pre {
  padding: 10px 20px;
  line-height: 30px;
  border-radius: 3px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.m-footer {
  background: #eee;
  line-height: 60px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
.m-footer a {
  margin: 0 5px;
  color: #999;
  text-decoration: none;
}
</style>
