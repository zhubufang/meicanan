<template>
  <div class="tab">
    <!-- <router-link tag="div" class="tab-item" to="/index/meeting">
      <i class="iconfont icon-shouye"></i>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/mealTable">
      <i class="iconfont icon-dianpu"></i>
      <span class="tab-link">店铺</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/score">
      <i class="iconfont icon-zixun"></i>
      <span class="tab-link">资讯</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/messageBoard">
     <i class="iconfont icon-touxiang"></i>
      <span class="tab-link">我的</span>
    </router-link>-->

    <cube-tab-bar v-model="selectedLabelSlots"  @click="clickHandler">
      <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
        <!-- name为icon的插槽 -->
        <i slot="icon" :class="['iconfont',item.icon]"></i>
        <!-- 默认插槽 -->
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      selectedLabelSlots: "首页",
      tabs: [
        {
          label: "首页",
          icon: "icon-shouye"
        },
        {
          label: "资讯",
          icon: "icon-zixun"
        },
        {
          label: "我的",
          icon: "icon-touxiang"
        }
      ]
    };
  },
  mounted() {
    this.initTab();
  },
  methods: {
    initTab() {
      if (this.$route.fullPath === "/index/index") {
        this.selectedLabelSlots = "首页";
      }
        if(this.$route.fullPath==='/index/news') {
      	  this.selectedLabelSlots='资讯'
        }
      if (this.$route.fullPath === "/index/user") {
        this.selectedLabelSlots = "我的";
      }
    },
    clickHandler(label) {
      if (label === "首页") {
        this.$navTo("/index/index");
      } else if (label === "资讯") {
        this.$navTo("/index/news");
      } else if (label === "我的") {
        this.$navTo("/index/user");
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tab {
  height: 58px;

  i {
    display: block;
    font-size: 32px !important;
  }
}

.cube-tab_active {
  color: #327566;
}

.cube-tab {
  padding: 0;
}
</style>


