<template>
  <div class="card card-body">
    <h2>About</h2>
    <nav style="margin-top: 10px">
      <!-- 이름으로 link -->
      <router-link :to="{ name: 'class' }">🎈 학급 소개</router-link>
      <router-link to="/about/goal">🎈 목표</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>
<script setup></script>
