<template>
    <div>
        <verify  @success="alert($event, 'success')" @error="alert($event, 'error')" :type="5" :showButton="false"></verify>
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
        // this.$Bus.$off('slide');
    },
    methods: {
        alert (event, txt) {
            console.log(txt, '<<<<< 验证滑动结果');
            if (txt === 'success') {
                /* 刷新验证码 */
                setTimeout(() => {
                    event.refresh(); 
                }, 1000); 
            } else if (txt === 'error') {
                return; /* 不再向后继续操作 */
            }
            this.$Bus.$emit('slide', txt);
        }
    }
};
</script>

<style scoped>

</style>
