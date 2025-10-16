<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNewsStore } from '@/store/newStore';

const newsStore = useNewsStore();

// Utiliser les getters du store pour la liste des actualités
const allNews = computed(() => newsStore.news);

// Récupérer les données au chargement du composant
onMounted(() => {
  newsStore.fetchNews();
});

// Variable pour afficher/cacher le formulaire de création
const showCreateForm = ref(false);

// Modèle de données pour le nouvel article
const newArticle = ref({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  imageUrl: '',
  category: 'Annonce',
  date: new Date().toISOString().slice(0, 10), // Date du jour par défaut
});

// Fonction pour générer automatiquement le slug à partir du titre
const generateSlug = () => {
  newArticle.value.slug = newArticle.value.title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Fonction pour soumettre le nouvel article
const handleCreateArticle = async () => {
  // On appelle l'action `createNews` du store (à créer)
  await newsStore.createNews(newArticle.value);

  // Si la création réussit, on cache le formulaire et on réinitialise les champs
  if (!newsStore.error) {
    showCreateForm.value = false;
    newArticle.value = {
      title: '', slug: '', excerpt: '', content: '', imageUrl: '', category: 'Annonce',
      date: new Date().toISOString().slice(0, 10),
    };
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-yellow-400">Gérer les Actualités</h1>
      <button @click="showCreateForm = !showCreateForm" class="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors">
        {{ showCreateForm ? 'Annuler' : 'Ajouter un article' }}
      </button>
    </div>

    <!-- Formulaire de Création (conditionnel) -->
    <div v-if="showCreateForm" class="p-8 bg-gray-800 rounded-lg mb-8">
      <h2 class="text-2xl font-semibold text-white mb-6">Nouvel Article</h2>
      <form @submit.prevent="handleCreateArticle" class="space-y-4">
        
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Titre de l'article</label>
          <input v-model="newArticle.title" @input="generateSlug" type="text" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Slug (URL)</label>
          <input v-model="newArticle.slug" type="text" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Catégorie</label>
          <select v-model="newArticle.category" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
            <option>Annonce</option>
            <option>Match</option>
            <option>Recrutement</option>
            <option>Performance</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Résumé (Excerpt)</label>
          <textarea v-model="newArticle.excerpt" rows="2" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
        </div>
        
        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Contenu Complet (Markdown supporté)</label>
          <textarea v-model="newArticle.content" rows="6" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">URL de l'image de couverture</label>
          <input v-model="newArticle.imageUrl" type="text" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-300 mb-1">Date de publication</label>
          <input v-model="newArticle.date" type="date" class="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
        </div>

        <div v-if="newsStore.error" class="text-red-500 text-sm">
          Erreur : {{ newsStore.error }}
        </div>

        <div class="flex justify-end pt-4">
          <button type="submit" class="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-colors">
            Publier l'article
          </button>
        </div>

      </form>
    </div>

    <!-- Liste des Articles Existants -->
    <div class="bg-gray-800 rounded-lg overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-gray-700">
          <tr>
            <th class="p-4 font-semibold">Titre</th>
            <th class="p-4 font-semibold">Catégorie</th>
            <th class="p-4 font-semibold">Date</th>
            <th class="p-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="newsStore.loading">
            <td colspan="4" class="text-center p-8 text-gray-400">Chargement des articles...</td>
          </tr>
          <tr v-for="article in allNews" :key="article.id" class="border-t border-gray-700 hover:bg-gray-700/50">
            <td class="p-4">{{ article.title }}</td>
            <td class="p-4">
              <span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300">{{ article.category }}</span>
            </td>
            <td class="p-4 text-gray-400">{{ formatDate(article.date) }}</td>
            <td class="p-4 space-x-2">
              <button class="text-blue-400 hover:text-blue-300">Modifier</button>
              <button class="text-red-500 hover:text-red-400">Supprimer</button>
            </td>
          </tr>
          <tr v-if="!newsStore.loading && allNews.length === 0">
             <td colspan="4" class="text-center p-8 text-gray-400">Aucun article trouvé.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>