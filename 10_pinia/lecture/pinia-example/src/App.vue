<script setup>
import Counter from './components/Counter.vue';
import Like from './components/Like.vue';
import { useCounterStore } from './stores/counter';
import { useLikeStore } from './stores/like';

const counter = useCounterStore();
const like = useLikeStore();
</script>
<!-- 
likeStore 를 만들고
like component에서 버튼으로 좋아요를 올려서
App Domponent 바인딩해서 보이게 해보기

getter 함수를 만들어서 좋아요 갯수를 5배 뻥튀기하기
-->
<template>
  <div>
    <h1>Pinia 상태관리 예제</h1>
    <h2>좋아요 갯수 : {{ like.like }}</h2>
    <h2>좋아요 갯수 뻥튀기 : {{ like.multiple }}</h2>
    <Like />
    <hr />
    <h2>App에서 보는 Counter : {{ counter.count }}</h2>
    <Counter />
    <Counter />
  </div>
</template>

<style scoped></style>
