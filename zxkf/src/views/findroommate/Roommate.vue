<template>
    <div class="roommate">
      <my-head></my-head>
      <ul class="list_room">
        <li v-for="(item,index) in list" :key="index" @click="jumpDetail(item.rid)">
          <div class="room_left">
            <img :src="item.img" alt="图片加载中...">
          </div>
          <div class="room_right">
            <h4>{{item.address }} 
              <div class="font_red">￥{{item.price}}</div>
            </h4>
            <div class="font_red d1">
              <div><span class="icon iconfont icon-fangjian"></span> {{item.type}}</div>
              <div> 
                  <span class="icon iconfont icon-nan" v-show="item.getset=='限男'?sexShow:''"></span> 
                  <span class="icon iconfont icon-nv" v-show="item.getset=='限女'?sexShow:''"></span> 
                  {{item.getset}}
              </div>
              <div>{{item.date}}入住</div>
            </div>
            <div >{{item.ditie}}</div>
            <div class="d1" style="padding:0">
              <div class="font_blue">室友合租</div>
              <div style="color:#c4c4c4">{{item.newDate}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import Header from '../../components/blt/Header.vue'
export default {
    data(){
        return{
          cityBelong:'西安',
          list:[
            // {id:"1",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            // {id:"2",img:"./img/roomate/02.jpg",title:"浦东新区东源名都西区",price:"2200 ",type:"单间",set:"限男",date:"09月01日入住",ditie:"1号线锦江乐园",newDate:"2019.09.14"},
            // {id:"1",img:"./img/roomate/03.jpg",title:"徐汇区家乐苑",price:"2200 ",type:"单间",set:"限女",date:"09月04日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            // {id:"2",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限男",date:"09月01日入住",ditie:"1号线锦江乐园",newDate:"2019.09.18"},
            // {id:"1",img:"./img/roomate/02.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限男",date:"09月03日入住",ditie:"1号线共富新村",newDate:"2019.09.15"},
            // {id:"2",img:"./img/roomate/03.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线锦江乐园",newDate:"2019.09.12"},
            // {id:"1",img:"./img/roomate/02.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月05日入住",ditie:"2号线金京路",newDate:"2019.09.12"},
            // {id:"2",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
          ] ,
          sexShow:true,      
        }
    },
    components:{
      "my-head":Header
    },
    mounted() {
      var url = "index/findRoomMates";
      this.axios.get(url).then(res => {
        //获取服务器返回的结果，登陆成功或者失败
       this.list=res.data.dataArray;
       console.log(this.list)
      }).catch(err=>{
          console.log(err)
      })
    },
    methods: {
      jumpDetail(rid){
        this.$router.push("Roommatedetail/"+rid);
      }
    },
}
</script>
<style  scoped>
    .roommate{
     width:100%;
    }
    .list_room{
      padding:0.2rem;
      list-style:none;
    }
    .list_room h4{
      margin:0;
    }
    .list_room li{
      display:flex;
      justify-content:space-between;
      margin-top:5px;
      box-shadow: 1px 1px 1px 1px #ccc;
    }
    .list_room li img{
     height:100%;
     width:100%;
    }
    .room_left{
      width:30%;
      text-align: center;
      padding:5px;
    }
    .room_right{
      width:60%;
      text-align:left;
      padding:5px;
    }
    .room_right div,.room_right h4 {
      padding-bottom:5px;
    }
    .room_right .d1,.room_right h4{
      display: flex;
      justify-content:space-between;
    }
    .font_red{
      color:#e8323f;
    }
    .font_blue{
     color: #87bcda;
    }
    </style>