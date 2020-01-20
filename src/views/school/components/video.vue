<template>
  <div class="video">
    <scroll ref="scroll">
      <div class="video">
        <video
          id="myplayer"
          :src="videoSrc"
          width="100%"
          height="100%"
          poster
          autoplay="false"
          controls
          playsinline
          webkit-playsinline
        ></video>
      </div>
      <ul class="flex">
        <li class="padding border b-radius" v-for="item in 4" :key="item" @click="chooseVideo(item)">
          
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import EZUIKit from "assets/js/ezuikit.js";
import Scroll from "components/scroll";
export default {
  components: {
    Scroll
  },
  data() {
    return {
      videoSrc:'http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8'
    };
  },
  mounted() {
    setTimeout(() => {
      this.initVideo();
    }, 20);
  },
  destroyed() {
    this.player.stop()
  },
  methods: {
    initVideo() {
      // console.log(EZUIKit.EZUIPlayer);
      this.player = new EZUIKit.EZUIPlayer("myplayer");
      this.player.on();
    },
    chooseVideo(item) {
      console.log(item)
      this.videoSrc="http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8"
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.video {
  width: 100%;
  height: 100%;
  padding: 10px 10px 0;
  text-align: center;

  .video {
    height: 50vw;
    border: 1px solid #ccc;
  }

  ul {
    flex-wrap: wrap;
    justify-content: space-around;

    li {
      width: 40%;
      height: 100px;
      display: flex;
      padding: 0 10px;
      margin: 10px 5px;
    }
  }
}
</style>>