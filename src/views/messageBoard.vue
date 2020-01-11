<template>
  <div class="messageBoard"></div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabel: "天辉",
      tabs: [
        {
          label: "天辉",
          icon: "cubeic-like",
          heroes: ["敌法师", "卓尔游侠"]
        },
        {
          label: "夜魇",
          icon: "cubeic-star",
          heroes: ["血魔", "影魔"]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.messageBoard {
 flex:1;
  width: 100%;
  overflow-y: auto;
  background-color: green;
}
</style>




