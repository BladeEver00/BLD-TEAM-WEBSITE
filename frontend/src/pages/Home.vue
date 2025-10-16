<template>
  <div class="bg-black">
    
    <!-- ============================================
         SECTION 1: HERO - Bannière principale
         ============================================ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background avec dégradés -->
      <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      
      <!-- Contenu central -->
      <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div 
          class="opacity-0 animate-fade-in-up"
          style="animation-delay: 0.1s; animation-fill-mode: forwards;"
        >
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span class="text-white">BLD</span>
            <span class="text-yellow-400"> TEAM</span>
          </h1>
        </div>
        
        <p 
          class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s; animation-fill-mode: forwards;"
        >
          La conquête est notre destin.<br class="hidden md:block">
          La victoire, notre héritage.
        </p>
      </div>
      
      <!-- Flèche animée pour scroller -->
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
         SECTION 2: QUI SOMMES-NOUS ?
         ============================================ -->
    <section class="py-24 md:py-32 bg-gray-900/50">
      <div class="max-w-4xl mx-auto px-4">
        <!-- Titre de section -->
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            NOTRE IDENTITÉ
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Qui sommes-nous ?
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Contenu -->
        <div class="text-center">
         <p class="text-lg md:text-xl text-gray-300 leading-relaxed">
  Nous sommes une équipe de passionnés du <span class="text-yellow-400 font-semibold">jeu en équipe</span> 
  qui joue avant tout pour le <span class="text-yellow-400 font-semibold">plaisir</span>.  
  La BLD TEAM n’est pas une structure compétitive — c’est une team soudée de joueurs talentueux 
  qui partagent la même mentalité : progresser, s’entraider et briller ensemble sur la Faille.
</p>
          
          <!-- Stats rapides -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">2025</div>
              <div class="text-sm text-gray-400 uppercase tracking-wide">Année de création</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">5</div>
              <div class="text-sm text-gray-400 uppercase tracking-wide">Joueurs</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">2</div>
              <div class="text-sm text-gray-400 uppercase tracking-wide">Victoires</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">N/A</div>
              <div class="text-sm text-gray-400 uppercase tracking-wide">Classement</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 3: NOTRE HISTOIRE
         ============================================ -->
    <section class="py-24 md:py-32 bg-black relative overflow-hidden">
      <!-- Effet de lumière en arrière-plan -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div class="max-w-4xl mx-auto px-4 relative z-10">
        <!-- Titre de section -->
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            NOS ORIGINES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Histoire
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Timeline -->
        <div class="space-y-8">
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z"/>
              </svg>
            </div>
            <div>
              <div class="text-yellow-400 font-bold mb-2">LA FONDATION</div>
              <p class="text-gray-300 leading-relaxed">
                Fondée en 2024, la BLD TEAM est née d'une vision simple : créer un environnement où les talents 
                peuvent s'épanouir pour devenir des champions. Notre objectif était clair dès le premier jour : 
                dominer la scène compétitive française.
              </p>
            </div>
          </div>
          
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div class="text-yellow-400 font-bold mb-2">LES PREMIÈRES VICTOIRES</div>
              <p class="text-gray-300 leading-relaxed">
                De nos premières victoires en tournois locaux à notre présence sur la scène nationale, 
                chaque match a forgé notre caractère et renforcé notre détermination. Chaque défaite nous a rendu plus forts.
              </p>
            </div>
          </div>
          
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div class="text-yellow-400 font-bold mb-2">AUJOURD'HUI</div>
              <p class="text-gray-300 leading-relaxed">
                Notre histoire s'écrit à chaque nouvelle saison. Nous continuons de grandir, d'apprendre et de 
                viser toujours plus haut. Le meilleur reste à venir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 4: NOS VALEURS
         ============================================ -->
    <section class="py-24 md:py-32 bg-gray-900/50">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Titre de section -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            NOS PRINCIPES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Valeurs
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Cartes de valeurs -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Valeur 1: Excellence -->
          <div class="group bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300">
            <div class="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Progrès</h3>
            <p class="text-gray-400 leading-relaxed">
            Nous nous engageons à évoluer chaque jour, sur et en dehors du jeu, en apprenant de nos erreurs et en visant une amélioration constante.
            </p>
          </div>
          
          <!-- Valeur 2: Esprit d'équipe -->
          <div class="group bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300">
            <div class="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Esprit d'Équipe</h3>
            <p class="text-gray-400 leading-relaxed">
              La force du dragon réside dans l'unité de ses écailles. La confiance et le respect mutuel 
              sont notre fondation. Ensemble, nous sommes imbattables.
            </p>
          </div>
          
          <!-- Valeur 3: Ambition -->
          <div class="group bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300">
            <div class="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Ambition</h3>
            <p class="text-gray-400 leading-relaxed">
              Ne jamais se contenter. Chaque victoire est une étape, pas une destination. Notre soif de 
              conquête nous pousse toujours vers de nouveaux sommets.
            </p>
          </div>
          
        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 5: CALL TO ACTION
         ============================================ -->
    <section class="py-24 md:py-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      <!-- Motifs décoratifs -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 border-2 border-black rounded-full"></div>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-6">
          Faites Partie de la Légende
        </h2>
        <p class="text-xl md:text-2xl text-gray-900 mb-10 max-w-2xl mx-auto">
          Nous sommes toujours à la recherche de nouveaux talents, partenaires et supporters 
          pour nous accompagner dans notre ascension.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block px-10 py-4 bg-black text-yellow-400 font-bold text-lg rounded-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Nous Contacter
        </router-link>
      </div>
    </section>

  </div>
</template>
<script setup>
// Ce composant est purement structurel, aucun script complexe n'est nécessaire.
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
/* Styles généraux */
.section-title {
  @apply text-4xl font-cinzel font-bold text-bld-gold mb-4 tracking-widest;
}
.section-subtitle {
  @apply text-lg text-bld-white max-w-2xl mx-auto leading-relaxed;
}

/* Section "Nos Valeurs" */
.value-title {
  @apply mt-6 text-xl font-cinzel font-semibold text-white tracking-wider;
}
.value-text {
  @apply mt-2 text-base text-gray-400 max-w-xs;
}

/* Styles des boutons */
.cta-button-gold, .cta-button-black {
  display: inline-block;
  font-weight: bold;
  padding: 0.85rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.cta-button-gold {
  background-color: #F6C300;
  color: #1A1A1A;
}
.cta-button-gold:hover {
  background-color: #FFD700;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.cta-button-black {
  background-color: #1A1A1A;
  color: #F6C300;
}
.cta-button-black:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Animation d'entrée */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>