<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    var res = this.axios.post("/News/api/mine");
    console.log(res, "<<<<< res");
  },
  components: {}
};
</script>

<style lang="scss" scoped>
</style>
