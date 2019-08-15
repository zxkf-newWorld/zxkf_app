<template>
    <div>
        <button @click="getParent()" ref="childmsg" name="我是子组件">获取父组件parent的msg属性的值</button>
    </div>
</template>
<script>

export default {
    data(){
        return{
            
        }
    },
    methods: {
        getParent(){
           alert(this.$parent.msg);
           console.log("父组件传来的信息"+this.titles);
           console.log(this.$refs.childmsg.name);

        }
    },
    props:['title']
}
</script>
<style scoped>

</style>