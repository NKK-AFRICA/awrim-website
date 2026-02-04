<template>
  <div class="resources">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Our Publications</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Access our repository of reports, research, and organizational documents.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Publications</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        
        <!-- Empty State for No Resources -->
        <div v-if="resourcesItems.length === 0" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-file-alt text-3xl text-gray-400"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Publications Yet</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-8">We're working on adding important documents and resources. Check back soon!</p>
            <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
              <i class="fas fa-home"></i>
              Back to Home
            </router-link>
          </div>
        </div>

        <!-- Featured Resource -->
        <div v-else-if="featuredResource" class="uk-margin-medium-bottom" uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200">
           <div class="featured-doc-card">
              <div class="uk-grid-small uk-grid-match uk-flex-middle" uk-grid>
                 <div class="uk-width-auto">
                    <i :class="getFileIcon(featuredResource.file_type)" class="fa-3x file-icon-featured"></i>
                 </div>
                 <div class="uk-width-expand">
                    <h3 class="uk-margin-remove-bottom">{{ featuredResource.title }}</h3>
                    <p class="uk-text-meta uk-margin-small-top">{{ featuredResource.description }}</p>
                 </div>
                 <div class="uk-width-auto@s">
                    <a :href="featuredResource.file_url" target="_blank" class="uk-button uk-button-primary"><i class="fas fa-download uk-margin-small-right"></i> Download {{ featuredResource.file_type }}</a>
                 </div>
              </div>
           </div>
        </div>

        <div class="uk-grid-divider" uk-grid>
            <div class="uk-width-1-1">
                <div class="section-header">
                    <h3 class="uk-heading-line"><span>Publications Archive</span></h3>
                </div>

                <div v-if="nonFeaturedResources.length" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .doc-card; delay: 100">
                    <div v-for="item in nonFeaturedResources" :key="item.id">
                        <div class="doc-card">
                            <i :class="getFileIcon(item.file_type)" class="fa-3x file-icon-large"></i>
                            <span class="doc-title">{{ item.title }}</span>
                            <span class="doc-meta">{{ item.file_type }} • {{ item.file_size }}</span>
                            <div class="doc-action">
                                <a :href="item.file_url" target="_blank" class="uk-button uk-button-default uk-width-1-1">Download Publication</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center py-16">
                  <div class="max-w-md mx-auto">
                    <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i class="fas fa-file-alt text-3xl text-gray-400"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white/90 mb-3">No Publications Yet</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">We're working on adding important documents and resources. Check back soon!</p>
                    <router-link to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
                      <i class="fas fa-home"></i>
                      Back to Home
                    </router-link>
                  </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import api from '@/services/api';

const resourcesItems = ref([]);

const loadResources = async () => {
  try {
    const res = await api.getResources();
    resourcesItems.value = res.data;
  } catch (error) {
    console.error('Failed to load resources:', error);
  }
};

onMounted(loadResources);

const featuredResource = computed(() => {
  return resourcesItems.value.find(item => item.is_featured);
});

const nonFeaturedResources = computed(() => {
  return resourcesItems.value.filter(item => !item.is_featured);
});

const getFileIcon = (type) => {
  switch (type) {
    case 'PDF': return 'fas fa-file-pdf icon-pdf';
    case 'DOCX': return 'fas fa-file-word icon-word';
    case 'XLSX': return 'fas fa-file-excel icon-excel';
    case 'PPTX': return 'fas fa-file-powerpoint icon-ppt';
    default: return 'fas fa-file-alt';
  }
};
</script>

<style scoped>
/* Scoped styles are handled globaly in style.css */
</style>
