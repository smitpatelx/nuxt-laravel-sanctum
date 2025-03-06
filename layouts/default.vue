<script setup lang="ts">
import Header from "~/components/navigation/header";
import SidebarNav from "~/components/navigation/sidebar-nav";
import ToastProvider from "~/components/generic/toast-provider";
</script>

<template>
  <ToastProvider>
    <v-app>
      <div class="h-100 d-flex flex-column">
        <Header />

        <v-main class="flex-1-1 position-relative">
          <SidebarNav />

          <v-container class="h-100 pa-0" fluid>
            <slot />
          </v-container>
        </v-main>
      </div>
    </v-app>
  </ToastProvider>
</template>
