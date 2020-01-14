<template>
  <div class="menu">
    <cube-scroll-nav
      :side="true"
      :data="data"
      ref="scrollNav"
      @change="changeHandler"
    >
    <!-- 如果需要自定义导航栏 -->
    <!-- <template slot="bar" slot-scope="props"></template> -->
      <cube-scroll-nav-panel
        v-for="item in data"
        :key="item.name"
        :label="item.name"
        :title="item.name"
      >
        <ul class="m-top">
          <li v-for="food in item.foods" :key="food.icon" class="border padding b-radius">
            <div class="flex">
              <img :src="food.icon" width="80px" height="80px" class="m-right" />
              <div class="flex flex-column flex-justify-between">
                <p style="font-size:15px;">{{food.name}}</p>
                <p style="font-size:14px;color:#aaa;">薯条 方法</p>
              </div>
            </div>
          </li>
        </ul>
        <!-- <slot name="food" v-bind:food="item"></slot> -->
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
</template>

<script>
export default {
  props: {
    currentTitle: {
      type: String,
      default: null
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: this.currentTitle
    };
  },
  mounted() {
    console.log(this.data)
    setTimeout(() => {
      this.refresh();
    }, 20);
  },
  methods: {
    refresh() {
      this.$refs.scrollNav.refresh()
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
@import '~common/stylus/base';

.menu>>>.cube-scroll-nav-panel-title {
  display: none;
}
.menu>>>.cube-scroll-wrapper {
  padding-right:10px;
}

.menu {
  height:100%;
}
</style>