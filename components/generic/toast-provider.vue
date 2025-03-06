<template>
  <slot />
  <v-snackbar v-model="isVisible" :color="color">
    {{ message }}
    <template #actions>
      <v-btn variant="text" @click="isVisible = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";

const DEFAULT_TIMEOUT = 5000;

const isVisible = ref(false);
const message = ref("");
const color = ref("");
const timeout = ref<NodeJS.Timeout | null>(null);

const show = (
  props: { message: string; color: string },
  timeoutInternal = DEFAULT_TIMEOUT
) => {
  message.value = props.message;
  color.value = props.color;
  isVisible.value = true;

  timeout.value = setTimeout(() => {
    isVisible.value = false;
  }, timeoutInternal);
};

const hide = () => {
  isVisible.value = false;
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
};

const providerValue = { show, hide };
export type ToastProvider = typeof providerValue;
provide("toast", providerValue);
</script>
