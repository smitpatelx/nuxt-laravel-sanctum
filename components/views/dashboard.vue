<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-4">
    <v-card
      elevation="0"
      class="align-self-center w-100 border border-blue-grey-darken-1 px-4 pt-8 pb-4 max-w-400 d-flex flex-column align-center justify-center ga-8"
      style="overflow: visible"
    >
      <div class="w-100 d-flex flex-column ga-1">
        <p class="w-100 text-center text-capitalize">Welcome {{ name }}</p>
        <h2 class="w-100 text-center">Update Account Info</h2>
      </div>

      <form
        class="w-100 d-flex flex-column ga-3 w-100"
        @submit.prevent="handleUpdate"
      >
        <v-text-field
          variant="outlined"
          dense
          v-model="name"
          label="Name"
          name="name"
          type="text"
          required
        />

        <v-text-field
          variant="outlined"
          dense
          v-model="email"
          label="Email"
          name="email"
          type="email"
          required
        />

        <div class="d-flex justify-center">
          <v-btn type="submit" color="primary" :loading="loading" class="w-100">
            Update
          </v-btn>
        </div>
      </form>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from "axios";
import { ref, inject } from "vue";
import { updateCurrentUser } from "~/lib";
import { ToastProvider } from "../generic/toast-provider.vue";

const toast = inject<ToastProvider>("toast", {} as ToastProvider);
const appStore = useAppStore();

const name = ref<string | null>(appStore?.name ?? null);
const email = ref<string | null>(appStore?.email ?? null);

const loading = ref(false);

const handleUpdate = async (e: { target: HTMLFormElement }) => {
  loading.value = true;

  if (!name.value || !email.value) {
    toast.show({
      message: "Name and email are required",
      color: "error",
    });
    loading.value = false;
    return;
  }

  try {
    // Update account info
    const { data } = await updateCurrentUser({
      name: name.value,
      email: email.value,
    });
    toast.show({
      message: "User updated successfully",
      color: "success",
    });
    appStore.setAuthData({ name: data.name, email: data.email });
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.show({
        message: error.message ?? "Failed to update user",
        color: "error",
      });
    }
  } finally {
    loading.value = false;
  }
};
</script>
