<template>
  <div class="scroll-nav">
    <cube-scroll-nav
      :side="side"
      v-if="data.length"
      ref="scrollNav"
      :current="data[0].name"
      :data="data"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler"
    >
      <cube-scroll-nav-panel
        v-for="item in data"
        :key="item.name"
        :label="item.name"
        :title="item.name"
      >
        <slot name="food" v-bind:item="item"></slot>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
</template>

<script>
export default {
  props: {
    side: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    refreshScroll() {
        console.log(11111)
      this.$refs.scrollNav.refresh();
    },
    changeHandler(label) {
      console.log("changed to:", label);
    },
    stickyChangeHandler(current) {
      console.log("sticky-change", current);
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-nav>>>.cube-scroll-nav-panel-title {
  display: none;
}
</style>