<template>
    <div>
        <carousel></carousel>
        <searchbox></searchbox>
        <functions></functions>
    </div>
</template>
<script>
import Carousel from "./Carousel.vue"
import Searchbox from "./Searchbox.vue"
import Functions from "./Functions.vue" 
export default {
    data(){
        return{

        }
    },
    components:{
        Carousel,
        Searchbox,
        Functions
    }
}

</script>
<style scoped>

</style>