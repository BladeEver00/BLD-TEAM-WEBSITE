<!-- ============================================
     PAGE: Terms.vue (Conditions d'Utilisation)
     Règles d'utilisation du site BLD TEAM
     ============================================ -->

<template>
  <div class="bg-black min-h-screen">
    
    <!-- ============================================
         SECTION: HERO
         ============================================ -->
    <section class="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Conditions d'Utilisation
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
            En accédant et en utilisant le site web de la BLD TEAM, vous acceptez d'être lié par les présentes 
            conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
          </p>
        </div>

        <!-- Article 1 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">1</span>
            Acceptation des Conditions
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              L'utilisation de ce site web implique l'acceptation pleine et entière des présentes conditions 
              générales d'utilisation. Ces conditions peuvent être modifiées à tout moment par la BLD TEAM.
            </p>
            <p>
              Il est donc recommandé de consulter régulièrement cette page pour prendre connaissance des 
              éventuelles modifications.
            </p>
          </div>
        </article>

        <!-- Article 2 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">2</span>
            Utilisation du Site
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Vous vous engagez à :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Utiliser le site de manière légale et conforme</li>
              <li>Ne pas perturber le fonctionnement du site</li>
              <li>Ne pas tenter d'accéder aux systèmes ou réseaux non autorisés</li>
              <li>Ne pas diffuser de contenu illégal, offensant ou inapproprié</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas utiliser de bots ou scripts automatisés</li>
            </ul>
          </div>
        </article>

        <!-- Article 3 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">3</span>
            Propriété Intellectuelle
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              L'ensemble du contenu présent sur ce site (logos, textes, images, vidéos, graphismes) est la 
              propriété exclusive de la BLD TEAM ou de ses partenaires et est protégé par les lois sur la 
              propriété intellectuelle.
            </p>
            <div class="bg-black/50 border-l-4 border-yellow-500 p-4 mt-4">
              <p class="text-yellow-400 font-semibold mb-2">⚠️ Interdictions</p>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Reproduction sans autorisation</li>
                <li>Modification du contenu</li>
                <li>Utilisation commerciale</li>
                <li>Distribution non autorisée</li>
              </ul>
            </div>
            <p>
              Toute utilisation non autorisée du contenu peut entraîner des poursuites judiciaires.
            </p>
          </div>
        </article>

        <!-- Article 4 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">4</span>
            Inscription et Compte Utilisateur
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>Si vous créez un compte sur notre plateforme :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Vous devez fournir des informations exactes et à jour</li>
              <li>Vous êtes responsable de la confidentialité de vos identifiants</li>
              <li>Vous êtes responsable de toutes les activités sur votre compte</li>
              <li>Vous devez notifier immédiatement toute utilisation non autorisée</li>
            </ul>
            <p class="mt-4">
              La BLD TEAM se réserve le droit de suspendre ou supprimer tout compte en cas de violation 
              des présentes conditions.
            </p>
          </div>
        </article>

        <!-- Article 5 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">5</span>
            Limitation de Responsabilité
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>La BLD TEAM ne pourra être tenue responsable :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Des dommages directs ou indirects résultant de l'utilisation du site</li>
              <li>Des interruptions de service ou dysfonctionnements techniques</li>
              <li>Des pertes de données ou de profits</li>
              <li>Du contenu publié par des tiers</li>
              <li>Des liens vers des sites externes</li>
            </ul>
            <p class="mt-4">
              Le site est fourni "tel quel" sans garantie d'aucune sorte.
            </p>
          </div>
        </article>

        <!-- Article 6 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">6</span>
            Liens Externes
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Notre site peut contenir des liens vers des sites web tiers. Ces liens sont fournis uniquement 
              pour votre commodité. La BLD TEAM n'a aucun contrôle sur ces sites et ne peut être tenue responsable 
              de leur contenu, leurs pratiques de confidentialité ou leurs conditions d'utilisation.
            </p>
          </div>
        </article>

        <!-- Article 7 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">7</span>
            Contenu Utilisateur
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Si vous publiez du contenu sur notre site (commentaires, candidatures, etc.), vous garantissez que :
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Vous possédez tous les droits sur ce contenu</li>
              <li>Le contenu ne viole aucun droit de tiers</li>
              <li>Le contenu n'est pas illégal, offensant ou diffamatoire</li>
            </ul>
            <p class="mt-4">
              En publiant du contenu, vous accordez à la BLD TEAM une licence non exclusive pour l'utiliser, 
              le modifier et le distribuer dans le cadre de ses activités.
            </p>
          </div>
        </article>

        <!-- Article 8 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">8</span>
            Droit Applicable
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Les présentes conditions sont régies par le droit français. Tout litige relatif à l'utilisation 
              du site sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </div>
        </article>

        <!-- Article 9 -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span class="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-sm">9</span>
            Modifications des Conditions
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              La BLD TEAM se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront 
              informés des modifications importantes par email ou via une notification sur le site.
            </p>
            <p>
              L'utilisation continue du site après ces modifications constitue votre acceptation des nouvelles conditions.
            </p>
          </div>
        </article>

        <!-- Contact -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-black mb-4">Questions sur nos Conditions ?</h3>
          <p class="text-gray-900 mb-6">
            Notre équipe est à votre disposition pour toute question concernant nos conditions d'utilisation.
          </p>
          <a 
            href="mailto:legal@bldteam.gg"
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