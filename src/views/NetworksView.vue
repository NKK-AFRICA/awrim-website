<template>
  <div class="networks">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Our Networks</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Four network initiatives bringing together congregations to address critical issues in Malawi.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Our Networks</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match uk-grid-large" uk-grid>
          
          <!-- Network 1 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=40" alt="Anti-Human Trafficking">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Anti-Human Trafficking</h3>
                <p class="enhanced-card-description">Focused on establishing an institutional framework for effective regulation, coordination, and support of trafficking victims. Implemented by seven congregations across multiple dioceses to combat human trafficking in Malawi.</p>
                <div class="enhanced-card-footer">
                  <router-link to="/networks/anti-trafficking" class="enhanced-card-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Network 2 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=41" alt="Elderly Care">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-heart"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Elderly Care</h3>
                <p class="enhanced-card-description">Formed to train sisters on how to take care of elderly sisters and sensitize sisters on how to grow old gracefully. Comprises 18 congregations working across multiple dioceses.</p>
                <div class="enhanced-card-footer">
                  <router-link to="/networks/elderly-care" class="enhanced-card-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Network 3 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=42" alt="Health Care">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-stethoscope"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Health Care</h3>
                <p class="enhanced-card-description">Formed to sensitize sisters on communicable and non-communicable diseases. Comprises eight congregations conducting sessions across multiple dioceses to improve health awareness and care.</p>
                <div class="enhanced-card-footer">
                  <router-link to="/networks/health-care" class="enhanced-card-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Network 4 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=43" alt="Sister Lead Youth Initiatives">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-users"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Sister Lead Youth Initiatives</h3>
                <p class="enhanced-card-description">Enhanced vocational skills development for underprivileged youth through strengthened Vocational Skills Training initiatives. Implemented by eight congregations running vocational skills institutions across multiple dioceses.</p>
                <div class="enhanced-card-footer">
                  <router-link to="/networks/youth-initiatives" class="enhanced-card-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
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
/* Styles are handled by global styles */
</style>
