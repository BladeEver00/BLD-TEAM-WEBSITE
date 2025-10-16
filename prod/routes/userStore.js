import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(API_URL);
        this.users = response.data.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Impossible de charger les utilisateurs.';
      } finally {
        this.loading = false;
      }
    },
    async createUser(userData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post(API_URL, userData);
        this.users.push(response.data.data);
      } catch (err) {
        this.error = err.response?.data?.message || 'Erreur lors de la création.';
        // Il faut retourner l'erreur pour que le composant sache si l'opération a échoué
        return Promise.reject(this.error);
      } finally {
        this.loading = false;
      }
    },
  },
});