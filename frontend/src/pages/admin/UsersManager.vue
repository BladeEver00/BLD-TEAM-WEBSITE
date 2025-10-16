<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';

const userStore = useUserStore();
const authStore = useAuthStore();

const allUsers = computed(() => userStore.users);

onMounted(() => {
  if (authStore.isAdmin) {
    userStore.fetchUsers();
  }
});

const showCreateForm = ref(false);
const newUser = ref({
  username: '',
  password: '',
  role: 'editor',
});

const handleCreateUser = async () => {
  try {
    await userStore.createUser(newUser.value);
    showCreateForm.value = false;
    newUser.value = { username: '', password: '', role: 'editor' };
  } catch (error) {
    console.error(error);
  }
};

const formatDate = (dateString) => new Date(dateString).toLocaleDateString('fr-FR');
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-yellow-400">Gérer les Utilisateurs</h1>
      <button v-if="authStore.isAdmin" @click="showCreateForm = !showCreateForm" class="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors">
        {{ showCreateForm ? 'Annuler' : 'Créer un utilisateur' }}
      </button>
    </div>

    <div v-if="showCreateForm && authStore.isAdmin" class="p-8 bg-gray-800 rounded-lg mb-8">
      <h2 class="text-2xl font-semibold text-white mb-6">Nouvel Utilisateur</h2>
      <form @submit.prevent="handleCreateUser" class="space-y-4">
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Nom d'utilisateur</label>
          <input v-model="newUser.username" type="text" class="w-full bg-gray-700 text-white rounded p-2" required>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Mot de passe</label>
          <input v-model="newUser.password" type="password" class="w-full bg-gray-700 text-white rounded p-2" required>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Rôle</label>
          <select v-model="newUser.role" class="w-full bg-gray-700 text-white rounded p-2" required>
            <option value="editor">Manager (Editor)</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>
        <div v-if="userStore.error" class="text-red-500 text-sm">
          Erreur : {{ userStore.error }}
        </div>
        <div class="flex justify-end pt-4">
          <button type="submit" class="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500">
            Créer l'utilisateur
          </button>
        </div>
      </form>
    </div>

    <div v-if="authStore.isAdmin" class="bg-gray-800 rounded-lg overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-gray-700">
          <tr>
            <th class="p-4 font-semibold">Nom d'utilisateur</th>
            <th class="p-4 font-semibold">Rôle</th>
            <th class="p-4 font-semibold">Créé le</th>
            <th class="p-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="userStore.loading"><td colspan="4" class="text-center p-8 text-gray-400">Chargement...</td></tr>
          <tr v-for="user in allUsers" :key="user.id" class="border-t border-gray-700 hover:bg-gray-700/50">
            <td class="p-4">{{ user.username }}</td>
            <td class="p-4">
              <span :class="['px-2 py-1 text-xs font-bold rounded-full', user.role === 'admin' ? 'bg-red-500/30 text-red-300' : 'bg-blue-500/30 text-blue-300']">
                {{ user.role }}
              </span>
            </td>
            <td class="p-4 text-gray-400">{{ formatDate(user.createdAt) }}</td>
            <td class="p-4">
              <button class="text-red-500 hover:text-red-400">Supprimer</button>
            </td>
          </tr>
           <tr v-if="!userStore.loading && allUsers.length === 0">
             <td colspan="4" class="text-center p-8 text-gray-400">Aucun utilisateur trouvé.</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div v-else class="p-8 bg-gray-800 rounded-lg">
      <p class="text-yellow-400">Vous n'avez pas les permissions nécessaires pour voir ou gérer les utilisateurs.</p>
    </div>
  </div>
</template>