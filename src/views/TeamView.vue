<template>
  <div class="team">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Our Team</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">The dedicated leadership committed to our mission.</p>
        <ul class="uk-breadcrumb">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Team</span></li>
        </ul>
      </div>
    </div>

    <!-- Executive Members -->
    <div class="uk-section">
      <div class="uk-container">
        
        <div class="uk-text-center uk-margin-large-bottom">
           <span class="uk-text-primary uk-text-bold uk-text-uppercase">Executive Committee</span>
           <h2>Leadership</h2>
        </div>

        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .team-card; delay: 200">
          <div v-for="i in 3" :key="i">
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://picsum.photos/400/400?random=${i+20}`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Mary Phiri {{ i }}</h3>
                <span class="team-role">Chairperson / Superior</span>
                <p class="uk-text-small uk-text-muted">Dedicated to service and spiritual growth since 1995.</p>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
           <!-- Adding a few more for structure -->
           <div v-for="i in 2" :key="`extra-${i}`">
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://picsum.photos/400/400?random=${i+30}`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Anne Banda {{ i }}</h3>
                <span class="team-role">Executive Member</span>
                 <p class="uk-text-small uk-text-muted">Overseeing finance and administration.</p>
                 <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">

        <!-- Management / Staff -->
        <div class="uk-text-center uk-margin-large-bottom">
           <span class="uk-text-primary uk-text-bold uk-text-uppercase">Secretariat</span>
           <h2>Management & Staff</h2>
        </div>

        <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .team-card; delay: 100">
           <div v-for="j in 4" :key="j">
             <div class="team-card team-card-small">
                <div class="team-card-media">
                   <img :src="`https://picsum.photos/300/300?random=${j+50}`" alt="Staff Member" class="team-img">
                </div>
                <div class="team-card-body">
                   <h4 class="team-name">John Doe {{ j }}</h4>
                   <span class="team-role">Program Coordinator</span>
                   <div class="team-socials uk-margin-small-top">
                      <a href="#"><i class="fas fa-envelope"></i></a>
                   </div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are handled globaly in style.css */
</style>
