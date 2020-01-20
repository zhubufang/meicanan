<template>
  <div class="news">
    <div class="tabs">
      <cube-scroll
        ref="scroll"
        :data="tabs"
        direction="horizontal"
        class="horizontal-scroll-list-wrap"
      >
        <ul class="list-wrapper">
          <li
            v-for="(tab,index) in tabs"
            :key="index"
            @click="chooseTab(index)"
            :class="[{active:initIndex==index},'list-item']"
          >{{tab}}</li>
        </ul>
      </cube-scroll>
    </div>
    <div class="content pos-c">
      <scroll ref="scroll" :pullUpLoad="true" @pullingUp="pullingUp" v-if="data.length">
        
      </scroll>
      <no-data v-else></no-data>
    </div>
  </div>
</template>

<script>
import Scroll from "components/scroll";
import NoData from "components/no-data";
export default {
  components: {
    // Scroll,
    NoData
  },
  data() {
    return {
      initIndex: 0,
      tabs: [
        "政策解读",
        "监管动态",
        "抽检报告",
      ],
      data:[]
    };
  },
  methods: {
    //监听上拉刷新
    pullingUp() {
      //this.page.page++;
      //this.$refs.scroll.refresh()
      console.log("上拉刷新");
    },
    chooseTab(index) {
      this.initIndex = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.active {
  color: #2F7364;
}

.news {
  position: relative;
  flex: 1;
  width: 100%;
  background-color: #F6F6F6;

  .tabs {
    width: 100%;
    border-bottom: 1px solid #ccc;

    li {
      padding: 0px 10px;
    }
  }

  .content {
    position: absolute;
    top: 66px;
  }
}

.news>>>.horizontal-scroll-list-wrap {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  .cube-scroll-content {
    display: inline-block;
  }

  .list-wrapper {
    padding: 0 10px;
    line-height: 60px;
    white-space: nowrap;
  }

  .list-item {
    display: inline-block;
  }
}
</style>