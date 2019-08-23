<template>
    <div>
        <childele></childele>
        <button @click="getChild()" title="title">获取子组件的信息</button>
    </div>
</template>
<script>
import Childele from "./Childele.vue"
export default {
    data(){
        return{
            msg:"hello world",
            title:"父组i将"
        }
    },
    methods: {
        getChild(){
            alert(this.title);
        }
    },
    components:{
        Childele
    }
}
</script>
<style scoped>

</style>