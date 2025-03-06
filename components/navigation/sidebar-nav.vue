<template>
  <v-fab
    color="grey"
    :icon="expandIcon"
    @click="toggleDrawer"
    size="x-small"
    variant="tonal"
    class="expand-icon"
    v-if="isAuthenticated"
  />

  <v-navigation-drawer
    v-if="isAuthenticated"
    v-model="isOpen"
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-account-circle-outline"
        :subtitle="appStore?.email"
        :title="appStore?.name"
        slim
      />
    </v-list>

    <v-divider />

    <v-list class="display-relative" density="compact" nav>
      <v-list-item
        prepend-icon="mdi-folder"
        title="My Files"
        value="myfiles"
        density="compact"
        slim
        nav
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Shared with me"
        value="shared"
        density="compact"
        slim
        nav
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="Starred"
        value="starred"
        density="compact"
        slim
        nav
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const appStore = useAppStore();
const isAuthenticated = computed(() => !!appStore.email);

const isOpen = ref(true);

const expandIcon = computed(() =>
  isOpen.value ? "mdi-arrow-expand-left" : "mdi-arrow-expand-right"
);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.expand-icon {
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  z-index: 2000;
}
</style>
