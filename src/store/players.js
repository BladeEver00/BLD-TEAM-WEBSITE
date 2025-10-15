// src/store/players.js

import { defineStore } from 'pinia'


const getRoleIcon = (role) => {
    const icons = {
        Top: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" /></svg>`, // Placeholder icon
        Jungle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" /></svg>`, // Placeholder icon
        Mid: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>`, // Placeholder icon
        ADC: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-1.993-2.343A8.25 8.25 0 0 0 12 18Z" /></svg>`, // Placeholder icon
        Support: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`, // Placeholder icon
    };
    return icons[role] || '';
};

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: [
      { id: 1, pseudo: 'DragonSlayer', role: 'Top', champion: 'Aatrox', lolLink: '#', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', rank: 'Master' },
      { id: 2, pseudo: 'ShadowClaw', role: 'Jungle', champion: 'Lee Sin', lolLink: '#', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', rank: 'Grandmaster' },
      { id: 3, pseudo: 'ArcanePulse', role: 'Mid', champion: 'Syndra', lolLink: '#', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d', rank: 'Challenger' },
      { id: 4, pseudo: 'GoldenArrow', role: 'ADC', champion: 'Jhin', lolLink: '#', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', rank: 'Master' },
      { id: 5, pseudo: 'LightBearer', role: 'Support', champion: 'Thresh', lolLink: '#', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d', rank: 'Master' },
    ],
  }),
  getters: {
    playersWithIcons: (state) => {
      return state.players.map(player => ({
        ...player,
        roleIcon: getRoleIcon(player.role)
      }));
    }
  }
})