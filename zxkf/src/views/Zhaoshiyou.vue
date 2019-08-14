<template>
    <div>
        hello world
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        reg(){
            var obj = {
                uname:'天下的朋友',
                uage:'123456',
                msg:'send success'
            };
            url = "/reg"
            this.axios.post(url,qs.stringify(obj))
            .then(res=>{
                console.log(res);

            })
            .catch(err=>{
                console.log(err);
            });

        },

    },
}
</script>
<style scoped>
    
</style>