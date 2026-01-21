<template>
  <header class="sticky top-0 flex w-full bg-white border-gray-200 z-40 dark:border-gray-800 dark:bg-gray-900 border-b">
    <div class="flex flex-col items-center justify-between flex-grow lg:flex-row lg:px-6">
      <div class="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
        <button
          class="flex items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg dark:border-gray-800 dark:text-gray-400 lg:h-11 lg:w-11 lg:border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          @click="handleToggle"
        >
          <i v-if="sidebarStore.isMobileOpen" class="fas fa-times text-xl"></i>
          <i v-else class="fas fa-bars text-lg"></i>
        </button>

        <router-link to="/" class="lg:hidden flex items-center gap-2">
          <div class="bg-brand-500 p-1 rounded-md flex items-center justify-center">
            <i class="fas fa-feather-alt text-white text-xs"></i>
          </div>
          <span class="font-bold text-lg tracking-tight text-gray-900 dark:text-white">AWRIM Admin</span>
        </router-link>

        <div class="hidden lg:block">
          <div class="relative">
            <span class="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-gray-400">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search or type command..."
              class="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 xl:w-[430px]"
          />
          </div>
        </div>
      </div>
      
      <div class="flex items-center justify-end w-full gap-4 px-5 py-4 lg:py-0 lg:px-0">
        <div class="flex items-center gap-3">
          <!-- Quick Actions -->
          <button class="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <i class="far fa-bell text-lg"></i>
            <span class="absolute top-2 right-2.5 w-2 h-2 bg-error-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>
          <button class="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <i class="far fa-comment-dots text-lg"></i>
          </button>
        </div>

        <div class="h-8 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>

        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="text-right hidden sm:block">
            <div class="text-sm font-bold text-gray-900 dark:text-white/90">Frankline Jambo</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">UX Designer</div>
          </div>
          <div class="relative">
            <img src="https://ui-avatars.com/api/?name=Frankline+Jambo&background=4461FF&color=fff" class="w-11 h-11 rounded-full border border-gray-200 p-0.5" alt="Avatar" />
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-success-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </div>
          <i class="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-gray-600 transition-colors"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { sidebarStore } from '@/services/sidebarStore';

const handleToggle = () => {
  if (window.innerWidth >= 1024) {
    sidebarStore.toggleSidebar();
  } else {
    sidebarStore.toggleMobileSidebar();
  }
};
</script>
