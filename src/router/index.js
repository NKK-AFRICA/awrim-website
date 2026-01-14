
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
        
        // About Us section
        { path: 'about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About Us' } },
        { path: 'team', name: 'team', component: () => import('../views/TeamView.vue'), meta: { title: 'Leadership Team' } },
        { path: 'partners', name: 'partners', component: () => import('../views/PartnersView.vue'), meta: { title: 'Our Partners' } },
        
        // What We Do section
        { path: 'what-we-do', name: 'what-we-do', component: () => import('../views/WhatWeDoView.vue'), meta: { title: 'What We Do' } },
        { path: 'activities', name: 'activities', component: () => import('../views/ActivitiesView.vue'), meta: { title: 'Our Activities' } },
        { path: 'activities/:id', name: 'activity-detail', component: () => import('../views/ActivityDetailView.vue'), meta: { title: 'Activity Detail' } },
        
        // Our Networks section
        { path: 'networks', name: 'networks', component: () => import('../views/NetworksView.vue'), meta: { title: 'Our Networks' } },
        
        // Latest section
        { path: 'news', name: 'news', component: () => import('../views/NewsView.vue'), meta: { title: 'News & Updates' } },
        { path: 'news/:id', name: 'news-detail', component: () => import('../views/NewsDetailView.vue'), meta: { title: 'News Article' } },
        { path: 'events', name: 'events', component: () => import('../views/EventsView.vue'), meta: { title: 'Events Calendar' } },
        { path: 'events/:id', name: 'event-detail', component: () => import('../views/EventDetailView.vue'), meta: { title: 'Event Detail' } },
        { path: 'resources', name: 'resources', component: () => import('../views/ResourcesView.vue'), meta: { title: 'Publications' } },
        { path: 'gallery', name: 'gallery', component: () => import('../views/GalleryView.vue'), meta: { title: 'Media Gallery' } },
        
        // Join Us section
        { path: 'join-us', name: 'join-us', component: () => import('../views/JoinUsView.vue'), meta: { title: 'Join Us' } },
        { path: 'contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact Us' } },
        
        // Donate
        { path: 'donate', name: 'donate', component: () => import('../views/DonateView.vue'), meta: { title: 'Donate' } },
        
        // Other pages
        { path: 'faq', name: 'faq', component: () => import('../views/FAQView.vue'), meta: { title: 'FAQ' } },
        { path: 'privacy', name: 'privacy', component: () => import('../views/PrivacyView.vue'), meta: { title: 'Privacy Policy' } },
        { path: 'terms', name: 'terms', component: () => import('../views/TermsView.vue'), meta: { title: 'Terms of Use' } },
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
