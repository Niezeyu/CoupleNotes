<template>
  <div class="mainPage">
    <div class="topImage">
      <img src="../../assets/love.jpg" alt="" />
    </div>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-field
          v-model="tel"
          name="手机号"
          left-icon="phone-o"
          size="large"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          size="large"
          label="密码"
          left-icon="goods-collect-o"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="bottomBtn">
          <van-button round block type="primary" native-type="submit"
            >登 录</van-button
          >
          <van-button
            class="goRegister"
            round
            block
            type="warning"
            @click="goRegister"
            >没有账号？去注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      password: ""
    };
  },
  methods: {
    async onSubmit() {
      const toast = this.$toast.loading({
        duration: 0,
        message: "登陆中",
        forbidClick: true,
        loadingType: "spinner"
      });
      const { data } = await this.$$Api.login.login({
        tel: this.tel,
        password: this.password
      });
      toast.clear();
      if (data.code == 200) {
        this.$notify({ type: "success", message: data.msg });
        this.$router.push({
          path: "/home"
        });
      } else {
        this.$notify({ type: "warning", message: data.msg });
      }
    },
    goRegister() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style>
.mainPage {
  width: 100vw;
  min-height: 100vh;
}
.topImage {
  width: 100%;
}
.topImage img {
  width: 100%;
}
.loginForm {
  width: 100%;
  margin-top: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.bottomBtn {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.goRegister {
  margin-top: 20px;
}
</style>
