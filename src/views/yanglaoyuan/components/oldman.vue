<template>
  <div class="oldman">
    <scroll ref="scroll" class="homePage" :pullUpLoad="true" @pullingUp="pullingUp">
      <ul class="flex">
        <li class="flex flex-column padding border b-radius" v-for="item in 15" :key="item">
          <img src="@/assets/logo.png" alt width="80" height="80" />
          <div>
            <p>
              <span>姓名:</span>
            </p>
            <p>
              <span>年龄:</span>
            </p>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/scroll";
export default {
  components: {
    Scroll
  },
  data() {
    return {};
  },
  methods: {
    //监听上拉刷新
    pullingUp() {
      //this.page.page++;
      //this.$refs.scroll.refresh()
      console.log("上拉刷新");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.oldman {
  width: 100%;
  height: 100%;
  padding: 10px 10px 0;

  ul {
    flex-wrap: wrap;

    li {
      width: 30%;
      display: flex;
      justify-content: space-between;
      line-height: 2.2;
      padding: 0 10px;
      margin: 10px 5px;
      text-align: center;
    }
  }
}
</style>>