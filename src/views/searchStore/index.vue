<template>
  <div class="searchStore">
    <search-list>
      <template #store="{data}">
        <div
          style="padding: 10px;background-color:#ffffff;"
          :class="['flex','list', 'm-bottom','b-radius']"
          v-for="(item,index) in 6"
          :key="index"
        >
          <img src="../../assets/logo.png" width="80px" height="80px" />
          <div style="margin-left:10px" class="flex flex-column flex-justify-between flex-item">
            <p>老师饭店</p>
            <p>量化等级:</p>
            <p class="flex flex-justify-between">
              <span>20</span>
              <span>1.6km</span>
            </p>
          </div>
        </div>
      </template>
    </search-list>
  </div>
</template>

<script>
import SearchList from "components/searchList";
export default {
  components: {
    SearchList
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';
.searchStore {
  height: 100%;
  background-color: #F6F6F6;
}
</style>>