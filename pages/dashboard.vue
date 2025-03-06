<script setup lang="ts">
import Dashboard from "~/components/views/dashboard";

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <NuxtLayout>
    <Dashboard />
  </NuxtLayout>
</template>
