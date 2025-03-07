<template>
  <div class="h-100 ga-8 pa-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="w-100 text-left">Time Entry</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-divider />
        </v-col>
      </v-row>

      <v-row>
        <form
          class="w-100 d-flex flex-column ga-3 w-100"
          @submit.prevent="handleFormSubmission"
        >
          <v-container>
            <v-row>
              <v-col cols="12" md="6" xl="3">
                <v-sheet class="rounded border border-accent overflow-hidden">
                  <v-date-picker
                    color="primary"
                    v-model="date"
                    width="100%"
                    name="date"
                    class="rounded-0"
                  ></v-date-picker>
                </v-sheet>
              </v-col>

              <v-col cols="12" md="6" xl="3">
                <v-row dense>
                  <v-col cols="6">
                    <v-select
                      variant="outlined"
                      density="comfortable"
                      :items="HOUR_ITEMS"
                      v-model="hours"
                      label="Hour(s)"
                      name="hours"
                      item-title="text"
                      item-value="value"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      variant="outlined"
                      density="comfortable"
                      :items="MINUTES_ITEMS"
                      v-model="minutes"
                      label="Minute(s)"
                      name="minutes"
                      item-title="text"
                      item-value="value"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      variant="outlined"
                      density="comfortable"
                      :items="MILEAGE_UNIT_ITEMS"
                      v-model="mileageUnit"
                      label="Mileage Unit"
                      name="mileageUnit"
                      item-title="text"
                      item-value="value"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      variant="outlined"
                      density="comfortable"
                      v-model="mileage"
                      label="Mileage"
                      name="mileage"
                      type="number"
                      min="0"
                      max="999999"
                      prepend-inner-icon="mdi-road-variant"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      variant="outlined"
                      density="comfortable"
                      :items="PROJECT_ITEMS"
                      v-model="project"
                      label="Project"
                      name="project"
                      item-title="text"
                      item-value="value"
                      required
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      variant="outlined"
                      density="comfortable"
                      :items="LABOR_TYPE_ITEMS"
                      v-model="laborType"
                      label="Labor Type"
                      name="laborType"
                      item-title="text"
                      item-value="value"
                      required
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      variant="outlined"
                      density="comfortable"
                      :items="TASK_ITEMS"
                      v-model="task"
                      label="Task"
                      name="task"
                      item-title="text"
                      item-value="value"
                      required
                    />
                  </v-col>
                </v-row>
              </v-col>

              <v-col>
                <v-textarea
                  variant="outlined"
                  v-model="comments"
                  label="Comments"
                  name="comments"
                  clearable
                  prepend-inner-icon="mdi-comment-outline"
                  class="w-100 h-100"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col align="end">
                <div class="d-flex justify-end ga-4">
                  <v-btn
                    type="button"
                    variant="tonal"
                    :loading="loading"
                    prepend-icon="mdi-close"
                  >
                    Cancel
                  </v-btn>

                  <v-btn
                    type="submit"
                    variant="flat"
                    color="primary"
                    :loading="loading"
                    prepend-icon="mdi-timer-plus-outline"
                  >
                    Submit
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from "axios";
import { ref, inject } from "vue";
import { useDate } from "vuetify";
import { updateCurrentUser } from "~/lib";
import { ToastProvider } from "~/components/generic/toast-provider.vue";
import {
  HOUR_VALUE,
  HOUR_ITEMS,
  type HourValueT,
  MINUTES_VALUE,
  MINUTES_ITEMS,
  type MinutesValueT,
  MILEAGE_UNIT_VALUE,
  MILEAGE_UNIT_ITEMS,
  type MilageValueT,
  PROJECT_ITEMS,
  type ProjectValueT,
  LABOR_TYPE_ITEMS,
  type LaborTypeValueT,
  TASK_ITEMS,
  type TaskValueT,
} from "~/lib";

const toast = inject<ToastProvider>("toast", {} as ToastProvider);

const dateAdapter = useDate();

// dateAdapter.parseISO(new Date().toISOString())
const date = ref<Date>(new Date());
const hours = ref<HourValueT>(HOUR_VALUE[0]);
const minutes = ref<MinutesValueT>(MINUTES_VALUE[0]);
const mileageUnit = ref<MilageValueT>(MILEAGE_UNIT_VALUE.KM);
const mileage = ref<number>(0);
const laborType = ref<ProjectValueT | null>(null);
const project = ref<LaborTypeValueT | null>(null);
const task = ref<TaskValueT | null>(null);
const comments = ref<string | null>(null);

const loading = ref(false);

const handleFormSubmission = async (e: { target: HTMLFormElement }) => {
  console.log({
    date: date.value,
    hours: email.hours,
    minutes: email.minutes,
  });
};
</script>
