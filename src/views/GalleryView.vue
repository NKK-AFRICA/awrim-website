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
                <div v-else class="uk-text-center uk-margin-large-top">
                  <p class="uk-text-muted">No gallery items found.</p>
                </div>
            </li>
            <!-- Mission -->
            <li>
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in filteredGallery('Mission')" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
                    </div>
                </div>
            </li>
             <!-- Events -->
            <li>
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in filteredGallery('Events')" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
                    </div>
                </div>
            </li>
             <!-- Community -->
            <li>
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large" uk-grid uk-lightbox="animation: slide">
                    <div v-for="item in filteredGallery('Community')" :key="item.id">
                        <a class="gallery-item uk-display-block" :href="item.image_url" :data-caption="item.caption">
                            <img :src="item.image_url" alt="" class="gallery-image">
                        </a>
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
