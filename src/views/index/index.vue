<template>
  <scroll ref="scroll" class="homePage" :pullUpLoad="true" @pullingUp="pullingUp">
    <div class="header flex">
      <div class="pos">
        <i class="iconfont icon-icon-test" style="font-size: 24px;"></i>渝水区
      </div>
      <cube-input v-model="params" class="flex-item" ref="input"></cube-input>
    </div>

    <div class="fenlei">
      <ul class="flex flex-justify-between">
        <li class="flex-item flex flex-column flex-align-center flex-justify-center m-right" @click="$navTo('/searchStore',{})">
          <img src="../../assets/logo.png" width="50px" height="50px" />
          <p>美食</p>
        </li>
        <li class="flex-item flex flex-column flex-align-center flex-justify-center" @click="$navTo('/searchStore',{})">
          <img src="../../assets/logo.png" width="50px" height="50px" />
          <p>颐养之家</p>
        </li>
        <li class="flex-item flex flex-column flex-align-center flex-justify-center m-left" @click="$navTo('/searchStore',{})">
          <img src="../../assets/logo.png" width="50px" height="50px" />
          <p>学校</p>
        </li>
      </ul>
    </div>

    <div class="store">
      <ul class="flex flex-justify-between m-bottom" style="padding:0 10px">
        <li
          v-for="(item,index) in saixuan"
          :key="index"
          :class="[{'active':isActive==index}]"
          @click="chooseItem(index)"
        >{{item}}</li>
      </ul>

      <div class="store-list">
        <div
          style="padding: 10px;"
          :class="['flex','list', 'm-bottom','b-radius']"
          v-for="(item,index) in 10"
          :key="index"
          @click="$navTo('/school',{})"
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
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/scroll";
export default {
  components: {
    Scroll
  },
  data() {
    return {
      code: null,
      params: null,
      isActive: 0,
      saixuan: ["综合排序", "距离最近", "好评优先"],
      page: {
        page: 1,
        pageSize: 10
      }
    };
  },
  mounted() {
    //this.getCode();
    setTimeout(() => {
      this.$refs.scroll.refresh();
    }, 20);
    // const _this = this;
    // window.addEventListener(
    //   "popstate",
    //   function(e) {
    //     _this.$store.commit("transition/SETPAGESTATE", "turn-off");
    //   },
    //   false
    // );
  },
  methods: {
    //监听上拉刷新
    pullingUp() {
      this.page.page++;
      //this.$refs.scroll.refresh()
      console.log("上拉刷新");
    },
    chooseItem(index) {
      this.isActive = index;
      console.log(this.isActive);
    },
    getCode() {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      this.code = vars[0].substring(5);
      //this.getUserInfo()
    },
    getUserInfo() {
      this.$service({
        method: "get",
        url: "/userInfo",
        params: {
          code: this.code
        }
      }).then(res => {
        if (res.code == 0) {
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.active {
  color: #2F7364;
  border-bottom: 2px solid #2F7364;
}

.homePage {
  flex: 1;
  width: 100%;
  padding: 5px 10px 0;
  background-color: #F6F6F6; 

  .header {
    padding-top: 5px;
	background-color: #ffffff; 
    .pos {
      width: 80px;
      text-align: left;
      line-height: 43px;
      color: #2F7364;

      i {
        vertical-align: middle;
      }
    }
  }

  .fenlei {
    height: 100px;
    margin-top: 10px;
	  background-color: #ffffff;

    ul {
      height: 100%;

      li {
        height: 100%;

        p {
          margin-top: 5px;
        }
      }
    }
  }

  .store {
    margin-top: 10px;

    li {
      line-height: 40px;
    }
  }

  .store-list {
    text-align: left;
	background-color: #ffffff;
    .list {
      border: 1px solid #ccc;
    }
  }
}

.homePage >>> .mint-cell-wrapper {
  border: 1px solid #ccc;
}
</style>
