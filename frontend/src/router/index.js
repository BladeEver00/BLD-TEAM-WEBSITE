import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

// --- VÉRIFICATION N°1 : Assurez-vous que tous ces fichiers existent ---
import Home from '@/pages/Home.vue';
import Team from '@/pages/Team.vue';
import Matches from '@/pages/Matches.vue';
import Media from '@/pages/Media.vue';
import News from '@/pages/News.vue';
import Contact from '@/pages/Contact.vue';
import Recruitement from '@/pages/Recruitement.vue';
import Privacy from '@/pages/Privacy.vue';
import Legal from '@/pages/Legal.vue';
import Terms from '@/pages/Terms.vue';

// --- VÉRIFICATION N°2 : Assurez-vous que tous ces fichiers ADMIN existent ---
import AdminLayout from '@/pages/admin/AdminLayout.vue';
import LoginPage from '@/pages/admin/LoginPage.vue';
import DashboardPage from '@/pages/admin/DashboardPage.vue';
import NewsManager from '@/pages/admin/NewsManager.vue';
import UsersManager from '@/pages/admin/UsersManager.vue';
import MatchesManager from '@/pages/admin/MatchesManager.vue';

const routes = [
  // --- ROUTES PUBLIQUES ---
  { path: '/', name: 'Home', component: Home },
  { path: '/team', name: 'Team', component: Team },
  { path: '/matches', name: 'Matches', component: Matches },
  { path: '/media', name: 'Media', component: Media },
  { path: '/news', name: 'News', component: News },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/recrutement', name: 'Recruitement', component: Recruitement },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/legal', name: 'Legal', component: Legal },
  { path: '/terms', name: 'Terms', component: Terms }, // <-- VÉRIFICATION N°3 : Une virgule est bien présente ici

  // --- ROUTE PARENTE POUR L'ADMINISTRATION ---
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'AdminDashboard', component: DashboardPage },
      { path: 'news', name: 'AdminNews', component: NewsManager },
      { path: 'users', name: 'AdminUsers', component: UsersManager },
      { path: 'matches', name: 'AdminMatches', component: MatchesManager } // <-- VÉRIFICATION N°4 : Pas de virgule après le dernier élément
    ]
  }, // <-- VÉRIFICATION N°5 : Une virgule est bien présente ici
  
  // --- ROUTE DE CONNEXION ---
  {
    path: '/admin/login',
    name: 'Login',
    component: LoginPage
  } // <-- Pas de virgule après le dernier élément du tableau
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;