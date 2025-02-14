<script setup lang="ts">
import Register from "~/components/views/register.vue";
import { requireGuest } from "~/lib";

requireGuest();
</script>

<template>
  <NuxtLayout>
    <Register />
  </NuxtLayout>
</template>
