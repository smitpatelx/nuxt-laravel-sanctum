/** Hour **/
export const HOUR_VALUE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type HourValueT = (typeof HOUR_VALUE)[number];

export const HOUR_LABEL = {
  [HOUR_VALUE[0]]: "0 Hour",
  [HOUR_VALUE[1]]: "1 Hours",
  [HOUR_VALUE[2]]: "2 Hours",
  [HOUR_VALUE[3]]: "3 Hours",
  [HOUR_VALUE[4]]: "4 Hours",
  [HOUR_VALUE[5]]: "5 Hours",
  [HOUR_VALUE[6]]: "6 Hours",
  [HOUR_VALUE[7]]: "7 Hours",
  [HOUR_VALUE[8]]: "8 Hours",
  [HOUR_VALUE[9]]: "9 Hours",
} as const;
export type HourLabelT = (typeof HOUR_LABEL)[keyof typeof HOUR_LABEL];

export const HOUR_ITEMS = HOUR_VALUE.map((value) => ({
  text: HOUR_LABEL[value],
  value,
}));

/** Minutes **/
export const MINUTES_VALUE = [0, 15, 30, 45] as const;
export type MinutesValueT = (typeof MINUTES_VALUE)[number];

export const MINUTES_LABEL = {
  [MINUTES_VALUE[0]]: "0 Minutes",
  [MINUTES_VALUE[1]]: "15 Minutes",
  [MINUTES_VALUE[2]]: "30 Minutes",
  [MINUTES_VALUE[3]]: "45 Minutes",
} as const;
export type MinutesLabelT = (typeof MINUTES_LABEL)[keyof typeof MINUTES_LABEL];

export const MINUTES_ITEMS = MINUTES_VALUE.map((value) => ({
  text: MINUTES_LABEL[value],
  value,
}));

/** Milage **/
export const MILEAGE_UNIT_VALUE = {
  MI: "MI",
  KM: "KM",
} as const;
export type MilageValueT = (typeof MILEAGE_UNIT_VALUE)[keyof typeof MILEAGE_UNIT_VALUE];

export const MILEAGE_UNIT_LABEL = {
  [MILEAGE_UNIT_VALUE.MI]: "Miles (mi)",
  [MILEAGE_UNIT_VALUE.KM]: "Kilo Meters (km)",
} as const;
export type MileageUnitLabelT = (typeof MILEAGE_UNIT_LABEL)[keyof typeof MILEAGE_UNIT_LABEL];

export const MILEAGE_UNIT_ITEMS = Object.values(MILEAGE_UNIT_VALUE).map((value) => ({
  text: MILEAGE_UNIT_LABEL[value],
  value,
}));

/** Projects **/
export const PROJECT_VALUE = {
  PROJECT_1: "PROJECT_1",
  PROJECT_2: "PROJECT_2",
} as const;
export type ProjectValueT = (typeof PROJECT_VALUE)[keyof typeof PROJECT_VALUE];

export const PROJECT_LABEL = {
  [PROJECT_VALUE.PROJECT_1]: "Project 1",
  [PROJECT_VALUE.PROJECT_2]: "Project 2",
} as const;
export type ProjectLabelT = (typeof PROJECT_LABEL)[keyof typeof PROJECT_LABEL];

export const PROJECT_ITEMS = Object.values(PROJECT_VALUE).map((value) => ({
  text: PROJECT_LABEL[value],
  value,
}));

/** Labor **/
export const LABOR_TYPE_VALUE = {
  LABOR_TYPE_1: "LABOR_TYPE_1",
  LABOR_TYPE_2: "LABOR_TYPE_2",
} as const;
export type LaborTypeValueT = (typeof LABOR_TYPE_VALUE)[keyof typeof LABOR_TYPE_VALUE];

export const LABOR_TYPE_LABEL = {
  [LABOR_TYPE_VALUE.LABOR_TYPE_1]: "Labor Type 1",
  [LABOR_TYPE_VALUE.LABOR_TYPE_2]: "Labor Type 2",
} as const;
export type LaborTypeLabelT = (typeof LABOR_TYPE_LABEL)[keyof typeof LABOR_TYPE_LABEL];

export const LABOR_TYPE_ITEMS = Object.values(LABOR_TYPE_VALUE).map((value) => ({
  text: LABOR_TYPE_LABEL[value],
  value,
}));

/** Tasks **/
export const TASK_VALUE = {
  TASK_1: "TASK_1",
  TASK_2: "TASK_2",
} as const;
export type TaskValueT = (typeof TASK_VALUE)[keyof typeof TASK_VALUE];

export const TASK_LABEL = {
  TASK_1: "Task 1",
  TASK_2: "Task 2",
} as const;
export type TaskLabelT = (typeof TASK_LABEL)[keyof typeof TASK_LABEL];

export const TASK_ITEMS = Object.values(TASK_VALUE).map((value) => ({
  text: TASK_LABEL[value],
  value,
}));