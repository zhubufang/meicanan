<template>
  <div class="school">
    <scroll ref="scroll">
      <ul class>
        <li>
          <p>营业执照</p>
          <div class="img flex">
            <img :src="img" v-for="(img, index) in imgs" :key="img" @click="handleImgsClick(index)" />
          </div>
        </li>
        <li>
          <p>健康证</p>
          <div class="img">
            <img src="@/assets/logo.png" alt />
          </div>
        </li>
        <li>
          <p>用餐环境</p>
          <div class="img">
            <img src="@/assets/logo.png" alt />
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
    return {
      initialIndex: 0,
      imgs: [
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
      ]
    };
  },
  methods: {
    handleImgsClick(index) {
      this.initialIndex = index;
      const params = {
        $props: {
          imgs: this.imgs,
          initialIndex: "initialIndex", // 响应式数据的key名
          loop: false
        },
        $events: {
          change: i => {
            // 必须更新 initialIndex
            this.initialIndex = i;
          }
        }
      };
      this.$createImagePreview({ ...params }).show();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.school {
  height: 100%;
  padding: 10px 10px 0;

  ul {
    li {
      line-height: 2.2;
      padding: 0 10px;
      border-bottom: 2px solid #ccc;

      .img {
        width:100%;
        flex-wrap:wrap;
        overflow-x: hidden;

        img {
          width: 100px;
          height: 100px;
          margin:0 10px 10px 0;
        }
      }
    }
  }
}
</style>>