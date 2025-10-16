<!-- src/pages/News.vue -->
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
            <span class="text-white">ACTUALITÉS</span>
            <span class="text-yellow-400"> BLD</span>
          </h1>
        </div>
        
        <p 
          class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s; animation-fill-mode: forwards;"
        >
          Restez informés de nos dernières performances.<br class="hidden md:block">
          Toutes les nouvelles de la Team.
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
         ARTICLE À LA UNE
         ============================================ -->
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

        <div class="bg-gray-800/50 border border-yellow-500/30 rounded-3xl overflow-hidden hover:border-yellow-500/60 transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="aspect-video md:aspect-auto bg-gradient-to-br from-yellow-500/20 to-gray-900 flex items-center justify-center">
              <svg class="w-32 h-32 text-yellow-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full uppercase">Victoire</span>
                <span class="text-gray-400 text-sm">15 Octobre 2025</span>
              </div>
              <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                BLD Team Remporte le Championnat Régional !
              </h3>
              <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                Après des semaines d'entraînement intensif et de compétition acharnée, la BLD Team est fière d'annoncer sa victoire au Championnat Régional 2025. Une performance exceptionnelle de toute l'équipe qui nous qualifie pour les phases nationales.
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

    <!-- ============================================
         ACTUALITÉS RÉCENTES
         ============================================ -->
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="news in recentNews" 
            :key="news.id"
            class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <svg class="w-16 h-16 text-gray-700 relative z-10" :class="news.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="news.icon"/>
              </svg>
              <span :class="['absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full uppercase z-20', news.categoryStyle]">
                {{ news.category }}
              </span>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ news.date }}</span>
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
      </div>
    </section>

    <!-- ============================================
         CALENDRIER DES ÉVÉNEMENTS
         ============================================ -->
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
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ event.time }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
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

    <!-- ============================================
         STATISTIQUES DE LA SAISON
         ============================================ -->
    <section class="py-24 md:py-32 bg-black">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            PERFORMANCES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Saison 2025
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-500/50 transition-all">
            <div class="text-5xl font-bold text-yellow-400 mb-2">18</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Victoires</div>
          </div>
          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-500/50 transition-all">
            <div class="text-5xl font-bold text-yellow-400 mb-2">5</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Défaites</div>
          </div>
          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-500/50 transition-all">
            <div class="text-5xl font-bold text-yellow-400 mb-2">78%</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Winrate</div>
          </div>
          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-500/50 transition-all">
            <div class="text-5xl font-bold text-yellow-400 mb-2">3</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Tournois Gagnés</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         NEWSLETTER
         ============================================ -->
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

<script setup>
import { ref } from 'vue';

const recentNews = [
  {
    id: 1,
    title: 'Nouveau Record d\'Équipe Établi',
    excerpt: 'La BLD Team bat son propre record avec une série de 12 victoires consécutives, démontrant une cohésion exceptionnelle.',
    date: '12 Oct 2025',
    category: 'Performance',
    categoryStyle: 'bg-green-500 text-white',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    iconColor: 'text-green-500'
  },
  {
    id: 2,
    title: 'Interview Exclusive de ToxicJungler',
    excerpt: 'Notre jungler star nous parle de sa stratégie, ses objectifs et des prochains défis de la Team.',
    date: '10 Oct 2025',
    category: 'Interview',
    categoryStyle: 'bg-blue-500 text-white',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    iconColor: 'text-blue-500'
  },
  {
    id: 3,
    title: 'Nouveau Partenariat Annoncé',
    excerpt: 'La BLD Team s\'associe avec un équipementier gaming de renom pour fournir le meilleur matériel à nos joueurs.',
    date: '8 Oct 2025',
    category: 'Partenariat',
    categoryStyle: 'bg-purple-500 text-white',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    iconColor: 'text-purple-500'
  },
  {
    id: 4,
    title: 'Bootcamp Intensif Avant les Finales',
    excerpt: 'L\'équipe se prépare avec un bootcamp de 2 semaines pour être au maximum de ses capacités pour les finales nationales.',
    date: '5 Oct 2025',
    category: 'Entraînement',
    categoryStyle: 'bg-orange-500 text-white',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconColor: 'text-orange-500'
  },
  {
    id: 5,
    title: 'Analyse Tactique: Notre Domination',
    excerpt: 'Découvrez les stratégies qui ont fait de nous une des meilleures équipes de la région.',
    date: '3 Oct 2025',
    category: 'Stratégie',
    categoryStyle: 'bg-red-500 text-white',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    iconColor: 'text-red-500'
  },
  {
    id: 6,
    title: 'Recrutement: Recherche Nouveau Talent',
    excerpt: 'La BLD Team ouvre ses portes à de nouveaux talents pour renforcer son roster pour la saison prochaine.',
    date: '1 Oct 2025',
    category: 'Recrutement',
    categoryStyle: 'bg-yellow-500 text-black',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    iconColor: 'text-yellow-500'
  }
];

const upcomingEvents = [
  {
    id: 1,
    day: '20',
    month: 'OCT',
    title: 'Demi-finale Régionale',
    description: 'Affrontement crucial contre la Team Rival pour une place en finale',
    type: 'Match',
    typeStyle: 'bg-red-500 text-white',
    time: '19h00',
    location: 'En ligne'
  },
  {
    id: 2,
    day: '25',
    month: 'OCT',
    title: 'Finale Régionale 2025',
    description: 'La grande finale qui déterminera le champion régional',
    type: 'Tournoi',
    typeStyle: 'bg-yellow-400 text-black',
    time: '14h00',
    location: 'Paris Gaming Arena'
  },
  {
    id: 3,
    day: '2',
    month: 'NOV',
    title: 'Session Q&A avec les Fans',
    description: 'Rencontre en direct avec toute l\'équipe pour répondre à vos questions',
    type: 'Événement',
    typeStyle: 'bg-blue-500 text-white',
    time: '20h00',
    location: 'Twitch/Discord'
  },
  {
    id: 4,
    day: '10',
    month: 'NOV',
    title: 'Début des Qualifications Nationales',
    description: 'Première étape vers le championnat national',
    type: 'Compétition',
    typeStyle: 'bg-purple-500 text-white',
    time: '16h00',
    location: 'En ligne'
  }
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