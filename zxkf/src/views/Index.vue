<template>
    <div>
        <carousel></carousel>
        <searchbox></searchbox>
        <functions></functions>
        <research></research>
        <yourlike></yourlike>
        <div style="width:auto;height:auto;">
            <mapp></mapp>
        </div>
    </div>
</template>
<script>
import Carousel from "./first-page/Carousel.vue"
import Searchbox from "./first-page/Searchbox"
import Functions from "./first-page/Functions.vue" 
import Research from "./first-page/Research.vue"
import Yourlike from "./first-page/Yourlike.vue"
import Mapp from "../components/Mapbus"
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
        Mapp
    }
}

</script>
<style scoped>
    .mapStyle{
        width: 100%;
        height: 200px;
    }
</style>