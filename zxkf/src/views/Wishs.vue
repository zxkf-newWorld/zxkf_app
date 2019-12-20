<template>
    <div>
        <!-- <mt-button @click="goBack">返回</mt-button> -->
        <h2>Wishes best to you</h2>
        <footBar></footBar>
    </div>
</template>

<script>
import FootBar from './FootTab.vue'
export default {
    data() {
        return {

        };
    },
    components: {
        FootBar,
    },
    created() {

    },
    mounted() {

    },
    methods: {
        goBack () {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped ">

</style>
