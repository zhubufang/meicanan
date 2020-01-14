<template>
  <div id="app" @touchmove.prevent>
    <transition :name="pageState">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["pageState"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.iconfont {
  font-size: 32px;
}

.turn-on-enter {
  /* transform: translate3d(100%, 0, 0); */
  
}
.turn-on-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-enter {
  /* transform: translate3d(-20%, 0, 0); */
}
.turn-off-leave-to {
  transform: translate3d(100%, 0, 0);
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-leave-active {
  z-index: 2;
}
</style>
