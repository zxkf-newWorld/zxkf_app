<template>
    <div>
        <mt-field type="text" placeholder="请输入您要搜索的房源/单间/合租/整租" class="myInput" data-information="information" @click="searchHouse($event)"></mt-field>
    </div>
</template>
<script>
export default {
    data(){
        return{
            information:""//默认无信息
        }
    },
    methods: {
        // 键盘按下事件
        searchHouse(event){
            console.log(event);
        }
    },
}
</script>
<style scoped>
    .myInput{
        background-color: #fff;
        margin: 0 9%;
        border-radius: 2px;
        width: 82%;
        position: absolute;
        top: 3.6rem;
        height: .82rem;
        text-align: center;
        z-index: 2;
    }
</style>