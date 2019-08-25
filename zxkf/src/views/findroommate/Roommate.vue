<template>
    <div class="roommate">
      <ul class="list_room">
        <li v-for="(item,index) in list" :key="index">
          <div class="room_left">
            <img :src="item.img" alt="图片加载中..." >
          </div>
          <div class="room_right">
            <h4>{{item.title}} 
              <div class="font_red">￥{{item.price}}</div>
            </h4>
            <div class="font_red d1">
              <div>{{item.type}}</div>
              <div>{{item.set}}</div>
              <div>{{item.date}}</div>
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
export default {
    data(){
        return{
          list:[
            {id:"1",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"2",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"1",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"2",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"1",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"2",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"1",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
            {id:"2",img:"./img/roomate/01.jpg",title:"宝山区共富三村",price:"2200 ",type:"单间",set:"限女",date:"09月01日入住",ditie:"1号线共富新村",newDate:"2019.09.12"},
          ]        
        }
    }
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
      width:40%;
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