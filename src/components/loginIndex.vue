<template>
  <div class="loginWrap">
    {{ name }}
  </div>
</template>

<script setup>
import { ref } from "vue"
const name = ref('dawdwa')
</script>

<style scoped lang="less">
.loginWrap {
  color: @grey;
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/login/loginBg.jpg') no-repeat;
  background-size: cover;
}
</style>
