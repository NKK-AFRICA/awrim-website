<template>
  <div class="about">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">About AWRIM</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Association of Women in Religious Institutes of Malawi: United in faith, dedicated to service.</p>
        <ul class="uk-breadcrumb">
           <li><router-link to="/">Home</router-link></li>
           <li><span>About Us</span></li>
        </ul>
      </div>
    </div>

    <!-- History Section ("Visual Narrative") -->
    <div class="uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid-large uk-flex-middle" uk-grid>
           <div class="uk-width-1-2@m">
             <div class="history-image-container" uk-scrollspy="cls: uk-animation-slide-left-medium; delay: 200">
               <img src="https://picsum.photos/600/700?random=about" alt="AWRIM History" class="history-img">
               <div class="history-badge">
                 <span>1966</span>
                 <small>Established</small>
               </div>
             </div>
           </div>
           <div class="uk-width-1-2@m" uk-scrollspy="cls: uk-animation-slide-right-medium; delay: 400">
             <span class="uk-text-primary uk-text-bold uk-text-uppercase" style="letter-spacing: 2px;">Our Heritage</span>
             <h2 class="uk-heading-small uk-margin-small-top">A Legacy of Faith & Unity</h2>
             <p class="uk-text-large">Supporting religious women in Malawi for over five decades.</p>
             <p class="uk-text-justify">
               The Association of Religious Institutes of Malawi (ARIMA) was founded in 1966 as a support network for religious Men and Women. It was formally constituted as a Women Religious Association in the 1990s when the men formed their own Association (AMRIM). Consequently, ARIMA was renamed AWRIM (Association of Women in Religious Institutes of Malawi).
             </p>
             <p class="uk-text-justify">
               To date, AWRIM comprises twenty-nine (29) Congregations: four locally founded, two cloistered, and the rest of international origin, with many Sisters being of Malawian origin. The number of religious women working in Malawi totals about 1000 Sisters spread across all seven dioceses.
             </p>
           </div>
        </div>
      </div>
    </div>

    <!-- Mission & Vision ("Core Pillars") -->
    <div class="uk-section uk-section-muted">
       <div class="uk-container">
          <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
             <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200">
                <div class="vision-card">
                   <i class="fas fa-eye mv-icon"></i>
                   <h3 class="uk-text-primary">Our Vision</h3>
                   <p class="uk-text-large">"An association of committed, united and sustainable consecrated women, holistically formed and witnessing the Gospel values."</p>
                </div>
             </div>
             <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 400">
                <div class="mission-card">
                   <i class="fas fa-bullseye mv-icon"></i>
                   <h3 style="color: #fff;">Our Mission</h3>
                   <p class="uk-text-large">"To unite, coordinate and empower the congregations to live fully their prophetic roles by providing religious formation and skills building interventions."</p>
                </div>
             </div>
          </div>
       </div>
    </div>

    <!-- Goals & Values -->
    <div class="uk-section">
      <div class="uk-container">
        <!-- Values Grid -->
        <div class="uk-text-center uk-margin-large-bottom">
           <span class="uk-text-primary uk-text-bold uk-text-uppercase">Our Core Values</span>
           <h2>What Defines Us</h2>
        </div>
        
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid uk-scrollspy="cls: uk-animation-scale-up; target: .value-card; delay: 100">
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-balance-scale"></i></div>
                  <h4>Social Justice</h4>
                  <p class="uk-margin-remove">Dedication to creating a just and equitable society for all.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-people-carry"></i></div>
                  <h4>Teamwork</h4>
                  <p class="uk-margin-remove">Inter-Congregational collaboration and unity in our work.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-cross"></i></div>
                  <h4>Faith & Service</h4>
                  <p class="uk-margin-remove">Living out the Gospel through dedicated service to others.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-fist-raised"></i></div>
                  <h4>Empowerment</h4>
                  <p class="uk-margin-remove">Uplifting sisters and communities to reach their potential.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-seedling"></i></div>
                  <h4>Holistic Formation</h4>
                  <p class="uk-margin-remove">Nurturing the spiritual and professional growth of our members.</p>
               </div>
            </div>
             <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-hand-holding-heart"></i></div>
                  <h4>Integrity</h4>
                  <p class="uk-margin-remove">Maintaining the highest standards of honesty and ethics.</p>
               </div>
            </div>
        </div>

        <hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">

        <!-- Goals List -->
        <div class="uk-width-2-3@m uk-align-center">
           <div class="uk-text-center uk-margin-medium-bottom">
              <h3>Our Strategic Goals</h3>
              <p>We strive to achieve these objectives in unwavering service to the Church and society:</p>
           </div>
           
           <ul class="uk-list goal-list" uk-scrollspy="cls: uk-animation-slide-left-small; target: li; delay: 100">
             <li><i class="fas fa-check-circle"></i> To live prophetically as religious women, moved by the spirit to humbly support God’s flock.</li>
             <li><i class="fas fa-check-circle"></i> Promoting openness and unity among the different congregations in Malawi.</li>
             <li><i class="fas fa-check-circle"></i> Ensuring good leadership and holistic approach to our spiritual values.</li>
             <li><i class="fas fa-check-circle"></i> To promote human dignity and improve the quality of life in the Church and society.</li>
           </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are mostly handled by specific classes in style.css now */
</style>
