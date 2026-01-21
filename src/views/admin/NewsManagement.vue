<template>
  <div>
    <!-- Header Section -->
    <div class="uk-flex uk-flex-between uk-flex-middle uk-margin-large-bottom">
      <div>
        <h2 class="uk-text-bold uk-margin-remove">News & Updates</h2>
        <p class="uk-text-meta uk-margin-remove">Manage your website's news articles and announcements.</p>
      </div>
      <button class="uk-button uk-button-primary uk-border-rounded" @click="openModal()">
        <i class="fas fa-plus uk-margin-small-right"></i> Create Article
      </button>
    </div>

    <!-- Management Card -->
    <div class="admin-card">
      <!-- Search & Filter Bar -->
      <div class="uk-padding-small uk-background-muted uk-flex uk-flex-between uk-flex-middle" style="border-bottom: 1px solid #e2e8f0; border-radius: 16px 16px 0 0;">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="search"></span>
          <input v-model="searchQuery" class="uk-input uk-form-width-large admin-form-input" type="text" placeholder="Search by title, category or summary...">
        </div>
        <div class="uk-text-meta">
          Showing {{ filteredNews.length }} articles
        </div>
      </div>

      <!-- Logic for Loading/Empty -->
      <div v-if="loading" class="uk-padding uk-text-center">
        <div uk-spinner="ratio: 2"></div>
        <p class="uk-margin-small-top uk-text-muted">Fetching articles...</p>
      </div>

      <div v-else-if="filteredNews.length === 0" class="uk-padding uk-text-center">
        <i class="fas fa-folder-open fa-3x uk-text-muted"></i>
        <p class="uk-margin-small-top uk-text-muted">No articles found matching your criteria.</p>
      </div>

      <!-- Table Section -->
      <div v-else class="uk-overflow-auto">
        <table class="uk-table uk-table-middle admin-table uk-margin-remove">
          <thead>
            <tr>
              <th class="uk-table-shrink">Preview</th>
              <th>Article Title</th>
              <th>Category</th>
              <th>Date Published</th>
              <th class="uk-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredNews" :key="item.id">
              <td>
                <div class="uk-cover-container uk-border-rounded" style="width: 60px; height: 40px;">
                  <img :src="item.image" alt="" uk-cover>
                </div>
              </td>
              <td>
                <div class="uk-text-bold">{{ item.title }}</div>
                <div class="uk-text-meta uk-text-truncate" style="max-width: 300px; font-size: 11px;">{{ item.summary }}</div>
              </td>
              <td><span class="admin-badge badge-primary">{{ item.category }}</span></td>
              <td>{{ item.date }}</td>
              <td class="uk-text-right uk-text-nowrap">
                <button class="uk-button uk-button-default uk-button-small uk-margin-small-right uk-border-rounded" @click="openModal(item)">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="uk-button uk-button-danger uk-button-small uk-border-rounded" @click="deleteItem(item.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Enhanced Modal -->
    <div id="news-modal" class="uk-modal-container" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title uk-text-bold">{{ isEditing ? 'Edit News Article' : 'New News Article' }}</h2>
        </div>
        <form @submit.prevent="saveItem">
          <div class="uk-modal-body" uk-overflow-auto>
            <div class="uk-grid-small" uk-grid>
               <div class="uk-width-2-3@m">
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Article Title</label>
                    <input v-model="form.title" class="uk-input admin-form-input" type="text" placeholder="Enter a catchy title" required>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Short Summary</label>
                    <textarea v-model="form.summary" class="uk-textarea admin-form-input" rows="3" placeholder="Brief intro (shown in lists)" required></textarea>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Full Content</label>
                    <textarea v-model="form.content" class="uk-textarea admin-form-input" rows="8" placeholder="The full story..."></textarea>
                  </div>
               </div>
               <div class="uk-width-1-3@m">
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Category</label>
                    <input v-model="form.category" class="uk-input admin-form-input" type="text" placeholder="e.g. Education" required>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Display Date</label>
                    <input v-model="form.date" class="uk-input admin-form-input" type="text" placeholder="e.g. Oct 20, 2025" required>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Feature Image File</label>
                    <div class="uk-form-custom uk-width-1-1">
                        <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" :required="!isEditing" style="display: none;">
                        <button class="uk-button uk-button-default uk-width-1-1" type="button" @click="fileInput.click()">
                          <i class="fas fa-image uk-margin-small-right"></i>
                          {{ selectedFile ? selectedFile.name : 'Choose Image' }}
                        </button>
                    </div>
                    <div v-if="imagePreview || form.image" class="uk-margin-small-top uk-cover-container uk-border-rounded" style="height: 150px;">
                       <img :src="imagePreview || form.image" alt="Preview" uk-cover>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Discard</button>
            <button class="uk-button uk-button-primary uk-margin-small-left" type="submit" :disabled="uploading">
              <span v-if="uploading"><div uk-spinner="ratio: 0.5"></div> Publishing...</span>
              <span v-else>Save Changes</span>
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
import UIkit from 'uikit';

const newsItems = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const selectedFile = ref(null);
const fileInput = ref(null);
const imagePreview = ref(null);
const uploading = ref(false);

const form = reactive({
  title: '',
  category: '',
  date: '',
  image: '',
  summary: '',
  content: ''
});

const filteredNews = computed(() => {
  if (!searchQuery.value) return newsItems.value;
  const q = searchQuery.value.toLowerCase();
  return newsItems.value.filter(i => 
    i.title.toLowerCase().includes(q) || 
    i.category.toLowerCase().includes(q) || 
    i.summary.toLowerCase().includes(q)
  );
});

const loadNews = async () => {
  loading.value = true;
  try {
    const res = await api.getNews();
    newsItems.value = res.data;
  } catch (error) {
    UIkit.notification({ message: 'Error loading news', status: 'danger' });
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
    form.category = '';
    form.date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    form.image = '';
    form.summary = '';
    form.content = '';
  }
  UIkit.modal('#news-modal').show();
};

const saveItem = async () => {
  try {
    uploading.value = true;

    // Upload image if selected
    if (selectedFile.value) {
      const uploadRes = await api.uploadImage(selectedFile.value);
      form.image = uploadRes.data.url;
    }

    if (isEditing.value) {
      await api.updateNews(editingId.value, form);
      UIkit.notification({ message: 'Article updated successfully', status: 'success' });
    } else {
      await api.addNews(form);
      UIkit.notification({ message: 'New article published', status: 'success' });
    }
    UIkit.modal('#news-modal').hide();
    loadNews();
  } catch (error) {
    UIkit.notification({ message: 'Error saving news', status: 'danger' });
  } finally {
    uploading.value = false;
  }
};

const deleteItem = async (id) => {
  if (confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
    try {
      await api.deleteNews(id);
      UIkit.notification({ message: 'Article deleted', status: 'success' });
      loadNews();
    } catch (error) {
      UIkit.notification({ message: 'Error deleting news', status: 'danger' });
    }
  }
};
</script>
