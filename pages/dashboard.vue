<script setup lang="ts">
import Dashboard from "~/components/views/dashboard.vue";

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <NuxtLayout>
    <Dashboard />
  </NuxtLayout>
</template>
