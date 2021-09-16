<template>
  <div>Logged In</div>
  <h1>All Users</h1>
  <ul>
    <li v-for="user in data?.auth_users">
      {{ user.first_name }} {{ user.last_name }}
      <span class="p-text-secondary">({{ user.email }})</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUsersStreamSubscription } from "../api";

const { data } = useUsersStreamSubscription();
</script>
