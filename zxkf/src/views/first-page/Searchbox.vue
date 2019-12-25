<template>
    <div>
        <input type="text"   @keydown="searchHouse($event)" placeholder="你想住哪儿？" class="myInput"  v-model="information" @focus="searchHouse($event)">
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
            this.$router.push('/Search');
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
        /* background-color:rgba(0,0,0,.3); */
        margin: 0 9%;
        border-radius: .4rem;
        color: #fff;
        width: 82%;
        position: absolute;
        top: 4.1rem;
        left: -.22rem;
        height: .7rem;
        text-align: center;
        padding:0 10px; 
        z-index: 2;
        border:0;
        outline: 0;
    }
</style>