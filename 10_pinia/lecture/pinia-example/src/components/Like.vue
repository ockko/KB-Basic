<script setup>
import { useLikeStore } from '@/stores/like';

const like = useLikeStore();
const { increase } = like;
</script>

<template>
  <button @click="increase">좋아요</button>
</template>

<style scoped></style>
