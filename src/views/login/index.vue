<template>
  <div class="login">
    <n-form :model="formState" ref="formRef" :rules="rules">
      <n-form-item path="username" label="用户名">
        <n-input v-model:value="formState.username" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input
          v-model:value="formState.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item>
        <n-button @click="submit" style="width: 100%">登录</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import md5 from 'md5'
import userStore from '@/store/user'

const user = userStore()
const formRef = ref(null)

const formState = reactive({
  username: 'super-admin',
  password: '123456',
})
const rules = {
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur'],
  },
}
const submit = () => {
  formRef.value
    .validate()
    .then(() => {
      user.doLogin({
        username: formState.username,
        password: md5(formState.password),
      })
    })
    .catch((e) => {})
}
</script>
<style lang="less" scoped>
.login {
  margin: 20% auto 0;
  width: 30%;
}
</style>
