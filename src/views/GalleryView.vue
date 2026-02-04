<template>
  <div class="gallery">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Gallery</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Visual moments from our mission, community work, and celebrations.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Gallery</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        
        <!-- Category Filters -->
        <div class="uk-flex uk-flex-center uk-margin-large-bottom">
            <ul class="uk-subnav uk-subnav-pill gallery-filters" uk-switcher="connect: #gallery-grid; animation: uk-animation-fade">
                <li class="uk-active"><a href="#">All</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Community</a></li>
            </ul>
        </div>

        <ul id="gallery-grid" class="uk-switcher">
            <!-- All -->
            <li>
                <div v-if="galleryItems.length" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in galleryItems" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
                    </div>
                </div>
                <div v-else class="text-center py-16">
                  <div class="max-w-md mx-auto">
                    <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i class="fas fa-images text-3xl text-gray-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Media Yet</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">Our media gallery is currently being populated. Check back soon for photos and images!</p>
                    <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
                      <i class="fas fa-home"></i>
                      Back to Home
                    </router-link>
                  </div>
                </div>
            </li>
            <!-- Mission -->
            <li>
                <div v-if="filteredGallery('Mission').length" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in filteredGallery('Mission')" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
                    </div>
                </div>
                <div v-else class="text-center py-16">
                  <div class="max-w-md mx-auto">
                    <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i class="fas fa-pray text-3xl text-gray-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Mission Photos</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">Mission-related photos will be added to the gallery soon.</p>
                    <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
                      <i class="fas fa-home"></i>
                      Back to Home
                    </router-link>
                  </div>
                </div>
            </li>
             <!-- Events -->
            <li>
                <div v-if="filteredGallery('Events').length" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in filteredGallery('Events')" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
                    </div>
                </div>
                <div v-else class="text-center py-16">
                  <div class="max-w-md mx-auto">
                    <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i class="fas fa-calendar-alt text-3xl text-gray-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Event Photos</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">Event photos will be added to the gallery after upcoming gatherings.</p>
                    <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
                      <i class="fas fa-home"></i>
                      Back to Home
                    </router-link>
                  </div>
                </div>
            </li>
             <!-- Community -->
            <li>
                <div v-if="filteredGallery('Community').length" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in filteredGallery('Community')" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
                    </div>
                </div>
                <div v-else class="text-center py-16">
                  <div class="max-w-md mx-auto">
                    <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i class="fas fa-users text-3xl text-gray-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Community Photos</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">Community photos will be added to showcase our congregation and activities.</p>
                    <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
                      <i class="fas fa-home"></i>
                      Back to Home
                    </router-link>
                  </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

const galleryItems = ref([]);

const loadGallery = async () => {
  try {
    const res = await api.getGallery();
    galleryItems.value = res.data;
  } catch (error) {
    console.error('Failed to load gallery:', error);
  }
};

onMounted(loadGallery);

const filteredGallery = (category) => {
  return galleryItems.value.filter(item => item.category === category);
};
</script>
