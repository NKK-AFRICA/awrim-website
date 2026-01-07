<template>
  <div class="partners">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1>Our Partners</h1>
        <p>Working together with organizations and institutions to make a difference.</p>
        <ul class="uk-breadcrumb">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Partners</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
         <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match uk-text-center" uk-grid>
            <!-- Partner 1 -->
            <div>
               <div class="uk-card uk-card-default uk-card-body">
                   <img src="https://placehold.co/150x150?text=Donor+1" alt="Partner Logo" class="partner-logo-circle">
                   <h4 class="uk-margin-small-top">International Aid</h4>
                   <p class="uk-text-small">Strategic Funding Partner</p>
               </div>
            </div>
            <!-- Partner 2 -->
             <div>
               <div class="uk-card uk-card-default uk-card-body">
                   <img src="https://placehold.co/150x150?text=Church+Org" alt="Partner Logo" class="partner-logo-circle">
                   <h4 class="uk-margin-small-top">Global Church Network</h4>
                   <p class="uk-text-small">Faith-based Alliance</p>
               </div>
            </div>
             <!-- Partner 3 -->
             <div>
               <div class="uk-card uk-card-default uk-card-body">
                   <img src="https://placehold.co/150x150?text=NGO+Malawi" alt="Partner Logo" class="partner-logo-circle">
                   <h4 class="uk-margin-small-top">Local NGO Coalition</h4>
                   <p class="uk-text-small">Community Outreach</p>
               </div>
            </div>
             <!-- Partner 4 -->
            <div>
               <div class="uk-card uk-card-default uk-card-body">
                   <img src="https://placehold.co/150x150?text=Gov+Dept" alt="Partner Logo" class="partner-logo-circle">
                   <h4 class="uk-margin-small-top">Ministry of Gender</h4>
                   <p class="uk-text-small">Government Partner</p>
               </div>
            </div>
         </div>

         <div class="uk-margin-large-top uk-text-center">
             <h3>Become a Partner</h3>
             <p>Join us in our mission to empower communities across Malawi.</p>
             <router-link to="/contact" class="uk-button uk-button-primary">Contact Us</router-link>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are inherited from global or defined here if needed */
</style>
