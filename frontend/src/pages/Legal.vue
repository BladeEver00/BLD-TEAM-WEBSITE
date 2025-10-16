<!-- ============================================
     PAGE: Legal.vue (Mentions Légales)
     Informations légales obligatoires du site
     ============================================ -->

<template>
  <div class="bg-black min-h-screen">
    
    <!-- ============================================
         SECTION: HERO
         ============================================ -->
    <section class="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Mentions Légales
        </h1>
        <p class="text-gray-400">
          Informations légales et réglementaires
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
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie 
            numérique, il est précisé aux utilisateurs du site BLD TEAM l'identité des différents intervenants 
            dans le cadre de sa réalisation et de son suivi.
          </p>
        </div>

        <!-- Section 1: Éditeur du site -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            Éditeur du Site
          </h2>
          <div class="space-y-3 text-gray-300">
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Organisation :</span>
              <span>BLD TEAM</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Forme juridique :</span>
              <span>Association loi 1901</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Adresse siège :</span>
              <span>123 Rue de la Victoire, 75000 Paris, France</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Email :</span>
              <a href="mailto:contact@bldteam.gg" class="text-yellow-400 hover:text-yellow-300 underline">
                contact@bldteam.gg
              </a>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Téléphone :</span>
              <span>+33 1 23 45 67 89</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Directeur :</span>
              <span>M. Jean DRAGON</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">SIRET :</span>
              <span>123 456 789 00012</span>
            </div>
          </div>
        </article>

        <!-- Section 2: Hébergement -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
            </svg>
            Hébergement
          </h2>
          <div class="space-y-3 text-gray-300">
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Hébergeur :</span>
              <span>Vercel Inc.</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Adresse :</span>
              <span>340 S Lemon Ave #4133, Walnut, CA 91789, USA</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Site web :</span>
              <a href="https://vercel.com" target="_blank" class="text-yellow-400 hover:text-yellow-300 underline">
                vercel.com
              </a>
            </div>
          </div>
        </article>

        <!-- Section 3: Développement -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            Conception et Développement
          </h2>
          <div class="space-y-3 text-gray-300">
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Développeur :</span>
              <span>BLD TEAM - Équipe technique</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Technologies :</span>
              <span>Vue.js 3, Vite, Tailwind CSS, Firebase</span>
            </div>
          </div>
        </article>

        <!-- Section 4: Propriété intellectuelle -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            Propriété Intellectuelle
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
              les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <div class="bg-black/50 border-l-4 border-yellow-500 p-4">
              <p class="font-semibold text-yellow-400 mb-2">© 2025 BLD TEAM - Tous droits réservés</p>
              <p class="text-sm">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit 
                est formellement interdite sauf autorisation expresse de la direction de la BLD TEAM.
              </p>
            </div>
            <p>
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) 
              font l'objet d'une protection par le Code de la propriété intellectuelle et plus 
              particulièrement par le droit d'auteur.
            </p>
          </div>
        </article>

        <!-- Section 5: Données personnelles -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Protection des Données Personnelles
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
              et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
              aux données personnelles vous concernant.
            </p>
            <div class="bg-gray-800/50 p-4 rounded-lg">
              <p class="font-semibold text-yellow-400 mb-2">Pour exercer vos droits :</p>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Email : <a href="mailto:privacy@bldteam.gg" class="text-yellow-400 hover:text-yellow-300 underline">privacy@bldteam.gg</a></li>
                <li>Courrier : BLD TEAM - 123 Rue de la Victoire, 75000 Paris</li>
              </ul>
            </div>
            <p>
              Pour plus d'informations, consultez notre 
              <router-link to="/privacy" class="text-yellow-400 hover:text-yellow-300 underline font-semibold">
                Politique de Confidentialité
              </router-link>.
            </p>
          </div>
        </article>

        <!-- Section 6: Cookies -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
            Cookies
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Le site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques 
              de visites. Les cookies sont de petits fichiers texte stockés sur votre ordinateur.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-black/50 p-4 rounded-lg border border-yellow-500/10">
                <h4 class="text-yellow-400 font-semibold mb-2">Cookies essentiels</h4>
                <p class="text-sm">Nécessaires au fonctionnement du site</p>
              </div>
              <div class="bg-black/50 p-4 rounded-lg border border-yellow-500/10">
                <h4 class="text-yellow-400 font-semibold mb-2">Cookies analytiques</h4>
                <p class="text-sm">Statistiques de fréquentation</p>
              </div>
            </div>
            <p>
              Vous pouvez désactiver les cookies depuis les paramètres de votre navigateur. Notez que cela 
              peut affecter certaines fonctionnalités du site.
            </p>
          </div>
        </article>

        <!-- Section 7: Responsabilité -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            Limitation de Responsabilité
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              La BLD TEAM s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations 
              diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou 
              l'exhaustivité des informations mises à disposition.
            </p>
            <p>
              La BLD TEAM ne pourra être tenue responsable :
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Des dommages directs et indirects causés au matériel de l'utilisateur</li>
              <li>Des interruptions ou dysfonctionnements du site</li>
              <li>De l'utilisation du site ou de l'impossibilité de l'utiliser</li>
              <li>Des contenus des sites liés au présent site</li>
            </ul>
          </div>
        </article>

        <!-- Section 8: Crédits -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
            </svg>
            Crédits et Ressources
          </h2>
          <div class="space-y-3 text-gray-300">
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Design :</span>
              <span>BLD TEAM Design Studio</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Icônes :</span>
              <span>Lucide Icons, Heroicons</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Polices :</span>
              <span>Google Fonts (Montserrat, Cinzel)</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-yellow-400 font-semibold min-w-[140px]">Images :</span>
              <span>BLD TEAM Media, Riot Games (League of Legends)</span>
            </div>
          </div>
        </article>

        <!-- Section 9: Loi applicable -->
        <article class="mb-12 bg-gray-900/30 border border-yellow-500/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
            </svg>
            Droit Applicable et Juridiction
          </h2>
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut 
              d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles 
              de compétence en vigueur.
            </p>
            <p>
              Tout litige en relation avec l'utilisation du site www.bldteam.gg est soumis au droit français.
            </p>
          </div>
        </article>

        <!-- Contact -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-black mb-4">Besoin de Plus d'Informations ?</h3>
          <p class="text-gray-900 mb-6">
            Pour toute question concernant ces mentions légales, n'hésitez pas à nous contacter.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:legal@bldteam.gg"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
            <router-link 
              to="/contact"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Formulaire
            </router-link>
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
// Pas d'imports nécessaires pour cette page statique

/* ============================================
   MÉTADONNÉES
   ============================================ */
// Cette page contient les informations légales obligatoires
// conformément à la loi française pour la confiance dans l'économie numérique
</script>

<style scoped>
/* Styles pour les listes */
ul li {
  margin-left: 0.5rem;
}
</style>