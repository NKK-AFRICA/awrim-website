<template>
  <div class="events">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Events Calendar</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Join us for upcoming trainings, meetings, and celebrations.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Events</span></li>
        </ul>
      </div>
    </div>

    <!-- Events List -->
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-small">
        
        <div class="section-header">
           <h3 class="uk-heading-line"><span>Upcoming Agenda</span></h3>
        </div>

        <div v-if="eventsItems.length">
          <!-- Dynamic Event Loop -->
          <div v-for="(item, index) in eventsItems" :key="item.id" class="event-card" uk-scrollspy="cls: uk-animation-slide-bottom-small" :style="{ 'delay': (index + 1) * 100 + 'ms' }">
             <div class="date-badge" :class="{ 'alternate': index % 3 === 1, 'secondary': index % 3 === 2 }">
                <h2>{{ item.day }}</h2>
                <span>{{ item.month }}</span>
                <small>{{ item.year }}</small>
             </div>
             <div class="event-details">
                <h3 class="event-title">{{ item.title }}</h3>
                <div class="event-meta">
                   <span><i class="fas fa-clock"></i> {{ item.time }}</span>
                   <span><i class="fas fa-map-marker-alt"></i> {{ item.location }}</span>
                </div>
                <p>{{ item.description }}</p>
                <div class="event-action">
                   <router-link :to="item.action_link || '#'" class="uk-button uk-button-primary uk-button-small">{{ item.action_text || 'Learn More' }}</router-link>
                </div>
             </div>
          </div>
        </div>
        <div v-else class="text-center py-16">
          <div class="max-w-md mx-auto">
            <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-calendar-alt text-3xl text-gray-400"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Events Scheduled</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-8">There are currently no upcoming events. Stay tuned for future announcements!</p>
            <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
              <i class="fas fa-home"></i>
              Back to Home
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const eventsItems = ref([])

onMounted(async () => {
  try {
    const res = await api.getEvents()
    eventsItems.value = res.data
  } catch (error) {
    console.error('Failed to load events:', error)
  }
})
</script>

<style scoped>
/* Scoped styles are handled globaly in style.css */
</style>
