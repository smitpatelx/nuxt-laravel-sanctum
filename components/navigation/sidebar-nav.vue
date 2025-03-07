<template>
  <v-btn
    color="blue-darken-3"
    icon="mdi-arrow-expand-right"
    @click="toggleDrawer"
    size="x-small"
    variant="tonal"
    class="expand-icon"
    aria-open="false"
    v-if="isAuthenticated && !isOpen"
  />

  <v-navigation-drawer
    v-if="isAuthenticated"
    v-model="isOpen"
    class="display-relative"
  >
    <v-btn
      color="blue-darken-3"
      icon="mdi-arrow-expand-left"
      @click="toggleDrawer"
      size="x-small"
      variant="tonal"
      class="expand-icon"
      aria-open="true"
      v-if="isOpen"
    />

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
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        :color="itemColor"
        :variant="item.variant"
        :to="item.to"
        exact
        density="compact"
        rounded
        slim
      >
        <template #prepend>
          <v-icon size="small">{{ item.prependIcon }}</v-icon>
        </template>
        <v-list-item-title class="text-subtitle-1">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append="props">
      <div class="d-flex justify-center align-center ga-2 pb-2">
        <v-icon icon="mdi-tag" size="x-small" />
        <p class="text-subtitle-2 font-weight-bold text-center text-blue-grey">
          1.0.0
        </p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTheme } from "vuetify";
import { ALL_ROUTE } from "~/lib";

const theme = useTheme();
const appStore = useAppStore();
const isAuthenticated = computed(() => !!appStore.email);

const itemColor = computed(() =>
  theme.current.value.dark ? "blue" : "blue-darken-2"
);

const isOpen = ref(true);
const items = ref([
  {
    title: "Dashboard",
    prependIcon: "mdi-view-dashboard",
    variant: "text",
    to: ALL_ROUTE.dashboard,
  },
  {
    title: "Projects",
    prependIcon: "mdi-book",
    variant: "text",
    to: ALL_ROUTE.projects,
  },
  {
    title: "Time Entry",
    prependIcon: "mdi-timer-plus-outline",
    variant: "text",
    to: ALL_ROUTE.timeEntry,
  },
  {
    title: "Time Entry History",
    prependIcon: "mdi-book-clock-outline",
    variant: "text",
    to: "/time-entry-history",
  },
  {
    title: "Company",
    prependIcon: "mdi-domain",
    variant: "text",
    to: "/company",
  },
  {
    title: "User Management",
    prependIcon: "mdi-account-group",
    variant: "text",
    to: "/user-management",
  },
  {
    title: "Scheduler",
    prependIcon: "mdi-calendar-clock",
    variant: "text",
    to: "/scheduler",
  },
]);

const expandIcon = computed(() =>
  isOpen.value ? "mdi-arrow-expand-left" : "mdi-arrow-expand-right"
);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.v-navigation-drawer:hover .expand-icon {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.expand-icon[aria-open="true"] {
  opacity: 0;
  position: absolute;
  top: 2rem;
  left: 100%;
  z-index: 1000;
  transform: translateY(-50%);
  transform-origin: center;
  border-radius: 0 0.3rem 0.3rem 0;
  transition: opacity 0.3s ease-in-out;
}
.expand-icon[aria-open="false"] {
  position: fixed;
  top: 1.23rem;
  left: 1.5rem;
  z-index: 1000;
}
</style>
