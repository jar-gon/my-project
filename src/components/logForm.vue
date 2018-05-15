<template>
  <div id="logForm">
    <div class="login-form">
      <div class="g-form">
        <div class="g-form-line">
          <span class="g-form-label">用户名：</span>
          <div class="g-form-input">
            <input type="text" v-model="username" placeholder="请输入用户名" />
          </div>
          <span class="g-form-error">{{userCheck.errorText}}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">密码：</span>
          <div class="g-form-input">
            <input type="password" v-model="password" placeholder="请输入密码" />
          </div>
          <span class="g-form-error">{{pwdCheck.errorText}}</span>
        </div>
        <div class="g-form-line">
          <div class="g-form-btn">
            <input class="button" type="button" @click="onLogin" value="登录" />
          </div>
        </div>
        <p>{{errorText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logForm',
    data () {
      return {
        username: '',
        password: '',
        errorText: ''
      }
    },
    computed: {
      userCheck () {
        let errorText, status
        if (/^\w+$/g.test(this.username)) {
          status = true
          errorText = ''
        } else {
          status = false
          errorText = '用户名只能使用数字、字母及下划线_'
        }
        if (!this.flag) {
          this.flag = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      },
      pwdCheck () {
        let errorText, status
        if (/^\w{6,}$/g.test(this.password)) {
          status = true
          errorText = ''
        } else {
          status = false
          errorText = '密码必须大于6位的数字、字母及下划线_'
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
        if (!this.userCheck.status) {
          this.errorText = '用户名只能使用数字、字母及下划线_'
        } else if (!this.pwdCheck.status) {
          this.errorText = '密码必须大于6位的数字、字母及下划线_'
        } else {
          this.errorText = ''
          this.$emit('has-log', this.username)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>