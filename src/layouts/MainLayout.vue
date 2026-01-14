<template>
  <div class="uk-offcanvas-content">
    <!-- Navbar -->
    <!-- Dual-Tier Header -->
    <header>
        <!-- Top Utility Bar -->
        <div class="top-bar uk-visible@m">
            <div class="uk-container">
                <div class="uk-flex uk-flex-between uk-flex-middle">
                    <div class="top-bar-contact">
                        <span class="uk-margin-right"><i class="fas fa-envelope uk-margin-small-right"></i> info@awrim.mw</span>
                        <span><i class="fas fa-phone-alt uk-margin-small-right"></i> +265 888 650 643</span>
                    </div>
                    <div class="top-bar-socials">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Sticky Navbar -->
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: main-nav-sticky; top: 0">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-container uk-container-expand uk-width-1-1">
                    <div uk-navbar>
                        <div class="uk-navbar-left">
                            <router-link to="/" class="uk-navbar-item uk-logo">
                                AWRIM
                            </router-link>
                        </div>

                        <div class="uk-navbar-center uk-visible@m">
                            <ul class="uk-navbar-nav">
                                <li><router-link to="/" class="main-nav-item">Home</router-link></li>
                                <li><router-link to="/about" class="main-nav-item">About</router-link></li>
                                <li><router-link to="/activities" class="main-nav-item">Activities</router-link></li>
                                <li><router-link to="/team" class="main-nav-item">Team</router-link></li>
                                <li>
                                    <a href="#" class="main-nav-item">Resources <i class="fas fa-chevron-down uk-margin-small-left" style="font-size: 0.7em;"></i></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><router-link to="/news">News & Updates</router-link></li>
                                            <li><router-link to="/events">Events Calendar</router-link></li>
                                            <li><router-link to="/gallery">Photo Gallery</router-link></li>
                                            <li><router-link to="/resources">Documents</router-link></li>
                                            <li><router-link to="/partners">Partners</router-link></li>
                                            <li><router-link to="/faq">FAQ</router-link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="uk-navbar-right">
                             <div class="uk-navbar-item uk-visible@m">
                                <div class="uk-button-group">
                                   <router-link to="/donate" class="uk-button uk-button-default uk-button-small">Donate</router-link>
                                   <span style="width: 16px"></span>
                                   <router-link to="/contact" class="uk-button uk-button-primary uk-button-small">Contact Us</router-link>
                                </div>
                             </div>
                             <a href="#" class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #mobile-nav">
                                <i class="fas fa-bars fa-lg"></i>
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
                Empowering women in religious institutes to transform communities through faith, service, and unity across Malawi.
              </p>
              <div class="uk-margin-top">
                <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-youtube"></i></a>
                <a href="#" class="uk-icon-button"><i class="fab fa-twitter"></i></a>
              </div>
            </div>

            <!-- Column 2: Quick Links -->
            <div>
              <h4 class="footer-heading">Quick Links</h4>
              <ul class="uk-list footer-links">
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/activities">Our Activities</router-link></li>
                <li><router-link to="/team">Leadership Team</router-link></li>
                <li><router-link to="/events">Upcoming Events</router-link></li>
              </ul>
            </div>

            <!-- Column 3: Resources -->
            <div>
              <h4 class="footer-heading">Resources</h4>
              <ul class="uk-list footer-links">
                <li><router-link to="/news">News & Updates</router-link></li>
                <li><router-link to="/gallery">Photo Gallery</router-link></li>
                <li><router-link to="/resources">Downloads</router-link></li>
                <li><router-link to="/partners">Our Partners</router-link></li>
              </ul>
            </div>

            <!-- Column 4: Contact & Newsletter -->
            <div>
              <h4 class="footer-heading">Newsletter</h4>
              <p class="uk-text-small">Stay updated with our latest news and events.</p>
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
              <!-- <ul class="uk-list footer-contact uk-margin-top">
                <li><i class="fas fa-map-marker-alt"></i> P.O. Box 1511, Lilongwe</li>
                <li><i class="fas fa-phone"></i> <a href="tel:+265888650643">+265 888 650 643</a></li>
                <li><i class="fas fa-envelope"></i> info@awrim.mw</li>
              </ul> -->
              
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
    <div id="mobile-nav" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-default">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/activities">Activities</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
          <li class="uk-nav-divider"></li>
          <li><router-link to="/news">News</router-link></li>
          <li><router-link to="/events">Events</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/resources">Resources</router-link></li>
          <li><router-link to="/partners">Partners</router-link></li>
           <li><router-link to="/faq">FAQ</router-link></li>
          <li class="uk-nav-divider"></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
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
/* Navbar Overlay Styles */
.uk-navbar-sticky {
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
}
.uk-logo {
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--color-primary);
  letter-spacing: -1px;
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
