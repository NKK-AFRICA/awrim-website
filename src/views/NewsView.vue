<template>
  <div class="news">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">News & Updates</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Latest stories, announcements, and press releases from our congregations and communities.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>News</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <!-- Dynamic News Loop -->
          <div v-for="item in newsItems" :key="item.id">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img :src="item.image" alt="News Image" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <span class="uk-label uk-label-danger uk-margin-small-bottom news-category-label">{{ item.category }}</span>
                        <h3 class="uk-card-title uk-margin-small-top">{{ item.title }}</h3>
                        <p>{{ item.summary }}</p>
                        <router-link :to="{ name: 'news-detail', params: { id: item.id } }" class="uk-button uk-button-text">Read More</router-link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const newsItems = ref([])

onMounted(async () => {
  try {
    const res = await api.getNews()
    newsItems.value = res.data
  } catch (error) {
    console.error('Failed to load news:', error)
  }
})
</script>
