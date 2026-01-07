
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', name: 'home', component: HomeView, meta: { title: 'Home' } },
        { path: 'about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About Us' } },
        { path: 'activities', name: 'activities', component: () => import('../views/ActivitiesView.vue'), meta: { title: 'Our Activities' } },
        { path: 'contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact Us' } },
        { path: 'team', name: 'team', component: () => import('../views/TeamView.vue'), meta: { title: 'Leadership Team' } },
        { path: 'news', name: 'news', component: () => import('../views/NewsView.vue'), meta: { title: 'News & Updates' } },
        { path: 'news/:id', name: 'news-detail', component: () => import('../views/NewsDetailView.vue'), meta: { title: 'News Article' } },
        { path: 'resources', name: 'resources', component: () => import('../views/ResourcesView.vue'), meta: { title: 'Resources' } },
        { path: 'gallery', name: 'gallery', component: () => import('../views/GalleryView.vue'), meta: { title: 'Gallery' } },
        { path: 'events', name: 'events', component: () => import('../views/EventsView.vue'), meta: { title: 'Events Calendar' } },
        { path: 'partners', name: 'partners', component: () => import('../views/PartnersView.vue'), meta: { title: 'Our Partners' } },
        { path: 'faq', name: 'faq', component: () => import('../views/FAQView.vue'), meta: { title: 'FAQ' } },
        { path: 'donate', name: 'donate', component: () => import('../views/DonateView.vue'), meta: { title: 'Donate' } },
        { path: 'privacy', name: 'privacy', component: () => import('../views/PrivacyView.vue'), meta: { title: 'Privacy Policy' } },
        { path: 'terms', name: 'terms', component: () => import('../views/TermsView.vue'), meta: { title: 'Terms of Use' } },
        { path: 'activities/:id', name: 'activity-detail', component: () => import('../views/ActivityDetailView.vue'), meta: { title: 'Activity Detail' } },
        { path: 'events/:id', name: 'event-detail', component: () => import('../views/EventDetailView.vue'), meta: { title: 'Event Detail' } },
        { path: 'search', name: 'search', component: () => import('../views/SearchView.vue'), meta: { title: 'Search Results' } },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue'), meta: { title: 'Page Not Found' } }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'AWRIM - Association of Women in Religious Institutes of Malawi';
  // Use route meta title if available, otherwise default
  document.title = to.meta.title ? `${to.meta.title} | AWRIM` : defaultTitle;
  next();
});

export default router
