<script setup lang="ts">
import TimeEntry from "~/components/views/time-entry";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <TimeEntry />
  </NuxtLayout>
</template>
