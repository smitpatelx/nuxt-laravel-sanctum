<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-4">
    <v-card
      elevation="0"
      class="align-self-center w-100 border border-blue-grey-darken-1 px-4 pt-8 pb-4 max-w-400 d-flex flex-column align-center justify-center ga-4"
      style="overflow: visible"
    >
      <form class="d-flex flex-column ga-3 w-100" @submit.prevent="handleLogin">
        <div>
          <h1 class="text-h5 font-weight-bold text-center">Login</h1>
          <p class="text-subtitle-1 text-blue-grey-lighten-1 text-center">
            Welcome to the login page
          </p>
        </div>

        <v-col>
          <v-text-field
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            dense
            required
            autocomplete="username"
            class="w-100"
            :disabled="loading"
          />

          <v-text-field
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            dense
            required
            autocomplete="current-password"
            class="w-100"
            maxlength="24"
            minlength="8"
            :disabled="loading"
          />
        </v-col>

        <div class="d-flex flex-column ga-2">
          <v-btn
            color="primary"
            class="w-100"
            type="submit"
            elevation="0"
            :loading="loading"
            :disabled="loading"
          >
            Login
          </v-btn>

          <NuxtLink to="/register">
            <v-btn
              color="blue-grey-darken-4"
              variant="plain"
              class="w-100"
              type="button"
              elevation="0"
              :disabled="loading"
              size="small"
            >
              Register a new account
            </v-btn>
          </NuxtLink>
        </div>
      </form>

      <div
        v-if="loginError"
        class="w-100 max-w-400 position-absolute bottom-0 left-0"
        style="transform: translateY(calc(100% + 1rem))"
      >
        <v-alert color="red" class="w-100">
          {{ loginError }}
        </v-alert>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { initializeLoginFow } from "~/lib";

const router = useRouter();

const loading = ref(false);
const loginError = ref<string | null>(null);

watch(loginError, () => {
  setTimeout(() => {
    loginError.value = null;
  }, 5000);
});

const handleLogin = async (e: { target: HTMLFormElement }) => {
  loading.value = true;
  const formData = new FormData(e.target);

  const email = formData.get("email");
  const password = formData.get("password");

  if (
    !email ||
    typeof email !== "string" ||
    !password ||
    typeof password !== "string"
  ) {
    loading.value = false;
    return;
  }

  try {
    const data = await initializeLoginFow({
      email,
      password,
    });
    router.push("/dashboard");
    loading.value = false;
  } catch (error) {
    if (error instanceof Error) {
      loginError.value = error.message;
    }
    loading.value = false;
  }
};
</script>

<style lang="css">
.max-w-400 {
  max-width: 400px;
}
</style>
