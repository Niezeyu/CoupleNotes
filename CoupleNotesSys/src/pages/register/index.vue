<template>
  <div class="mainPage">
    <van-nav-bar
      title="标题"
      left-text="登录"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form class="form" @submit="onSubmit">
      <van-field
        v-model="username"
        name="姓名"
        label="用户名"
        left-icon="contact"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="tel"
        name="手机号"
        left-icon="phone-o"
        label="手机号"
        placeholder="手机号"
        type="number"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        left-icon="friends-o"
        :rules="[{ required: true, message: '请选择性别' }]"
        name="radio"
        label="性  别"
      >
        <template #input>
          <van-radio-group v-model="gender" direction="horizontal">
            <van-radio name="1">小哥哥</van-radio>
            <van-radio name="2">小姐姐</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        left-icon="goods-collect-o"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin-top: 50px;">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: undefined,
      tel: undefined,
      password: undefined,
      gender: undefined
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/login"
      });
    },
    async onSubmit() {
      const toast = this.$toast.loading({
        duration: 0,
        message: "登陆中",
        forbidClick: true,
        loadingType: "spinner"
      });
      const { data } = await this.$$Api.login.register({
        username: this.username,
        tel: this.tel,
        password: this.password,
        gender: this.gender
      });
      toast.clear();
      this.$notify({ type: "success", message: data.msg });
      if (data.code == 200) {
        this.username = undefined;
        this.tel = undefined;
        this.password = undefined;
        this.gender = undefined;
      }
    }
  }
};
</script>

<style>
.mainPage {
  width: 100vw;
  min-height: 100vh;
}
.form {
  padding: 20px;
  margin-top: 50px;
}
</style>
