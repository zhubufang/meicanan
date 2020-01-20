<template>
  <div class="home">
    <scroll ref="scroll" class="homePage">
      <div class="jieshao border b-radius padding" style="margin-bottom:25px;">
        <p style="text-align:center;font-size:16px;">颐养之家介绍</p>
        <p style="font-size:14px;line-height:2.2">减肥的开始减肥是地理减肥老师的减肥了深刻甲方</p>
      </div>

      <ul class="border b-radius">
        <li>
          <span>老人数量:</span>100
        </li>
        <li>
          <span>有无消毒柜:</span>有
        </li>
        <li>
          <span>有无空调:</span>有
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
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.home {
  padding: 10px 10px 0;

  .jieshao {
  }

  ul {
    li {
      display: flex;
      justify-content: space-between;
      line-height: 2.2;
      padding: 0 10px;
    }
  }
}
</style>>