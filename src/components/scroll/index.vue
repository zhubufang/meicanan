<template>
  <cube-scroll
    class="scroll"
    ref="scroll"
    :data="data"
    :direction="direction"
    :options="options"
    :pullUpLoad="pullUploadParams"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp"
  >
    <slot></slot>
  </cube-scroll>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    //滚动方向
    direction: {
      type: String,
      default: "vertical"
    },
    // 是否开启上拉加载
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: {
        pullUpLoad: this.pullUpLoad
          ? {
              threshold: 0,
              txt: {
                more: "上拉加载更多",
                noMore: "没有更多数据了"
              },
              visible: false
            }
          : false
      },
      pullUploadParams: {
        threshold: 50,
        txt: {
          more: "加载中...",
          noMore: "没有更多数据了"
        },
        visible: true
      }
    };
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh();
    },
    //关闭刷新动画
    forceUpdate() {
      this.$refs.scroll.forceUpdate();
    },
    //上拉刷新
    onPullingUp() {
      this.$emit("pullingUp");
    },
    //下拉刷新
    onPullingDown() {
      this.$emit("pullingDown");
    }
  }
};
</script>

<style scoped lang="stylus">
.scroll >>> .after-trigger {
  padding: 10px 0 !important;
}

</style>