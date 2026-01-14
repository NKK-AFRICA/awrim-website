<template>
  <div class="join-us">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Join Us</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">There are many ways to be part of AWRIM's mission and work.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Join Us</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        
        <div class="uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match uk-grid-large" uk-grid>
          
          <!-- Become a Member Congregation -->
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div class="uk-text-center uk-margin-bottom">
                <div class="uk-icon-button uk-button-primary" style="width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                  <i class="fas fa-users fa-2x"></i>
                </div>
              </div>
              <h3 class="uk-card-title uk-text-center">Become a Member Congregation</h3>
              <p class="uk-text-center">Religious congregations in Malawi can join AWRIM to benefit from formation programs, networking opportunities, and collaborative initiatives.</p>
              <div class="uk-text-center uk-margin-top">
                <router-link to="/contact" class="uk-button uk-button-primary">Contact Us</router-link>
              </div>
            </div>
          </div>

          <!-- Volunteer -->
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div class="uk-text-center uk-margin-bottom">
                <div class="uk-icon-button uk-button-primary" style="width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                  <i class="fas fa-hand-holding-heart fa-2x"></i>
                </div>
              </div>
              <h3 class="uk-card-title uk-text-center">Volunteer</h3>
              <p class="uk-text-center">Contribute your time and skills to support AWRIM's programs and initiatives. Volunteers are welcome in various capacities.</p>
              <div class="uk-text-center uk-margin-top">
                <router-link to="/contact" class="uk-button uk-button-primary">Get Involved</router-link>
              </div>
            </div>
          </div>

          <!-- Collaborate / Partnerships -->
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div class="uk-text-center uk-margin-bottom">
                <div class="uk-icon-button uk-button-primary" style="width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                  <i class="fas fa-handshake fa-2x"></i>
                </div>
              </div>
              <h3 class="uk-card-title uk-text-center">Collaborate / Partnerships</h3>
              <p class="uk-text-center">Organizations, institutions, and individuals interested in partnering with AWRIM on projects and initiatives are welcome to reach out.</p>
              <div class="uk-text-center uk-margin-top">
                <router-link to="/contact" class="uk-button uk-button-primary">Partner With Us</router-link>
              </div>
            </div>
          </div>

          <!-- Careers / Internships -->
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div class="uk-text-center uk-margin-bottom">
                <div class="uk-icon-button uk-button-primary" style="width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                  <i class="fas fa-briefcase fa-2x"></i>
                </div>
              </div>
              <h3 class="uk-card-title uk-text-center">Careers / Internships</h3>
              <p class="uk-text-center">Explore opportunities to work with AWRIM or participate in internship programs that align with our mission and values.</p>
              <div class="uk-text-center uk-margin-top">
                <router-link to="/contact" class="uk-button uk-button-primary">View Opportunities</router-link>
              </div>
            </div>
          </div>

        </div>

        <div class="uk-margin-large-top uk-card uk-card-default uk-card-body uk-text-center">
          <h3>Interested in Joining AWRIM?</h3>
          <p class="uk-text-large">Contact us to learn more about how you can be part of our mission.</p>
          <div class="uk-margin-top">
            <router-link to="/contact" class="uk-button uk-button-primary uk-button-large uk-margin-small-right">Contact Us</router-link>
            <router-link to="/about" class="uk-button uk-button-default uk-button-large">Learn More About AWRIM</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles are handled by global styles */
</style>
