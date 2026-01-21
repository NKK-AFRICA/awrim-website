<template>
  <div>
    <!-- Header Section -->
    <div class="uk-flex uk-flex-between uk-flex-middle uk-margin-large-bottom">
      <div>
        <h2 class="uk-text-bold uk-margin-remove">Publications & Reports</h2>
        <p class="uk-text-meta uk-margin-remove">Manage organizational publications, research papers, and annual reports.</p>
      </div>
      <button class="uk-button uk-button-primary uk-border-rounded" @click="openModal()">
        <i class="fas fa-file-upload uk-margin-small-right"></i> Add Publication
      </button>
    </div>

    <!-- Management Card -->
    <div class="admin-card">
      <!-- Search & Filter Bar -->
      <div class="uk-padding-small uk-background-muted uk-flex uk-flex-between uk-flex-middle" style="border-bottom: 1px solid #e2e8f0; border-radius: 16px 16px 0 0;">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="search"></span>
          <input v-model="searchQuery" class="uk-input uk-form-width-large admin-form-input" type="text" placeholder="Search publications by title or description...">
        </div>
        <div class="uk-text-meta">
          {{ filteredResources.length }} documents indexed
        </div>
      </div>

      <!-- Logic for Loading/Empty -->
      <div v-if="loading" class="uk-padding uk-text-center">
        <div uk-spinner="ratio: 2"></div>
        <p class="uk-margin-small-top uk-text-muted">Loading archive...</p>
      </div>

      <div v-else-if="filteredResources.length === 0" class="uk-padding uk-text-center">
        <i class="fas fa-book-open fa-3x uk-text-muted"></i>
        <p class="uk-margin-small-top uk-text-muted">No publications found matching your search.</p>
      </div>

      <!-- Table Section -->
      <div v-else class="uk-overflow-auto">
        <table class="uk-table uk-table-middle admin-table uk-margin-remove">
          <thead>
            <tr>
              <th class="uk-table-shrink">Format</th>
              <th>Document Details</th>
              <th>Size</th>
              <th>Status</th>
              <th class="uk-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredResources" :key="item.id" :class="{ 'uk-background-muted': item.is_featured }">
              <td>
                <div class="uk-flex uk-flex-center">
                   <i :class="getFileIcon(item.file_type)" class="fa-2x"></i>
                </div>
              </td>
              <td>
                <div class="uk-text-bold">{{ item.title }}</div>
                <div class="uk-text-meta uk-text-truncate" style="max-width: 300px; font-size: 11px;">{{ item.description }}</div>
              </td>
              <td><span class="uk-text-small uk-text-muted">{{ item.file_size }}</span></td>
              <td>
                <span v-if="item.is_featured" class="admin-badge badge-success">Pinned</span>
                <span v-else class="admin-badge badge-primary">Publication</span>
              </td>
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
    <div id="resource-modal" class="uk-modal-container" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title uk-text-bold">{{ isEditing ? 'Edit Publication' : 'Add New Publication' }}</h2>
        </div>
        <form @submit.prevent="saveItem">
          <div class="uk-modal-body">
            <div class="uk-grid-small" uk-grid>
               <div class="uk-width-2-3@m">
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Publication Title</label>
                    <input v-model="form.title" class="uk-input admin-form-input" type="text" placeholder="e.g. Annual Strategic Report 2026" required>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Short Description</label>
                    <textarea v-model="form.description" class="uk-textarea admin-form-input" rows="5" placeholder="Summary of the document's content..." required></textarea>
                  </div>
               </div>
               <div class="uk-width-1-3@m">
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Document File</label>
                    <div class="uk-form-custom uk-width-1-1">
                        <input type="file" ref="fileInput" @change="onFileChange" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" :required="!isEditing" style="display: none;">
                        <button class="uk-button uk-button-default uk-width-1-1" type="button" @click="fileInput.click()">
                          <i class="fas fa-file-upload uk-margin-small-right"></i>
                          {{ selectedFile ? selectedFile.name : 'Choose Document' }}
                        </button>
                    </div>
                    <div v-if="form.file_url && !selectedFile" class="uk-margin-small-top uk-text-meta">
                       <i class="fas fa-check-circle uk-text-success"></i> Existing file linked
                    </div>
                  </div>

                  <div class="uk-margin">
                    <label class="uk-flex uk-flex-middle">
                       <input v-model="form.is_featured" class="uk-checkbox uk-margin-small-right" type="checkbox">
                       <span class="uk-text-bold">Feature on Homepage</span>
                    </label>
                    <p class="uk-text-meta" style="font-size: 11px;">Pinned items appear at the top of the publications list.</p>
                  </div>

                  <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-margin-top" style="background: #f8fafc; border: 1px dashed #cbd5e1;">
                     <h6 class="uk-margin-remove uk-text-uppercase" style="font-size: 10px; color: #64748b;">Auto-Detected Metadata</h6>
                     <div class="uk-grid-collapse uk-margin-small-top" uk-grid>
                        <div class="uk-width-1-2">
                           <span class="uk-text-meta" style="font-size: 10px;">Format:</span>
                           <div class="uk-text-bold" style="font-size: 12px;">{{ form.file_type || '---' }}</div>
                        </div>
                        <div class="uk-width-1-2">
                           <span class="uk-text-meta" style="font-size: 10px;">Size:</span>
                           <div class="uk-text-bold" style="font-size: 12px;">{{ form.file_size || '---' }}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Discard</button>
            <button class="uk-button uk-button-primary uk-margin-small-left" type="submit" :disabled="uploading">
              <span v-if="uploading"><div uk-spinner="ratio: 0.5"></div> Uploading...</span>
              <span v-else>Save Publication</span>
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

const resourcesItems = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const selectedFile = ref(null);
const fileInput = ref(null);
const uploading = ref(false);

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
    UIkit.notification({ message: 'Error loading publications', status: 'danger' });
  } finally {
    loading.value = false;
  }
};

onMounted(loadResources);

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedFile.value = file;
    // Auto-detect extension
    const extension = file.name.split('.').pop().toUpperCase();
    form.file_type = extension;
    // Auto-detect size
    form.file_size = formatBytes(file.size);
  }
};

const getFileIcon = (type) => {
  switch (type) {
    case 'PDF': return 'fas fa-file-pdf uk-text-danger';
    case 'DOC':
    case 'DOCX': return 'fas fa-file-word uk-text-primary';
    case 'XLS':
    case 'XLSX': return 'fas fa-file-excel uk-text-success';
    case 'PPT':
    case 'PPTX': return 'fas fa-file-powerpoint uk-text-warning';
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
  UIkit.modal('#resource-modal').show();
};

const saveItem = async () => {
  try {
    uploading.value = true;

    // Upload file if selected
    if (selectedFile.value) {
      const uploadRes = await api.uploadImage(selectedFile.value); // Reusing upload logic
      form.file_url = uploadRes.data.url;
    }

    const payload = { ...form, is_featured: form.is_featured ? 1 : 0 };
    if (isEditing.value) {
      await api.updateResource(editingId.value, payload);
      UIkit.notification({ message: 'Publication updated', status: 'success' });
    } else {
      await api.addResource(payload);
      UIkit.notification({ message: 'New publication added', status: 'success' });
    }
    UIkit.modal('#resource-modal').hide();
    loadResources();
  } catch (error) {
    UIkit.notification({ message: 'Error saving publication', status: 'danger' });
  } finally {
    uploading.value = false;
  }
};

const deleteItem = async (id) => {
  if (confirm('Are you sure you want to delete this publication?')) {
    try {
      await api.deleteResource(id);
      UIkit.notification({ message: 'Publication removed', status: 'success' });
      loadResources();
    } catch (error) {
      UIkit.notification({ message: 'Error deleting publication', status: 'danger' });
    }
  }
};
</script>
