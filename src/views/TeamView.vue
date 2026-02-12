<template>
  <div class="team">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Our Team</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">The dedicated leadership committed to our mission.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Team</span></li>
        </ul>
      </div>
    </div>

    <!-- Executive Members -->
    <div class="uk-section">
      <div class="uk-container">
        
        <div class="section-header">
           <span class="section-label">Executive Committee</span>
           <h2 class="section-title">Trustees</h2>
        </div>

        <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .team-card; delay: 200">
          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=JS`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Janepher Selemani</h3>
                <span class="team-role">Board Chairperson</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
            </div>
          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=JA`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Janet Angala</h3>
                <span class="team-role">Vice Board Chairperson</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=BM`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Bernadette Mnyenyembe</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=MA`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Martha Anastanzio</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=FB`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Florence Bande</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=AL`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Annie Lundu</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=MC`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Mary Chimalizeni</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=AB`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Agnes Banda</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="team-card">
              <div class="team-card-media">
                <img :src="`https://placehold.co/600x1000?text=CB`" alt="Team Member" class="team-img">
              </div>
              <div class="team-card-body">
                <h3 class="team-name">Sr. Colletta Bester</h3>
                <span class="team-role">Board Member</span>
                <div class="team-socials">
                   <a href="#"><i class="fas fa-envelope"></i></a>
                   <a href="#"><i class="fas fa-phone-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">

        <!-- Management / Staff -->
        <div class="section-header">
           <span class="section-label">Secretariat</span>
           <h2 class="section-title">Management & Staff</h2>
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
