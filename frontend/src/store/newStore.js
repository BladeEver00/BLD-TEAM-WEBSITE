import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [],
    loading: false,
    error: null,
  }),

  getters: {
    featuredNews: (state) => {
      return state.news.length > 0 ? state.news : null;
    },
    recentNews: (state) => {
      return state.news.length > 1 ? state.news.slice(1) : [];
    },
  },

  actions: {
    async fetchNews() {
      if (this.news.length > 0) return;

      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${API_URL}/news`);
        this.news = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      } catch (err) {
        console.error("Erreur lors de la récupération des actualités:", err);
        this.error = "Impossible de charger les actualités. Veuillez réessayer plus tard.";
      } finally {
        this.loading = false;
      }
    },
  },
});