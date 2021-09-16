<template>
  <toast />
  <app-header />
  <router-view />
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import AppHeader from "@/components/AppHeader.vue";
</script>

<style lang="scss">
body {
  background-color: var(--surface-a);
  color: var(--text-color);
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
}

.p-card {
  background-color: var(--surface-c);
}
</style>
