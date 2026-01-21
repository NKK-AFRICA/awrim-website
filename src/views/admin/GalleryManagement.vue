<template>
  <div>
    <!-- Header Section -->
    <div class="uk-flex uk-flex-between uk-flex-middle uk-margin-large-bottom">
      <div>
        <h2 class="uk-text-bold uk-margin-remove">Gallery Management</h2>
        <p class="uk-text-meta uk-margin-remove">Curate and organize your website's visual narrative.</p>
      </div>
      <button class="uk-button uk-button-primary uk-border-rounded" @click="openModal()">
        <i class="fas fa-upload uk-margin-small-right"></i> Upload Image
      </button>
    </div>

    <!-- Management Card -->
    <div class="admin-card">
      <!-- Search & Filter Bar -->
      <div class="uk-padding-small uk-background-muted uk-flex uk-flex-between uk-flex-middle" style="border-bottom: 1px solid #e2e8f0; border-radius: 16px 16px 0 0;">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="search"></span>
          <input v-model="searchQuery" class="uk-input uk-form-width-large admin-form-input" type="text" placeholder="Search by caption or category...">
        </div>
        <div class="uk-text-meta">
          {{ filteredGallery.length }} media assets
        </div>
      </div>

      <!-- Logic for Loading/Empty -->
      <div v-if="loading" class="uk-padding uk-text-center">
        <div uk-spinner="ratio: 2"></div>
        <p class="uk-margin-small-top uk-text-muted">Loading media...</p>
      </div>

      <div v-else-if="filteredGallery.length === 0" class="uk-padding uk-text-center">
        <i class="fas fa-images fa-3x uk-text-muted"></i>
        <p class="uk-margin-small-top uk-text-muted">No images found matching your search.</p>
      </div>

      <!-- Grid Preview Section -->
      <div v-else class="uk-padding">
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" uk-grid>
           <div v-for="item in filteredGallery" :key="item.id">
              <div class="admin-card uk-overflow-hidden gallery-card-premium">
                 <div class="uk-cover-container" style="height: 150px;">
                    <img :src="item.image_url" alt="" uk-cover>
                    <div class="gallery-card-overlay">
                       <button class="uk-icon-button uk-margin-small-right" @click="openModal(item)"><i class="fas fa-edit"></i></button>
                       <button class="uk-icon-button uk-button-danger" @click="deleteItem(item.id)"><i class="fas fa-trash"></i></button>
                    </div>
                 </div>
                 <div class="uk-padding-small">
                    <div class="uk-text-bold uk-text-truncate uk-text-small">{{ item.caption }}</div>
                    <span class="admin-badge badge-warning uk-margin-small-top">{{ item.category }}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Modal -->
    <div id="gallery-modal" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title uk-text-bold">{{ isEditing ? 'Edit Image Details' : 'Upload New Media' }}</h2>
        </div>
        <form @submit.prevent="saveItem">
          <div class="uk-modal-body">
            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold">Select Image File</label>
              <div class="uk-form-custom uk-width-1-1">
                  <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" :required="!isEditing" style="display: none;">
                  <button class="uk-button uk-button-default uk-width-1-1" type="button" @click="fileInput.click()">
                    <i class="fas fa-file-image uk-margin-small-right"></i>
                    {{ selectedFile ? selectedFile.name : 'Choose Image File' }}
                  </button>
              </div>
              <p v-if="isEditing" class="uk-text-meta">Leave empty to keep existing image</p>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold">Caption / Title</label>
              <input v-model="form.caption" class="uk-input admin-form-input" type="text" placeholder="Describe the image" required>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold">Category</label>
              <select v-model="form.category" class="uk-select admin-form-input">
                <option value="Mission">Mission</option>
                <option value="Events">Events</option>
                <option value="Community">Community</option>
                <option value="General">General</option>
              </select>
            </div>
            <div v-if="imagePreview || form.image_url" class="uk-margin uk-cover-container uk-border-rounded" style="height: 200px;">
               <img :src="imagePreview || form.image_url" alt="Preview" uk-cover>
            </div>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary uk-margin-small-left" type="submit" :disabled="uploading">
              <span v-if="uploading"><div uk-spinner="ratio: 0.5"></div> Uploading...</span>
              <span v-else>Save Asset</span>
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

const galleryItems = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);
const selectedFile = ref(null);
const fileInput = ref(null);
const imagePreview = ref(null);
const uploading = ref(false);

const form = reactive({
  image_url: '',
  caption: '',
  category: 'General'
});

const filteredGallery = computed(() => {
  if (!searchQuery.value) return galleryItems.value;
  const q = searchQuery.value.toLowerCase();
  return galleryItems.value.filter(i => 
    i.caption.toLowerCase().includes(q) || 
    i.category.toLowerCase().includes(q)
  );
});

const loadGallery = async () => {
  loading.value = true;
  try {
    const res = await api.getGallery();
    galleryItems.value = res.data;
  } catch (error) {
    UIkit.notification({ message: 'Error loading gallery', status: 'danger' });
  } finally {
    loading.value = false;
  }
};

onMounted(loadGallery);

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
    form.image_url = '';
    form.caption = '';
    form.category = 'General';
  }
  UIkit.modal('#gallery-modal').show();
};

const saveItem = async () => {
  try {
    uploading.value = true;
    
    // Upload image if selected
    if (selectedFile.value) {
      const uploadRes = await api.uploadImage(selectedFile.value);
      form.image_url = uploadRes.data.url;
    }

    if (isEditing.value) {
      await api.updateGallery(editingId.value, form);
      UIkit.notification({ message: 'Media details updated', status: 'success' });
    } else {
      await api.addGallery(form);
      UIkit.notification({ message: 'Image added to gallery', status: 'success' });
    }
    UIkit.modal('#gallery-modal').hide();
    loadGallery();
  } catch (error) {
    UIkit.notification({ message: 'Error saving media', status: 'danger' });
  } finally {
    uploading.value = false;
  }
};

const deleteItem = async (id) => {
  if (confirm('Are you sure you want to delete this image?')) {
    try {
      await api.deleteGallery(id);
      UIkit.notification({ message: 'Image deleted', status: 'success' });
      loadGallery();
    } catch (error) {
      UIkit.notification({ message: 'Error deleting image', status: 'danger' });
    }
  }
};
</script>

<style scoped>
.gallery-card-premium {
   position: relative;
   transition: all 0.3s ease;
}

.gallery-card-overlay {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(15, 23, 42, 0.6);
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   transition: opacity 0.3s ease;
   backdrop-filter: blur(2px);
}

.gallery-card-premium:hover .gallery-card-overlay {
   opacity: 1;
}

.gallery-card-premium:hover {
   transform: scale(1.02);
}
</style>
