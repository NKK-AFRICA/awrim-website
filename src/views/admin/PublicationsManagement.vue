<template>
  <div class="space-y-6">
    <!-- Breadcrumb Area -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white/90">Publications</h2>
        <nav class="flex mt-1">
          <ol class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li><router-link to="/admin" class="hover:text-brand-500">Dashboard</router-link></li>
            <li><i class="fas fa-chevron-right text-[10px] mx-1"></i></li>
            <li class="font-medium text-brand-500">Publications</li>
          </ol>
        </nav>
      </div>
      <button 
        @click="openModal()"
        class="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors shadow-theme-xs"
      >
        <i class="fas fa-plus"></i> Add Publication
      </button>
    </div>

    <!-- Data Table Card -->
    <div class="rounded-2xl border border-gray-200 bg-white shadow-theme-sm dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white/90">Publications Archive</h3>
        <div class="relative w-full sm:w-80">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <i class="fas fa-search"></i>
          </span>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search documents..." 
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
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Title & Content</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Metadata</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Visibility</th>
              <th class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            <tr v-for="item in filteredResources" :key="item.id" class="hover:bg-gray-50 dark:hover:bg-white/[0.01] transition-colors">
              <td class="px-5 py-4">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500">
                    <i :class="getFileIcon(item.file_type)" class="text-xl"></i>
                  </div>
                  <div class="max-w-xs sm:max-w-md">
                    <div class="font-bold text-gray-900 dark:text-white/90 text-sm truncate">{{ item.title }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ item.description }}</div>
                  </div>
                </div>
              </td>
              <td class="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                <div class="font-medium">{{ item.file_type }}</div>
                <div class="text-xs">{{ item.file_size }}</div>
              </td>
              <td class="px-5 py-4">
                <span 
                  v-if="item.is_featured"
                  class="inline-flex px-2 py-1 text-xs font-bold rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                >
                  Featured
                </span>
                <span 
                  v-else
                  class="inline-flex px-2 py-1 text-xs font-bold rounded-md bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400"
                >
                  Standard
                </span>
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

    <!-- Modal - Ported from UIkit to custom Tailwind Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>
      <div class="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-theme-xl overflow-hidden animate-fade-in-up">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white/90">
            {{ isEditing ? 'Edit Publication' : 'Add New Publication' }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500 transition-colors">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <form @submit.prevent="saveItem">
          <div class="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Document Title</label>
              <input 
                v-model="form.title"
                type="text" 
                placeholder="e.g. Annual Strategic Report 2026" 
                class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                required
              >
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Description</label>
              <textarea 
                v-model="form.description"
                rows="4" 
                placeholder="Brief summary of the document contents..." 
                class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Upload Document</label>
                <div class="relative">
                  <input 
                    type="file" 
                    ref="fileInput" 
                    @change="onFileChange" 
                    accept=".pdf,.doc,.docx,.xls,.xlsx" 
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    :required="!isEditing"
                  >
                  <div class="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-sm text-center flex flex-col items-center justify-center gap-2 transition-colors hover:border-brand-500">
                    <i class="fas fa-cloud-upload-alt text-brand-500 text-xl"></i>
                    <span class="text-gray-500">{{ selectedFile ? selectedFile.name : 'Choose File (PDF/DOCX)' }}</span>
                  </div>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Metadata Preview</label>
                <div class="p-4 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-gray-800 rounded-xl">
                  <div v-if="form.file_type" class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                      <i :class="getFileIcon(form.file_type)" class="text-brand-500"></i>
                      <span class="text-sm font-bold">{{ form.file_type }}</span>
                    </div>
                    <div class="text-xs text-gray-500">File Size: {{ form.file_size }}</div>
                  </div>
                  <div v-else class="text-xs text-gray-400 italic">No file selected</div>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3 py-2">
              <div class="relative inline-flex items-center cursor-pointer">
                <input v-model="form.is_featured" type="checkbox" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500"></div>
                <span class="ml-3 text-sm font-bold text-gray-700 dark:text-gray-300">Pinned as Featured</span>
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
                Uploading...
              </template>
              <template v-else>
                {{ isEditing ? 'Update Publication' : 'Create Publication' }}
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

const resourcesItems = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const selectedFile = ref(null);
const fileInput = ref(null);
const uploading = ref(false);
const showModal = ref(false);

const form = reactive({
  title: '',
  description: '',
  file_type: '',
  file_size: '',
  file_url: '',
  is_featured: false
});

const filteredResources = computed(() => {
  if (!searchQuery.value) return resourcesItems.value;
  const q = searchQuery.value.toLowerCase();
  return resourcesItems.value.filter(i => 
    i.title.toLowerCase().includes(q) || 
    i.description.toLowerCase().includes(q)
  );
});

const loadResources = async () => {
  loading.value = true;
  try {
    const res = await api.getResources();
    resourcesItems.value = res.data;
  } catch (error) {
    console.error('Fetch error:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(loadResources);

const formatBytes = (bytes, decimals = 1) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedFile.value = file;
    form.file_type = file.name.split('.').pop().toUpperCase();
    form.file_size = formatBytes(file.size);
  }
};

const getFileIcon = (type) => {
  switch (type) {
    case 'PDF': return 'fas fa-file-pdf text-error-500';
    case 'DOC':
    case 'DOCX': return 'fas fa-file-word text-brand-500';
    case 'XLS':
    case 'XLSX': return 'fas fa-file-excel text-success-500';
    default: return 'fas fa-file-alt';
  }
};

const openModal = (item = null) => {
  selectedFile.value = null;
  if (item) {
    isEditing.value = true;
    editingId.value = item.id;
    Object.assign(form, item);
    form.is_featured = !!item.is_featured;
  } else {
    isEditing.value = false;
    editingId.value = null;
    form.title = '';
    form.description = '';
    form.file_type = '';
    form.file_size = '';
    form.file_url = '';
    form.is_featured = false;
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
      form.file_url = uploadRes.data.url;
    }
    const payload = { ...form, is_featured: form.is_featured ? 1 : 0 };
    if (isEditing.value) {
      await api.updateResource(editingId.value, payload);
    } else {
      await api.addResource(payload);
    }
    closeModal();
    loadResources();
  } catch (error) {
    console.error('Save fail:', error);
  } finally {
    uploading.value = false;
  }
};

const deleteItem = async (id) => {
  if (confirm('Are you sure you want to delete this publication?')) {
    try {
      await api.deleteResource(id);
      loadResources();
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
