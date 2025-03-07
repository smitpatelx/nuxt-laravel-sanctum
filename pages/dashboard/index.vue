<script setup lang="ts">
import Dashboard from "~/components/views/dashboard";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <Dashboard />
  </NuxtLayout>
</template>
