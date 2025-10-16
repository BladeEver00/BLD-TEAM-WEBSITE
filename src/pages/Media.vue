<!-- src/pages/Media.vue -->
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
            <span class="text-white">GALERIE</span>
            <span class="text-yellow-400"> MÉDIAS</span>
          </h1>
        </div>
        
        <p 
          class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s; animation-fill-mode: forwards;"
        >
          Revivez nos plus grands moments.<br class="hidden md:block">
          Chaque victoire, chaque action légendaire.
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
         SECTION FILTRES
         ============================================ -->
    <section class="py-12 bg-gray-900/50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300',
              activeFilter === filter 
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <!-- ============================================
         GALERIE PRINCIPALE
         ============================================ -->
    <section class="py-24 md:py-32 bg-black">
      <div class="max-w-7xl mx-auto px-4">
        
        <!-- Section Videos -->
        <div v-if="activeFilter === 'Tous' || activeFilter === 'Vidéos'" class="mb-24">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
              NOS MEILLEURS MOMENTS
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Vidéos & Highlights
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="video in videos" 
              :key="video.id"
              class="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              <div class="relative aspect-video bg-gray-800">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-16 h-16 text-yellow-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                </div>
                <div class="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs text-yellow-400 font-semibold">
                  {{ video.duration }}
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {{ video.title }}
                </h3>
                <p class="text-gray-400 text-sm mb-3">{{ video.description }}</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                  <span>{{ video.date }}</span>
                  <span>{{ video.views }} vues</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Images -->
        <div v-if="activeFilter === 'Tous' || activeFilter === 'Images'" class="mb-24">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
              IMMORTALISÉ
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Photos & Screenshots
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="image in images" 
              :key="image.id"
              class="group relative aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <div class="text-white font-semibold text-sm mb-1">{{ image.title }}</div>
                  <div class="text-gray-400 text-xs">{{ image.date }}</div>
                </div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Clips -->
        <div v-if="activeFilter === 'Tous' || activeFilter === 'Clips'" class="mb-24">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
              ACTIONS ÉPIQUES
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Meilleurs Clips
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="clip in clips" 
              :key="clip.id"
              class="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div class="relative aspect-video bg-gray-800">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-20 h-20 text-yellow-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                </div>
                <div class="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {{ clip.type }}
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {{ clip.title }}
                </h3>
                <p class="text-gray-400 text-sm mb-3">{{ clip.player }}</p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                  <span>{{ clip.date }}</span>
                  <span class="text-yellow-400 font-semibold">{{ clip.rating }}</span>
                </div>
              </div>
            </div>
          </div>
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
          Partagez Vos Moments
        </h2>
        <p class="text-xl md:text-2xl text-gray-900 mb-10 max-w-2xl mx-auto">
          Vous avez capturé un moment épique ? Partagez-le avec la communauté BLD Team.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block px-10 py-4 bg-black text-yellow-400 font-bold text-lg rounded-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Soumettre un Média
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeFilter = ref('Tous');
const filters = ['Tous', 'Vidéos', 'Images', 'Clips'];

const videos = [
  { id: 1, title: 'Pentakill Épique en Finale', description: 'Action décisive qui nous a menés à la victoire', duration: '5:32', date: '15 Oct 2025', views: '2.5k' },
  { id: 2, title: 'Highlights - Saison 2025', description: 'Compilation des meilleurs moments de la saison', duration: '12:45', date: '10 Oct 2025', views: '5.1k' },
  { id: 3, title: 'Comeback Impossible', description: 'De 10k de retard à la victoire', duration: '8:20', date: '5 Oct 2025', views: '3.8k' },
  { id: 4, title: 'Stratégie Baron Nashor', description: 'Notre tactique secrète révélée', duration: '6:15', date: '1 Oct 2025', views: '4.2k' },
  { id: 5, title: 'Match vs Rival Team', description: 'L\'affrontement le plus intense de l\'année', duration: '15:30', date: '28 Sep 2025', views: '7.9k' },
  { id: 6, title: 'Formation BLD - Les Bases', description: 'Comment nous dominons la phase de laning', duration: '9:10', date: '20 Sep 2025', views: '6.3k' }
];

const images = [
  { id: 1, title: 'Victoire Finale', date: '15 Oct 2025' },
  { id: 2, title: 'Équipe Réunie', date: '14 Oct 2025' },
  { id: 3, title: 'Célébration', date: '13 Oct 2025' },
  { id: 4, title: 'Setup Gaming', date: '12 Oct 2025' },
  { id: 5, title: 'Concentration Maximale', date: '11 Oct 2025' },
  { id: 6, title: 'Logo BLD', date: '10 Oct 2025' },
  { id: 7, title: 'Match en Cours', date: '9 Oct 2025' },
  { id: 8, title: 'Salle de Tournoi', date: '8 Oct 2025' }
];

const clips = [
  { id: 1, title: 'Quadra Kill en 10 Secondes', player: 'Par ToxicJungler', type: 'QUADRA', date: '14 Oct 2025', rating: '⭐ 4.9/5' },
  { id: 2, title: 'Outplay 1v3 Incroyable', player: 'Par HeimerBender', type: 'OUTPLAY', date: '12 Oct 2025', rating: '⭐ 4.8/5' },
  { id: 3, title: 'Vol de Baron à la Dernière Seconde', player: 'Par ToxicJungler', type: 'STEAL', date: '10 Oct 2025', rating: '⭐ 5.0/5' },
  { id: 4, title: 'Flash Prédictif Parfait', player: 'Par LeSupport', type: 'PREDICTION', date: '8 Oct 2025', rating: '⭐ 4.7/5' }
];
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
</style>