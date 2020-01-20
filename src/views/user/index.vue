<template>
  <div class="user">
    <div class="header flex flex-column flex-justify-center padding">
      <div class="avatar">
        <img src="@/assets/boy.png" alt width="80" height="80" class="b-radius-5" />
      </div>
      <div>
        <p class="nickName" v-if="nickName">的双方都</p>
        <p class="nickName" v-else>注册登入</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName: null
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.user {
  flex: 1;
  width: 100%;
  padding: 5px 0px 0;
  background-color: #F6F6F6;

  .header {
    align-items: center;
    background-color: #ffffff;
  }
}
</style>