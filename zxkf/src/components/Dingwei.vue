<template>
  <div>
    <p style="width:50px;margin-left:-5px;margin-top:0px;">{{city}}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      city: ""
    };
  },
  methods: {
    // 精确定位
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: false,
          // 设置定位超时时间，默认：无穷大
          timeout: 200
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          // console.log("定位成功信息：", data);
          // console.log(data.addressComponent.city);
          self.city = data.addressComponent.city;
        }

        function onError(data) {
          // 定位出错
          // console.log("定位失败错误：", data);
          // self.city = data;
          // 调用ip定位
          self.getLngLatLocation();
        }
      });
    },
    // ip定位
    getLngLatLocation() {
      const self = this;
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            console.log("通过ip获取当前城市：", result);
            self.city = result.city;
            //逆向地理编码
            AMap.plugin("AMap.Geocoder", function() {
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode
              });

              var lnglat = result.rectangle.split(";")[0].split(",");
              geocoder.getAddress(lnglat, function(status, data) {
                if (status === "complete" && data.info === "OK") {
                  // result为对应的地理位置详细信息
                  console.log(data);
                }
              });
            });
          }
        });
      });
    }
  },
      // created 中调用
  created() {
    // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
    this.getLocation();
  }
};
</script>
<style scoped>
</style>
