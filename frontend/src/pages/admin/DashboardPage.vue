<script setup>
import { useAuthStore } from '@/store/authStore';
const authStore = useAuthStore();
</script>
<template>
  <div>
    <h1 class="text-4xl font-bold text-yellow-400">Tableau de Bord</h1>
    <p class="mt-2 text-lg text-gray-300">
      Bienvenue, <span class="font-bold">{{ authStore.user?.username }}</span> !
    </p>
    <div class="mt-8 p-6 bg-gray-800 rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">Accès Rapides</h2>
      <p>Utilisez le menu de gauche pour commencer à gérer le contenu du site.</p>
    </div>
  </div>
</template>