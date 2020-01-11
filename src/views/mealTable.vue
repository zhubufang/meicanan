<template>
  <div class="meal">
    会议就餐表
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: null
    };
  },
  mounted() {
    
  },
  methods: {
    getUserInfo() {
      this.$service({
        method: "get",
        url: "/userInfo",
        params: {
          code: this.code
        }
      }).then(res => {
        if (res.code == 0) {
          
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.meal {
  flex:1;
  width: 100%;
  overflow-y: auto;
  background-color:red;
}
</style>




