import { defineStore } from 'pinia';
import axios from 'axios';

// L'URL de base de votre API backend
const API_URL = 'http://localhost:5000/api';

export const useMediaStore = defineStore('media', {
  // --- STATE ---
  // L'état initial du store
  state: () => ({
    media: [], 
    loading: false,
    error: null,
  }),

 
  getters: {
    videos: (state) => state.media.filter(item => item.type === 'video'),
    images: (state) => state.media.filter(item => item.type === 'image'),
    clips: (state) => state.media.filter(item => item.type === 'clip'),
  },
  actions: {
    async fetchMedia() {
      if (this.media.length > 0) return; 

      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${API_URL}/media`);
        this.media = response.data.data;
      } catch (err) {
        console.error("Erreur lors de la récupération des médias:", err);
        this.error = "Impossible de charger la galerie. Veuillez réessayer plus tard.";
      } finally {
        this.loading = false;
      }
    },
  },
});