<template>
  <div class="h-100 ga-8 pa-4">
    <v-container>
      <v-row align="center">
        <v-col class="me-auto" cols="auto">
          <h2 class="w-100 text-left">Projects</h2>
        </v-col>

        <v-col cols="auto">
          <v-btn
            prepend-icon="mdi-plus"
            elevation="0"
            variant="flat"
            color="primary"
          >
            Create Project
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-divider />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
        >
          <v-card
            elevation="0"
            rounded="lg"
            variant="outlined"
            class="px-2 pb-4 border border-accent"
            hover
            ripple
            @click="$emit('clicked')"
          >
            <v-container>
              <v-row align="center">
                <v-col class="me-auto" cols="auto">
                  <h6 class="text-h6 font-weight-bold text-tertiary">
                    {{ project.title }}
                  </h6>
                </v-col>
                <v-col cols="auto">
                  <v-fab
                    icon="mdi-chevron-right"
                    size="x-small"
                    variant="text"
                  />
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <span
                    class="d-flex align-center ga-1 text-subtitle-2 text-secondary"
                  >
                    <v-icon
                      size="16"
                      class="me-1"
                      icon="mdi-map-marker"
                      color="blue-grey"
                    />
                    {{ project.subtitle }}
                  </span>
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="auto" class="me-auto">
                  <span
                    class="d-flex align-center ga-1 text-subtitle-2 text-secondary"
                  >
                    <v-icon
                      size="16"
                      class="me-1"
                      icon="mdi-calendar"
                      color="blue-grey"
                    />
                    Start Date: {{ formatStringDate(project.startDate) }}
                  </span>
                </v-col>
                <v-col cols="auto">
                  <span
                    class="d-flex align-center ga-1 text-subtitle-2 text-secondary"
                  >
                    <v-icon
                      size="16"
                      class="me-1"
                      icon="mdi-calendar"
                      color="blue-grey"
                    />
                    End Date: {{ formatStringDate(project.endDate) }}
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <span
                    :class="`d-flex align-center ga-4 text-subtitle-2 ${project.progressTextColor}`"
                  >
                    {{ project.completedPercentage }}%
                    <v-progress-linear
                      :model-value="project.completedPercentage"
                      :color="project.progressColor"
                      :width="4"
                    />
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { formatStringDate } from "~/lib";
import { useTheme } from "vuetify";

const theme = useTheme();

const generateRandomNum = () => Math.round(Math.random() * 100);

const getColor = (percentage: number) => {
  if (percentage < 50) return "red";
  if (percentage < 80) return "orange";
  return "green";
};

const isDarkMode = computed(() => theme.global.current.value.dark);

const getProgressColors = (percentage: number) => {
  const baseColor = getColor(percentage);

  return {
    progressTextColor: isDarkMode.value
      ? `text-${baseColor}-lighten-2`
      : `text-${baseColor}-darken-3`,
    progressColor: isDarkMode.value
      ? `${baseColor}-lighten-1`
      : `${baseColor}-darken-1`,
  };
};

const projects = ref(
  Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `Location ${index + 1}`,
      subtitle: "Stanford, ON, Canada - R7D 8W6",
      startDate: "2021-01-01",
      endDate: "2021-01-31",
      completedPercentage: generateRandomNum(),
    }))
    .map((project) => ({
      ...project,
      ...getProgressColors(project.completedPercentage),
    }))
);
</script>
