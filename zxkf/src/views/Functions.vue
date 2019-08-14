<template>
    <div>
        <!-- 功能栏：首页：整租，合租，品牌公寓，找室友 -->
        <ul class="myUl">
            <li>
                <a href="javascirpt:;">
                    <img src="../assets/zhengzu.png" alt="">
                    <div>整租</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;">
                    <img src="../assets/hezu.png" alt="">
                    <div>合租</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;">
                    <img src="../assets/gongyu.png" alt="">
                    <div>品牌公寓</div>
                </a>
            </li>
            <li>
                <a href="javascirpt:;">
                    <img src="../assets/shiyou.png" alt="">
                    <div>找室友</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
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