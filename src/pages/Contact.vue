<!-- src/pages/Contact.vue -->
<template>
  <div class="bg-black">
    
    <!-- ============================================
         SECTION HERO - Bannière principale
         ============================================ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div 
          class="opacity-0 animate-fade-in-up"
          style="animation-delay: 0.1s; animation-fill-mode: forwards;"
        >
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span class="text-white">CONTACTEZ</span>
            <span class="text-yellow-400"> NOUS</span>
          </h1>
        </div>
        
        <p 
          class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style="animation-delay: 0.4s; animation-fill-mode: forwards;"
        >
          Partenariats, collaboration, médias ?<br class="hidden md:block">
          Discutons ensemble de votre projet.
        </p>
      </div>
      
      <div 
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up"
        style="animation-delay: 0.7s; animation-fill-mode: forwards;"
      >
        <svg 
          class="w-8 h-8 text-yellow-400 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <!-- ============================================
         SECTION FORMULAIRE + INFOS
         ============================================ -->
    <section class="py-24 md:py-32 bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-4">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Colonne gauche: Informations de contact -->
          <div class="space-y-8">
            <div>
              <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
                RESTEZ CONNECTÉS
              </span>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                Parlons Ensemble
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed">
                Que vous souhaitiez rejoindre notre équipe, devenir partenaire, ou simplement 
                discuter de League of Legends, nous sommes là pour vous répondre.
              </p>
            </div>

            <!-- Cartes d'informations -->
            <div class="space-y-4">
              
              <!-- Email -->
              <div class="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:contact@bldteam.fr" class="text-gray-400 hover:text-yellow-400 transition-colors">
                      contact@bldteam.fr
                    </a>
                  </div>
                </div>
              </div>

              <!-- Discord -->
              <div class="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-bold text-lg mb-1">Discord</h3>
                    <a href="https://discord.gg/bldteam" target="_blank" class="text-gray-400 hover:text-indigo-400 transition-colors">
                      Rejoindre notre serveur
                    </a>
                  </div>
                </div>
              </div>

              <!-- Réseaux sociaux -->
              <div class="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-bold text-lg mb-1">Réseaux Sociaux</h3>
                    <div class="flex gap-4 mt-2">
                      <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">Twitch</a>
                      <a href="#" class="text-gray-400 hover:text-sky-400 transition-colors">Twitter</a>
                      <a href="#" class="text-gray-400 hover:text-red-400 transition-colors">YouTube</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Citation inspirante -->
            <div class="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-6">
              <svg class="w-8 h-8 text-yellow-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-white text-lg italic leading-relaxed mb-4">
                "Seuls, nous sommes forts. Ensemble, nous sommes invincibles."
              </p>
              <p class="text-yellow-400 font-semibold">— BLD Team</p>
            </div>

          </div>

          <!-- Colonne droite: Formulaire -->
          <div>
            <div class="bg-gray-800/50 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm">
              <h3 class="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                
                <!-- Nom -->
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-300 mb-2">
                    Nom / Pseudo *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required 
                    class="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="Votre pseudo"
                  >
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    class="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  >
                </div>

                <!-- Sujet -->
                <div>
                  <label for="subject" class="block text-sm font-semibold text-gray-300 mb-2">
                    Sujet *
                  </label>
                  <select 
                    id="subject" 
                    v-model="form.subject" 
                    required 
                    class="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="recrutement">Recrutement / Candidature</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="media">Demande média</option>
                    <option value="support">Support / Question</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    required 
                    rows="6"
                    class="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <!-- Bouton de soumission -->
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  :class="[
                    'w-full py-4 rounded-xl font-bold text-lg transition-all duration-300',
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105'
                  ]"
                >
                  <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Envoyer le message
                  </span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                </button>

                <!-- Message de succès -->
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-2"
                >
                  <div v-if="showSuccess" class="bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl p-4 flex items-start gap-3">
                    <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <p class="font-semibold">Message envoyé avec succès !</p>
                      <p class="text-sm text-green-300 mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </div>
                </transition>

              </form>
            </div>

            <!-- Note de confidentialité -->
            <p class="text-gray-500 text-xs text-center mt-6">
              Vos données sont protégées et ne seront jamais partagées avec des tiers.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         SECTION FAQ RAPIDE
         ============================================ -->
    <section class="py-24 md:py-32 bg-black">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            FAQ
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div class="space-y-4">
          <details 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all"
          >
            <summary class="cursor-pointer p-6 flex items-center justify-between text-white font-semibold text-lg">
              <span>{{ faq.question }}</span>
              <svg class="w-5 h-5 text-yellow-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-400 leading-relaxed">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const faqs = [
  {
    question: 'Comment puis-je rejoindre la BLD Team ?',
    answer: 'Pour rejoindre notre équipe, vous devez remplir le formulaire de recrutement avec vos informations. Nous examinerons votre candidature et vous contacterons si votre profil correspond à nos besoins.'
  },
  {
    question: 'Quel est le niveau minimum requis ?',
    answer: 'Nous recherchons principalement des joueurs Émeraude et plus. Cependant, nous évaluons également la mentalité, l\'esprit d\'équipe et la motivation.'
  },
  {
    question: 'Organisez-vous des tryouts ?',
    answer: 'Oui, nous organisons régulièrement des sessions de tryouts pour les joueurs prometteurs. Les dates sont annoncées sur notre Discord et nos réseaux sociaux.'
  },
  {
    question: 'Puis-je devenir partenaire de la BLD Team ?',
    answer: 'Absolument ! Nous sommes toujours ouverts aux partenariats. Contactez-nous via le formulaire en sélectionnant "Partenariat" comme sujet.'
  }
];

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // TODO: Envoyer les données à votre backend/Firebase/Supabase
  console.log('Formulaire soumis:', form.value);
  
  isSubmitting.value = false;
  showSuccess.value = true;
  
  // Réinitialiser le formulaire
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Masquer le message de succès après 5 secondes
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

/* Style pour les détails/summary */
details summary::-webkit-details-marker {
  display: none;
}
</style>