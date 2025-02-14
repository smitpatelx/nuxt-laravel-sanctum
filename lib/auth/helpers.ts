import { AxiosError } from "axios";
import { FetchError } from "ofetch";

const ERRORS = {
  UNKNOWN_ERROR: new Error('An unknown error occurred'),
} as const;


export const assertAxiosError = (error: unknown): error is AxiosError => {
  return !!error && error instanceof AxiosError;
}

type ErrorWithResponse = {
  message?: string;
  errors?: Record<string, string[]>;
};
export const assertErrorWithResponse = (data: unknown): data is ErrorWithResponse => {
  return !!data &&
    typeof data === 'object' &&
    'message' in data &&
    typeof data.message === 'string' &&
    'errors' in data &&
    typeof data.errors === 'object';
};

export const processSanctumErrors = (error: unknown) => {
  if (assertAxiosError(error) && assertErrorWithResponse(error.response?.data)) {
    const errorData = error.response?.data;

    if (errorData?.message) {
      throw new Error(errorData.message);
    }
    if (errorData?.errors) {
      const firstError = Object.values(errorData.errors)?.[0]?.[0];
      throw new Error(firstError);
    }

    switch (error.status) {
      case 302:
        throw new Error('User with this email already exists');
      case 401:
        throw new Error('Unauthorized');
      case 403:
        throw new Error('Forbidden');
      case 404:
        throw new Error('Not found');
      case 500:
        throw new Error('Internal server error');
      default:
        throw ERRORS.UNKNOWN_ERROR;
    }
  }

  if (error instanceof FetchError) {
    const errorData = error.data;

    if (!assertErrorWithResponse(errorData)) {
      throw ERRORS.UNKNOWN_ERROR;
    }

    if (errorData?.message) {
      throw new Error(errorData.message);
    }
    if (errorData?.errors) {
      const firstError = Object.values(errorData.errors)?.[0]?.[0];
      throw new Error(firstError);
    }
  }

  throw error;
};