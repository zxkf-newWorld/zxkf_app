<template>
    <div id="indexPage">
        <carousel></carousel>
        <div class="sticky-top">
        </div>
        <searchbox></searchbox>
        <functions></functions>
        <research></research>
        <yourlike class="mb-71"></yourlike>
        <div style="width:auto;height:auto;display:none">
            <mapp></mapp>
        </div>
        <footTab class="zindex"></footTab>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Carousel from "./first-page/Carousel.vue"
import Searchbox from "./first-page/Searchbox"
import Functions from "./first-page/Functions.vue"
import Research from "./first-page/Research.vue"
import Yourlike from "./first-page/Yourlike.vue"
import Mapp from "../components/Mapbus.vue"
import FootTab from './FootTab.vue'
import SearchHead from '../components/common/SearchHead.vue'
export default {
    name: 'indexPage',
    data(){
        return{

        }
    },
    computed: {
      ...mapState({
        'status': state => state.user_info.status, /* 登录状态 */
        'user': state => state.user_info.user, /* 用户名称 */
        'password': state =>state.user_info.password, /* 登录密码 */
      }),
    },
    created () {
      if (this.status === 'on') {
        console.log('用户已登录', {
          user: this.user,
          password: this.password,
          status: this.status
        });
      } else {
        console.log('用户未登录', {
          user: this.user,
          password: this.password,
          status: this.status
        });
      }
    },
    components:{
        Carousel,
        Searchbox,
        Functions,
        Research,
        Yourlike,
        Mapp,
        FootTab,
        SearchHead,
    }
}

</script>
<style scoped>
    #indexPage {
      overflow-x: scroll;
      overflow-y: hidden !important;
    }
    #indexPage::-webkit-scrollbar {
      display: none;
    }
    .mapStyle{
        width: 100%;
        height: 200px;
    }
    .mb-71 {
        margin-bottom: 55px;
    }
    .sticky-top {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      z-index: 5;
      top: 0;
      overflow: hidden;
    }
    .zindex {
      display: fixed;
      z-index: 5;
      overflow: hidden;
    }
</style>
