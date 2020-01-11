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
    </router-link> -->
	
	<mt-tabbar v-model="selected">
	  <mt-tab-item id="tab1">
	    <i class="iconfont icon-shouye"></i>
	    首页
	  </mt-tab-item>
	  <mt-tab-item id="tab2">
	    <i class="iconfont icon-dianpu"></i>
	    店铺
	  </mt-tab-item>
	  <mt-tab-item id="tab3">
	    <i class="iconfont icon-zixun"></i>
	    资讯
	  </mt-tab-item>
	  <mt-tab-item id="tab4">
	   <i class="iconfont icon-touxiang"></i>
	    我的
	  </mt-tab-item>
	</mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
	data() {
		return {
			selected:"tab1"
		}
	}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
.tab {
    height:58px;
  i {
  	display: block;
	font-size:32px!important;
  }
}
</style>


