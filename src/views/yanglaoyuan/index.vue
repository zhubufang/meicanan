<template>
  <div class="yanglaoyuan flex flex-column">
    <my-header></my-header>
    <!-- <mt-header title style="background-color: #2F7364;">
      <router-link to="/" slot="left">
        <mt-button icon="back" style="color:#FFFFFF;">返回</mt-button>
      </router-link>
    </mt-header>-->
    <div class="store">
      <div class="inner pos-c b-radius flex flex-align-center">
        <img src="../../assets/logo.png" class="storeImg" />
        <div
          style="margin-left:10px;height:100%;padding:10px 0"
          class="flex flex-column flex-justify-between flex-item"
        >
          <p>老师饭店</p>
          <p>量化等级:</p>
          <p class>
            <span style="font-size:14px;">江西省新余市渝水区</span>
          </p>
        </div>
      </div>
    </div>

    <div class="fenlei flex flex-column flex-item">
      <div style="height: 100%;position: relative;">
        <tabs :tabs="tabLabels"></tabs>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "components/header";
import Tabs from "components/tabs";
import Menu from "./components/menu";
import HomeDetail from "./components/homeDetail";
import Oldman from "./components/oldman";
import Video from "./components/video";
export default {
  components: {
    MyHeader,
    Tabs
  },
  data() {
    return {
      selectedLabel: "洁厨亮灶",
      tabLabels: [
        {
          label: "菜谱",
          component: Menu,
          data: [
            {
              name: "星期一",
              type: -1,
              foods: [
                {
                  name: "皮蛋瘦肉粥1",
                  icon:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                  image:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                }
              ]
            },
            {
              name: "星期二",
              type: -1,
              foods: [
                {
                  name: "皮蛋瘦肉粥2-3",
                  icon:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                  image:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                }
              ]
            },
            {
              name: "星期三",
              type: -1,
              foods: [
                {
                  name: "皮蛋瘦肉粥3",
                  icon:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                  image:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                }
              ]
            }
          ]
        },
        {
          label: "颐养之家信息",
          component: HomeDetail,
          data: []
        },
        {
          label: "老人信息列表",
          component: Oldman,
          data: []
        },
        {
          label: "洁厨亮灶",
          component: Video,
          data: []
        }
      ]
    };
  },

  watch: {
    // selectedLabel(newVal, oldVal) {}
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/base';

.storeImg {
  width: 25vw;
  height: 25vw;
}

.yanglaoyuan {
  width: 100%;
  height: 100%;
  color: #000;

  .store {
    position: relative;
    height: 45vw;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
    background-color: #2F7364;

    .inner {
      position: absolute;
      top: 14vw;
      width: 90%;
      color: #000;
      padding: 10px;
      border: 1px solid #ccc;
      background-color: #ffffff;
    }
  }

  .fenlei {
  }
}
</style>
