<template>
    <div>
        <verify  @success="alert('success')" @error="alert('error')" :type="4"></verify>
    </div>
</template>

<script>
import Verify from 'vue2-verify'
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    components: {
        Verify,
    },
    destoryed () {
        this.$Bus.$off('slide');
    },
    methods: {
        alert (txt) {
            console.log(txt,'<<<<< 验证滑动结果');
            this.$Bus.$emit('slide', txt);
        }
    }
};
</script>

<style scoped>

</style>
