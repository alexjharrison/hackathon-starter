<template>
  <form @submit.prevent="register" class="px-4">
    <card class="w-24rem mx-auto mt-5 max-w-full">
      <template #title>Register</template>
      <template #subtitle>Fill form to register</template>
      <template #content>
        <div class="text-left p-fluid p-grid p-formgrid">
          <span class="p-float-label mb-4">
            <input-text
              type="text"
              id="first_name"
              v-model="formValues.first_name"
              required
            />
            <label for="first_name">First Name</label>
          </span>
          <span class="p-float-label mb-4">
            <input-text
              type="text"
              id="last_name"
              v-model="formValues.last_name"
              required
            />
            <label for="last_name">Last Name</label>
          </span>
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
            <password toggleMask v-model="formValues.password">
              <template #footer>
                <divider />
                <p class="p-mt-2">Suggestions</p>
                <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </password>
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
import Password from "primevue/password";
import { useAuth } from "../../hooks/auth";

const { formValues, register, isSubmitting } = useAuth();
</script>
