<template>
  <div class="search-view">
    <div class="page-header">
      <div class="uk-container">
        <h1>Search Results</h1>
        <p v-if="query">Showing results for "{{ query }}"</p>
        <ul class="uk-breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><span>Search</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <form @submit.prevent="performSearch" class="uk-search uk-search-default uk-width-1-1 uk-margin-medium-bottom">
            <span uk-search-icon></span>
            <input class="uk-search-input uk-form-large" type="search" placeholder="Search again..." v-model="query">
        </form>

        <div v-if="results.length > 0">
            <p class="uk-text-meta">{{ results.length }} results found</p>
            <ul class="uk-list uk-list-divider uk-margin-top">
                <li v-for="(result, index) in results" :key="index" class="uk-padding-small uk-transition-toggle">
                    <router-link :to="result.link" class="uk-link-reset">
                        <span class="uk-text-meta uk-text-uppercase">{{ result.category }}</span>
                        <h3 class="uk-margin-small-top uk-margin-remove-bottom uk-text-primary">{{ result.title }}</h3>
                        <p class="uk-margin-small-top uk-text-muted">{{ result.snippet }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        
        <div v-else class="uk-text-center uk-padding-large">
            <i class="fas fa-search fa-4x uk-text-muted uk-margin-bottom"></i>
            <h3>No results found</h3>
            <p>Try using different keywords or check out our <router-link to="/resources">Resources</router-link>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const query = ref(route.query.q || '');
const results = ref([]);

// Mock Data for Search
const searchData = [
    { title: 'Education Initiatives', category: 'Activities', link: '/activities/education', snippet: 'Running schools and providing educational support across Malawi.' },
    { title: 'Annual Report 2024', category: 'Resources', link: '/resources', snippet: 'Download the comprehensive annual report for the previous year.' },
    { title: 'Major Superiors AGM', category: 'Events', link: '/events/agm-2026', snippet: 'Gathering of all Major Superiors in Lilongwe.' },
    { title: 'Justice and Peace Commission', category: 'About', link: '/about', snippet: 'Our work in advocating for social justice.' },
    { title: 'Contact Us', category: 'General', link: '/contact', snippet: 'Get in touch with the AWRIM secretariat.' },
    { title: 'Donate Now', category: 'General', link: '/donate', snippet: 'Support our mission through financial contributions.' }
];

const performSearch = () => {
    if (!query.value) {
        results.value = [];
        return;
    }
    const q = query.value.toLowerCase();
    results.value = searchData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q) || 
        item.snippet.toLowerCase().includes(q)
    );
};

onMounted(performSearch);
watch(() => route.query.q, (newQ) => {
    query.value = newQ || '';
    performSearch();
});
</script>
