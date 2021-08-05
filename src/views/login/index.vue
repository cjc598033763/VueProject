<template>
    <div class="login-container">
      <div class="login-head"></div>
      <!-- 配置Form表单验证：
      1.必须给el-form组件绑定model为表单数据对象
      2.给需要验证的表单项el-form-item绑定 prop属性
        注意： prop 属性需要制定表单对象中的数据名称
      3.通过 el-form 组件的rule属性配置验证规则-->
      <el-form class="login-form" ref="form" :model="user" :rules="formRules">
        <el-form-item prop="moblie">
          <el-input v-model="user.moblie"
          placeholder = "请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>
            我已阅读并同意用户协议和隐私条款
        </el-form-item>
        <el-form-item>
          <el-button :loading="loginloading" class="login-btn" type="primary" @click="onlogin">登录</el-button>
        </el-form-item>
      </el-form>
</div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        moblie: '',
        code: ''
      },
      checked: false,
      loginloading: false,
      formRules: { // 表单验证规则配置
        // 要验证是数据名称： 规则列表数组
        moblie: [
          { required: true, message: '手机号不能为空', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的密码格式', trigger: 'blur' }

        ]
      }
    }
  },
  methods: {
    onlogin () {
      // 获取表单数据
      const user = this.user
      // 开启loading
      this.loginloading = true
      // 表单验证
      // 验证通过， 提交登录
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        // data 用来设置 POST 请求体
        data: user
      }).then(res => {
        console.log(res)
        // 关闭loading
        this.loginloading = false
        // 登录成功
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      }).catch(err => {
        console.log('登录失败', err)
        // 关闭loading
        this.loginloading = false
        // 登录失败
        this.$message.error('登录失败，手机号或密码不存在')
      })
      // 处理后端响应结果
      // 成功：xx
      // 失败的
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
  flex-direction: column;
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
  // width: 10%;
  height: 57px;
  background: url("0210805221016.jpg");
  margin-bottom: 30px

}
</style>
