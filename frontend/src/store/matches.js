import { defineStore } from 'pinia'
import axios from 'axios'

// L'URL de base de votre API
const API_URL = 'http://localhost:5000/api'

export const useMatchesStore = defineStore('matches', {
  state: () => ({
    matches: [],
    stats: { winrate: 0 }, // Initialiser les stats
    loading: false
  }),
  actions: {
    async fetchMatches() {
      this.loading = true;
      try {
        // Récupérer les matchs
        const matchResponse = await axios.get(`${API_URL}/matches`);
        this.matches = matchResponse.data.data;

        // Récupérer les stats
        const statsResponse = await axios.get(`${API_URL}/stats/matches`);
        this.stats = statsResponse.data.data;

      } catch (error) {
        console.error("Erreur lors de la récupération des données de matchs:", error);
      } finally {
        this.loading = false;
      }
    }
  }
})