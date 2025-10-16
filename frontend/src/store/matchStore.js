import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/matches';

export const useMatchStore = defineStore('matches', {
  state: () => ({
    matches: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchMatches() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(API_URL);
        this.matches = response.data.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Impossible de charger les matchs.';
      } finally {
        this.loading = false;
      }
    },
    async createMatch(matchData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post(API_URL, matchData);
        // Ajoute le nouveau match et retri par date
        this.matches.push(response.data.data);
        this.matches.sort((a, b) => new Date(b.date) - new Date(a.date));
      } catch (err) {
        this.error = err.response?.data?.message || 'Erreur lors de la création du match.';
        return Promise.reject(this.error);
      } finally {
        this.loading = false;
      }
    },
    // Vous pouvez ajouter ici les actions updateMatch et deleteMatch sur le même modèle
  },
});