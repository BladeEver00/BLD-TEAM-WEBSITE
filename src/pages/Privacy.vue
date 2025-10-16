<!-- ============================================
     PAGE: Privacy.vue (Politique de Confidentialité)
     Informations sur la collecte et l'utilisation des données
     ============================================ -->

<template>
  <div class="bg-black min-h-screen">
    
    <!-- ============================================
         SECTION: HERO
         ============================================ -->
    <section class="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Politique de Confidentialité
        </h1>
        <p class="text-gray-400">
          Dernière mise à jour : {{ lastUpdate }}
        </p>
      </div>
    </section>

    <!-- ============================================
         SECTION: CONTENU
         ============================================ -->
    <section class="py-12 px-4">
      <div class="max-w-4xl mx-auto">
        
        <!-- Intro -->
        <div class="mb-12">
          <p class="text-gray-300 leading-relaxed text-lg">
            La BLD TEAM s'engage à protéger votre vie privée. Cette politique explique comment nous collectons, 
            utilisons et protégeons vos informations personnelles.
          </p>
        </div>

        <!-- Article 1 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">1</span>
            Collecte des Données
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Nous collectons les informations suivantes :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li><strong class="text-yellow-400">Données d'identification :</strong> Nom, prénom, pseudo, email</li>
              <li><strong class="text-yellow-400">Données de jeu :</strong> Pseudo League of Legends, rang, statistiques</li>
              <li><strong class="text-yellow-400">Données de contact :</strong> Discord, réseaux sociaux</li>
              <li><strong class="text-yellow-400">Données de navigation :</strong> Cookies, adresse IP, pages visitées</li>
            </ul>
          </div>
        </article>

        <!-- Article 2 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">2</span>
            Utilisation des Données
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Vos données sont utilisées pour :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Gérer votre candidature au sein de la BLD TEAM</li>
              <li>Communiquer avec vous concernant les recrutements et événements</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Envoyer des newsletters et actualités (avec votre consentement)</li>
              <li>Analyser les performances de l'équipe</li>
            </ul>
          </div>
        </article>

        <!-- Article 3 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">3</span>
            Protection des Données
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Nous mettons en œuvre des mesures de sécurité appropriées :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Cryptage SSL/TLS pour toutes les transmissions</li>
              <li>Stockage sécurisé sur des serveurs protégés</li>
              <li>Accès limité aux données personnelles</li>
              <li>Sauvegarde régulière des données</li>
              <li>Conformité RGPD</li>
            </ul>
          </div>
        </article>

        <!-- Article 4 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">4</span>
            Vos Droits
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <div class="grid md:grid-cols-2 gap-4 mt-4">
              <div class="bg-black/50 p-4 rounded-lg border border-yellow-500/10">
                <h4 class="text-yellow-400 font-semibold mb-2">Droit d'accès</h4>
                <p class="text-sm">Accéder à vos données personnelles</p>
              </div>
              <div class="bg-black/50 p-4 rounded-lg border border-yellow-500/10">
                <h4 class="text-yellow-400 font-semibold mb-2">Droit de rectification</h4>
                <p class="text-sm">Corriger vos informations</p>
              </div>
              <div class="bg-black/50 p-4 rounded-lg border border-yellow-500/10">
                <h4 class="text-yellow-400 font-semibold mb-2">Droit à l'effacement</h4>
                <p class="text-sm">Supprimer vos données</p>
              </div>
              <div class="bg-black/50 p-4 rounded-lg border border-yellow-500/10">
                <h4 class="text-yellow-400 font-semibold mb-2">Droit d'opposition</h4>
                <p class="text-sm">Refuser le traitement</p>
              </div>
            </div>
            <p class="mt-4">
              Pour exercer ces droits, contactez-nous à : 
              <a href="mailto:privacy@bldteam.gg" class="text-yellow-400 hover:text-yellow-300 underline">
                privacy@bldteam.gg
              </a>
            </p>
          </div>
        </article>

        <!-- Article 5 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">5</span>
            Cookies
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Notre site utilise des cookies pour :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Améliorer l'expérience utilisateur</li>
              <li>Analyser le trafic du site</li>
              <li>Personnaliser le contenu</li>
            </ul>
            <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.</p>
          </div>
        </article>

        <!-- Article 6 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">6</span>
            Partage des Données
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers. Vos informations peuvent être partagées 
              uniquement avec nos partenaires de confiance (hébergement, outils d'analyse) dans le cadre strict 
              de nos activités.
            </p>
          </div>
        </article>

        <!-- Contact -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-black mb-4">Des Questions ?</h3>
          <p class="text-gray-900 mb-6">
            N'hésitez pas à nous contacter pour toute question concernant vos données personnelles.
          </p>
          <a 
            href="mailto:privacy@bldteam.gg"
            class="inline-block px-8 py-3 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-colors"
          >
            Nous Contacter
          </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
/* ============================================
   IMPORTS
   ============================================ */
import { ref } from 'vue'

/* ============================================
   DONNÉES
   ============================================ */
const lastUpdate = ref('16 Octobre 2025')
</script>

<style scoped>
/* Styles pour les listes */
ul li {
  margin-left: 0.5rem;
}
</style>