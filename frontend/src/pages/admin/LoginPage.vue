<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  authStore.login({ username: username.value, password: password.value });
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center text-yellow-400">Panel Admin - Connexion</h1>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="text-sm font-bold text-gray-300">Nom d'utilisateur</label>
          <input v-model="username" type="text" id="username" class="w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
        </div>
        <div>
          <label for="password" class="text-sm font-bold text-gray-300">Mot de passe</label>
          <input v-model="password" type="password" id="password" class="w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
        </div>
        <div v-if="authStore.error" class="text-red-500 text-sm text-center">
          {{ authStore.error }}
        </div>
        <button type="submit" class="w-full py-2 font-bold text-black bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors">
          Se Connecter
        </button>
      </form>
    </div>
  </div>
</template>