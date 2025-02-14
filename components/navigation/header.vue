<template>
  <v-app-bar
    density="compact"
    class="w-100 border-b border-blue-grey-lighten-1"
    elevation="0"
  >
    <v-app-bar-title>
      <NuxtLink to="/" class="text-h6 font-weight-bold">
        Auth Sanctum
      </NuxtLink>
    </v-app-bar-title>

    <template v-if="!isAuthenticated" v-slot:append>
      <div class="d-flex align-center ga-2 h-100 pr-4">
        <NuxtLink to="/login">
          <v-btn size="small" prepend-icon="mdi-login"> Login </v-btn>
        </NuxtLink>

        <NuxtLink to="/register">
          <v-btn size="small" prepend-icon="mdi-account-plus"> Register </v-btn>
        </NuxtLink>
      </div>
    </template>

    <template v-else v-slot:append>
      <div class="d-flex align-center ga-2 h-100 pr-2">
        <v-btn
          color="red"
          prepend-icon="mdi-logout"
          size="small"
          @click="handleLogout"
        >
          Logout
        </v-btn>

        <v-divider vertical />

        <NuxtLink to="/dashboard">
          <v-btn
            color="blue-grey-darken-3"
            prepend-icon="mdi-account"
            size="small"
            class="text-capitalize text-subtitle-1"
          >
            {{ authUser?.name }}
          </v-btn>
        </NuxtLink>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { getAuthAccount } from "~/lib";

const { logout } = useSanctumAuth();
const authUser = getAuthAccount();

const isAuthenticated = authUser.value !== null;

const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.push("/login");
};
</script>

<style lang="css">
a {
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
}
</style>
