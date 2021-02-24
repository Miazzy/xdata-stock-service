<template>
  <div class="login">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="close-popup"></svg-icon>
      </span>
    </header>
    <div class="mall-logo">
      <img src="../../assets/image/login/logo.png" style="width:2rem;" />
    </div>
    <section class="login-info" style="margin-top:1rem;">
      <van-cell-group class="info-list">
        <van-field
          v-model="loginForm.emailPhone"
          clearable
          placeholder="手机/邮箱"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="loginForm.password"
          type="password"
          clearable
          placeholder="请输入密码/验证码"
        />
        <span class="forget-pwd">
          <svg-icon icon-class="question-mark"></svg-icon>
          <i>忘记密码？</i>
        </span>
        <span class="send-code" style="">
          <i style="">发送验证码</i>
        </span>
      </van-cell-group>
    </section>
    <div class="login-register-btns">
      <span class="login-btn" @click="handleUserLogin">登录</span>
      <span class="register-btn" @click="handleUserRegister">注册</span>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "login",

  setup() {
    const $router = useRouter();
    const { ctx } = getCurrentInstance();

    const loginForm = reactive({
      emailPhone: "",
      password: ""
    });

    //点击登录按钮事件
    const handleUserLogin = () => {
      console.log('handleUserLogin click');
    };

    //点击注册按钮事件
    const handleUserRegister = () => {
      console.log('handleUserRegister click');
    };

    return {
      $router,
      $toast: ctx.$toast,
      loginForm,
      handleUserRegister,
      handleUserLogin
    };
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/login.scss";
</style>
