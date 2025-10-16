<script setup>
import { useAuthStore } from '@/store/authStore';
const authStore = useAuthStore();
</script>

<template>
  <div class="flex h-screen bg-gray-900 text-white">
    <aside class="w-64 flex-shrink-0 bg-gray-800 p-4 flex flex-col">
      <div>
        <h2 class="text-2xl font-bold text-yellow-400 mb-8">BLD Panel</h2>
        <nav class="space-y-2">
          <router-link 
            to="/admin/dashboard" 
            class="block px-4 py-2 rounded hover:bg-yellow-500/20" 
            active-class="bg-yellow-500/20 text-yellow-300 font-semibold"
          >
            Dashboard
          </router-link>
          <router-link 
            to="/admin/news" 
            class="block px-4 py-2 rounded hover:bg-yellow-500/20" 
            active-class="bg-yellow-500/20 text-yellow-300 font-semibold"
          >
            Gérer les Actualités
          </router-link>
           <router-link to="/admin/matches" class="block px-4 py-2 rounded hover:bg-yellow-500/20" active-class="bg-yellow-500/20 text-yellow-300 font-semibold">Gérer les Matchs</router-link>
          <router-link 
            v-if="authStore.isAdmin" 
            to="/admin/users" 
            class="block px-4 py-2 rounded hover:bg-yellow-500/20" 
            active-class="bg-yellow-500/20 text-yellow-300 font-semibold"
          >
            Gérer les Utilisateurs
          </router-link>
        </nav>
      </div>
      <div class="mt-auto">
        <p class="text-sm text-gray-400 mb-2">
          Connecté : <span class="font-bold text-white">{{ authStore.user?.username }}</span>
        </p>
        <button @click="authStore.logout()" class="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors">
          Déconnexion
        </button>
      </div>
    </aside>
    <main class="flex-1 p-8 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>