<!-- src/pages/Matches.vue -->
<template>
  <div class="bg-gray-900 min-h-screen pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold text-center text-yellow-400 font-cinzel mb-2">HISTORIQUE DES MATCHS</h1>
      <p class="text-center text-gray-300 mb-12">Chaque bataille est une leçon.</p>

      <div class="bg-black/30 p-4 rounded-lg mb-8 text-center">
        <h2 class="text-2xl font-bold text-white">Taux de Victoire : <span class="text-yellow-400">{{ matchesStore.winrate }}%</span></h2>
      </div>

      <div class="space-y-4">
        <MatchCard
          v-for="match in matchesStore.matches"
          :key="match.id"
          :match="match"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { useMatchesStore } from '../store/matches'
import MatchCard from '../components/MatchCard.vue'

const matchesStore = useMatchesStore()
</script>

<style scoped>
.font-cinzel { font-family: 'Cinzel', serif; }
</style>