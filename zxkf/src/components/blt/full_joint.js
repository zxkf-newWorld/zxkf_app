export default {
  data() {
    return {
      name: "整租 & 合租"
    };
  },
  methods: {
    //full-joint rent house list event
    // 整租、合租的房屋列表点击事件
    // 点击之后，将房屋对应的信息 传入 房屋详细信息页面，并进行管理
    searchHouseList(type /* 租住类型 */, url) {
      let title, cityBelong;
      title = type === 1 ? 1 : 0;
      cityBelong = "西安";
      let obj = {
        title,
        cityBelong
      };
      console.log(obj);
      this.axios
        .get(url, { params: obj })
        .then(result => {
          console.log("整租查询结果", result);
        })
        .catch(err => {
          console.log(err, "err turned out");
        });
    }
  }
};
