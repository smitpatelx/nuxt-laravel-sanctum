<script setup lang="ts">
import Header from "~/components/navigation/header.vue";
</script>

<template>
  <v-app class="h-100">
    <Header />

    <v-main class="h-100">
      <v-container class="h-100 pa-0" fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
