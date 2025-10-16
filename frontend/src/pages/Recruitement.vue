<!-- ============================================
     PAGE: Recruitment.vue (Recrutement)
     Formulaire de candidature pour rejoindre la BLD TEAM
     Critères, postes disponibles et processus
     ============================================ -->

<template>
  <div class="bg-black min-h-screen">
    
    <!-- ============================================
         SECTION 1: HERO - Bannière de recrutement
         ============================================ -->
    <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <!-- Background avec dégradés -->
      <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      
      <!-- Contenu central -->
      <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div class="opacity-0 animate-fade-in-up" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
          <span class="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-6">
            🔥 REJOINS-NOUS
          </span>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span class="text-white">Deviens un</span><br>
            <span class="text-yellow-400">Dragon d'Or</span>
          </h1>
        </div>
        
        <p class="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          Tu as le talent ? Nous avons l'ambition.<br>
          Ensemble, écrivons l'histoire de la BLD TEAM.
        </p>
      </div>
    </section>

    <!-- ============================================
         SECTION 2: POSTES DISPONIBLES
         ============================================ -->
    <section class="py-24 md:py-32 bg-gray-900/30">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Titre de section -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            OPPORTUNITÉS
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Postes Disponibles
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Grille des postes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Poste: Joueur -->
          <div class="group bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <div class="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
                </svg>
              </div>
              <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">OUVERT</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Joueur Compétitif</h3>
            <p class="text-gray-400 mb-4 text-sm">Tous rôles (Top, Jungle, Mid, ADC, Support)</p>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Minimum Diamond II</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Disponible 4 soirs/semaine</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Esprit d'équipe</span>
              </div>
            </div>
          </div>

          <!-- Poste: Coach -->
          <div class="group bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <div class="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full">PRIORITAIRE</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Coach / Analyste</h3>
            <p class="text-gray-400 mb-4 text-sm">Stratégie et développement de l'équipe</p>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Expérience coaching</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Connaissance méta avancée</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Analyse de replays</span>
              </div>
            </div>
          </div>

          <!-- Poste: Community Manager -->
          <div class="group bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <div class="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">OUVERT</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Community Manager</h3>
            <p class="text-gray-400 mb-4 text-sm">Réseaux sociaux et communication</p>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Créatif et dynamique</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Maîtrise réseaux sociaux</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Montage vidéo (bonus)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 3: CE QUE NOUS OFFRONS
         ============================================ -->
    <section class="py-24 md:py-32 bg-black relative overflow-hidden">
      <!-- Effet de lumière -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div class="max-w-5xl mx-auto px-4 relative z-10">
        <!-- Titre de section -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            NOS AVANTAGES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ce Que Nous Offrons
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Grille des avantages -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
            <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Salaire Compétitif</h3>
              <p class="text-gray-400 text-sm">Rémunération en fonction des performances et résultats en tournoi</p>
            </div>
          </div>

          <div class="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
            <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Coaching Professionnel</h3>
              <p class="text-gray-400 text-sm">Accompagnement personnalisé pour développer ton plein potentiel</p>
            </div>
          </div>

          <div class="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
            <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Équipement Premium</h3>
              <p class="text-gray-400 text-sm">Matériel de qualité fourni (périphériques, chaise gaming, etc.)</p>
            </div>
          </div>

          <div class="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
            <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Environnement Familial</h3>
              <p class="text-gray-400 text-sm">Ambiance bienveillante avec des joueurs passionnés et motivés</p>
            </div>
          </div>

          <div class="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
            <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Tournois Nationaux</h3>
              <p class="text-gray-400 text-sm">Participation aux compétitions françaises et européennes</p>
            </div>
          </div>

          <div class="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
            <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Visibilité</h3>
              <p class="text-gray-400 text-sm">Exposition sur nos réseaux sociaux et streams pour booster ta carrière</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 4: PROCESSUS DE RECRUTEMENT
         ============================================ -->
    <section class="py-24 md:py-32 bg-gray-900/30">
      <div class="max-w-4xl mx-auto px-4">
        <!-- Titre de section -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            COMMENT ÇA MARCHE
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Processus de Recrutement
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Timeline du processus -->
        <div class="space-y-8">
          
          <!-- Étape 1 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-yellow-400">1</span>
            </div>
            <div class="flex-1 bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20">
              <h3 class="text-xl font-bold text-white mb-2">Candidature</h3>
              <p class="text-gray-400">Remplis le formulaire ci-dessous avec tes informations, ton rôle et ton niveau actuel. Sois honnête et précis !</p>
            </div>
          </div>

          <!-- Étape 2 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-yellow-400">2</span>
            </div>
            <div class="flex-1 bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20">
              <h3 class="text-xl font-bold text-white mb-2">Analyse du Profil</h3>
              <p class="text-gray-400">Notre staff examine ton profil LoL, tes stats et ton historique. Délai de réponse : 48-72h.</p>
            </div>
          </div>

          <!-- Étape 3 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-yellow-400">3</span>
            </div>
            <div class="flex-1 bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20">
              <h3 class="text-xl font-bold text-white mb-2">Tryout</h3>
              <p class="text-gray-400">Si ton profil correspond, tu seras invité à jouer quelques games avec l'équipe pour évaluer tes compétences et ta synergie.</p>
            </div>
          </div>

          <!-- Étape 4 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-yellow-400">4</span>
            </div>
            <div class="flex-1 bg-gray-800/50 p-6 rounded-xl border border-yellow-500/20">
              <h3 class="text-xl font-bold text-white mb-2">Bienvenue dans la Team !</h3>
              <p class="text-gray-400">Si tout se passe bien, tu rejoins officiellement la BLD TEAM et commences ton aventure avec nous !</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 5: FORMULAIRE DE CANDIDATURE
         ============================================ -->
    <section class="py-24 md:py-32 bg-black">
      <div class="max-w-3xl mx-auto px-4">
        <!-- Titre de section -->
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            PRÊT À NOUS REJOINDRE ?
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Postule Maintenant
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <!-- Formulaire -->
        <div class="bg-gray-900/50 border border-yellow-500/20 rounded-2xl p-8">
          <div class="space-y-6">
            
            <!-- Nom / Pseudo -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Pseudo in-game *</label>
              <input
                type="text"
                v-model="formData.pseudo"
                placeholder="Ton pseudo League of Legends"
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Email *</label>
              <input
                type="email"
                v-model="formData.email"
                placeholder="ton.email@exemple.com"
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>

            <!-- Rôle -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Poste souhaité *</label>
              <select
                v-model="formData.role"
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
              >
                <option value="">Sélectionne ton poste</option>
                <option value="top">Top Lane</option>
                <option value="jungle">Jungle</option>
                <option value="mid">Mid Lane</option>
                <option value="adc">ADC</option>
                <option value="support">Support</option>
                <option value="coach">Coach / Analyste</option>
                <option value="cm">Community Manager</option>
              </select>
            </div>

            <!-- Rang -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Rang actuel *</label>
              <input
                type="text"
                v-model="formData.rank"
                placeholder="Ex: Diamond II, Master 150 LP..."
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>

            <!-- Champions favoris -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Champions favoris</label>
              <input
                type="text"
                v-model="formData.champions"
                placeholder="Ex: Lee Sin, Thresh, Ahri..."
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>

            <!-- Disponibilités -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Disponibilités *</label>
              <textarea
                v-model="formData.availability"
                rows="3"
                placeholder="Quels jours et horaires es-tu disponible pour t'entraîner ?"
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Message de motivation -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Pourquoi veux-tu rejoindre la BLD TEAM ? *</label>
              <textarea
                v-model="formData.message"
                rows="5"
                placeholder="Parle-nous de toi, ton expérience, tes objectifs..."
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Discord -->
            <div>
              <label class="block text-yellow-400 font-semibold mb-2">Discord *</label>
              <input
                type="text"
                v-model="formData.discord"
                placeholder="username#1234"
                class="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
              />
            </div>

            <!-- Bouton submit -->
            <button
              @click="submitForm"
              class="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-xl hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/50"
            >
              Envoyer ma Candidature
            </button>

            <p class="text-sm text-gray-500 text-center">
              Les champs marqués d'un * sont obligatoires. Nous te recontacterons sous 48-72h.
            </p>

          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 6: CONTACT ALTERNATIF
         ============================================ -->
    <section class="py-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h3 class="text-3xl md:text-4xl font-bold text-black mb-4">
          Ou contacte-nous directement
        </h3>
        <p class="text-lg text-gray-900 mb-8">
          Rejoins notre serveur Discord pour discuter avec nous en direct !
        </p>
        <a
          href="https://discord.gg/bldteam"
          target="_blank"
          class="inline-flex items-center gap-3 px-8 py-4 bg-black text-yellow-400 font-bold text-lg rounded-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
          </svg>
          Rejoindre le Discord
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
/* ============================================
   IMPORTS
   ============================================ */
import { ref } from 'vue'



const formData = ref({
  pseudo: '',
  email: '',
  role: '',
  rank: '',
  champions: '',
  availability: '',
  message: '',
  discord: ''
})

/* ============================================
   FONCTIONS
   ============================================ */
const submitForm = () => {
  // Validation simple
  if (!formData.value.pseudo || !formData.value.email || !formData.value.role || 
      !formData.value.rank || !formData.value.availability || !formData.value.message || 
      !formData.value.discord) {
    alert('⚠️ Merci de remplir tous les champs obligatoires (*)')
    return
  }

  // TODO: Intégration avec Firebase/Supabase pour envoyer les données
  console.log('Formulaire soumis:', formData.value)
  
  // Message de confirmation
  alert('✅ Candidature envoyée avec succès ! Nous te recontacterons bientôt sur Discord.')
  
  // Réinitialiser le formulaire
  formData.value = {
    pseudo: '',
    email: '',
    role: '',
    rank: '',
    champions: '',
    availability: '',
    message: '',
    discord: ''
  }
}
</script>

<style scoped>
/* ============================================
   ANIMATIONS PERSONNALISÉES
   ============================================ */

/* Animation d'apparition progressive */
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

/* Style custom pour les inputs */
input:focus,
select:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(246, 195, 0, 0.1);
}
</style>