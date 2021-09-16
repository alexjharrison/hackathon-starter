<template>
  <div id="app-header" class="border-bottom-1 border-primary py-2 px-4">
    <div class="flex align-items-center" v-if="isLoggedIn">
      <router-link :to="{ name: 'Home' }">
        <p-button label="Home" class="p-button-sm" />
      </router-link>
      <router-link :to="{ name: 'Dashboard' }">
        <p-button label="Dashboard" class="p-button-sm" />
      </router-link>
      <p-button label="Logout" @click="logout()" class="p-button-sm" />
      <p class="ml-auto">Hello {{ user?.first_name }}</p>
    </div>
    <div class="flex align-items-center" v-else>
      <router-link :to="{ name: 'Home' }">
        <p-button label="Home" class="p-button-sm" />
      </router-link>
      <router-link :to="{ name: 'Login' }">
        <p-button label="Login" class="p-button-sm" />
      </router-link>
      <router-link :to="{ name: 'Register' }">
        <p-button label="Register" class="p-button-sm" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "../hooks/auth";

const { logout, user, isLoggedIn } = useAuth();
</script>

<style scoped lang="scss">
#app-header {
  background-color: var(--surface-c);
  & > div {
    max-width: 1440px;
  }
}
.flex > * {
  margin-right: 1em;
}
</style>
