<template>
  <div class="admin-body">
    <div class="admin-wrapper">
      <!-- Premium Sidebar -->
      <aside class="admin-sidebar-premium uk-light">
        <div class="uk-padding uk-padding-remove-bottom uk-margin-bottom">
          <div class="uk-flex uk-flex-middle">
            <div class="uk-background-primary uk-border-rounded uk-padding-small uk-margin-small-right">
              <i class="fas fa-hand-holding-heart fa-lg"></i>
            </div>
            <div>
              <h4 class="uk-margin-remove uk-text-bold">AWRIM</h4>
              <span class="uk-text-meta" style="font-size: 10px; color: #94a3b8;">Admin Portal v2.0</span>
            </div>
          </div>
        </div>

        <div class="uk-padding-small">
          <ul class="uk-nav uk-nav-default">
            <li class="uk-nav-header uk-margin-small-left uk-margin-small-bottom" style="font-size: 10px; color: #475569;">MAIN MENU</li>
            <li :class="{ 'uk-active': $route.name === 'admin-dashboard' }" class="admin-nav-item">
              <router-link to="/admin"><i class="fas fa-th-large uk-margin-small-right"></i> Dashboard</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'admin-news' }" class="admin-nav-item">
              <router-link to="/admin/news"><i class="fas fa-newspaper uk-margin-small-right"></i> News & Updates</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'admin-events' }" class="admin-nav-item">
              <router-link to="/admin/events"><i class="fas fa-calendar-alt uk-margin-small-right"></i> Events</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'admin-gallery' }" class="admin-nav-item">
              <router-link to="/admin/gallery"><i class="fas fa-images uk-margin-small-right"></i> Gallery</router-link>
            </li>
            <li :class="{ 'uk-active': $route.name === 'admin-publications' }" class="admin-nav-item">
              <router-link to="/admin/publications"><i class="fas fa-book-open uk-margin-small-right"></i> Publications</router-link>
            </li>
            
            <li class="uk-nav-header uk-margin-top uk-margin-small-left uk-margin-small-bottom" style="font-size: 10px; color: #475569;">SYSTEM</li>
            <li>
              <router-link to="/" class="admin-nav-item"><i class="fas fa-external-link-alt uk-margin-small-right"></i> View Website</router-link>
            </li>
          </ul>
        </div>

        <!-- Sidebar Footer/User Profile -->
        <div class="sidebar-footer">
          <div class="uk-flex uk-flex-middle uk-padding-small">
            <div class="uk-margin-small-right">
              <img src="https://ui-avatars.com/api/?name=Admin&background=4f46e5&color=fff" class="uk-border-circle" width="36" alt="">
            </div>
            <div>
              <div class="uk-text-bold uk-text-small">Administrator</div>
              <div class="uk-text-meta" style="font-size: 11px;">system@awrim.mw</div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="admin-main">
        <!-- Top Header -->
        <header class="admin-header uk-flex uk-flex-between uk-flex-middle">
          <div class="uk-flex uk-flex-middle">
            <a class="uk-navbar-toggle uk-hidden@m uk-margin-small-right" uk-navbar-toggle-icon href="#" uk-toggle="target: .admin-sidebar-premium"></a>
            <div class="header-search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search data, reports, settings...">
            </div>
          </div>
          <div class="uk-flex uk-flex-middle">
            <div class="uk-margin-right">
              <span class="uk-icon-button" uk-icon="bell"></span>
              <div class="uk-badge badge-danger" style="margin-left: -10px; position: relative; top: -10px; font-size: 8px;">3</div>
            </div>
            <div class="uk-text-small uk-text-bold uk-visible@s">
              {{ currentDate }}
            </div>
          </div>
        </header>

        <!-- Dynamic Page Content -->
        <div class="uk-padding-large uk-padding-remove-top uk-margin-top">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
});
</script>

<style scoped>
.admin-wrapper {
  display: flex;
  min-height: 100vh;
}

.admin-sidebar-premium {
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sidebar-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255,255,255,0.05);
  background: rgba(0,0,0,0.2);
}

.admin-main {
  flex: 1;
  margin-left: 280px;
  min-width: 0;
}

.admin-header {
  height: 70px;
  padding: 0 40px;
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 900;
}

.header-search {
  position: relative;
  width: 300px;
}

.header-search i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.header-search input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid transparent;
  background: #f1f5f9;
  border-radius: 10px;
  font-size: 13px;
  outline: none;
  transition: all 0.2s ease;
}

.header-search input:focus {
  background: #fff;
  border-color: #4f46e5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 960px) {
  .admin-sidebar-premium {
    transform: translateX(-100%);
  }
  .admin-sidebar-premium.uk-open {
    transform: translateX(0);
  }
  .admin-main {
    margin-left: 0;
  }
  .admin-header {
    padding: 0 20px;
  }
  .header-search {
    width: 200px;
  }
}
</style>
