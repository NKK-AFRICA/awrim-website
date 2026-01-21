<template>
  <div class="space-y-6">
    <!-- Breadcrumb Area -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white/90">News & Articles</h2>
        <nav class="flex mt-1">
          <ol class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li><router-link to="/admin" class="hover:text-brand-500">Dashboard</router-link></li>
            <li><i class="fas fa-chevron-right text-[10px] mx-1"></i></li>
            <li class="font-medium text-brand-500">News</li>
          </ol>
        </nav>
      </div>
      <button 
        @click="openModal()"
        class="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors shadow-theme-xs"
      >
        <i class="fas fa-plus"></i> Create News
      </button>
    </div>

    <!-- Data Table Card -->
    <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white/90">News Articles</h3>
        <div class="relative w-full sm:w-80">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <i class="fas fa-search"></i>
          </span>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Filter articles..." 
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
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Thumbnail</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Headline & Snippet</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Published</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            <tr v-for="item in filteredNews" :key="item.id" class="hover:bg-gray-50 dark:hover:bg-white/[0.01] transition-colors">
              <td class="px-5 py-4 whitespace-nowrap">
                <img :src="item.image_url" class="rounded-lg object-cover border border-gray-100 dark:border-gray-800" style="width: 48px; height: 48px;" alt="">
              </td>
              <td class="px-5 py-4">
                <div class="max-w-xs sm:max-w-md lg:max-w-lg">
                  <div class="font-bold text-gray-900 dark:text-white/90 text-sm truncate">{{ item.title }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{{ item.content }}</div>
                </div>
              </td>
              <td class="px-5 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                {{ item.date }}
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
      <div class="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-theme-xl overflow-hidden animate-fade-in-up">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white/90">
            {{ isEditing ? 'Edit Article' : 'Compose News' }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500 transition-colors">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <form @submit.prevent="saveItem">
          <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
            <div class="grid grid-cols-12 gap-6">
              <!-- Left Column: Content -->
              <div class="col-span-12 lg:col-span-8 space-y-5">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Headline</label>
                  <input 
                    v-model="form.title"
                    type="text" 
                    placeholder="Enter article title..." 
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                    required
                  >
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Article Content</label>
                  <textarea 
                    v-model="form.content"
                    rows="12" 
                    placeholder="Full story content goes here..." 
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <!-- Right Column: Sidebar Metadata -->
              <div class="col-span-12 lg:col-span-4 space-y-5">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Publication Date</label>
                  <input 
                    v-model="form.date"
                    type="text" 
                    placeholder="Jan 21, 2026" 
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                    required
                  >
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Cover Photo</label>
                  <div class="space-y-3">
                    <div v-if="imagePreview || form.image_url" class="relative group aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                      <img :src="imagePreview || form.image_url" class="w-full h-full object-cover" />
                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <i class="fas fa-sync-alt text-white text-xl"></i>
                      </div>
                    </div>
                    <div class="relative">
                      <input 
                        type="file" 
                        ref="fileInput" 
                        @change="onFileChange" 
                        accept="image/*" 
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        :required="!isEditing && !form.image_url"
                      >
                      <div class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-sm text-center flex items-center justify-center gap-2 transition-colors hover:border-brand-500">
                        <i class="fas fa-camera text-brand-500"></i>
                        <span class="text-gray-500 font-medium">{{ selectedFile ? 'Change' : 'Upload Photo' }}</span>
                      </div>
                    </div>
                  </div>
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
              :disabled="uploading"
              class="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-theme-sm transition-all flex items-center gap-2 disabled:opacity-70"
            >
              <template v-if="uploading">
                <div class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Processing...
              </template>
              <template v-else>
                {{ isEditing ? 'Save Changes' : 'Publish News' }}
              </template>
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

const newsItems = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const selectedFile = ref(null);
const fileInput = ref(null);
const imagePreview = ref(null);
const uploading = ref(false);
const showModal = ref(false);

const form = reactive({
  title: '',
  date: '',
  content: '',
  image_url: ''
});

const filteredNews = computed(() => {
  if (!searchQuery.value) return newsItems.value;
  return newsItems.value.filter(n => n.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const loadNews = async () => {
  loading.value = true;
  try {
    const res = await api.getNews();
    newsItems.value = res.data;
  } catch (error) {
    console.error('Fetch error:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(loadNews);

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedFile.value = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const openModal = (item = null) => {
  selectedFile.value = null;
  imagePreview.value = null;
  if (item) {
    isEditing.value = true;
    editingId.value = item.id;
    Object.assign(form, item);
  } else {
    isEditing.value = false;
    editingId.value = null;
    form.title = '';
    form.date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    form.content = '';
    form.image_url = '';
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveItem = async () => {
  try {
    uploading.value = true;
    if (selectedFile.value) {
      const uploadRes = await api.uploadImage(selectedFile.value);
      form.image_url = uploadRes.data.url;
    }
    if (isEditing.value) {
      await api.updateNews(editingId.value, form);
    } else {
      await api.addNews(form);
    }
    closeModal();
    loadNews();
  } catch (error) {
    console.error('Save error:', error);
  } finally {
    uploading.value = false;
  }
};

const deleteItem = async (id) => {
  if (confirm('Delete this article?')) {
    try {
      await api.deleteNews(id);
      loadNews();
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
