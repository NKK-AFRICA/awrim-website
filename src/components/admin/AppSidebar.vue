<template>
  <aside
    class="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200"
    :class="[
      sidebarStore.isExpanded || sidebarStore.isMobileOpen || sidebarStore.isHovered ? 'w-[290px]' : 'w-[90px]',
      sidebarStore.isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
    @mouseenter="sidebarStore.setIsHovered(true)"
    @mouseleave="sidebarStore.setIsHovered(false)"
  >
    <div
      class="py-8 flex"
      :class="!sidebarStore.isExpanded && !sidebarStore.isHovered ? 'lg:justify-center' : 'justify-start'"
    >
      <router-link to="/admin">
        <template v-if="sidebarStore.isExpanded || sidebarStore.isHovered || sidebarStore.isMobileOpen">
          <div class="flex items-center gap-2">
            <div class="bg-brand-500 p-1.5 rounded-lg flex items-center justify-center">
              <i class="fas fa-feather-alt text-white text-xl"></i>
            </div>
            <span class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">AWRIM Admin</span>
          </div>
        </template>
        <template v-else>
          <div class="bg-brand-500 p-1.5 rounded-lg flex items-center justify-center">
            <i class="fas fa-feather-alt text-white text-lg"></i>
          </div>
        </template>
      </router-link>
    </div>

    <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
      <nav class="mb-6">
        <div class="flex flex-col gap-4">
          <!-- Main Menu -->
          <div>
            <h2
              class="mb-4 text-xs uppercase flex leading-[20px] text-gray-400"
              :class="!sidebarStore.isExpanded && !sidebarStore.isHovered ? 'lg:justify-center' : 'justify-start'"
            >
              <template v-if="sidebarStore.isExpanded || sidebarStore.isHovered || sidebarStore.isMobileOpen">
                Menu
              </template>
              <template v-else>
                <i class="fas fa-ellipsis-h"></i>
              </template>
            </h2>
            <ul class="flex flex-col gap-2">
              <li v-for="item in navItems" :key="item.name">
                <router-link
                  :to="item.path"
                  class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
                  :class="[
                    $route.path === item.path 
                      ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/[0.03]',
                    !sidebarStore.isExpanded && !sidebarStore.isHovered ? 'lg:justify-center' : ''
                  ]"
                >
                  <i :class="[item.icon, 'text-lg']"></i>
                  <span v-if="sidebarStore.isExpanded || sidebarStore.isHovered || sidebarStore.isMobileOpen" class="font-medium">
                    {{ item.name }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { sidebarStore } from '@/services/sidebarStore';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: 'fas fa-th-large' },
  { name: 'News & Articles', path: '/admin/news', icon: 'fas fa-newspaper' },
  { name: 'Events Calendar', path: '/admin/events', icon: 'fas fa-calendar-alt' },
  { name: 'Media Gallery', path: '/admin/gallery', icon: 'fas fa-images' },
  { name: 'Publications', path: '/admin/publications', icon: 'fas fa-file-alt' },
  { name: 'Public Website', path: '/', icon: 'fas fa-external-link-alt' },
];
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
