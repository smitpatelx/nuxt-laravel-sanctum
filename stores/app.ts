import { defineStore, type _GettersTree } from 'pinia'

type AppState = {
  name: string;
  email: string;
};

// <string, AppState, Actions>
export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    name: '',
    email: '',
  }),
  actions: {
    setAuthData(data: AppState) {
      this.name = data.name;
      this.email = data.email;
    },
    resetAuthData() {
      this.name = '';
      this.email = '';
    }
  },
  persist: true,
});
