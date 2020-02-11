export default {
  name: "mixin",
  data() {
    return {
      pageHeight: "",
      pageWidth: ""
    };
  },
  beforeCreated() {},
  created() {
    this.getScreenHW();
  },
  mounted() {},
  methods: {
    /*
     * 动态获取屏幕高度和宽度
     */
    getScreenHW() {
      let height = window.screen.availHeight;
      let width = window.screen.availWidth;
      this.pageHeight = height;
      this.pageWidth = width;
      console.log("屏幕高宽：", height, width);
    },
    /*
     *单选操作
     */
    singleSelect($event, selected, contents, ele, i) {
      if (!selected.includes(i)) {
        if (selected.length === 1) {
          let cancel = contents[selected[0]];
          // console.log(`取消了${cancel}`);
          selected.length = 0;
        }
        selected.push(i);
        // console.log(`选中了${ele}`);
      } else {
        for (const key in selected) {
          if (selected.hasOwnProperty(key)) {
            selected.splice(key, 1);
            // console.log(`取消了${ele}`);
          }
        }
      }
    },
    /*
     * 多选操作
     */
    multipleSelect($event, selected, contents, ele, i) {
      if (!selected.includes(i)) {
        selected.push(i);
        // console.log(`选中了${ele}`);
      } else {
        for (const key in selected) {
          if (selected.hasOwnProperty(key)) {
            if (selected[key] === i) {
              selected.splice(key, 1);
              console.log(`取消了${ele}`);
            }
          }
        }
      }
    }

    /*
     * handleSelect:处理地铁/区域的选中项目
     */
    // handleSelect () {

    // }
  }
};
