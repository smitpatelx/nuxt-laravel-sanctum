<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-4">
    <v-card
      elevation="0"
      class="align-self-center w-100 border border-blue-grey-darken-1 px-4 pt-8 pb-4 max-w-400 d-flex flex-column align-center justify-center ga-8"
      style="overflow: visible"
    >
      <div class="w-100 d-flex flex-column ga-1">
        <h2 class="w-100 text-center">Update Account Info</h2>
        <p class="w-100 text-center text-capitalize">Welcome {{ name }}</p>
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

      <v-alert
        v-if="updateError"
        type="error"
        dismissible
        border="left"
        elevation="2"
      >
        {{ updateError }}
      </v-alert>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getAuthAccount } from "~/lib";

const authUser = getAuthAccount();

const name = ref<string | null>(authUser?.value?.name ?? null);
const email = ref<string | null>(authUser?.value?.email ?? null);

const loading = ref(false);
const updateError = ref<string | null>(null);

const handleUpdate = async () => {
  console.log("Updating account info...");
};
</script>
