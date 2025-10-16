<!-- ============================================
     PAGE: Team.vue (Notre Équipe)
     Présentation des joueurs avec cartes stylisées
     Filtres par rôle, champion favori, rang
     ============================================ -->

<template>
  <div class="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
    
    <!-- ============================================
         SECTION 1: HERO - Titre de la page
         ============================================ -->
    <section class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-yellow-400 mb-4 uppercase tracking-wider">
          Notre Équipe
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 font-light">
          Les dragons qui forgent notre légende.
        </p>
      </div>
    </section>

    <!-- ============================================
         SECTION 2: FILTRES PAR RÔLE
         ============================================ -->
    <section class="pb-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="role in roles"
            :key="role.id"
            @click="selectedRole = role.id"
            :class="[
              'px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300',
              selectedRole === role.id
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/50 scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            ]"
          >
            {{ role.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 3: GRILLE DES JOUEURS
         ============================================ -->
    <section class="pb-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          <!-- Carte Joueur -->
          <div
            v-for="player in filteredPlayers"
            :key="player.id"
            class="group relative bg-gray-900 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/60 transition-all duration-300 hover:transform hover:scale-105"
          >
            <!-- Image de fond (champion splash art) -->
            <div class="relative h-72 overflow-hidden">
              <div 
                class="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                :style="{ backgroundImage: `url(${player.championImage})` }"
              ></div>
              <!-- Overlay dégradé -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              
              <!-- Badge de rôle -->
              <div class="absolute top-4 right-4 px-4 py-2 bg-yellow-500 text-black font-bold text-xs rounded-full uppercase">
                {{ player.role }}
              </div>

              <!-- Photo du joueur (cercle) -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-yellow-500 overflow-hidden bg-gray-800">
                <img 
                  :src="player.photo" 
                  :alt="player.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Informations du joueur -->
            <div class="p-6 pt-14 text-center">
              <!-- Pseudo -->
              <h3 class="text-2xl font-bold text-yellow-400 mb-2 uppercase tracking-wider">
                {{ player.name }}
              </h3>

              <!-- Champion favori -->
              <p class="text-gray-400 text-sm mb-3">
                Champion favori : <span class="text-white font-semibold">{{ player.champion }}</span>
              </p>

              <!-- Rang -->
              <div class="mb-4">
                <span class="inline-block px-4 py-1 bg-gray-800 text-yellow-400 text-sm font-bold rounded-full border border-yellow-500/30">
                  Rank : {{ player.rank }}
                </span>
              </div>

              <!-- Bouton voir profil -->
              <button
                @click="viewProfile(player)"
                class="w-full py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition-colors"
              >
                Voir profil
              </button>
            </div>
          </div>

        </div>

        <!-- Message si aucun joueur trouvé -->
        <div 
          v-if="filteredPlayers.length === 0"
          class="text-center py-20"
        >
          <p class="text-2xl text-gray-500">Aucun joueur pour ce rôle</p>
        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION 4: STAFF / COACHING
         ============================================ -->
    <section class="py-24 bg-gray-900/50 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Titre -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Notre Staff
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <!-- Grille du staff -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div
            v-for="staff in staffMembers"
            :key="staff.id"
            class="bg-gray-800/50 border border-yellow-500/20 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all"
          >
            <!-- Photo -->
            <div class="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-yellow-500 overflow-hidden bg-gray-700">
              <img 
                :src="staff.photo" 
                :alt="staff.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Nom et rôle -->
            <h3 class="text-2xl font-bold text-yellow-400 mb-2">{{ staff.name }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ staff.role }}</p>
            <p class="text-gray-300 text-sm leading-relaxed">{{ staff.description }}</p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
/* ============================================
   IMPORTS
   ============================================ */
import { ref, computed } from 'vue'
// ref -> variables réactives
// computed -> propriétés calculées (filtrage)

/* ============================================
   DONNÉES - RÔLES DISPONIBLES
   ============================================ */
const roles = [
  { id: 'all', label: 'Tous' },
  { id: 'top', label: 'Top' },
  { id: 'jungle', label: 'Jungle' },
  { id: 'mid', label: 'Mid' },
  { id: 'adc', label: 'ADC' },
  { id: 'support', label: 'Support' }
]

/* ============================================
   DONNÉES - JOUEURS
   ============================================ */
const players = ref([
  {
    id: 1,
    name: 'D5 Jox',
    role: 'TOP',
    champion: 'Camille',
    rank: 'Platine',
    photo: 'https://cdn.discordapp.com/avatars/437992292138221569/e96b0fe6c3e2176b77e752239ab07b90.webp?size=256',
    championImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_2.jpg'
  },
  {
    id: 2,
    name: 'naylek',
    role: 'JUNGLE',
    champion: 'Maokai',
    rank: 'Platine',
    photo: 'https://cdn.discordapp.com/avatars/305490509499990016/ddb4e90f24fef0cc37a73d0fd62205de.webp?size=256',
    championImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_6.jpg'
  },
  {
    id: 3,
    name: 'Vyzero',
    role: 'MID',
    champion: 'Vex',
    rank: 'Emeraude',
    photo: 'https://cdn.discordapp.com/avatars/175258795197464576/39d8af28d2aba8b18f17e88ad31ce634.webp?size=256',
    championImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_1.jpg'
  },
  {
    id: 4,
    name: 'Nαvα',
    role: 'ADC',
    champion: 'Ashe',
    rank: 'Emeraude',
    photo: 'https://cdn.discordapp.com/avatars/299541377144848385/6258916133f0098bf167f75d0d8b97a2.webp?size=512',
    championImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_9.jpg', 
  },
  {
    id: 5,
    name: 'Stickos',
    role: 'SUPPORT',
    champion: 'Thresh',
    rank: 'Emeraude',
    photo: 'https://cdn.discordapp.com/avatars/361153261928972288/4f1866947121009952b4a109f694b48a.webp?size=256',
    championImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_6.jpg'
  }
])

/* ============================================
   DONNÉES - STAFF
   ============================================ */
const staffMembers = ref([
  {
    id: 1,
    name: 'Phoenix Coach',
    role: 'Head Coach',
    description: 'Expert stratégique avec 5 ans d\'expérience en coaching e-sport',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    id: 2,
    name: 'DataMaster',
    role: 'Analyste',
    description: 'Spécialiste en analyse de données et statistiques de performance',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  },
  {
    id: 3,
    name: 'MindGuru',
    role: 'Coach Mental',
    description: 'Accompagnement psychologique et gestion du stress compétitif',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
  }
])

/* ============================================
   ÉTAT RÉACTIF
   ============================================ */
const selectedRole = ref('all')

/* ============================================
   PROPRIÉTÉS CALCULÉES
   ============================================ */
// Filtre les joueurs selon le rôle sélectionné
const filteredPlayers = computed(() => {
  if (selectedRole.value === 'all') {
    return players.value
  }
  return players.value.filter(
    player => player.role.toLowerCase() === selectedRole.value
  )
})

/* ============================================
   FONCTIONS
   ============================================ */
const viewProfile = (player) => {
  // TODO: Ouvrir modal ou rediriger vers page profil détaillée
  alert(`Profil de ${player.name} - ${player.role}\n\nChampion favori: ${player.champion}\nRang: ${player.rank}`)
  
  // Exemple: router.push(`/player/${player.id}`)
}
</script>

<style scoped>
/* Styles additionnels si nécessaire */
</style>