<script setup lang="ts">
import Dashboard from "~/components/views/dashboard.vue";
import { requireAuth } from "~/lib";

requireAuth();
</script>

<template>
  <NuxtLayout>
    <Dashboard />
  </NuxtLayout>
</template>
