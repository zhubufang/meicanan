<template>
  <div class="sign flex flex-justify-center flex-align-center">
    <div class="form">
      <cube-input v-model="userName" placeholder="姓名" @blur="fixScroll" ></cube-input>
      <cube-input v-model="mobile" type="tel" placeholder="手机号码"  @blur="fixScroll"></cube-input>
      <cube-button @click.native="sign">签到</cube-button>
    </div>
  </div>
</template>

<script>
import { checkMobile } from "@/utils/utils";
export default {
  data() {
    return {
      userName: null,
      mobile: null,
      code: null
    };
  },
  mounted() {
    this.getCode();
  },
  methods: {
    fixScroll() {
      window.scrollTo(0, scroll);
    },
    getCode() {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      this.code = vars[0].substring(5);
      //console.log(this.code)
    },
    sign() {
      if (!this.userName) {
        this.$createToast({
          txt: "请完善信息",
          type: "txt"
        }).show();
        return fasle;
      }
      if (!checkMobile(this.mobile)) return;
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

.sign {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .form {
    width: 80%;

    .cube-input {
      margin-bottom: 20px;
    }
  }
}
</style>




