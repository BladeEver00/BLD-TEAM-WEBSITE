<!-- src/pages/Contact.vue -->
<template>
  <div class="bg-gray-900 min-h-screen pt-24 pb-12 flex items-center">
    <div class="max-w-2xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="bg-black/50 p-8 rounded-lg border border-yellow-500/20 backdrop-blur-sm">
        <h1 class="text-4xl font-bold text-center text-yellow-400 font-cinzel mb-2">REJOINDRE L'AVENTURE</h1>
        <p class="text-center text-gray-300 mb-8">Vous pensez avoir l'étoffe d'un dragon ? Prouvez-le.</p>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-yellow-200">Pseudo</label>
            <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500">
          </div>
          
          <div>
            <label for="role" class="block text-sm font-medium text-yellow-200">Rôle préféré</label>
            <select id="role" v-model="form.role" required class="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500">
              <option>Top</option>
              <option>Jungle</option>
              <option>Mid</option>
              <option>ADC</option>
              <option>Support</option>
            </select>
          </div>

          <div>
            <label for="rank" class="block text-sm font-medium text-yellow-200">Rank actuel (ex: Master 250LP)</label>
            <input type="text" id="rank" v-model="form.rank" required class="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500">
          </div>
          
          <button type="submit" class="w-full bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all">
            Envoyer ma candidature
          </button>
        </form>
        
        <div class="text-center mt-8">
            <p class="text-gray-400">Ou rejoignez directement la discussion sur notre Discord !</p>
            <a href="#" class="mt-2 inline-block text-yellow-400 font-semibold hover:underline">Rejoindre le Discord</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  role: 'Top',
  rank: ''
})

const handleSubmit = () => {
  // TODO: Envoyer les données à Firebase/Supabase
  alert(`Candidature envoyée pour ${form.value.name} !`)
  form.value = { name: '', role: 'Top', rank: '' }
}
</script>