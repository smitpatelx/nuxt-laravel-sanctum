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
      class="border border-blue-grey-darken-1 pa-1 pb-0 align-self-end"
      rounded="lg"
      width="200"
    >
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        :color="item.color"
        :base-color="item.baseColor"
        :variant="item.variant"
        @click="item.onClick"
        density="compact"
        rounded
        slim
        nav
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
const appStore = useAppStore();
const router = useRouter();
const { logout } = useSanctumAuth();

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
    baseColor: "grey-darken-4",
    color: "grey-darken-4",
    variant: "text",
    onClick: handleDashboardClick,
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
