<script setup lang="ts">
import Login from "~/components/views/login.vue";

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <NuxtLayout>
    <Login />
  </NuxtLayout>
</template>
