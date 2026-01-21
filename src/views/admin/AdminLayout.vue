<template>
  <div class="admin-layout-wrapper min-h-screen xl:flex bg-gray-50 dark:bg-gray-950">
    <AppSidebar />
    
    <!-- Backdrop for mobile -->
    <div 
      v-if="sidebarStore.isMobileOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="sidebarStore.toggleMobileSidebar"
    ></div>

    <div
      class="flex-1 transition-all duration-300 ease-in-out"
      :class="[
        sidebarStore.isExpanded || sidebarStore.isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]',
        sidebarStore.isMobileOpen ? 'ml-0' : ''
      ]"
    >
      <AppHeader />
      <div class="p-4 mx-auto max-w-screen-2xl md:p-6 lg:p-10">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sidebarStore } from '@/services/sidebarStore';
import AppSidebar from '@/components/admin/AppSidebar.vue';
import AppHeader from '@/components/admin/AppHeader.vue';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
