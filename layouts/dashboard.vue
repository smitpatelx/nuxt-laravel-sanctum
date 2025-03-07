<script setup lang="ts">
import Header from "~/components/navigation/header";
import SidebarNav from "~/components/navigation/sidebar-nav";
import ToastProvider from "~/components/generic/toast-provider";
</script>

<template>
  <ToastProvider>
    <v-app>
      <SidebarNav />

      <v-main class="w-100 flex-1-1 position-relative">
        <Header hide-app-icon />

        <v-container class="h-100 pa-0 overflow-x-hidden overflow-y-auto" fluid>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </ToastProvider>
</template>
