<script setup lang="ts">
import Profile from "~/components/views/profile";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <Profile />
  </NuxtLayout>
</template>
