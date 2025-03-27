<script setup>
// defineProps
// 부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수
defineProps({
  id: [Number, String], // 문자열과 숫자형만 가능
  name: String, // 문자열만 가능
  checked: {
    type: Boolean, // 불리언타입만 가능
    default: false,
    required: true, // required는 기본적으로 true
  },
});
</script>

<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>

<style scoped></style>
