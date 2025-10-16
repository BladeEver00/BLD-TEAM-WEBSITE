<template>
  <footer class="bg-black border-t border-yellow-500/20">
    
    <!-- Section principale du footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <!-- Colonne 1: À propos -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <svg class="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z"/>
              </svg>
            </div>
            <div>
              <span class="block text-xl font-bold text-white">BLD</span>
              <span class="block text-xl font-bold text-yellow-400">TEAM</span>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Born to Lead Dragons. Une équipe de passionnés déterminée à dominer la scène compétitive française.
          </p>
          <div class="flex items-center gap-2 text-yellow-400 text-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="font-semibold">Depuis 2025</span>
          </div>
        </div>

        <!-- Colonne 2: Navigation rapide -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6 uppercase tracking-wider">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link 
                :to="link.path" 
                class="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
              >
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span>{{ link.label }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Colonne 3: Ressources -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6 uppercase tracking-wider">Ressources</h3>
          <ul class="space-y-3">
            <li v-for="resource in resources" :key="resource.label">
              <a 
                :href="resource.link" 
                class="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
              >
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span>{{ resource.label }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Colonne 4: Réseaux sociaux -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6 uppercase tracking-wider">Suivez-nous</h3>
          <p class="text-gray-400 text-sm mb-6">
            Restez connectés pour ne rien manquer de nos performances et actualités.
          </p>
          <div class="flex flex-wrap gap-3">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.link" 
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden',
                social.bgClass
              ]"
              :title="social.name"
            >
              <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="social.hoverBg"></div>
              <svg class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" :class="social.iconClass" fill="currentColor" v-html="social.icon"></svg>
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Section légale / copyright -->
    <div class="border-t border-yellow-500/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-gray-500 text-sm text-center md:text-left">
            <p>&copy; {{ new Date().getFullYear() }} BLD TEAM. Tous droits réservés.</p>
          </div>
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <router-link to="/privacy" class="text-gray-500 hover:text-yellow-400 transition-colors">Politique de Confidentialité</router-link>
            <router-link to="/terms" class="text-gray-500 hover:text-yellow-400 transition-colors">Conditions d'Utilisation</router-link>
            <router-link to="/legal" class="text-gray-500 hover:text-yellow-400 transition-colors">Mentions Légales</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Badge "Made with ❤️" -->
    <div class="bg-gradient-to-r from-yellow-400/5 via-yellow-500/5 to-yellow-600/5 border-t border-yellow-500/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p class="text-center text-gray-600 text-xs">
          Made with 
          <span class="text-red-500 animate-pulse">❤️</span> 
          by BLD Team
          <span class="text-yellow-400 mx-2">•</span>
          Born to Lead Dragons
        </p>
      </div>
    </div>

  </footer>
</template>

<script setup>
const quickLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Notre Équipe', path: '/team' },
  { label: 'Historique Matchs', path: '/matches' },
  { label: 'Galerie Médias', path: '/media' },
  { label: 'Actualités', path: '/news' },
  { label: 'Nous Contacter', path: '/contact' }
];

const resources = [
  { label: 'Recrutement', link: '/recrutement' },
  { label: 'Partenaires', link: '#' },
  { label: 'Kit Média', link: '#' },
  { label: 'FAQ', link: '#' }
];

const socials = [
  { 
    name: 'Twitch', 
    link: 'https://twitch.tv', 
    bgClass: 'bg-purple-900/20',
    hoverBg: 'from-purple-600 to-purple-700',
    iconClass: 'text-purple-400 group-hover:text-white',
    icon: `<path d="M11.571 4.714h1.715v5.143H11.57zM15.571 4.714h1.715v5.143H15.57zM4 2v16h5.143v3.429l3.428-3.43H16l4-4V2zm15.143 11.143l-2.857 2.857h-3.428l-2.572 2.572v-2.572H6.286V3.714h12.857z"/>`
  },
  { 
    name: 'Discord', 
    link: 'https://discord.com', 
    bgClass: 'bg-indigo-900/20',
    hoverBg: 'from-indigo-600 to-indigo-700',
    iconClass: 'text-indigo-400 group-hover:text-white',
    icon: `<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>`
  },
  { 
    name: 'Twitter', 
    link: 'https://twitter.com', 
    bgClass: 'bg-sky-900/20',
    hoverBg: 'from-sky-500 to-sky-600',
    iconClass: 'text-sky-400 group-hover:text-white',
    icon: `<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>`
  },
  { 
    name: 'YouTube', 
    link: 'https://youtube.com', 
    bgClass: 'bg-red-900/20',
    hoverBg: 'from-red-600 to-red-700',
    iconClass: 'text-red-400 group-hover:text-white',
    icon: `<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>`
  }
];
</script>

<style scoped>
/* Animations personnalisées */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>