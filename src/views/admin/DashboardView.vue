<template>
  <div class="space-y-6">
    <!-- Header Area -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white/90 sm:text-3xl">Dashboard Overview</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Welcome back, Thomas!</p>
      </div>
    </div>

    <!-- Metrics Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      <!-- News Metric -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div class="flex items-center justify-center w-12 h-12 bg-brand-50 rounded-xl dark:bg-brand-500/10">
          <i class="fas fa-newspaper text-brand-600 dark:text-brand-400 text-xl"></i>
        </div>
        <div class="flex items-end justify-between mt-5">
          <div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Total News</span>
            <h4 class="mt-2 font-bold text-gray-900 text-title-sm dark:text-white/90">{{ newsCount }}</h4>
          </div>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
            <i class="fas fa-arrow-up text-xs"></i> 11.0%
          </span>
        </div>
      </div>

      <!-- Events Metric -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div class="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl dark:bg-blue-500/10">
          <i class="fas fa-calendar-alt text-blue-600 dark:text-blue-400 text-xl"></i>
        </div>
        <div class="flex items-end justify-between mt-5">
          <div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Events</span>
            <h4 class="mt-2 font-bold text-gray-900 text-title-sm dark:text-white/90">{{ eventsCount }}</h4>
          </div>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
            <i class="fas fa-arrow-up text-xs"></i> 4.3%
          </span>
        </div>
      </div>

      <!-- Gallery Metric -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div class="flex items-center justify-center w-12 h-12 bg-orange-50 rounded-xl dark:bg-orange-500/10">
          <i class="fas fa-images text-orange-600 dark:text-orange-400 text-xl"></i>
        </div>
        <div class="flex items-end justify-between mt-5">
          <div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Media Assets</span>
            <h4 class="mt-2 font-bold text-gray-900 text-title-sm dark:text-white/90">{{ galleryCount }}</h4>
          </div>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500">
            <i class="fas fa-arrow-down text-xs"></i> 2.1%
          </span>
        </div>
      </div>

      <!-- Publications Metric -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div class="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-xl dark:bg-purple-500/10">
          <i class="fas fa-file-alt text-purple-600 dark:text-purple-400 text-xl"></i>
        </div>
        <div class="flex items-end justify-between mt-5">
          <div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Documents</span>
            <h4 class="mt-2 font-bold text-gray-900 text-title-sm dark:text-white/90">{{ publicationsCount }}</h4>
          </div>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
            <i class="fas fa-arrow-up text-xs"></i> 0.9%
          </span>
        </div>
      </div>
    </div>

    <!-- Main Content Row -->
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12 space-y-6 lg:col-span-8">
        <!-- Sales Chart Mockup -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-7.5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white/90">Engagement Analytics</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Visual breakdown of content interaction</p>
            </div>
          </div>
          <div class="mt-6 h-80 w-full bg-gray-50 dark:bg-white/5 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center">
             <span class="text-gray-400 text-sm font-medium italic">Engagement Chart Visualization</span>
          </div>
        </div>
      </div>

      <!-- Target/Stats sidebar -->
      <div class="col-span-12 lg:col-span-4 space-y-6">
         <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-7.5">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white/90">Quick Stats</h3>
            <div class="mt-6 space-y-4">
               <div class="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800">
                  <div class="flex items-center gap-3">
                     <span class="w-2 h-2 rounded-full bg-brand-500"></span>
                     <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Site Traffic</span>
                  </div>
                  <span class="text-sm font-bold">12.5k</span>
               </div>
               <div class="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800">
                  <div class="flex items-center gap-3">
                     <span class="w-2 h-2 rounded-full bg-success-500"></span>
                     <span class="text-sm font-medium text-gray-700 dark:text-gray-300">New Members</span>
                  </div>
                  <span class="text-sm font-bold">482</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

const newsCount = ref(0);
const eventsCount = ref(0);
const galleryCount = ref(0);
const publicationsCount = ref(0);

onMounted(async () => {
  try {
    const news = await api.getNews();
    newsCount.value = news.data.length;
    const events = await api.getEvents();
    eventsCount.value = events.data.length;
    const gallery = await api.getGallery();
    galleryCount.value = gallery.data.length;
    const resources = await api.getResources();
    publicationsCount.value = resources.data.length;
  } catch (error) {
    console.error('Failed to fetch stats:', error);
  }
});
</script>
