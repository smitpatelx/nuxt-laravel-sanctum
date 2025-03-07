<template>
  <div class="h-100 ga-8 pa-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="w-100 text-left">Dashboard</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-divider />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="item in dashboardItems"
          :key="item.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
        >
          <v-card
            elevation="0"
            rounded="lg"
            variant="outlined"
            class="px-2 pb-4 border border-accent"
          >
            <v-card-title class="text-h6 font-weight-bold">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle class="text-h6">
              {{ item.subtitle }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const generateRandomNum = () => Math.round(Math.random() * 100);

const dashboardItems = ref([
  {
    title: "Companies",
    subtitle: generateRandomNum(),
  },
  {
    title: "Projects",
    subtitle: generateRandomNum(),
  },
  {
    title: "Tasks",
    subtitle: generateRandomNum(),
  },
  {
    title: "Users",
    subtitle: generateRandomNum(),
  },
  {
    title: "Roles",
    subtitle: generateRandomNum(),
  },
  {
    title: "Permissions",
    subtitle: generateRandomNum(),
  },
]);
</script>
