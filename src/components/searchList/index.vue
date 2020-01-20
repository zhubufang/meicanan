<template>
  <div class="serach-container flex flex-column">
    <my-header></my-header>
    <div style="height:40px"></div>
    <div class="serach-list flex-item" style="">
      <div class="input flex m-bottom">
        <cube-input v-model="value" class="flex-item" ref="input"></cube-input>
        <cube-button>搜索</cube-button>
      </div>

      <div class="store-list pos-c" style>
        <scroll ref="scroll" :pullUpLoad="true" @pullingUp="pullingUp">
          <slot name="store" :data="store"></slot>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "components/scroll";
import MyHeader from "components/header";
export default {
  props: {
    store: {
      type: Array,
      default: () => [1, 2, 3]
    }
  },
  components: {
    Scroll,
    MyHeader
  },
  data() {
    return {
      value: "",
      page: {
        page: 1,
        pageSize: 10
      }
    };
  },
  mounted() {
    //this.$refs.input.focus();
  },
  methods: {
    //监听上拉刷新
    pullingUp() {
      this.page.page++;
      //this.$refs.scroll.refresh()
      console.log("上拉刷新");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.serach-container {
  width: 100%;
  height: 100%;
}

.serach-list {
  position: relative;
  padding: 5px 10px 0;
  overflow: hidden;

  .input {
  }

  .store-list {
    position: absolute;
    top: 58px;
    margin: 0 10px;
  }
}

.cube-btn {
  width: auto;
  padding: 0px 16px;
  background: #2F7364;
}
</style>