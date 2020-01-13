<template>
  <ul class="select-tab">
    <li
      v-for="(ele, i) in items"
      :key="i"
      @click="searchContent($event, i)"
      :class="{ selected: selected.includes(i) }"
    >
      <svg class="icon" aria-hidden="true" v-if="i === 1">
        <use xlink:href="#icon-renzheng"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-if="i === 0">
        <use xlink:href="#icon-hui"></use>
      </svg>
      {{ ele }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "selectTab",
  data() {
    return {
      clicked: false,
      // 选中样式
      selected: [],
      items: ["限时优惠", "平台认证", "全网低价", "租金月付", "近地铁", "独卫"]
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    /*
     * 查询指定内容中的房屋信息
     */
    searchContent(event, i) {
      /*
       * 选中样式的调整
       * 发送请求，查询相关房屋信息
       */
      //样式调整
      let element = event.target;
      let content = event.target.innerText;
      if (!this.selected.includes(i)) {
        this.selected.push(i);
        //查询相关房屋信息
        console.log(content, "<<<<< content");
      } else {
        for (const key in this.selected) {
          if (this.selected.hasOwnProperty(key) && this.selected[key] === i) {
            this.selected.splice(key, 1);
            // 取消查询本相关请求
            console.log(`取消查询${content} 的条件`);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.select-tab {
  position: relative;
  left: 0;
  padding: 0.2rem 0.2rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  list-style: none;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  overflow-x: auto;
}
.select-tab::-webkit-scrollbar {
  display: none;
}
.select-tab > li {
  height: 0.5rem;
  margin: 0 0.1rem;
  line-height: 0.5rem;
  color: #000;
  flex: 0 0 25%;
  color: #9b9b9b;
  background: #f6f6f6;
  font-size: .2rem !important;
  /* background: linear-gradient(to right bottom,#ffe6eb,#ff0000); */
  border-radius: 0.5rem;
}
.selected {
  font-weight: 500;
  color: #fff !important;
  background: linear-gradient(to right bottom, #ece0e0, #f74949) !important;
}
.icon {
  width: .3rem;
  height: .3rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
