<template>
  <div>
    <!-- Welcome Header -->
    <div class="uk-margin-large-bottom">
      <h2 class="uk-text-bold uk-margin-remove">Dashboard Overview</h2>
      <p class="uk-text-meta uk-margin-remove">Monitor your website content and organizational activity.</p>
    </div>

    <!-- Stats Grid -->
    <div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" uk-grid>
      <!-- News Stats -->
      <div>
        <div class="admin-card uk-card-body">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <span class="uk-text-meta uk-text-uppercase" style="font-size: 11px;">News Articles</span>
              <h2 class="uk-margin-remove uk-text-bold">{{ newsCount }}</h2>
            </div>
            <div class="stat-card-icon uk-background-primary uk-light">
              <i class="fas fa-newspaper"></i>
            </div>
          </div>
          <div class="uk-margin-small-top">
            <span class="uk-text-success uk-text-small"><i class="fas fa-arrow-up"></i> +2 this week</span>
          </div>
        </div>
      </div>

      <!-- Events Stats -->
      <div>
        <div class="admin-card uk-card-body">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <span class="uk-text-meta uk-text-uppercase" style="font-size: 11px;">Upcoming Events</span>
              <h2 class="uk-margin-remove uk-text-bold">{{ eventsCount }}</h2>
            </div>
            <div class="stat-card-icon uk-background-success uk-light">
              <i class="fas fa-calendar-check"></i>
            </div>
          </div>
          <div class="uk-margin-small-top">
            <span class="uk-text-muted uk-text-small">Stable from last month</span>
          </div>
        </div>
      </div>

      <!-- Gallery Stats -->
      <div>
        <div class="admin-card uk-card-body">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <span class="uk-text-meta uk-text-uppercase" style="font-size: 11px;">Gallery Media</span>
              <h2 class="uk-margin-remove uk-text-bold">{{ galleryCount }}</h2>
            </div>
            <div class="stat-card-icon uk-background-warning uk-light">
              <i class="fas fa-photo-video"></i>
            </div>
          </div>
          <div class="uk-margin-small-top">
            <span class="uk-text-warning uk-text-small"><i class="fas fa-bolt"></i> 85% storage used</span>
          </div>
        </div>
      </div>

      <!-- Publications Stats -->
      <div>
        <div class="admin-card uk-card-body">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <span class="uk-text-meta uk-text-uppercase" style="font-size: 11px;">Publications</span>
              <h2 class="uk-margin-remove uk-text-bold">{{ publicationsCount }}</h2>
            </div>
            <div class="stat-card-icon uk-background-danger uk-light">
              <i class="fas fa-book"></i>
            </div>
          </div>
          <div class="uk-margin-small-top">
            <span class="uk-text-success uk-text-small"><i class="fas fa-check-circle"></i> All links active</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary Grid -->
    <div class="uk-grid-medium uk-margin-large-top" uk-grid>
      <!-- Quick Actions -->
      <div class="uk-width-2-3@m">
        <div class="admin-card uk-card-body" style="height: 100%;">
          <h4 class="uk-text-bold uk-margin-medium-bottom">Quick Management</h4>
          <div class="uk-grid-small uk-child-width-1-3@s uk-text-center" uk-grid>
            <div>
              <router-link to="/admin/news" class="quick-action-btn">
                <i class="fas fa-plus-circle fa-2x"></i>
                <span>Add News</span>
              </router-link>
            </div>
            <div>
              <router-link to="/admin/events" class="quick-action-btn">
                <i class="fas fa-calendar-plus fa-2x"></i>
                <span>New Event</span>
              </router-link>
            </div>
            <div>
              <router-link to="/admin/gallery" class="quick-action-btn">
                <i class="fas fa-cloud-upload-alt fa-2x"></i>
                <span>Upload Media</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Feed -->
      <div class="uk-width-1-3@m">
        <div class="admin-card uk-card-body">
          <h4 class="uk-text-bold uk-margin-bottom">Recent Activity</h4>
          <ul class="uk-list uk-list-divider activity-list">
            <li v-for="log in activities" :key="log.id">
              <div class="uk-grid-small" uk-grid>
                <div class="uk-width-auto">
                  <span :class="log.color" class="activity-dot"></span>
                </div>
                <div class="uk-width-expand">
                  <div class="uk-text-small uk-text-bold">{{ log.title }}</div>
                  <div class="uk-text-meta" style="font-size: 10px;">{{ log.time }}</div>
                </div>
              </div>
            </li>
          </ul>
          <button class="uk-button uk-button-text uk-width-1-1 uk-margin-top">View All Activity</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

const newsCount = ref(0);
const eventsCount = ref(0);
const galleryCount = ref(0);
const publicationsCount = ref(0);

const activities = ref([
  { id: 1, title: 'New article "Education Center" added', time: '2 hours ago', color: 'uk-text-primary' },
  { id: 2, title: 'Event "Major Superiors AGM" updated', time: '5 hours ago', color: 'uk-text-success' },
  { id: 3, title: '3 images uploaded to Community gallery', time: 'Yesterday', color: 'uk-text-warning' },
  { id: 4, title: 'Constitutions Guide publication updated', time: '2 days ago', color: 'uk-text-danger' }
]);

onMounted(async () => {
  try {
    const news = await api.getNews();
    newsCount.value = news.data.length;
    const events = await api.getEvents();
    eventsCount.value = events.data.length;
    const gallery = await api.getGallery();
    galleryCount.value = gallery.data.length;
    const resources = await api.getResources();
    publicationsCount.value = resources.data.length;
  } catch (error) {
    console.error('Failed to fetch stats:', error);
  }
});
</script>

<style scoped>
.quick-action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: #f8fafc;
  border-radius: 12px;
  color: #1e293b;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
}

.quick-action-btn:hover {
  background: #4f46e5;
  color: #fff;
  transform: translateY(-4px);
}

.quick-action-btn i {
  margin-bottom: 12px;
}

.quick-action-btn span {
  font-size: 12px;
  font-weight: 600;
}

.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: block;
  margin-top: 6px;
  background: currentColor;
}

.activity-list li {
  padding: 12px 0;
}
</style>
