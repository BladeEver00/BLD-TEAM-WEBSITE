<template>
  <nav class="bg-bld-black/60 backdrop-blur-lg border-b border-bld-gold/20 fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Le nom de la team, sans logo, sert de lien vers l'accueil -->
        <router-link to="/" class="flex items-center">
          <span class="text-2xl font-cinzel font-bold text-bld-gold">BLD TEAM</span>
        </router-link>

        <div class="hidden md:flex space-x-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 rounded-lg transition-all text-bld-white hover:bg-bld-gold/10 hover:text-bld-gold-light font-semibold"
            active-class="bg-bld-gold !text-bld-black"
          >
            {{ item.label }}
          </router-link>
        </div>

        <button 
          @click="isOpen = !isOpen"
          class="md:hidden text-bld-gold p-2"
        >
          <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

      </div>
    </div>

    <transition name="slide">
      <div v-if="isOpen" class="md:hidden bg-bld-black/95 border-t border-bld-gold/20">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          @click="isOpen = false"
          class="block px-4 py-3 text-bld-white hover:bg-bld-gold/10"
          active-class="bg-bld-gold/20 text-bld-gold-light"
        >
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false) 

const menuItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Équipe', path: '/team' },
  { label: 'Matchs', path: '/matches' },
  { label: 'Galerie', path: '/media' },
  { label: 'Actualités', path: '/news' },
  { label: 'Contact', path: '/contact' },
  { label: 'Recrutement', path: '/recrutement' },
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>