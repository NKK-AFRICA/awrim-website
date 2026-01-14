<template>
  <div class="uk-offcanvas-content">
    <!-- Navbar -->
    <!-- Enhanced Dual-Tier Header -->
    <header class="site-header">
        <!-- Top Utility Bar -->
        <div class="top-bar uk-visible@m">
            <div class="uk-container">
                <div class="uk-flex uk-flex-between uk-flex-middle">
                    <div class="top-bar-left">
                        <a href="mailto:info@awrim.mw" class="top-bar-link">
                            <i class="fas fa-envelope"></i>
                            <span>info@awrim.mw</span>
                        </a>
                        <a href="tel:+265888650643" class="top-bar-link">
                            <i class="fas fa-phone-alt"></i>
                            <span>+265 888 650 643</span>
                        </a>
                    </div>
                    <div class="top-bar-right">
                        <span class="top-bar-text">Follow us:</span>
                        <a href="#" class="top-bar-social" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="top-bar-social" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="top-bar-social" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Sticky Navbar -->
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: main-nav-sticky; top: 0; animation: uk-animation-slide-top">
            <nav class="uk-navbar-container main-navbar">
                <div class="uk-container">
                    <div class="navbar-flex">
                        <!-- Logo Section -->
                        <div class="navbar-logo-section">
                            <router-link to="/" class="navbar-logo">
                                <div class="logo-wrapper">
                                    <img src="@/assets/logo.png" alt="AWRIM Logo" class="logo-image">
                                    <span class="logo-tagline">Women in Religious Institutes</span>
                                </div>
                            </router-link>
                        </div>

                        <!-- Navigation Links -->
                        <div class="navbar-nav-section uk-visible@m">
                            <ul class="main-nav" uk-navbar-nav>
                                <li><router-link to="/" exact-active-class="router-link-active" class="nav-link">Home</router-link></li>
                                
                                <!-- About Us Dropdown -->
                                <li class="nav-item-dropdown">
                                    <a href="#" class="nav-link">
                                        <span>About Us</span>
                                        <i class="fas fa-chevron-down nav-arrow"></i>
                                    </a>
                                    <div class="uk-navbar-dropdown modern-dropdown" uk-dropdown="mode: click; pos: bottom-center">
                                        <div class="dropdown-inner">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <router-link to="/about" class="dropdown-link">
                                                        <i class="fas fa-history"></i>
                                                        <div>
                                                            <div class="dropdown-title">Our Story</div>
                                                            <div class="dropdown-desc">History & background</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/team" class="dropdown-link">
                                                        <i class="fas fa-users"></i>
                                                        <div>
                                                            <div class="dropdown-title">Leadership & Governance</div>
                                                            <div class="dropdown-desc">Our leadership team</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/partners" class="dropdown-link">
                                                        <i class="fas fa-handshake"></i>
                                                        <div>
                                                            <div class="dropdown-title">Partners & Affiliations</div>
                                                            <div class="dropdown-desc">Our collaborators</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                
                                <!-- What We Do Dropdown -->
                                <li class="nav-item-dropdown">
                                    <a href="#" class="nav-link">
                                        <span>What We Do</span>
                                        <i class="fas fa-chevron-down nav-arrow"></i>
                                    </a>
                                    <div class="uk-navbar-dropdown modern-dropdown" uk-dropdown="mode: click; pos: bottom-center">
                                        <div class="dropdown-inner">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <router-link to="/what-we-do" class="dropdown-link">
                                                        <i class="fas fa-tasks"></i>
                                                        <div>
                                                            <div class="dropdown-title">Overview</div>
                                                            <div class="dropdown-desc">All our activities</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/activities" class="dropdown-link">
                                                        <i class="fas fa-project-diagram"></i>
                                                        <div>
                                                            <div class="dropdown-title">Programs</div>
                                                            <div class="dropdown-desc">Current programs</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                
                                <!-- Our Networks Dropdown -->
                                <li class="nav-item-dropdown">
                                    <a href="#" class="nav-link">
                                        <span>Our Networks</span>
                                        <i class="fas fa-chevron-down nav-arrow"></i>
                                    </a>
                                    <div class="uk-navbar-dropdown modern-dropdown" uk-dropdown="mode: click; pos: bottom-center">
                                        <div class="dropdown-inner">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <router-link to="/networks" class="dropdown-link">
                                                        <i class="fas fa-network-wired"></i>
                                                        <div>
                                                            <div class="dropdown-title">All Networks</div>
                                                            <div class="dropdown-desc">Network overview</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                
                                <!-- Latest Dropdown -->
                                <li class="nav-item-dropdown">
                                    <a href="#" class="nav-link">
                                        <span>Latest</span>
                                        <i class="fas fa-chevron-down nav-arrow"></i>
                                    </a>
                                    <div class="uk-navbar-dropdown modern-dropdown" uk-dropdown="mode: click; pos: bottom-center">
                                        <div class="dropdown-inner">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <router-link to="/news" class="dropdown-link">
                                                        <i class="fas fa-newspaper"></i>
                                                        <div>
                                                            <div class="dropdown-title">News</div>
                                                            <div class="dropdown-desc">Latest announcements</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/events" class="dropdown-link">
                                                        <i class="fas fa-calendar-alt"></i>
                                                        <div>
                                                            <div class="dropdown-title">Events</div>
                                                            <div class="dropdown-desc">Upcoming events</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/resources" class="dropdown-link">
                                                        <i class="fas fa-file-download"></i>
                                                        <div>
                                                            <div class="dropdown-title">Publications</div>
                                                            <div class="dropdown-desc">Download resources</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/gallery" class="dropdown-link">
                                                        <i class="fas fa-images"></i>
                                                        <div>
                                                            <div class="dropdown-title">Media Gallery</div>
                                                            <div class="dropdown-desc">View our photos</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                
                                <!-- Join Us Dropdown -->
                                <li class="nav-item-dropdown">
                                    <a href="#" class="nav-link">
                                        <span>Join Us</span>
                                        <i class="fas fa-chevron-down nav-arrow"></i>
                                    </a>
                                    <div class="uk-navbar-dropdown modern-dropdown" uk-dropdown="mode: click; pos: bottom-center">
                                        <div class="dropdown-inner">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <router-link to="/join-us" class="dropdown-link">
                                                        <i class="fas fa-user-plus"></i>
                                                        <div>
                                                            <div class="dropdown-title">Ways to Join</div>
                                                            <div class="dropdown-desc">Get involved</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/contact" class="dropdown-link">
                                                        <i class="fas fa-envelope"></i>
                                                        <div>
                                                            <div class="dropdown-title">Contact Us</div>
                                                            <div class="dropdown-desc">Get in touch</div>
                                                        </div>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Action Buttons -->
                        <div class="navbar-actions-section">
                            <div class="uk-visible@m navbar-actions">
                                <router-link to="/donate" class="action-btn donate-btn">
                                    <i class="fas fa-heart"></i>
                                    <span>Donate</span>
                                </router-link>
                            </div>
                            <a href="#" class="mobile-toggle uk-hidden@m" uk-toggle="target: #mobile-nav" aria-label="Open menu">
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <!-- Modern Footer -->
    <footer class="modern-footer uk-light">
      <div class="uk-section uk-padding-large">
        <div class="uk-container">
          <div class="uk-grid-large uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid>
            <!-- Column 1: Brand -->
            <div>
              <router-link to="/" class="footer-logo uk-display-block uk-margin-small-bottom">AWRIM</router-link>
              <p class="uk-text-small uk-margin-remove-top">
                Association of Women in Religious Institutes of Malawi. Empowering 45 congregations to transform communities through faith, service, and unity.
              </p>
              <div class="uk-margin-top">
                <a href="#" class="uk-icon-button uk-margin-small-right" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="uk-icon-button uk-margin-small-right" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="uk-icon-button" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              </div>
            </div>

            <!-- Column 2: About & What We Do -->
            <div>
              <h4 class="footer-heading">About & Programs</h4>
              <ul class="uk-list footer-links">
                <li><router-link to="/about">Our Story</router-link></li>
                <li><router-link to="/team">Leadership Team</router-link></li>
                <li><router-link to="/what-we-do">What We Do</router-link></li>
                <li><router-link to="/activities">Our Programs</router-link></li>
                <li><router-link to="/networks">Our Networks</router-link></li>
              </ul>
            </div>

            <!-- Column 3: Latest & Resources -->
            <div>
              <h4 class="footer-heading">Latest & Resources</h4>
              <ul class="uk-list footer-links">
                <li><router-link to="/news">News & Updates</router-link></li>
                <li><router-link to="/events">Events</router-link></li>
                <li><router-link to="/resources">Publications</router-link></li>
                <li><router-link to="/gallery">Photo Gallery</router-link></li>
                <li><router-link to="/partners">Our Partners</router-link></li>
              </ul>
            </div>

            <!-- Column 4: Contact & Newsletter -->
            <div>
              <h4 class="footer-heading">Contact Us</h4>
              <ul class="uk-list footer-contact">
                <li><i class="fas fa-map-marker-alt"></i> P.O. Box 1511, Lilongwe, Malawi</li>
                <li><i class="fas fa-phone"></i> <a href="tel:+265888650643">+265 888 650 643</a></li>
                <li><i class="fas fa-phone"></i> <a href="tel:+265995201632">+265 995 201 632</a></li>
                <li><i class="fas fa-envelope"></i> <a href="mailto:info@awrim.mw">info@awrim.mw</a></li>
              </ul>
              <div class="uk-margin-top">
                <h5 class="footer-heading" style="font-size: 0.9rem; margin-bottom: 10px;">Newsletter</h5>
                <p class="uk-text-small" style="margin-bottom: 12px;">Stay updated with our latest news and events.</p>
                <form class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <input class="uk-input footer-input" type="email" placeholder="Your Email">
                    </div>
                    <div class="uk-width-auto">
                        <button class="uk-button uk-button-primary footer-btn" type="button">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="footer-bottom uk-padding-small">
        <div class="uk-container">
          <div class="uk-grid-small uk-child-width-auto@s uk-flex-between uk-flex-middle" uk-grid>
            <div>
              <p class="uk-text-meta uk-margin-remove">&copy; {{ new Date().getFullYear() }} AWRIM. All rights reserved.</p>
            </div>
            <div>
              <ul class="uk-subnav uk-subnav-divider uk-text-meta uk-margin-remove">
                <li><router-link to="/privacy">Privacy Policy</router-link></li>
                <li><router-link to="/terms">Terms of Use</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Mobile Nav -->
    <div id="mobile-nav" uk-offcanvas="overlay: true; flip: true">
      <div class="uk-offcanvas-bar mobile-menu">
        <button class="uk-offcanvas-close mobile-close" type="button" uk-close></button>
        
        <!-- Mobile Logo -->
        <div class="mobile-logo">
          <img src="@/assets/logo.png" alt="AWRIM Logo" class="mobile-logo-image">
          <div class="mobile-logo-tagline">Women in Religious Institutes</div>
        </div>
        
        <!-- Mobile Navigation -->
        <ul class="uk-nav uk-nav-default mobile-nav-list">
          <li><router-link to="/" class="mobile-nav-link"><i class="fas fa-home"></i> Home</router-link></li>
          
          <li class="uk-nav-divider mobile-divider"></li>
          <li class="mobile-nav-header">About Us</li>
          <li><router-link to="/about" class="mobile-nav-link"><i class="fas fa-info-circle"></i> Our Story</router-link></li>
          <li><router-link to="/team" class="mobile-nav-link"><i class="fas fa-users"></i> Leadership</router-link></li>
          <li><router-link to="/partners" class="mobile-nav-link"><i class="fas fa-handshake"></i> Partners</router-link></li>
          
          <li class="uk-nav-divider mobile-divider"></li>
          <li class="mobile-nav-header">What We Do</li>
          <li><router-link to="/what-we-do" class="mobile-nav-link"><i class="fas fa-tasks"></i> Overview</router-link></li>
          <li><router-link to="/activities" class="mobile-nav-link"><i class="fas fa-project-diagram"></i> Programs</router-link></li>
          
          <li class="uk-nav-divider mobile-divider"></li>
          <li class="mobile-nav-header">Our Networks</li>
          <li><router-link to="/networks" class="mobile-nav-link"><i class="fas fa-network-wired"></i> All Networks</router-link></li>
          
          <li class="uk-nav-divider mobile-divider"></li>
          <li class="mobile-nav-header">Latest</li>
          <li><router-link to="/news" class="mobile-nav-link"><i class="fas fa-newspaper"></i> News</router-link></li>
          <li><router-link to="/events" class="mobile-nav-link"><i class="fas fa-calendar-alt"></i> Events</router-link></li>
          <li><router-link to="/resources" class="mobile-nav-link"><i class="fas fa-file-download"></i> Publications</router-link></li>
          <li><router-link to="/gallery" class="mobile-nav-link"><i class="fas fa-images"></i> Media Gallery</router-link></li>
          
          <li class="uk-nav-divider mobile-divider"></li>
          <li class="mobile-nav-header">Join Us</li>
          <li><router-link to="/join-us" class="mobile-nav-link"><i class="fas fa-user-plus"></i> Ways to Join</router-link></li>
          <li><router-link to="/contact" class="mobile-nav-link"><i class="fas fa-envelope"></i> Contact</router-link></li>
          
          <li class="uk-nav-divider mobile-divider"></li>
          
          <li>
            <router-link to="/donate" class="mobile-action-btn mobile-donate">
              <i class="fas fa-heart"></i> Donate Now
            </router-link>
          </li>
        </ul>
        
        <!-- Mobile Social Links -->
        <div class="mobile-social">
          <div class="mobile-social-title">Connect With Us</div>
          <div class="mobile-social-links">
            <a href="#" class="mobile-social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="mobile-social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="mobile-social-link"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Back to Top -->
    <a href="#" @click.prevent="scrollToTop" class="back-to-top" :class="{ 'visible': showBackToTop }" title="Back to Top">
      <i class="fas fa-arrow-up"></i>
    </a>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const searchQuery = ref('');
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* ==================== HEADER & NAVBAR STYLES ==================== */

/* Site Header */
.site-header {
  position: relative;
  z-index: 999;
}

/* Top Utility Bar */
.top-bar {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8rem;
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.top-bar-left {
  display: flex;
  gap: 25px;
  align-items: center;
}

.top-bar-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
}

.top-bar-link i {
  color: var(--color-primary);
  font-size: 0.9rem;
}

.top-bar-link:hover {
  color: #fff;
  transform: translateX(2px);
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.top-bar-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 5px;
}

.top-bar-social {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.top-bar-social i {
  margin: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-bar-social:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-2px);
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(190, 43, 55, 0.3);
}

/* Main Navbar */
.main-navbar {
  background: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

/* Flexbox Layout for Navbar */
.navbar-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
}

.navbar-logo-section {
  flex-shrink: 0;
}

.navbar-nav-section {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 0 10px;
}

.navbar-actions-section {
  flex-shrink: 0;
}

/* Sticky State */
.main-nav-sticky {
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1) !important;
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(20px) !important;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Logo Section */
.navbar-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.navbar-logo:hover {
  transform: translateY(-2px);
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
}

.logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.logo-tagline {
  font-size: 0.7rem;
  color: #666;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* Navigation Links */
.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-link {
  font-weight: 600;
  font-size: 0.95rem;
  color: #555 !important;
  letter-spacing: 0.4px;
  position: relative;
  padding: 10px 18px !important;
  margin: 0;
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  overflow: hidden;
  white-space: nowrap;
}

.nav-arrow {
  font-size: 0.65em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 4px;
  opacity: 0.7;
}

.nav-item-dropdown:hover .nav-arrow {
  transform: rotate(180deg);
  opacity: 1;
}

/* Glassmorphism background effect */
.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(190, 43, 55, 0.05) 0%, 
    rgba(212, 115, 108, 0.08) 100%);
  border-radius: 10px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

/* Hover state */
.nav-link:hover::before {
  opacity: 1;
}

.nav-link:hover {
  color: var(--color-primary) !important;
  transform: translateY(-2px);
}

/* Active state - Solid & Bold */
.nav-link.router-link-active {
  color: #fff !important;
  background: var(--color-primary);
  box-shadow: 0 4px 12px rgba(190, 43, 55, 0.35);
  transform: translateY(-1px);
}

/* Remove gradient background for active state */
.nav-link.router-link-active::before {
  display: none;
}

/* Shine effect on hover */
.nav-link:hover::before {
  animation: shine 0.8s ease-in-out;
}

@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Dropdown Parent */
.nav-item-dropdown {
  position: relative;
}

/* Special styling for dropdown links */
.nav-item-dropdown .nav-link {
  padding-right: 12px !important;
}

.nav-item-dropdown .nav-link:hover .nav-arrow,
.nav-item-dropdown .nav-link.router-link-active .nav-arrow {
  color: var(--color-primary);
}

/* Modern Dropdown Menu */
.modern-dropdown {
  border-radius: 12px !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12) !important;
  border: none !important;
  padding: 0 !important;
  margin-top: 15px !important;
  min-width: 280px !important;
  overflow: hidden;
  background: #fff !important;
}

/* Top accent border */
.modern-dropdown::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary) 0%, #d4736c 100%);
}

.dropdown-inner {
  padding: 12px;
}

.dropdown-link {
  display: flex !important;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 16px !important;
  border-radius: 8px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: #333;
  background: transparent;
}

.dropdown-link i {
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-top: 2px;
  width: 24px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.dropdown-link:hover {
  background: linear-gradient(135deg, rgba(190, 43, 55, 0.08) 0%, rgba(212, 115, 108, 0.08) 100%);
  transform: translateX(4px);
}

.dropdown-link:hover i {
  transform: scale(1.1);
  color: var(--color-primary-hover);
}

.dropdown-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
  line-height: 1.3;
}

.dropdown-desc {
  font-size: 0.8rem;
  color: #888;
  line-height: 1.3;
}

/* Action Buttons */
.navbar-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
  border: 2px solid transparent;
  white-space: nowrap;
}

.action-btn i {
  font-size: 0.95rem;
  transition: transform 0.3s ease;
}

.action-btn:hover i {
  transform: scale(1.1);
}

.donate-btn {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.donate-btn:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(190, 43, 55, 0.3);
}

.contact-btn {
  background: var(--color-primary);
  color: #fff;
  box-shadow: 0 4px 15px rgba(190, 43, 55, 0.25);
}

.contact-btn:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(190, 43, 55, 0.4);
}

/* Mobile Toggle */
.mobile-toggle {
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background: transparent;
  border: 1.5px solid #e5e5e5;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-toggle:hover {
  border-color: var(--color-primary);
  background: rgba(190, 43, 55, 0.05);
}

.hamburger-line {
  width: 16px;
  height: 1.5px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-toggle:hover .hamburger-line {
  background: var(--color-primary-hover);
}

/* Responsive Adjustments */
@media (max-width: 960px) {
  .logo-image {
    height: 45px;
  }
  
  .logo-tagline {
    font-size: 0.65rem;
  }
  
  .navbar-nav-section {
    max-width: 500px;
  }
  
  .nav-link {
    padding: 10px 16px !important;
    font-size: 0.8rem;
  }
}

@media (max-width: 640px) {
  .main-navbar {
    padding: 6px 0;
  }
  
  .logo-image {
    height: 40px;
  }
  
  .logo-tagline {
    display: none;
  }
  
  .navbar-flex {
    justify-content: space-between;
  }
  
  .navbar-logo-section {
    flex: 1;
  }
  
  .navbar-actions-section {
    flex-shrink: 0;
  }
}

/* Pulse animation for active nav items */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(190, 43, 55, 0.35);
  }
  50% {
    box-shadow: 0 4px 16px rgba(190, 43, 55, 0.5);
  }
}

.nav-link.router-link-active {
  animation: pulse 2s ease-in-out infinite;
}

/* ==================== MOBILE MENU STYLES ==================== */

.mobile-menu {
  background: #ffffff !important;
  width: 320px !important;
  padding: 30px 0 !important;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15) !important;
}

.mobile-close {
  color: var(--color-primary) !important;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(190, 43, 55, 0.1);
  transition: all 0.3s ease;
}

.mobile-close:hover {
  background: var(--color-primary);
  color: #fff !important;
  transform: rotate(90deg);
}

.mobile-logo {
  padding: 30px 30px 40px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
}

.mobile-logo-image {
  height: 60px;
  width: auto;
  object-fit: contain;
  margin-bottom: 8px;
}

.mobile-logo-tagline {
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.mobile-nav-list {
  padding: 0 20px;
}

.mobile-nav-header {
  color: #999;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  padding: 15px 15px 10px;
  margin-top: 10px;
}

.mobile-nav-link {
  color: #333 !important;
  padding: 14px 15px !important;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  margin-bottom: 5px;
}

.mobile-nav-link i {
  width: 20px;
  color: var(--color-primary);
  font-size: 1.1rem;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: rgba(190, 43, 55, 0.1);
  color: var(--color-primary) !important;
  transform: translateX(5px);
}

.mobile-divider {
  border-top: 1px solid #f0f0f0 !important;
  margin: 15px 15px !important;
}

.mobile-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 10px 15px;
  text-align: center;
}

.mobile-donate {
  background: transparent;
  color: var(--color-primary) !important;
  border: 2px solid var(--color-primary);
}

.mobile-donate:hover {
  background: var(--color-primary);
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(190, 43, 55, 0.3);
}

.mobile-contact {
  background: var(--color-primary);
  color: #fff !important;
  box-shadow: 0 4px 15px rgba(190, 43, 55, 0.3);
}

.mobile-contact:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(190, 43, 55, 0.4);
}

.mobile-social {
  padding: 30px 30px 20px;
  border-top: 1px solid #f0f0f0;
  margin-top: 30px;
}

.mobile-social-title {
  font-size: 0.8rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 15px;
}

.mobile-social-links {
  display: flex;
  gap: 12px;
}

.mobile-social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(190, 43, 55, 0.08);
  border-radius: 8px;
  color: var(--color-primary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(190, 43, 55, 0.15);
}

.mobile-social-link i {
  margin: 0 !important;
}

.mobile-social-link:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-2px);
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(190, 43, 55, 0.3);
}

/* Modern Footer Styles */
.modern-footer {
  background: #111; /* Very dark grey, almost black */
  color: #aaa;
  position: relative;
  overflow: hidden;
}

/* Add a subtle top gradient line */
.modern-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), #d4736c);
}

.footer-logo {
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
    text-decoration: none;
    letter-spacing: -1px;
}

.footer-heading {
    color: #fff;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

/* Heading underline */
.footer-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--color-primary);
}

.footer-links li a {
    color: #aaa;
    text-decoration: none;
    transition: all 0.3s ease;
    display: block;
    padding: 5px 0;
}

.footer-links li a:hover {
    color: #fff;
    padding-left: 8px; /* Slide effect */
}

.footer-contact li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #ccc;
}
.footer-contact li i {
    color: var(--color-primary);
    width: 25px;
}
.footer-contact a {
    color: #ccc;
    text-decoration: none;
}

/* Newsletter Input styling override */
.footer-input {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    border-radius: 4px 0 0 4px;
    height: 40px;
    box-sizing: border-box;
}
.footer-input:focus {
    background: rgba(255,255,255,0.15);
    border-color: var(--color-primary);
}

.footer-btn {
    border-radius: 0 4px 4px 0;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    margin: 0;
    border: none;
    display: flex; /* Flex to center icon */
    align-items: center;
    justify-content: center;
}
.footer-btn i {
    margin: 0 !important; /* Ensure no margin on the icon itself for perfect centering */
}

/* Footer Bottom */
.footer-bottom {
    background: #0a0a0a;
    border-top: 1px solid rgba(255,255,255,0.05);
}

.uk-icon-button {
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: none;
}
.uk-icon-button:hover {
    background: var(--color-primary);
    color: #fff;
    transform: translateY(-3px);
}
</style>
