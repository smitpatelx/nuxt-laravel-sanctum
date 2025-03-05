<script setup lang="ts">
import Register from "~/components/views/register.vue";

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <NuxtLayout>
    <Register />
  </NuxtLayout>
</template>
