<!-- src/pages/Matches.vue -->
<template>
  <div class="bg-black">
    
    <!-- ============================================
         SECTION HERO - Bannière principale
         ============================================ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div 
          class="opacity-0 animate-fade-in-up"
          style="animation-delay: 0.1s; animation-fill-mode: forwards;"
        >
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span class="text-white">HISTORIQUE</span>
            <span class="text-yellow-400"> MATCHS</span>
          </h1>
        </div>
        
        <p 
          class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s; animation-fill-mode: forwards;"
        >
          Chaque bataille est une leçon.<br class="hidden md:block">
          Chaque victoire, une étape vers la gloire.
        </p>
      </div>
      
      <div 
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up"
        style="animation-delay: 0.7s; animation-fill-mode: forwards;"
      >
        <svg 
          class="w-8 h-8 text-yellow-400 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <!-- ============================================
         STATISTIQUES GLOBALES
         ============================================ -->
    <section class="py-24 bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            PERFORMANCES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Statistiques
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <!-- Taux de victoire principal -->
        <div class="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-center mb-12 relative overflow-hidden">
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
            <div class="absolute bottom-10 right-10 w-48 h-48 border-2 border-black rounded-full"></div>
          </div>
          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">Taux de Victoire Global</h3>
            <div class="text-7xl md:text-9xl font-bold text-black mb-2">
              {{ matchesStore.winrate }}%
            </div>
            <p class="text-xl text-gray-900">Une domination constante sur la Faille</p>
          </div>
        </div>

        <!-- Stats détaillées -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all">
            <svg class="w-12 h-12 text-yellow-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <div class="text-4xl font-bold text-yellow-400 mb-2">{{ totalWins }}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Victoires</div>
          </div>
          
          <div class="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all">
            <svg class="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <div class="text-4xl font-bold text-red-400 mb-2">{{ totalLosses }}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Défaites</div>
          </div>
          
          <div class="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all">
            <svg class="w-12 h-12 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <div class="text-4xl font-bold text-blue-400 mb-2">{{ winStreak }}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Série de Victoires</div>
          </div>
          
          <div class="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all">
            <svg class="w-12 h-12 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="text-4xl font-bold text-purple-400 mb-2">{{ totalMatches }}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Matchs Total</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         FILTRES DE MATCHS
         ============================================ -->
    <section class="py-12 bg-black">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300',
              activeFilter === filter.value 
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- ============================================
         LISTE DES MATCHS
         ============================================ -->
    <section class="py-24 md:py-32 bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            RÉSULTATS
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Historique Complet
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div class="space-y-4">
          <div 
            v-for="match in filteredMatches" 
            :key="match.id"
            :class="[
              'group bg-gray-800/50 border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-102',
              match.result === 'Victoire' 
                ? 'border-green-500/30 hover:border-green-500/60 hover:bg-gray-800/70' 
                : 'border-red-500/30 hover:border-red-500/60 hover:bg-gray-800/70'
            ]"
          >
            <div class="p-6">
              <!-- En-tête du match -->
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div class="flex items-center gap-4">
                  <div :class="[
                    'flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center',
                    match.result === 'Victoire' ? 'bg-green-500/20' : 'bg-red-500/20'
                  ]">
                    <svg v-if="match.result === 'Victoire'" class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <svg v-else class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <div :class="[
                      'text-2xl font-bold mb-1',
                      match.result === 'Victoire' ? 'text-green-400' : 'text-red-400'
                    ]">
                      {{ match.result }}
                    </div>
                    <div class="text-sm text-gray-400">{{ match.date }}</div>
                  </div>
                </div>
                
                <div class="flex items-center gap-3">
                  <span class="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-semibold">
                    {{ match.type }}
                  </span>
                  <span class="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-semibold">
                    {{ match.duration }}
                  </span>
                </div>
              </div>

              <!-- Score et équipes -->
              <div class="flex items-center justify-center gap-8 mb-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-yellow-400 mb-2">BLD TEAM</div>
                  <div class="text-5xl font-bold text-white">{{ match.scoreTeam }}</div>
                </div>
                
                <div class="text-3xl font-bold text-gray-600">VS</div>
                
                <div class="text-center">
                  <div class="text-3xl font-bold text-gray-400 mb-2">{{ match.opponent }}</div>
                  <div class="text-5xl font-bold text-gray-500">{{ match.scoreOpponent }}</div>
                </div>
              </div>

              <!-- Statistiques du match -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-black/30 rounded-xl">
                <div class="text-center">
                  <div class="text-sm text-gray-400 mb-1">Kills</div>
                  <div class="text-2xl font-bold text-white">{{ match.kills }}</div>
                </div>
                <div class="text-center">
                  <div class="text-sm text-gray-400 mb-1">Deaths</div>
                  <div class="text-2xl font-bold text-white">{{ match.deaths }}</div>
                </div>
                <div class="text-center">
                  <div class="text-sm text-gray-400 mb-1">Assists</div>
                  <div class="text-2xl font-bold text-white">{{ match.assists }}</div>
                </div>
                <div class="text-center">
                  <div class="text-sm text-gray-400 mb-1">Gold</div>
                  <div class="text-2xl font-bold text-yellow-400">{{ match.gold }}k</div>
                </div>
              </div>

              <!-- MVP du match -->
              <div v-if="match.mvp" class="mt-6 flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl border border-yellow-500/30">
                <div class="flex items-center gap-3">
                  <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <div>
                    <div class="text-xs text-yellow-400 uppercase tracking-wider font-semibold">MVP du Match</div>
                    <div class="text-lg font-bold text-white">{{ match.mvp }}</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-400">Performance</div>
                  <div class="text-lg font-bold text-yellow-400">{{ match.mvpKda }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Message si aucun match -->
        <div v-if="filteredMatches.length === 0" class="text-center py-16">
          <svg class="w-24 h-24 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-xl text-gray-400">Aucun match trouvé pour ce filtre</p>
        </div>
      </div>
    </section>

    <!-- ============================================
         CALL TO ACTION
         ============================================ -->
    <section class="py-24 md:py-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 border-2 border-black rounded-full"></div>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-6">
          Suivez Nos Prochains Matchs
        </h2>
        <p class="text-xl md:text-2xl text-gray-900 mb-10 max-w-2xl mx-auto">
          Ne manquez aucune de nos performances. Rejoignez la communauté BLD Team.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block px-10 py-4 bg-black text-yellow-400 font-bold text-lg rounded-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Nous Suivre
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useMatchesStore } from '../store/matches';

const matchesStore = useMatchesStore();
const activeFilter = ref('Tous');

const filters = [
  { label: 'Tous', value: 'Tous' },
  { label: 'Victoires', value: 'Victoire' },
  { label: 'Défaites', value: 'Défaite' },
  { label: 'Ranked', value: 'Ranked' },
  { label: 'Tournoi', value: 'Tournoi' }
];

const filteredMatches = computed(() => {
  if (activeFilter.value === 'Tous') {
    return matchesStore.matches;
  }
  if (activeFilter.value === 'Victoire' || activeFilter.value === 'Défaite') {
    return matchesStore.matches.filter(m => m.result === activeFilter.value);
  }
  return matchesStore.matches.filter(m => m.type === activeFilter.value);
});

const totalMatches = computed(() => matchesStore.matches.length);
const totalWins = computed(() => matchesStore.matches.filter(m => m.result === 'Victoire').length);
const totalLosses = computed(() => matchesStore.matches.filter(m => m.result === 'Défaite').length);

const winStreak = computed(() => {
  let streak = 0;
  for (const match of matchesStore.matches) {
    if (match.result === 'Victoire') {
      streak++;
    } else {
      break;
    }
  }
  return streak;
});
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>