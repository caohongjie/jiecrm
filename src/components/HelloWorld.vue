<template>
  <div class="hello">
    {{ name }}
  </div>
</template>

<script setup>
import { ref } from "vue"
const name = ref('dawdwa')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  color: red;
}
</style>
