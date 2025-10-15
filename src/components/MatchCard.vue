<!-- src/components/MatchCard.vue -->
<template>
  <div class="bg-gray-900/50 border-l-4 rounded-r-lg p-4 flex justify-between items-center" 
       :class="match.result === 'Victoire' ? 'border-green-500' : 'border-red-500'">
    
    <div>
      <p class="text-sm text-gray-400">{{ match.date }}</p>
      <h3 class="text-xl font-bold text-white">
        BLD TEAM vs <span class="text-yellow-400">{{ match.opponent }}</span>
      </h3>
    </div>

    <div class="text-right">
      <p class="text-2xl font-bold" :class="match.result === 'Victoire' ? 'text-green-500' : 'text-red-500'">
        {{ match.score }}
      </p>
      <a v-if="match.replayLink !== '#'" :href="match.replayLink" class="text-sm text-yellow-500 hover:underline">
        Voir le replay
      </a>
    </div>

  </div>
</template>

<script setup>
defineProps({
  match: {
    type: Object,
    required: true
  }
})
</script>