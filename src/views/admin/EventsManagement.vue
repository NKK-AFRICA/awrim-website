<template>
  <div class="space-y-6">
    <!-- Breadcrumb Area -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white/90">Events Calendar</h2>
        <nav class="flex mt-1">
          <ol class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li><router-link to="/admin" class="hover:text-brand-500">Dashboard</router-link></li>
            <li><i class="fas fa-chevron-right text-[10px] mx-1"></i></li>
            <li class="font-medium text-brand-500">Events</li>
          </ol>
        </nav>
      </div>
      <button 
        @click="openModal()"
        class="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors shadow-theme-xs"
      >
        <i class="fas fa-plus"></i> Add Event
      </button>
    </div>

    <!-- Data Table Card -->
    <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white/90">Scheduled Events</h3>
        <div class="relative w-full sm:w-80">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <i class="fas fa-search"></i>
          </span>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search events..." 
            class="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
          >
        </div>
      </div>

      <div v-if="loading" class="p-10 text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-500 border-t-transparent"></div>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-gray-800">
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Timeline</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Event Detail</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Location</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            <tr v-for="item in filteredEvents" :key="item.id" class="hover:bg-gray-50 dark:hover:bg-white/[0.01] transition-colors">
              <td class="px-5 py-4 whitespace-nowrap">
                <div class="w-14 h-14 flex flex-col items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800 rounded-xl leading-none">
                  <span class="text-lg font-bold text-gray-900 dark:text-white/90">{{ item.day }}</span>
                  <span class="text-[10px] font-bold text-brand-500 mt-1 uppercase">{{ item.month }}</span>
                </div>
              </td>
              <td class="px-5 py-4">
                <div class="max-w-xs sm:max-w-md">
                  <div class="font-bold text-gray-900 dark:text-white/90 text-sm truncate">{{ item.title }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{{ item.description }}</div>
                </div>
              </td>
              <td class="px-5 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                <div class="flex items-center gap-2">
                  <i class="fas fa-map-marker-alt text-[10px] text-gray-400"></i>
                  <span>{{ item.location }}</span>
                </div>
                <div class="text-xs flex items-center gap-2 mt-1">
                  <i class="far fa-clock text-[10px] text-gray-400"></i>
                  <span>{{ item.time }}</span>
                </div>
              </td>
              <td class="px-5 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button 
                    @click="openModal(item)"
                    class="p-2 text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-lg transition-colors"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button 
                    @click="deleteItem(item.id)"
                    class="p-2 text-gray-400 hover:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 rounded-lg transition-colors"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>
      <div class="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-theme-xl overflow-hidden animate-fade-in-up">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white/90">
            {{ isEditing ? 'Edit Event Schedule' : 'Schedule New Event' }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500 transition-colors">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <form @submit.prevent="saveItem">
          <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-5 col-span-1 md:col-span-2">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Event Title</label>
                  <input 
                    v-model="form.title"
                    type="text" 
                    placeholder="Enter event name..." 
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                    required
                  >
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Description</label>
                  <textarea 
                    v-model="form.description"
                    rows="4" 
                    placeholder="Provide full details about the event..." 
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <!-- Metadata Grid -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Event Date</label>
                <div class="grid grid-cols-3 gap-3">
                  <input v-model="form.day" type="text" placeholder="Day (24)" class="px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 outline-none" required>
                  <input v-model="form.month" type="text" placeholder="Month (JAN)" class="px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 outline-none" required>
                  <input v-model="form.year" type="text" placeholder="Year (2026)" class="px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 outline-none" required>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Time</label>
                <input 
                  v-model="form.time"
                  type="text" 
                  placeholder="e.g. 09:00 AM" 
                  class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 outline-none"
                  required
                >
              </div>

              <div class="col-span-1 md:col-span-2 space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Location</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <input 
                    v-model="form.location"
                    type="text" 
                    placeholder="e.g. AWRIM Main Center" 
                    class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 outline-none"
                    required
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 py-4 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-3">
            <button 
              type="button"
              @click="closeModal"
              class="px-5 py-2 text-sm font-bold text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-theme-sm transition-all"
            >
              {{ isEditing ? 'Save Changes' : 'Confirm Schedule' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import api from '@/services/api';

const eventsItems = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const showModal = ref(false);

const form = reactive({
  title: '',
  description: '',
  day: '',
  month: '',
  year: '',
  location: '',
  time: ''
});

const filteredEvents = computed(() => {
  if (!searchQuery.value) return eventsItems.value;
  return eventsItems.value.filter(e => e.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const loadEvents = async () => {
  loading.value = true;
  try {
    const res = await api.getEvents();
    eventsItems.value = res.data;
  } catch (error) {
    console.error('Fetch error:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(loadEvents);

const openModal = (item = null) => {
  if (item) {
    isEditing.value = true;
    editingId.value = item.id;
    Object.assign(form, item);
  } else {
    isEditing.value = false;
    editingId.value = null;
    form.title = '';
    form.description = '';
    form.day = '';
    form.month = '';
    form.year = new Date().getFullYear().toString();
    form.location = '';
    form.time = '09:00 AM';
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveItem = async () => {
  try {
    if (isEditing.value) {
      await api.updateEvent(editingId.value, form);
    } else {
      await api.addEvent(form);
    }
    closeModal();
    loadEvents();
  } catch (error) {
    console.error('Save fail:', error);
  }
};

const deleteItem = async (id) => {
  if (confirm('Delete this event?')) {
    try {
      await api.deleteEvent(id);
      loadEvents();
    } catch (error) {
       console.error('Delete fail:', error);
    }
  }
};
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
.dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #374151; }
</style>
