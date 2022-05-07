<template>
  <div>
      Home
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const { appContext: { config: { globalProperties } } } = getCurrentInstance()

console.log(globalProperties)

const getData =  async () => {
  const res = await globalProperties.$axios.demo.hello()

  console.log(res)
}

// getData()

</script>

<style>

</style>