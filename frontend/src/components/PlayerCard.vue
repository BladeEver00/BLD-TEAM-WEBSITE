<!-- src/components/PlayerCard.vue -->
<template>
  <div class="group relative bg-gray-900/50 border border-yellow-500/20 rounded-lg overflow-hidden transition-all hover:border-yellow-400 hover:scale-105 backdrop-blur-sm">
    <div class="absolute top-0 right-0 p-2 z-10">
        <span class="text-xs font-bold bg-yellow-400 text-black px-2 py-1 rounded-full uppercase" v-html="player.roleIcon + player.role"></span>
    </div>
    
    <div class="h-40 bg-cover bg-center" :style="{ backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg')` }">
        <!-- Effet de survol -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
    
    <div class="p-4 relative">
        <img :src="player.avatar" class="w-24 h-24 rounded-full border-4 border-gray-800 absolute -top-12 left-1/2 -translate-x-1/2 group-hover:border-yellow-400 transition-colors" alt="Avatar"/>
        
        <div class="mt-12 text-center">
            <h3 class="text-2xl font-bold font-cinzel text-yellow-400">{{ player.pseudo }}</h3>
            <p class="text-gray-300">Champion favori : {{ player.champion }}</p>
            <p class="font-semibold text-white mt-1">Rank : {{ player.rank }}</p>
            <a :href="player.lolLink" target="_blank" class="mt-4 inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                Voir profil
            </a>
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  player: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.font-cinzel {
  font-family: 'Cinzel', serif;
}
</style>