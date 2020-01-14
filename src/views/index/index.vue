<template>
  <cube-scroll ref="scroll" class="homePage">
    <div class="header flex">
      <div class="pos">
        <i class="iconfont icon-icon-test" style="font-size: 24px;"></i>渝水区
      </div>
      <div class="ipt flex flex-item">
        <mt-field placeholder="搜索" v-model="params" class="flex-item"></mt-field>
        <mt-button
          type="primary"
          size="small"
          style="line-height: 40px;height: 40px;background-color:#2F7364;border-radius: 0px;"
        >搜索</mt-button>
      </div>
    </div>

    <div class="fenlei">
      <ul class="flex flex-justify-between">
        <li class="flex-item flex flex-column flex-align-center flex-justify-center">
          <img src="../../assets/logo.png" width="50px" height="50px" />
          <p>美食</p>
        </li>
        <li class="flex-item flex flex-column flex-align-center flex-justify-center">
          <img src="../../assets/logo.png" width="50px" height="50px" />
          <p>颐养之家</p>
        </li>
        <li class="flex-item flex flex-column flex-align-center flex-justify-center">
          <img src="../../assets/logo.png" width="50px" height="50px" />
          <p>学校</p>
        </li>
      </ul>
    </div>

    <div class="store">
      <ul class="flex flex-justify-between m-bottom">
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
          :class="['flex','list', 'm-bottom']"
          v-for="(item,index) in 6"
          :key="index"
          @click="navTo('/yanglaoyuan',{})"
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
  </cube-scroll>
</template>

<script>
export default {
  data() {
    return {
      code: null,
      params: null,
      isActive: 0,
      saixuan: ["综合排序", "距离最近", "好评优先"]
    };
  },
  mounted() {
    //this.getCode();
    setTimeout(() => {
      this.refresh();
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
    navTo(url, query) {
      this.$store.commit("transition/SETPAGESTATE", "turn-on");
      this.$router.push({
        path: url,
        query: query
      });
    },
    refresh() {
      this.$refs.scroll.refresh();
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

  .header {
    height: 40px;
    padding-top: 5px;

    .pos {
      width: 80px;
      text-align: left;
      line-height: 40px;
      color: #2F7364;

      i {
        vertical-align: middle;
      }
    }

    .ipt {
      input {
        flex: 1;
        height: 40px;
        padding-left: 10px;
        color: #cccccc;
        border: 1px solid #ccc;
        border-right: none;
      }
    }
  }

  .fenlei {
    height: 100px;
    margin-top: 10px;

    ul {
      height: 100%;

      li {
        height: 100%;
        border: 1px solid red;

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

    .list {
      border: 1px solid #ccc;
    }
  }
}

.homePage>>>.mint-cell {
  min-height: 40px;
  border: 1px solid #ccc;
}
</style>
