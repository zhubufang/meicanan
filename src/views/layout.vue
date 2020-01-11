<template>
  <div class="layout flex flex-column">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab";
export default {
  components: {
    Tab
  },
  data() {
    return {};
  },
  mounted() {
    //this.getCode();
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>




