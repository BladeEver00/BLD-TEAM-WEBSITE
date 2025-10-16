<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-black/80 backdrop-blur-xl border-b border-yellow-500/20 fixed w-full z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <!-- Logo / Brand -->
        <router-link 
          to="/" 
          class="flex items-center group"
        >
          <div>
            <span class="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
              BLD
            </span>
            <span class="text-2xl md:text-3xl font-bold text-yellow-400">
              TEAM
            </span>
          </div>
        </router-link>

        <!-- Menu Desktop -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 group overflow-hidden"
          >
            <span class="relative z-10">{{ item.label }}</span>
            <div class="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300 rounded-lg"></div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-300"></div>
          </router-link>
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden lg:flex items-center gap-4">
          <router-link
            to="/recrutement"
            class="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
          >
            Nous Rejoindre
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen"
          class="lg:hidden relative w-10 h-10 text-yellow-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <svg 
              v-show="!isOpen" 
              class="w-6 h-6 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg 
              v-show="isOpen" 
              class="w-6 h-6 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isOpen" 
        class="lg:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20"
      >
        <div class="px-4 pt-2 pb-6 space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            @click="isOpen = false"
            class="group flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-yellow-400/10 rounded-lg transition-all duration-300"
          >
            <span class="font-semibold uppercase tracking-wider text-sm">{{ item.label }}</span>
            <svg class="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
          
          <!-- Mobile CTA -->
          <router-link
            to="/recrutement"
            @click="isOpen = false"
            class="block mt-4 px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-center font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Nous Rejoindre
          </router-link>
        </div>
      </div>
    </transition>
  </nav>

  <!-- Spacer pour compenser la navbar fixe -->
  <div class="h-20"></div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();

const menuItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Équipe', path: '/team' },
  { label: 'Matchs', path: '/matches' },
  { label: 'Galerie', path: '/media' },
  { label: 'Actualités', path: '/news' },
  { label: 'Contact', path: '/contact' }
];

// Fermer le menu mobile lors du changement de route
watch(() => route.path, () => {
  isOpen.value = false;
});
</script>

<style scoped>
/* Active link styling via router-link-active */
:deep(.router-link-active) {
  color: #F6C300;
  position: relative;
}

:deep(.router-link-active)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  height: 2px;
  background: #F6C300;
}
</style>