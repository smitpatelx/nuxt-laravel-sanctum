<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-4">
    <v-card
      elevation="0"
      class="align-self-center w-100 border border-blue-grey-darken-1 px-4 pt-8 pb-4 max-w-400 d-flex flex-column align-center justify-center ga-4"
      style="overflow: visible"
    >
      <form
        class="d-flex flex-column ga-3 w-100"
        @submit.prevent="handleRegister"
      >
        <div>
          <h1 class="text-h5 font-weight-bold text-center">Register</h1>
          <p class="text-subtitle-1 text-blue-grey-lighten-1 text-center">
            Do not have an account? Register here
          </p>
        </div>

        <v-col>
          <v-text-field
            variant="outlined"
            label="Name"
            type="text"
            name="name"
            dense
            required
            autocomplete="name"
            class="w-100"
            :disabled="loading"
          />

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

          <v-text-field
            variant="outlined"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
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
            Register
          </v-btn>

          <NuxtLink to="/login">
            <v-btn
              color="blue-grey-darken-4"
              variant="plain"
              class="w-100"
              type="button"
              elevation="0"
              :disabled="loading"
              size="small"
            >
              Already have an account?
            </v-btn>
          </NuxtLink>
        </div>
      </form>

      <div
        v-if="registerError"
        class="w-100 max-w-400 position-absolute bottom-0 left-0"
        style="transform: translateY(calc(100% + 1rem))"
      >
        <v-alert color="red" class="w-100">
          {{ registerError }}
        </v-alert>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { initializeRegisterFlow } from "~/lib";

const router = useRouter();
const config = useRuntimeConfig();

const loading = ref(false);
const registerError = ref<string | null>(null);

watch(registerError, () => {
  setTimeout(() => {
    registerError.value = null;
  }, 5000);
});

const handleRegister = async (e: { target: HTMLFormElement }) => {
  loading.value = true;
  const formData = new FormData(e.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (
    !name ||
    typeof name !== "string" ||
    !email ||
    typeof email !== "string" ||
    !password ||
    typeof password !== "string" ||
    !confirmPassword ||
    typeof confirmPassword !== "string" ||
    password !== confirmPassword
  ) {
    loading.value = false;
    return;
  }

  try {
    const data = await initializeRegisterFlow({
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    });
    loading.value = false;
    router.push("/login");
  } catch (error) {
    if (error instanceof Error) {
      console.log({ error });
      registerError.value = error.message;
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
