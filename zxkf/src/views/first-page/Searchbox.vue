<template>
    <div>
        <input type="text"   @keydown="searchHouse($event)" placeholder="请输入您要搜索的房源/合租/整租/找室友" class="myInput"  v-model="information">
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
            if(event.keyCode==13){
                if(this.information=="整租"){
                    this.$router.push("Zhengzu")
                }else if(this.information=="合租"){
                    this.$router.push("Hezu")
                }else  if(this.information=="找室友"){
                    this.$router.push("Roommate")
                }
            }
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
        left: 0;
        height: .82rem;
        text-align: left;
        padding:0 10px; 
        z-index: 2;
    }
</style>