<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("i am created ...");
    // this.axios
    //   .get("/News/api/mine", { title: 0, cityBelong: "西安" })
    //   .then(res => {
    //     console.log(res, "<<<<<< res");
    //   })
    //   .catch(err => {
    //     console.log(err, "<<<<< err");
    //   });
    this.axios
      .get(this.devApi.getJointRent, { title: 0, cityBelong: "西安" })
      .then(success => {
        console.log(success, "<<<<< success");
      })
      .catch(err => {
        console.log(err, "<<<<< err");
      });
  },
  components: {}
};
</script>

<style lang="scss" scoped>
</style>
