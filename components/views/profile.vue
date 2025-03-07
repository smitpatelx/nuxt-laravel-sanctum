<template>
  <div class="h-100 ga-8 pa-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="w-100 text-left">Account Profile</h2>
          <p class="w-100 text-left">Update Profile Information</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-divider />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="8" md="8" lg="5" xl="4">
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

            <div class="d-flex justify-end">
              <v-btn
                type="submit"
                color="primary"
                variant="flat"
                :loading="loading"
                :disabled="loading"
              >
                Update
              </v-btn>
            </div>
          </form>
        </v-col>
      </v-row>
    </v-container>
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
