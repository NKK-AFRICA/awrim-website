<template>
  <div class="news">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1>News & Updates</h1>
        <p>Latest stories, announcements, and press releases from our congregations and communities.</p>
        <ul class="uk-breadcrumb">
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
                        <span class="uk-label uk-label-danger uk-margin-small-bottom" style="font-size: 0.7rem;">{{ item.category }}</span>
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
import { ref } from 'vue'

const newsItems = ref([
  {
    id: 1,
    title: "New Education Center Opened",
    date: "January 5, 2026",
    category: "Education",
    image: "https://picsum.photos/600/400?random=50",
    summary: "AWRIM is proud to announce the opening of a new secondary school in Mzuzu, serving over 500 students."
  },
  {
    id: 2,
    title: "Annual General Meeting 2025",
    date: "December 12, 2025",
    category: "Events",
    image: "https://picsum.photos/600/400?random=51",
    summary: "The Major Superiors met in Lilongwe to discuss strategic goals for the upcoming year."
  },
  {
    id: 3,
    title: "Relief Aid for Flood Victims",
    date: "November 20, 2025",
    category: "Charity",
    image: "https://picsum.photos/600/400?random=52",
    summary: "AWRIM sisters have mobilized resources to support families affected by recent floods in the Southern Region."
  }
])
</script>
