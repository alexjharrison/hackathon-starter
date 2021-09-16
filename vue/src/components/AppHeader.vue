<template>
  <div
    id="app-header"
    class="flex border-bottom-1 border-primary py-2 justify-content-around"
  >
    <router-link :to="{ name: 'Home' }">
      <p-button label="Home" />
    </router-link>
    <router-link :to="{ name: 'Login' }">
      <p-button label="Login" />
    </router-link>
    <router-link :to="{ name: 'Register' }">
      <p-button label="Register" />
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#app-header {
  background-color: var(--surface-c);
}
</style>
