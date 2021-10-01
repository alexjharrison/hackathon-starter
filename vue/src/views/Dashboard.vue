<template>
  <div>Logged In</div>
  <h1>Upload File</h1>
  <FileUpload
    @before-send="addToken"
    mode="basic"
    name="file"
    url="/files/upload"
  />
  <h1>All Users</h1>
  <ul>
    <li v-for="user in users?.auth_users">
      {{ user.first_name }} {{ user.last_name }}
      <span class="p-text-secondary">({{ user.email }})</span>
    </li>
  </ul>
  <h1>All Files</h1>
  <div v-for="file in files?.file" :key="file.id">
    <img
      v-if="file.mimetype.includes('image')"
      :src="`/files/${file.id}`"
      alt=""
    />
    <br />
    <a :href="`/files/${file.id}`">{{ file.filename }}</a>
  </div>
</template>

<script setup lang="ts">
import FileUpload from "primevue/fileupload";
import { useFilesStreamSubscription, useUsersStreamSubscription } from "../api";
import { useAuth } from "../hooks/auth";

const { data: users } = useUsersStreamSubscription();
const { data: files } = useFilesStreamSubscription();

const { token } = useAuth();

const addToken = ({ xhr }: { xhr: XMLHttpRequest }) =>
  xhr.setRequestHeader("Authorization", `Bearer ${token.value}`);
</script>
