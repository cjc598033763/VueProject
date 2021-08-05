<template>
    <div class="login-container">
      <div class="login-head"></div>
      <el-form class="login-form" ref="form" :model="user">
        <el-form-item>
          <el-input v-model="user.moblie"
          placeholder = "请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>
            我已阅读并同意用户协议和隐私条款
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
</div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        moblie: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}

</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("20210804225249.jpg");
  background-size: contain
}
.login-form {
  background-color: #fff;
  padding: 50px;
  min-width: 300px;
}
.login-btn {
  width: 100%;

}
.login-head {
  height: 57px;
  // background: url("./login")

}
</style>
