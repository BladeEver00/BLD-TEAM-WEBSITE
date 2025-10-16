<script setup>
import { computed, onMounted } from 'vue';
import { useNewsStore } from '@/store/newStore';

const newsStore = useNewsStore();

const featuredNews = computed(() => newsStore.featuredNews);
const recentNews = computed(() => newsStore.recentNews);

onMounted(() => {
  newsStore.fetchNews();
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// NOTE: Les événements et stats pourraient venir de leurs propres stores (ex: matchesStore)
const upcomingEvents = [
  { id: 1, day: '20', month: 'OCT', title: 'Demi-finale Régionale', description: 'Affrontement crucial contre la Team Rival pour une place en finale', type: 'Match', typeStyle: 'bg-red-500 text-white', time: '19h00', location: 'En ligne' },
  { id: 2, day: '25', month: 'OCT', title: 'Finale Régionale 2025', description: 'La grande finale qui déterminera le champion régional', type: 'Tournoi', typeStyle: 'bg-yellow-400 text-black', time: '14h00', location: 'Paris Gaming Arena' },
  { id: 3, day: '2', month: 'NOV', title: 'Session Q&A avec les Fans', description: 'Rencontre en direct avec toute l\'équipe pour répondre à vos questions', type: 'Événement', typeStyle: 'bg-blue-500 text-white', time: '20h00', location: 'Twitch/Discord' },
];
</script>

<template>
  <div class="bg-black">
    
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div class="opacity-0 animate-fade-in-up" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span class="text-white">ACTUALITÉS</span>
            <span class="text-yellow-400"> BLD</span>
          </h1>
        </div>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          Restez informés de nos dernières performances.<br class="hidden md:block">
          Toutes les nouvelles de la Team.
        </p>
      </div>
      
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style="animation-delay: 0.7s; animation-fill-mode: forwards;">
        <svg class="w-8 h-8 text-yellow-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <section class="py-24 bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            À LA UNE
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Actualité Principale
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <div v-if="newsStore.loading" class="text-center text-yellow-400"><p>Chargement de l'actualité...</p></div>
        <div v-else-if="newsStore.error" class="text-center text-red-500"><p>{{ newsStore.error }}</p></div>

        <div v-else-if="featuredNews" class="bg-gray-800/50 border border-yellow-500/30 rounded-3xl overflow-hidden hover:border-yellow-500/60 transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="aspect-video md:aspect-auto bg-gradient-to-br from-yellow-500/20 to-gray-900 flex items-center justify-center">
              <img v-if="featuredNews.imageUrl" :src="featuredNews.imageUrl" alt="Image de l'article" class="w-full h-full object-cover">
              <svg v-else class="w-32 h-32 text-yellow-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full uppercase">{{ featuredNews.category }}</span>
                <span class="text-gray-400 text-sm">{{ formatDate(featuredNews.date) }}</span>
              </div>
              <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {{ featuredNews.title }}
              </h3>
              <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                {{ featuredNews.excerpt }}
              </p>
              <button class="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:gap-4 transition-all group">
                Lire l'article complet
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 bg-black">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            DERNIÈRES NOUVELLES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Actualités Récentes
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div v-if="!newsStore.loading && !newsStore.error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="news in recentNews" 
            :key="news.id"
            class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
               <img v-if="news.imageUrl" :src="news.imageUrl" alt="Image de l'article" class="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity">
              <span :class="['absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full uppercase z-20', 'bg-yellow-500 text-black']">
                {{ news.category }}
              </span>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ formatDate(news.date) }}</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-tight">
                {{ news.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                {{ news.excerpt }}
              </p>
              <button class="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold hover:gap-3 transition-all">
                Lire la suite
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </article>
        </div>
        <p v-if="!newsStore.loading && recentNews.length === 0" class="text-center text-gray-500 mt-8">Aucune autre actualité pour le moment.</p>
      </div>
    </section>

    <section class="py-24 md:py-32 bg-gray-900/50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            PROCHAINS ÉVÉNEMENTS
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Calendrier
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div class="space-y-4">
          <div 
            v-for="event in upcomingEvents" 
            :key="event.id"
            class="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex flex-col items-center justify-center text-black">
                <div class="text-2xl font-bold">{{ event.day }}</div>
                <div class="text-xs uppercase font-semibold">{{ event.month }}</div>
              </div>
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{{ event.title }}</h3>
                  <span :class="['px-3 py-1 text-xs font-bold rounded-full uppercase', event.typeStyle]">
                    {{ event.type }}
                  </span>
                </div>
                <p class="text-gray-400 text-sm mb-2">{{ event.description }}</p>
                <div class="flex items-center gap-4 text-xs text-gray-500">
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>{{ event.time }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>{{ event.location }}</span>
                  </div>
                </div>
              </div>
              <button class="flex-shrink-0 px-6 py-3 bg-yellow-400 text-black font-bold text-sm rounded-lg hover:bg-yellow-300 hover:scale-105 transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-24 md:py-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 border-2 border-black rounded-full"></div>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-6">
          Restez Connectés
        </h2>
        <p class="text-xl md:text-2xl text-gray-900 mb-10 max-w-2xl mx-auto">
          Abonnez-vous pour recevoir nos dernières actualités et ne rien manquer de nos performances.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            class="flex-grow px-6 py-4 rounded-xl text-black bg-white/90 backdrop-blur border-2 border-transparent focus:border-black focus:outline-none font-semibold"
          />
          <button class="px-10 py-4 bg-black text-yellow-400 font-bold text-lg rounded-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl">
            S'abonner
          </button>
        </div>
        <p class="text-sm text-gray-800 mt-6">
          Nous respectons votre vie privée. Aucun spam, promis.
        </p>
      </div>
    </section>

  </div>
</template>

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