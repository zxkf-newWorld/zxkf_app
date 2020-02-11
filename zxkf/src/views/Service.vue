<template>
  <div class="app">
    <!-- 客服头标题 -->
    <div class="xw-header">
      <div class="xw-header-back">
        <span class="xw-header-title" @click="back"
          >返回&nbsp;&nbsp;&nbsp;</span
        >
      </div>
      <div class="xw-header-content" @touchstart="showInfo">
        <div
          v-if="!toShowMaskInfo"
          :class="[toShowMaskInfo ? '' : 'bounceInRight', 'animated']"
        >
          <img src="../assets/images/logo.jpg" class="xw-header-avatar" />
          <div class="xw-header-title-wrap">
            <div class="xw-header-title">小蜜客服</div>
          </div>
        </div>
      </div>
      <!-- 小蜜客服弹出的具体信息 -->
      <div
        v-show="toShowMaskInfo"
        :class="[
          toShowMaskInfo ? 'bounceInDown' : '',
          'xw-show-info-box',
          'animated'
        ]"
      >
        <div class="xw-logo">
          <h4>小蜜客服</h4>
        </div>
        <div class="xw-header-info">
          <p class="animated bounceInLeft">
            小蜜客服产品，智能机器人为您自助服务。
          </p>
        </div>
      </div>
    </div>
    <div class="xw-content" @touchstart="toShowMaskInfo = false" ref="xwBody">
      <div class="xw-chat-wrap">
        <ul>
          <li v-for="(messageList, i) in records" :key="i">
            <div v-if="messageList.type == 1">
              <div class="xw-chat-time">{{ messageList.time }}</div>
              <div class="xw-chat-servicer">
                <div class="xw-servicer-avantar-wrap">
                  <img
                    src="../assets/images/logo.jpg"
                    class="xw-servicer-avantar"
                  />
                </div>
                <div class="xw-chat-msg">
                  <span v-html="replaceFace(messageList.content)"></span>
                </div>
              </div>
            </div>
            <!-- 用户发送的消息模板-->
            <div v-else>
              <div class="xw-chat-time">{{ messageList.time }}</div>
              <div class="xw-chat-customer">
                <div class="xw-customer-avantar-wrap">
                  <img
                    src="../assets/images/female.jpg"
                    class="xw-customer-avantar"
                  />
                </div>
                <div class="xw-chat-msg" style="display:inline-block">
                  <span v-html="replaceFace(messageList.content)"></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 文本输入 -->
    <div class="xw-footer-wrap" @touchstart="toShowMaskInfo = false">
      <div class="xw-footer-content">
        <div class="xw-vmodel-wrap">
          <!-- <div
            class="xw-content-textarea"
            v-html="content"
          >
          {{content}}
          </div> -->
          <div
           id="inputContent"
           contenteditable="true"
           class="input-style"
           v-html="content"
           @input="handleContent($event.target.innerHTML)"
          >
            {{content}}
          </div>
          <!-- <textarea
            autofocus
            rows="6"
            cols="20"
            v-html="content"
            v-model="content"
            class="xw-content-textarea"
            placeholder="请输入您的问题"
            @focus="onFocusText"
          >图片</textarea> -->
        </div>
        <div class="xw-chat-tool">
          <div class="xw-chat-tool-item">
              <a
                href="javascript:void(0)"
                class="xw-send-btn-text"
                @click="sendMsg"
                >发送</a
              >
          </div>
          <div class="xw-chat-tool-item">
            <a
              href="javascript:;"
              :class="[
                showEmoji ? 'xw-face' : 'xw-face-close',
                'xw-chat-tool-btn'
              ]"
              @click="emojiFuc"
            ></a>
          </div>
          <div class="xw-chat-tool-item">
            <a
              :class="[
                showMoreOpratin
                  ? 'xw-hide-operation-close'
                  : 'xw-hide-operation',
                'xw-chat-tool-btn'
              ]"
              @click="showMoreOpratin = !showMoreOpratin"
            ></a>
            <transition name="fade">
              <div class="xw-window-text" v-if="showMoreOpratin">
                <label for="uploadImg">
                  <span>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      multiple
                      style="display:none;"
                      id="uploadImg"
                    />图片
                  </span>
                </label>
                <span @touchstart="showEvaluateFuc">评价</span>
                <span>结束</span>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- 表情开始 -->
      <transition name="slide-fade" style="display:none">
        <div class="xw-window-text xw-face-emoji-ul" v-if="showEmoji">
          <div class="xw-chat-ul-box">
            <mt-swipe :auto="0">
              <mt-swipe-item v-for="n in Math.ceil(EXPS.length / 15)" :key="n">
                <li
                  v-for="(item, index) in getEmotionData(n, 15)"
                  class="xw-faceEmoji"
                  :key="index"
                >
                  <img
                    :src="item.file"
                    :data="item.code"
                    v-on:click="getContent(`<img src='${item.file}'/>`)"
                  />
                </li>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </transition>
    </div>
    <!-- 提示音 -->
    <!-- <audio style="display:none"  preload="metadata" controls="controls" autoplay="autoplay" ref="hintAudio">
        <source :src="myaudio" type="audio/mpeg"/>
    </audio> -->
    <!-- 右上角的通话小窗口 -->
    <!-- <div class="xw-samll-pop-wrap animated bounceInUp" v-if="showNarrowPopVal">
       <span class="xw-big-pop" @click="showBigPopFuc">显示大窗</span>
     </div> -->
    <!-- 客服窗口 -->
    <!-- <div class="xw-pop-server animated bounceInRight" v-if="videoVal">
       <h5>客服</h5>
       <span class="xw-narrow-pop" @click="showNarrowPopFuc">显示小窗</span>
     </div> -->
    <!-- 顾客窗口 -->
    <!-- <div class="xw-pop-customer animated bounceInLeft" v-if="videoVal">
       顾客
       <div>
         <a class="xw-hang-up" href="#"><img src="/public/images/hang-up.png" class="xw-hang-up-icon"></a>
       </div>
     </div> -->
    <!--客服评分-->
    <evaluate
      :ScoreDB="ScoreDB"
      :showScore="showScore"
      @on-star="selectStar"
      @confirm-star="confrmStar"
    >
    </evaluate>
    <Toast :showToast="showToast">{{ toastText }}</Toast>
  </div>
</template>
<script>
import evaluate from "../components/evaluate.vue";
import Toast from "../components/toast";
import { getEmojiData } from "../api/api.js";
export default {
  components: {
    evaluate,
    Toast
  },
  data() {
    return {
      comment: {},/* 评论 */
      showEmoji: true, /* 是否显示表情 */
      showToast: false, /* 显示提示框 */
      toastText: "",
      showMoreOpratin: false, /* 是否显示更多操作 */
      toShowMaskInfo: false, /* 点击头部是否显示相应信息 */
      showNarrowPopVal: false,/* 点击切换成小窗口 */
      /* 客户为在线的预备语言，机器回答 */
      testContents: [
        "你想咨询点什么",
        "这些价格上都是有差异的",
        "这个问题还没遇到过",
        "你说什么，我听不明白",
        "我们尽快为您解决",
        "请稍后--",
        "当前客服忙",
        "您还有什么咨询的吗",
        "正在查询",
        "gone with the wind"
      ],
      content: '',
      /* 聊天记录 */
      records: [
        {
          type: 1,
          time: new Date().toLocaleTimeString(),
          content: "您好！欢迎来到小蜜客服。"
        },
        // {
        //   type: 2,
        //   time: new Date().toLocaleTimeString(),
        //   content: "您好"
        // }
      ],
      showScore: false, //显示评分
      ScoreDB: {
        scoreDatas: [
          {
            scoreTitle: "服务指数",
            scoreFlag: 0,
            scoreArr: [1, 2, 3, 4, 5]
          },
          {
            scoreTitle: "接通速度",
            scoreFlag: 1,
            scoreArr: [1, 2, 3, 4, 5]
          },
          {
            scoreTitle: "办事效率",
            scoreFlag: 2,
            scoreArr: [1, 2, 3, 4, 5]
          }
        ],
        maxVal: [0, 0, 0]
      },
      imgFile: {},
      EXPS: []
    };
  },
  created() {
    this._loadEmojiData();/* 预加载表情数据 */

  },
  methods: {
    handleContent (text) {
      console.log(text,'<<<<< text');
      // console.log(this.content);
      // this.content = this.content + text;
    },
    showInfo() {
      this.toShowMaskInfo = true;
    },
    back() {
      this.$router.push("/");
    },
    //点击控制表情切换（显示和隐藏）
    emojiFuc() {
      this.showEmoji = !this.showEmoji;
    },
    showEvaluateFuc() {
      this.showScore = !this.showScore;
    },
    getContent(motion) {
      this.content = document.getElementById('inputContent').innerHTML + motion;
    },
    sendMsg() {
      // var content = this.content.trim();
      var content = inputContent.innerHTML;
      this.records.push({
        time: new Date().toLocaleTimeString(),
        content: content,
        type: 2
      });
      this.content = "";
      setTimeout(() => {
        // this.hint();
        this.records.push({
          time: new Date().toLocaleTimeString(),
          content: this.testContents[Math.floor(Math.random() * 9)],
          type: 1
        });
        this.scrollToBottom();
      }, 800);
    },
    getEmotionData(pageNow, pageSize) {
      return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow);
    },
    replaceFace(con) {
      if (!con) {
        return;
      }
      if (con.toString().indexOf("/:") > -1) {
        var exps = this.EXPS;
        for (var i = 0; i < exps.length; i++) {
          con = con.replace(
            exps[i].reg,
            '<img src="' + exps[i].file + '"  alt="" />'
          );
        }
      }
      return con;
    },
    //点击星星进行星星评分
    selectStar(msg) {
      let index = msg[0];
      let scoreFlag = msg[1];
      let scoreArr = msg[2];
      var Target = [1, 2, 3, 4, 5];
      for (var i = 0; i < index; i++) {
        Target[i] = i;
      }
      //方便确定星星选中的个数，将不亮的星星数组设置为-1
      for (var j = index; j < Target.length; j++) {
        Target[j] = -1;
      }
      //评分结果数
      var tempArr = [];
      tempArr = this.ScoreDB.maxVal.slice(0);
      tempArr[scoreFlag] = index;
      this.ScoreDB.maxVal = tempArr.concat();
      this.ScoreDB.scoreDatas[scoreFlag].scoreArr = Target;
    },
    //点击确定关闭星星评价
    confrmStar(msg) {
      this.showToast = true;
      this.toastText = "您的评分依次是 " + msg;
      this.showScore = false;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },
    //滚动到底
    scrollToBottom() {
      setTimeout(() => {
        //滚动条长度
        var currentDistance =
          this.$refs.xwBody.scrollHeight - this.$refs.xwBody.clientHeight;
        //当前滚动条距离顶部的距离
        var currentScroll_y = this.$refs.xwBody.scrollTop;
        if (currentDistance > 0 && currentDistance > currentScroll_y) {
          currentScroll_y =
            Math.ceil((currentDistance - currentScroll_y) / 10) +
            currentScroll_y;
          currentScroll_y =
            currentScroll_y > currentDistance
              ? currentDistance
              : currentScroll_y;
          this.$refs.xwBody.scrollTop = currentScroll_y;
          this.scrollToBottom();
        }
      }, 13);
    },
    onFocusText() {
      this.scrollToBottom();
    },
    _loadEmojiData() {
      getEmojiData().then(res => {
        var json = eval("(" + res + ")");
        console.log(json,'<<<<< json');
        this.EXPS = json.EXPS.slice(0);
      });
    }
  }
};
</script>
<style scoped>
@import url('../assets/css/service.css');
</style>
