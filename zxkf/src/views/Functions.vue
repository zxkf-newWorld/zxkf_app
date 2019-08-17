<template>
    <div>
        <!-- 功能栏：首页：整租，合租，品牌公寓，找室友 -->
        <ul class="myUl">
            <li>
                <a href="javascirpt:;" data-city="citys[0]" @click="toFullRent">
                    <img src="../assets/zhengzu.png">
                    <div>整租</div>
                </a>
            </li>
            <li> data-city="citys"
                <a href="javascirpt:;" data-city="citys" @click="toJointRent">
                    <img src="../assets/hezu.png">
                    <div>合租</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;" data-city="citys" @click="">
                    <img src="../assets/gongyu.png">
                    <div>品牌公寓</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;" data-city="citys" @click="FindRoomMates">
                    <img src="../assets/shiyou.png">
                    <div>找室友</div>
                </a>
            </li>
        </ul>
        <div style="clear: both;"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            citys:[],
        }
    },
    methods: {
        toFullRent(e){
            let city = e.target.dataset.citys[0]
        },
    },
}
</script>
<style scoped>
    .myUl{
        display: flex;
        justify-content: space-around;
        align-items: middle;
        width: 100%;
        margin: 0;
        outline: none;
        padding: .4rem 0;
        overflow: hidden;
        background: #fff;
    }
    .myUl li{
        list-style: none;
        font-size:14px;
    }
    .myUl li img{
        width:65%;
    }
    .myUl li a,.myUl li a:active{
        color: #5a5c5d;
        text-decoration: none;
    }
</style>