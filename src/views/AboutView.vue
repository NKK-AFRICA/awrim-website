<template>
  <div class="about">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">About AWRIM</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Association of Women in Religious Institutes of Malawi: United in faith, dedicated to service.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
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
               <div class="history-badge" uk-scrollspy="cls: uk-animation-scale-up; delay: 400">
                 <span>1966</span>
                 <small>Established</small>
               </div>
             </div>
           </div>
           <div class="uk-width-1-2@m" uk-scrollspy="cls: uk-animation-slide-right-medium; delay: 400">
             <span class="section-label">Our Heritage</span>
             <h2 class="uk-heading-small uk-margin-small-top">A Legacy of Faith & Unity</h2>
             <p class="uk-text-large">Supporting religious women in Malawi for over five decades.</p>
             <p class="uk-text-justify">
               In June 1961, the Major Superiors of teaching congregations convened to discuss issues concerning the Catholic Spirit in Catholic Schools. Bishop Joseph Fady addressed the gathering, emphasizing the importance of developing confidence in lay collaborators.
             </p>
             <p class="uk-text-justify">
               In 1966, Bishop Jobidon of the diocese of Mzuzu formed the Association of the Religious Institutes in Malawi (ARIMA) for both men and women religious. It was registered by the Holy See as a support network for religious men and women in Malawi. In the 1990s, ARIMA was renamed the Association of Women Religious in the Institutes of Malawi (AWRIM) after the male counterparts opted for their own union, which they named AMRIM (Association of men in Religious Institutes of Malawi).
             </p>
             <p class="uk-text-justify">
               AWRIM is an independent body under the Episcopal Conference of Malawi (ECM) and also falls under the Association of Consecrated Women in Eastern and Central Africa (ACWECA). Currently, there are 45 congregations, five of which are locally founded and two are cloistered. The rest are International Missionary congregations.
             </p>
             <div class="uk-margin-medium-top">
               <a href="/2026 AWRIM HISTORY.pdf" download class="uk-button uk-button-primary" target="_blank">
                 <i class="fas fa-download uk-margin-small-right"></i>
                 Download Full History Document
               </a>
             </div>
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
                   <h3>Our Vision</h3>
                   <p class="uk-text-large">"An association of Consecrated Women, living and working as a family of God, committed to holistic formation of its members and witnessing the Gospel Values."</p>
                </div>
             </div>
             <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 400">
                <div class="mission-card">
                   <i class="fas fa-bullseye mv-icon"></i>
                   <h3>Our Mission</h3>
                   <p class="uk-text-large">"To unite, coordinate and empower the congregations and Sisters to live fully their prophetic role through religious, spiritual, intellectual, human and organization development, formation and growth."</p>
                </div>
             </div>
          </div>
       </div>
    </div>

    <!-- Goals & Values -->
    <div class="uk-section">
      <div class="uk-container">
        <!-- Values Grid -->
        <div class="section-header">
           <span class="section-label">Our Core Values</span>
           <h2 class="section-title">What Defines Us</h2>
        </div>
        
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid-large" uk-grid uk-scrollspy="cls: uk-animation-scale-up; target: .value-card; delay: 100">
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-handshake"></i></div>
                  <h4>Commitment & Determination</h4>
                  <p class="uk-margin-remove">Committed to periodic and on-going formation for both old and new members, and determined to ensure better collaboration of various congregations.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-users"></i></div>
                  <h4>Community Life</h4>
                  <p class="uk-margin-remove">Consecrated women living together, sharing joys, challenges and resources as a family of God.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-praying-hands"></i></div>
                  <h4>Prayerful Life</h4>
                  <p class="uk-margin-remove">All Sisters commit themselves to prayerful life that empowers them to go out to proclaim and live the Gospel.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-heart"></i></div>
                  <h4>Respect for Human Dignity</h4>
                  <p class="uk-margin-remove">Recognizing that every human being is created in God's image, forming the foundation of human rights and responsibilities.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-hands-helping"></i></div>
                  <h4>Solidarity & Team Spirit</h4>
                  <p class="uk-margin-remove">Belonging to one human family with mutual obligations to promote the development of all people.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-hand-holding-heart"></i></div>
                  <h4>Preferential Option for the Poor</h4>
                  <p class="uk-margin-remove">Active commitment to overcome social injustices, with considerable concern for the needs of the poorest and most vulnerable.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-shield-alt"></i></div>
                  <h4>Honesty & Integrity</h4>
                  <p class="uk-margin-remove">Commitment to transparency, accountability, honesty, and moral integrity in all AWRIM activities.</p>
               </div>
            </div>
            <div>
               <div class="value-card">
                  <div class="value-icon"><i class="fas fa-leaf"></i></div>
                  <h4>Stewardship of Creation</h4>
                  <p class="uk-margin-remove">Responsible stewardship of the earth and its resources, guided by Laudato Si and living in harmony with God's creation.</p>
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
             <li><i class="fas fa-check-circle"></i> <strong>Spiritual Formation:</strong> Consecrated Women to be transformed into missionary disciples and prophetic voice of Jesus Christ and stewards of God's creation.</li>
             <li><i class="fas fa-check-circle"></i> <strong>Socio-economic improvement:</strong> AWRIM to contribute towards the improvement of the socio-economic status of Sisters, Church members, marginalized people and the society at large.</li>
             <li><i class="fas fa-check-circle"></i> <strong>Strengthened governance:</strong> AWRIM to have improved and strengthened governance and management capacity, policies, structures and systems at all levels.</li>
             <li><i class="fas fa-check-circle"></i> <strong>Sustainability and self-reliance:</strong> AWRIM to be sustainable and self-reliant at all levels.</li>
           </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are mostly handled by specific classes in style.css now */
</style>
