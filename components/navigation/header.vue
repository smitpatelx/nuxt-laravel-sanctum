<template>
  <v-app-bar
    density="compact"
    class="w-100 border-b border-blue-grey-lighten-1"
    height="72"
    elevation="0"
  >
    <v-app-bar-title :class="isAuthenticated ? 'pl-8' : ''">
      <NuxtLink to="/" class="d-flex align-center">
        <img
          src="https://static.smitpatelx.com/smitpatelx-v2/logo/smit-dark.svg"
          alt="Dark Logo"
          height="28"
          width="90"
        />
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
        <AuthMenu>
          <template #trigger="props">
            <v-btn
              color="grey-darken-1"
              v-bind="props"
              variant="outlined"
              class="auth-menu-trigger"
              rounded="lg"
              size="large"
            >
              <div class="d-flex align-center ga-1">
                <v-icon
                  color="blue-grey-darken-3"
                  icon="mdi-account-circle-outline"
                  size="large"
                  start
                />

                <div class="d-flex flex-column align-start">
                  <span
                    class="text-capitalize text-subtitle-2"
                    style="line-height: 1.4"
                  >
                    {{ appStore?.name }}
                  </span>
                  <span
                    class="flex-grow-0 text-lowercase text-caption text-truncate overflow-hidden"
                    style="line-height: 1.3; max-width: 180px"
                  >
                    {{ appStore?.email }}
                  </span>
                </div>

                <v-icon
                  color="blue-grey-lighten-2"
                  icon="mdi-chevron-down"
                  size="small"
                  end
                  class="dropdown-icon"
                  v-bind="props"
                />
              </div>
            </v-btn>
          </template>
        </AuthMenu>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import AuthMenu from "~/components/navigation/auth-menu.vue";

const { logout } = useSanctumAuth();
const appStore = useAppStore();

const isAuthenticated = computed(() => !!appStore.email);

const handleLogout = async () => {
  try {
    await logout();
  } finally {
    appStore.resetAuthData();
    router.push("/login");
  }
};
</script>

<style lang="css">
.dropdown-icon {
  transition: all 0.3s ease-in-out;
  &[aria-expanded="true"] {
    transform: rotate(-180deg);
    transition: all 0.3s ease-in-out;
  }
}
.auth-menu-trigger.v-btn--variant-outlined {
  border: thin solid #cccccc;
}
</style>
