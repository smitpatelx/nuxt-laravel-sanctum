<script setup lang="ts">
import Login from "~/components/views/login.vue";
import { requireGuest } from "~/lib";

requireGuest();
</script>

<template>
  <NuxtLayout>
    <Login />
  </NuxtLayout>
</template>
