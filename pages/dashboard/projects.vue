<script setup lang="ts">
import Projects from "~/components/views/projects";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <Projects />
  </NuxtLayout>
</template>
