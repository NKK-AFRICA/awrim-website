<template>
  <div class="what-we-do">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">What We Do</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">AWRIM coordinates and empowers congregations through spiritual formation, social development, and administrative support.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>What We Do</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        
        <!-- Main Activity Areas -->
        <div class="section-header uk-margin-large-bottom">
          <span class="section-label">Our Core Activities</span>
          <h2 class="section-title">Three Main Areas of Work</h2>
        </div>

        <div class="uk-child-width-1-1@s uk-child-width-1-3@m uk-grid-match uk-grid-large" uk-grid>
          
          <!-- Area 1 -->
          <div>
            <div class="activity-area-card">
              <div class="activity-area-image">
                <img src="https://picsum.photos/400/250?random=30" alt="Spiritual Formation">
              </div>
              <div class="activity-area-body">
                <h3 class="activity-area-title">Spiritual & Religious Formation</h3>
                <p class="activity-area-description">Organizing on-going spiritual and religious formation sessions, retreats and recollections at diocesan, regional, national levels. Promoting joint activities among congregations and facilitating access to donors.</p>
                <router-link to="/what-we-do/spiritual-formation" class="activity-area-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </div>

          <!-- Area 2 -->
          <div>
            <div class="activity-area-card">
              <div class="activity-area-image">
                <img src="https://picsum.photos/400/250?random=31" alt="Social Development">
              </div>
              <div class="activity-area-body">
                <h3 class="activity-area-title">Social Development</h3>
                <p class="activity-area-description">Sister congregations contribute to education, early childhood development, nutrition, health and other social development sectors through various programmes and projects. Running health facilities and schools.</p>
                <router-link to="/what-we-do/social-development" class="activity-area-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </div>

          <!-- Area 3 -->
          <div>
            <div class="activity-area-card">
              <div class="activity-area-image">
                <img src="https://picsum.photos/400/250?random=32" alt="Finance & Administration">
              </div>
              <div class="activity-area-body">
                <h3 class="activity-area-title">Finance, Investment & Administration</h3>
                <p class="activity-area-description">Capacity building and empowerment of congregations and sisters through capacity building sessions, education scholarships and upgrading courses. Managing financial resources from Donors and within AWRIM.</p>
                <router-link to="/what-we-do/finance-admin" class="activity-area-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </div>

        </div>

        <hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">

        <!-- Programs -->
        <div class="section-header uk-margin-medium-bottom">
          <span class="section-label">Our Programs</span>
          <h2 class="section-title">Current Programs</h2>
        </div>

        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
          
          <div>
            <div class="program-card">
              <h3 class="program-card-title">On-Going Formation</h3>
              <p class="program-card-description">Spiritual and religious formation to deepen and strengthen the spiritual life and transform sisters into missionary disciples.</p>
            </div>
          </div>

          <div>
            <div class="program-card">
              <h3 class="program-card-title">AACSS</h3>
              <p class="program-card-description">All-Africa Conference Sister to Sister program building capacity to address HIV/AIDS and emerging chronic conditions.</p>
            </div>
          </div>

          <div>
            <div class="program-card">
              <h3 class="program-card-title">SCORE ECD</h3>
              <p class="program-card-description">Strengthen Capacity of women Religious in Early Child Development - building capacity for ECD services.</p>
            </div>
          </div>

          <div>
            <div class="program-card">
              <h3 class="program-card-title">ASEC</h3>
              <p class="program-card-description">African Sisters Education Collaborative facilitating access to education for women religious in Africa.</p>
            </div>
          </div>

          <div>
            <div class="program-card">
              <h3 class="program-card-title">CCCM</h3>
              <p class="program-card-description">Catholic Care for Children Malawi ensuring children grow up in safe, loving families.</p>
            </div>
          </div>

          <div>
            <div class="program-card">
              <h3 class="program-card-title">BPE</h3>
              <p class="program-card-description">Bakhita Partnership for Education - partnership for holistic education and formation in Africa.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles are handled by global styles */
</style>
