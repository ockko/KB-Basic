<script setup>
import { ref, watch } from 'vue'

const x = ref(0)
const result = ref(0)

watch(x, (current, old) => {
  console.log(`이전 값: ${old}, 새로운 값: ${current}`)
})
</script>

<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>

<style scoped></style>
