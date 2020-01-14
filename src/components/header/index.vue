<template>
  <div class="header">
    <div class="left" @click="back">返回</div>
    <div class="center">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },

  methods: {
    back() {
      this.$store.commit("transition/SETPAGESTATE", "turn-off");
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color:#ffffff;
  z-index: 2;
  padding:0 8px;
  border-bottom:1px solid #fff;
  background-color: #2F7364;
}
.clearfix {
  overflow: auto;
}
.left {
  position: fixed;
  left: 10px;
  width: 60px;
}
.center {
  left: 50%;
  position: fixed;
}
</style>