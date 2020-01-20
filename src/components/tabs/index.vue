<template>
  <div class="tabs">
    <cube-tab-bar v-model="selectedLabel" show-slider ref="tabNav" :data="tabs"></cube-tab-bar>

    <cube-slide
      ref="slide"
      :loop="false"
      :autoPlay="false"
      :showDots="false"
      :initial-index="index"
      @change="changePage"
      class="scroll-c"
    >
      <cube-slide-item v-for="(tab,index) in tabs" :key="index">
          <component ref="component" :is="tab.component" :data="tab.data"></component>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex
    };
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label;
      },
      set(newVal) {
        this.tabs.map((item, i) => {
          if (item.label === newVal) {
            this.index = i;
          }
        });
      }
    }
  },
  methods: {
    changePage(current) {
      this.index = current;
      //console.log(this.$refs.component)
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-c {
  bottom: 0;
  left: 0;
  position: absolute;
  top: 49px;
  margin: auto;
  width: 100%;
}

/* 覆盖样式 */
.tabs>>>.cube-tab {
  padding: 13.5px 0;
  font-size: 14px;
}

.tabs>>>.cube-slide {
  height: auto;
}
</style>