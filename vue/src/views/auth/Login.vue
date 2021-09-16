<template>
  <form @submit.prevent="login" class="px-4">
    <card class="w-24rem mx-auto mt-5 max-w-full">
      <template #title>Login</template>
      <template #subtitle>Fill form to login</template>
      <template #content>
        <div class="text-left p-fluid p-grid p-formgrid">
          <span class="p-float-label mb-4">
            <input-text
              type="text"
              id="email"
              v-model="formValues.email"
              required
            />
            <label for="email">Email</label>
          </span>
          <span class="p-float-label" input-class="w-full">
            <input-text
              type="password"
              v-model="formValues.password"
              required
            />
            <label for="password">Password</label>
          </span>
        </div>
      </template>
      <template #footer>
        <p-button type="submit" label="submit" :disabled="isSubmitting" />
      </template>
    </card>
  </form>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import { useAuth } from "../../hooks/auth";

const { formValues, login, isSubmitting } = useAuth();
</script>
