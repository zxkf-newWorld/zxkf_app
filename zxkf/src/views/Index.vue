<template>
    <div>
        <carousel></carousel>
        <searchbox></searchbox>
        <functions></functions>
        <research></research>
    </div>
</template>
<script>
import Carousel from "./Carousel.vue"
import Searchbox from "./Searchbox.vue"
import Functions from "./Functions.vue" 
import Research from "./Research.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        Carousel,
        Searchbox,
        Functions,
        Research,
    }
}

</script>
<style scoped>

</style>