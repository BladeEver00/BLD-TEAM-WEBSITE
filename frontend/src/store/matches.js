// src/store/matches.js

import { defineStore } from 'pinia'

export const useMatchesStore = defineStore('matches', {
  state: () => ({
    // TODO: Remplacer par un appel à Firebase/Supabase ou l'API Riot
    matches: [
      { id: 1, opponent: 'Team Phoenix', result: 'Victoire', score: '2-0', date: '2025-10-12', replayLink: '#' },
      { id: 2, opponent: 'Shadow Wolves', result: 'Défaite', score: '1-2', date: '2025-10-08', replayLink: '#' },
      { id: 3, opponent: 'Crimson Guard', result: 'Victoire', score: '2-1', date: '2025-10-01', replayLink: '#' },
      { id: 4, opponent: 'Aqua Serpents', result: 'Victoire', score: '2-0', date: '2025-09-25', replayLink: '#' },
    ]
  }),
  getters: {
    winrate: (state) => {
      const victories = state.matches.filter(m => m.result === 'Victoire').length;
      if (state.matches.length === 0) return 0;
      return Math.round((victories / state.matches.length) * 100);
    }
  }
})