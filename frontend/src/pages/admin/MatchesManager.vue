<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMatchStore } from '@/store/matchStore';

const matchStore = useMatchStore();
const allMatches = computed(() => matchStore.matches);

onMounted(() => {
  matchStore.fetchMatches();
});

const showCreateForm = ref(false);
const newMatch = ref({
  opponent: '',
  result: 'Victoire',
  scoreTeam: 0,
  scoreOpponent: 0,
  type: 'Ranked',
  date: new Date().toISOString().slice(0, 16), // Pour avoir date et heure
});

const handleCreateMatch = async () => {
  try {
    await matchStore.createMatch(newMatch.value);
    showCreateForm.value = false;
    newMatch.value = { opponent: '', result: 'Victoire', scoreTeam: 0, scoreOpponent: 0, type: 'Ranked', date: new Date().toISOString().slice(0, 16) };
  } catch (error) {
    console.error(error);
  }
};

const formatDate = (dateString) => new Date(dateString).toLocaleString('fr-FR');
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-yellow-400">Gérer les Matchs</h1>
      <button @click="showCreateForm = !showCreateForm" class="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300">
        {{ showCreateForm ? 'Annuler' : 'Ajouter un match' }}
      </button>
    </div>

    <!-- Formulaire de Création -->
    <div v-if="showCreateForm" class="p-8 bg-gray-800 rounded-lg mb-8">
      <h2 class="text-2xl font-semibold text-white mb-6">Nouveau Match</h2>
      <form @submit.prevent="handleCreateMatch" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Adversaire</label>
          <input v-model="newMatch.opponent" type="text" class="w-full bg-gray-700 rounded p-2" required>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Date et Heure</label>
          <input v-model="newMatch.date" type="datetime-local" class="w-full bg-gray-700 rounded p-2" required>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Résultat</label>
          <select v-model="newMatch.result" class="w-full bg-gray-700 rounded p-2">
            <option>Victoire</option>
            <option>Défaite</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Type de match</label>
          <select v-model="newMatch.type" class="w-full bg-gray-700 rounded p-2">
            <option>Ranked</option>
            <option>Tournoi</option>
            <option>Scrim</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Score BLD</label>
          <input v-model.number="newMatch.scoreTeam" type="number" class="w-full bg-gray-700 rounded p-2" required>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Score Adversaire</label>
          <input v.model.number="newMatch.scoreOpponent" type="number" class="w-full bg-gray-700 rounded p-2" required>
        </div>
        <div v-if="matchStore.error" class="text-red-500 text-sm md:col-span-2">
          Erreur : {{ matchStore.error }}
        </div>
        <div class="flex justify-end pt-4 md:col-span-2">
          <button type="submit" class="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500">
            Enregistrer le match
          </button>
        </div>
      </form>
    </div>

    <!-- Liste des Matchs -->
    <div class="bg-gray-800 rounded-lg overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-gray-700">
          <tr>
            <th class="p-4">Date</th>
            <th class="p-4">Adversaire</th>
            <th class="p-4">Score</th>
            <th class="p-4">Résultat</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="matchStore.loading"><td colspan="5" class="text-center p-8">Chargement...</td></tr>
          <tr v-for="match in allMatches" :key="match.id" class="border-t border-gray-700">
            <td class="p-4 text-gray-400">{{ formatDate(match.date) }}</td>
            <td class="p-4">{{ match.opponent }}</td>
            <td class="p-4 font-mono">{{ match.scoreTeam }} - {{ match.scoreOpponent }}</td>
            <td class="p-4">
              <span :class="['font-bold', match.result === 'Victoire' ? 'text-green-400' : 'text-red-500']">{{ match.result }}</span>
            </td>
            <td class="p-4 space-x-2">
              <button class="text-blue-400">Modifier</button>
              <button class="text-red-500">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>