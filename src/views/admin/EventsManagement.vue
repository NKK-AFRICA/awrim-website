<template>
  <div>
    <!-- Header Section -->
    <div class="uk-flex uk-flex-between uk-flex-middle uk-margin-large-bottom">
      <div>
        <h2 class="uk-text-bold uk-margin-remove">Events Calendar</h2>
        <p class="uk-text-meta uk-margin-remove">Schedule and manage organizational events and meetings.</p>
      </div>
      <button class="uk-button uk-button-primary uk-border-rounded" @click="openModal()">
        <i class="fas fa-calendar-plus uk-margin-small-right"></i> Add Event
      </button>
    </div>

    <!-- Management Card -->
    <div class="admin-card">
      <!-- Search & Filter Bar -->
      <div class="uk-padding-small uk-background-muted uk-flex uk-flex-between uk-flex-middle" style="border-bottom: 1px solid #e2e8f0; border-radius: 16px 16px 0 0;">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="search"></span>
          <input v-model="searchQuery" class="uk-input uk-form-width-large admin-form-input" type="text" placeholder="Search events by name, location or month...">
        </div>
        <div class="uk-text-meta">
          {{ filteredEvents.length }} upcoming events
        </div>
      </div>

      <!-- Logic for Loading/Empty -->
      <div v-if="loading" class="uk-padding uk-text-center">
        <div uk-spinner="ratio: 2"></div>
        <p class="uk-margin-small-top uk-text-muted">Loading calendar...</p>
      </div>

      <div v-else-if="filteredEvents.length === 0" class="uk-padding uk-text-center">
        <i class="fas fa-calendar-times fa-3x uk-text-muted"></i>
        <p class="uk-margin-small-top uk-text-muted">No events found matching your search.</p>
      </div>

      <!-- Table Section -->
      <div v-else class="uk-overflow-auto">
        <table class="uk-table uk-table-middle admin-table uk-margin-remove">
          <thead>
            <tr>
              <th class="uk-table-shrink">Date</th>
              <th>Event Title</th>
              <th>Location</th>
              <th>Time</th>
              <th class="uk-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredEvents" :key="item.id">
              <td>
                <div class="uk-flex uk-flex-column uk-flex-middle uk-background-muted uk-border-rounded uk-padding-small" style="width: 60px;">
                  <span class="uk-text-bold uk-text-primary">{{ item.day }}</span>
                  <span class="uk-text-uppercase" style="font-size: 10px; font-weight: 700;">{{ item.month }}</span>
                </div>
              </td>
              <td>
                <div class="uk-text-bold">{{ item.title }}</div>
                <div class="uk-text-meta uk-text-truncate" style="max-width: 250px; font-size: 11px;">{{ item.description }}</div>
              </td>
              <td>
                <div class="uk-text-small"><i class="fas fa-map-marker-alt uk-margin-small-right uk-text-muted"></i> {{ item.location }}</div>
              </td>
              <td>
                 <div class="uk-text-small"><i class="fas fa-clock uk-margin-small-right uk-text-muted"></i> {{ item.time }}</div>
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
    <div id="event-modal" class="uk-modal-container" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title uk-text-bold">{{ isEditing ? 'Edit Event' : 'Create New Event' }}</h2>
        </div>
        <form @submit.prevent="saveItem">
          <div class="uk-modal-body" uk-overflow-auto>
            <div class="uk-grid-small" uk-grid>
               <div class="uk-width-2-3@m">
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Event Title</label>
                    <input v-model="form.title" class="uk-input admin-form-input" type="text" placeholder="e.g. Annual Mid-Year Review" required>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Event Description</label>
                    <textarea v-model="form.description" class="uk-textarea admin-form-input" rows="5" placeholder="Details about the event..." required></textarea>
                  </div>
                  <div class="uk-grid-small uk-child-width-1-2@s" uk-grid>
                    <div>
                      <label class="uk-form-label uk-text-bold">Action Button Text</label>
                      <input v-model="form.action_text" class="uk-input admin-form-input" type="text" placeholder="e.g. Register Now">
                    </div>
                    <div>
                      <label class="uk-form-label uk-text-bold">Action Link</label>
                      <input v-model="form.action_link" class="uk-input admin-form-input" type="text" placeholder="e.g. /events/register">
                    </div>
                  </div>
               </div>
               <div class="uk-width-1-3@m">
                  <div class="uk-flex uk-grid-small" uk-grid>
                    <div class="uk-width-1-3">
                      <label class="uk-form-label uk-text-bold">Day</label>
                      <input v-model="form.day" class="uk-input admin-form-input" type="text" placeholder="15" required>
                    </div>
                    <div class="uk-width-1-3">
                      <label class="uk-form-label uk-text-bold">Month</label>
                      <input v-model="form.month" class="uk-input admin-form-input" type="text" placeholder="JAN" required>
                    </div>
                    <div class="uk-width-1-3">
                      <label class="uk-form-label uk-text-bold">Year</label>
                      <input v-model="form.year" class="uk-input admin-form-input" type="text" placeholder="2026" required>
                    </div>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Time</label>
                    <input v-model="form.time" class="uk-input admin-form-input" type="text" placeholder="e.g. 9:00 AM - 4:00 PM" required>
                  </div>
                  <div class="uk-margin">
                    <label class="uk-form-label uk-text-bold">Location</label>
                    <input v-model="form.location" class="uk-input admin-form-input" type="text" placeholder="e.g. Lilongwe C.I.C" required>
                  </div>
               </div>
            </div>
          </div>
          <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Discard</button>
            <button class="uk-button uk-button-primary uk-margin-small-left" type="submit">Save Event</button>
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

const events = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const isEditing = ref(false);
const editingId = ref(null);

const form = reactive({
  title: '',
  day: '',
  month: '',
  year: '',
  time: '',
  location: '',
  description: '',
  action_text: '',
  action_link: ''
});

const filteredEvents = computed(() => {
  if (!searchQuery.value) return events.value;
  const q = searchQuery.value.toLowerCase();
  return events.value.filter(e => 
    e.title.toLowerCase().includes(q) || 
    e.location.toLowerCase().includes(q) || 
    e.month.toLowerCase().includes(q)
  );
});

const loadEvents = async () => {
  loading.value = true;
  try {
    const res = await api.getEvents();
    events.value = res.data;
  } catch (error) {
    UIkit.notification({ message: 'Error loading events', status: 'danger' });
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
    form.day = '';
    form.month = '';
    form.year = '2026';
    form.time = '';
    form.location = '';
    form.description = '';
    form.action_text = 'Event Details';
    form.action_link = '#';
  }
  UIkit.modal('#event-modal').show();
};

const saveItem = async () => {
  try {
    if (isEditing.value) {
      await api.updateEvent(editingId.value, form);
      UIkit.notification({ message: 'Event updated', status: 'success' });
    } else {
      await api.addEvent(form);
      UIkit.notification({ message: 'New event created', status: 'success' });
    }
    UIkit.modal('#event-modal').hide();
    loadEvents();
  } catch (error) {
    UIkit.notification({ message: 'Error saving event', status: 'danger' });
  }
};

const deleteItem = async (id) => {
  if (confirm('Are you sure you want to delete this event?')) {
    try {
      await api.deleteEvent(id);
      UIkit.notification({ message: 'Event removed', status: 'success' });
      loadEvents();
    } catch (error) {
      UIkit.notification({ message: 'Error deleting event', status: 'danger' });
    }
  }
};
</script>
