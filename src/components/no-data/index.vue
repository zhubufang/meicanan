<template>
  <div class="no-data">
    <div class="pos-c content">
      <img src="@/assets/no.png" alt />
      <p style="color:#ccc;" class="p-top">暂无数据</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped lang="stylus">
@import '~common/stylus/base';

.no-data {
  position: relative;
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width:50vw;
    height:20vh;
    text-align:center;
  }
}
</style>