// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Team from '../pages/Team.vue'
import Matches from '../pages/Matches.vue'
import Media from '../pages/Media.vue'
import News from '../pages/News.vue'
import Contact from '../pages/Contact.vue'
import Recruitement from '../pages/Recruitement.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/team', name: 'Team', component: Team },
  { path: '/matches', name: 'Matches', component: Matches },
  { path: '/media', name: 'Media', component: Media },
  { path: '/news', name: 'News', component: News },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/recrutement', name: 'Recruitement', component: Recruitement },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router