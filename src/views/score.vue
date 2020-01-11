<template>
  <div class="score">
    <cube-scroll ref="scroll">
      <div class="form">
        <div>
          <p>
            述职时间:
            <span>分值(10分)</span>
          </p>
          <span>述职时间20分以内10分，超过20分钟0分</span>
          <cube-input v-model="userName" placeholder="得分" @blur="fixScroll" @focus="scollToInput" type="tel"></cube-input>
        </div>

        <div>
          <p>
            工作成果(业绩):
            <span>分值(40分)</span>
          </p>
          <span>2019年度目标/指标完成情况(25分),管理有突破、优化(15分)</span>
          <cube-input v-model="userName" placeholder="得分" @blur="fixScroll" @focus="scollToInput" type="tel"></cube-input>
        </div>

        <div>
          <p>
            工作不足(存在问题):
            <span>分值(20分)</span>
          </p>
          <span>与事实相符(10分),是否深刻(10分)</span>
          <cube-input v-model="userName" placeholder="得分" @blur="fixScroll" @focus="scollToInput" type="tel"></cube-input>
        </div>

        <div>
          <p>
            工作计划:
            <span>分值(30分)</span>
          </p>
          <span>针对性、可行性、全面性(30分)</span>
          <cube-input v-model="userName" placeholder="得分" @blur="fixScroll" @focus="scollToInput" type="tel"></cube-input>
        </div>
        <cube-button @click.native="refresh">签到</cube-button>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.refresh();
    }, 20);
    window.addEventListener("resize", () => {
      console.log(5555);
      alert("resize")
      this.refresh();
    });
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh();
    },
    scollToInput() {

      this.refresh()
      //alert("focus")
    },
    fixScroll() {
      console.log(3333)
      window.scrollTo(0, scroll);
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
.score {
  flex: 1;
  width: 100%;
  overflow: hidden;
  border: 1px solid red;

  .form {
    width: 80%;
    text-align: left;
    margin: 10vh auto 0;

    p {
      line-height: 2;

      span {
        color: red;
        font-size: 16px;
      }
    }

    span {
      font-size: 14px;
      color: gold;
      line-height: 2;
    }

    .cube-input {
      margin-bottom: 20px;
    }
  }
}
</style>




