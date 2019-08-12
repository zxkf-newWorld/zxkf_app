<template>
    
    <div>
       <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide " style="background-color:pink">slide1</div>
            <div class="swiper-slide " style="background-color:red">slide2</div>
            <div class="swiper-slide " style="background-color:green">slide3</div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
    <!-- 导航等组件可以放在container之外 -->  
    </div>
    
</template>
<script src="../../public/js/swiper.min.js"></script>
<script src="../../public/js/jquery-3.2.1.js"></script>
<script>
    // 在页面加载之后初始化
    $(document).ready(function(){
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,// 自动播放模式
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    })
</script>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .swiper-container{
        width: 100%;    
    }
</style>>
    