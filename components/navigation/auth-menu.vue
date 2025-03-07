<template>
  <v-menu transition="slide-x-reverse-transition" offset="4" location="bottom">
    <template v-slot:activator="{ props }">
      <slot name="trigger" v-bind="props">
        <v-btn color="primary"> Open Menu </v-btn>
      </slot>
    </template>
    <v-list
      density="compact"
      elevation="0"
      class="border border-blue-grey-darken-1 pa-1 align-self-end"
      rounded="lg"
      width="200"
    >
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        :color="itemColor"
        :base-color="item.baseColor"
        :variant="item.variant"
        @click="item.onClick"
        :to="item.to"
        density="compact"
        rounded
        slim
      >
        <template #prepend>
          <v-icon size="x-small">{{ item.prependIcon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { ALL_ROUTE } from "~/lib";

const theme = useTheme();
const appStore = useAppStore();
const router = useRouter();
const { logout } = useSanctumAuth();

const itemColor = computed(() =>
  theme.current.value.dark ? "blue" : "blue-darken-2"
);

const handleDashboardClick = () => {
  router.push("/dashboard");
};

const handleLogoutClick = async () => {
  try {
    await logout();
  } finally {
    appStore.resetAuthData();
    router.push("/login");
  }
};

const items = ref([
  {
    title: "Dashboard",
    prependIcon: "mdi-view-dashboard",
    variant: "text",
    to: ALL_ROUTE.dashboard,
  },
  {
    title: "Profile",
    prependIcon: "mdi-account-cog",
    variant: "text",
    to: ALL_ROUTE.profile,
  },
  {
    title: "Logout",
    prependIcon: "mdi-logout",
    baseColor: "error",
    color: "error",
    variant: "text",
    onClick: handleLogoutClick,
  },
]);
</script>
