<template>
  <div class="home">
    
    <!-- Hero Section -->
    <section class="home-hero uk-light">
      <div class="uk-container">
        <!-- Removed uk-grid-match to allow true vertical centering via uk-flex-middle -->
        <div class="uk-child-width-1-2@m uk-grid-large uk-flex-middle" uk-grid>
          <div class="uk-padding-remove-vertical">
             <h1 class="uk-heading-medium" uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200">
               Empowering Women Religious for a <span class="text-accent">Transformed Society</span>
             </h1>
             <p class="uk-text-lead uk-margin-medium-top" uk-scrollspy="cls: uk-animation-fade; delay: 400">
               United in faith and dedicated to service, AWRIM strengthens the presence and impact of consecrated women across Malawi.
             </p>
             <div class="uk-margin-large-top" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 600">
               <router-link to="/about" class="uk-button uk-button-primary uk-button-large uk-margin-small-right">Our Mission</router-link>
               <router-link to="/contact" class="uk-button uk-button-outline-white uk-button-large">Contact Us</router-link>
             </div>
          </div>
          <div class="uk-visible@m">
             <div class="uk-position-relative" uk-scrollspy="cls: uk-animation-slide-right-medium; delay: 400">
                <!-- Abstract Image Grid or Hero Graphic could go here -->
                <img src="https://picsum.photos/600/600?random=10" alt="Sisters in Community" class="hero-image">
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Teaser -->
    <section class="uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid-large uk-flex-middle" uk-grid>
           <div class="uk-width-1-2@m">
              <img src="https://picsum.photos/800/600?random=2" alt="About AWRIM" class="content-image">
           </div>
           <div class="uk-width-1-2@m">
              <span class="section-label">Who We Are</span>
              <h2 class="uk-heading-small uk-margin-small-top">A Legacy of Faith & Unity</h2>
              <p class="uk-text-large">Bringing together diverse congregations under one shared vision of prophetic witness and holistic development.</p>
              <p>Since 1966, AWRIM has been the unifying body for women religious in Malawi, fostering collaboration in formation, pastoral work, and social services. We believe that by working together, we can amplify our impact on the communities we serve.</p>
              <router-link to="/about" class="uk-button uk-button-default uk-margin-top">Learn More About Us</router-link>
           </div>
        </div>
      </div>
    </section>

    <!-- Impact Statistics Section (Moved) -->
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
         <div class="stats-bar">
           <div class="uk-grid-divider uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center" uk-grid>
              <div class="stat-item">
                 <h3>29</h3>
                 <p>Congregations</p>
              </div>
              <div class="stat-item">
                 <h3>1000+</h3>
                 <p>Sisters</p>
              </div>
              <div class="stat-item">
                 <h3>7</h3>
                 <p>Dioceses</p>
              </div>
              <div class="stat-item">
                 <h3>50+</h3>
                 <p>Years of Service</p>
              </div>
           </div>
         </div>
      </div>
    </div>

    <!-- Focus Areas -->
    <section class="uk-section uk-section-muted uk-padding-remove-top">
       <div class="uk-container">
          <div class="section-header">
             <span class="section-label">What We Do</span>
             <h2 class="section-title">Our Core Focus Areas</h2>
          </div>

          <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-praying-hands"></i></div>
                   <h3>Spiritual Formation</h3>
                   <p>Providing ongoing formation and retreat programs to deepen the spiritual lives of our sisters and communities.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-book-reader"></i></div>
                   <h3>Education</h3>
                   <p>Running schools and literacy programs to ensure quality education for children and youth across the nation.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-heartbeat"></i></div>
                   <h3>Health & Wellness</h3>
                   <p>Managing hospitals and clinics, bringing essential healthcare services to the most vulnerable.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-balance-scale"></i></div>
                   <h3>Social Justice</h3>
                   <p>Advocating for human rights, gender equality, and dignity for all, driven by Catholic Social Teaching.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-hand-holding-heart"></i></div>
                   <h3>Charity & Relief</h3>
                   <p>Mobilizing resources to support disaster victims, orphans, and the elderly in times of crisis.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-users-cog"></i></div>
                   <h3>Capacity Building</h3>
                   <p>Training sisters in leadership, administration, and professional skills to manage institutions effectively.</p>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Partners Marquee -->
    <section class="uk-section uk-section-muted uk-padding-remove-top">
        <div class="uk-container">
            <h3 class="uk-text-center uk-margin-medium-bottom section-label">Our Partners & Affiliates</h3>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 3000">
                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-5@m uk-grid uk-flex-middle">
                    <li><div class="partner-logo"><img src="https://placehold.co/150x150?text=ECM" alt="ECM" class="partner-logo-circle"></div></li>
                    <li><div class="partner-logo"><img src="https://placehold.co/150x150?text=AMRIM" alt="AMRIM" class="partner-logo-circle"></div></li>
                    <li><div class="partner-logo"><img src="https://placehold.co/150x150?text=UISG" alt="UISG" class="partner-logo-circle"></div></li>
                    <li><div class="partner-logo"><img src="https://placehold.co/150x150?text=MISEREOR" alt="MISEREOR" class="partner-logo-circle"></div></li>
                    <li><div class="partner-logo"><img src="https://placehold.co/150x150?text=ADVENIAT" alt="ADVENIAT" class="partner-logo-circle"></div></li>
                    <li><div class="partner-logo"><img src="https://placehold.co/150x150?text=CARITAS" alt="CARITAS" class="partner-logo-circle"></div></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section uk-text-center">
       <div class="uk-container uk-container-small">
          <h2 class="uk-margin-remove-top">Join Us in Our Mission</h2>
          <p class="uk-text-large">Your support enables us to continue our vital work in churches, schools, and hospitals across Malawi.</p>
          <div class="uk-flex uk-flex-center uk-grid-small" uk-grid>
             <div><router-link to="/contact" class="uk-button uk-button-white uk-button-large">Get in Touch</router-link></div>
             <div><router-link to="/activities" class="uk-button uk-button-outline-white uk-button-large">See Our Work</router-link></div>
          </div>
       </div>
    </section>

  </div>
</template>

<style scoped>
.text-accent {
    color: #d4736c;
}

.hero-image {
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
}

.content-image {
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
}
</style>
