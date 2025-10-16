import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news';

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [],
    loading: false,
    error: null,
  }),

  getters: {
    featuredNews: (state) => {
      return state.news.length > 0 ? state.news[0] : null;
    },
    recentNews: (state) => {
      return state.news.length > 1 ? state.news.slice(1) : [];
    },
  },

  actions: {
    async fetchNews() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(API_URL);
        this.news = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      } catch (err) {
        console.error("Erreur lors de la récupération des actualités:", err);
        this.error = "Impossible de charger les actualités.";
      } finally {
        this.loading = false;
      }
    },

    // NOUVELLE ACTION POUR CRÉER UN ARTICLE
    async createNews(articleData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post(API_URL, articleData);
        // Ajoute le nouvel article au début de la liste sans tout recharger
        this.news.unshift(response.data.data);
      } catch (err) {
        console.error("Erreur lors de la création de l'article:", err);
        this.error = err.response?.data?.message || "Une erreur est survenue lors de la création.";
      } finally {
        this.loading = false;
      }
    },
  },
});