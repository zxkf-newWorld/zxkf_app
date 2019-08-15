<template>
    <div>
        <carousel></carousel>
        <searchbox></searchbox>
        <functions></functions>
        <research></research>
        <yourlike></yourlike>
    </div>
</template>
<script>
import Carousel from "./Carousel.vue"
import Searchbox from "./Searchbox.vue"
import Functions from "./Functions.vue" 
import Research from "./Research.vue"
import Yourlike from "./Yourlike.vue"
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
        Yourlike,
    }
}

</script>
<style scoped>

</style>