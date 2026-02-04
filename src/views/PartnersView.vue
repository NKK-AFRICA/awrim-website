<template>
  <div class="partners">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Our Partners</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Working together with organizations and institutions to make a difference.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Partners</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
         <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" uk-grid>
            <!-- Partner 1 -->
            <div class="uk-text-center">
               <div class="uk-card uk-card-default uk-card-body uk-text-center">
                   <img src="https://placehold.co/150x150?text=Donor+1" alt="Partner Logo" class="partner-logo-circle uk-margin-auto">
                   <h4 class="uk-margin-small-top">International Aid</h4>
                   <p class="uk-text-small">Strategic Funding Partner</p>
               </div>
            </div>
            <!-- Partner 2 -->
             <div class="uk-text-center">
               <div class="uk-card uk-card-default uk-card-body uk-text-center">
                   <img src="https://placehold.co/150x150?text=Church+Org" alt="Partner Logo" class="partner-logo-circle uk-margin-auto">
                   <h4 class="uk-margin-small-top">Global Church Network</h4>
                   <p class="uk-text-small">Faith-based Alliance</p>
               </div>
            </div>
             <!-- Partner 3 -->
             <div class="uk-text-center">
               <div class="uk-card uk-card-default uk-card-body uk-text-center">
                   <img src="https://placehold.co/150x150?text=NGO+Malawi" alt="Partner Logo" class="partner-logo-circle uk-margin-auto">
                   <h4 class="uk-margin-small-top">Local NGO Coalition</h4>
                   <p class="uk-text-small">Community Outreach</p>
               </div>
            </div>
             <!-- Partner 4 -->
            <div class="uk-text-center">
               <div class="uk-card uk-card-default uk-card-body uk-text-center">
                   <img src="https://placehold.co/150x150?text=Gov+Dept" alt="Partner Logo" class="partner-logo-circle uk-margin-auto">
                   <h4 class="uk-margin-small-top">Ministry of Gender</h4>
                   <p class="uk-text-small">Government Partner</p>
               </div>
            </div>
         </div>

         <!-- Become a Partner Section -->
         <div class="uk-margin-large-top uk-section">
            <div class="uk-container uk-container-small">
               <div class="uk-text-center">
                  <div class="w-20 h-20 bg-brand-50 dark:bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                     <i class="fas fa-handshake text-3xl text-brand-600 dark:text-brand-400"></i>
                  </div>
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white/90 mb-4">Become a Partner</h2>
                  <p class="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                     Join our growing network of partners working together to create lasting change in communities across Malawi.
                     Whether you're an organization, business, or individual, your partnership can make a real difference.
                  </p>

                  <!-- Partnership Benefits -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                     <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div class="w-12 h-12 bg-brand-50 dark:bg-brand-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                           <i class="fas fa-users text-brand-600 dark:text-brand-400 text-xl"></i>
                        </div>
                        <h4 class="text-gray-900 dark:text-white font-semibold mb-2">Community Impact</h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">Directly contribute to sustainable development and empowerment initiatives.</p>
                     </div>
                     <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div class="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                           <i class="fas fa-globe-africa text-blue-600 dark:text-blue-400 text-xl"></i>
                        </div>
                        <h4 class="text-gray-900 dark:text-white font-semibold mb-2">Regional Network</h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">Connect with like-minded organizations and expand your reach across Malawi.</p>
                     </div>
                     <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div class="w-12 h-12 bg-green-50 dark:bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                           <i class="fas fa-chart-line text-green-600 dark:text-green-400 text-xl"></i>
                        </div>
                        <h4 class="text-gray-900 dark:text-white font-semibold mb-2">Measurable Results</h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">Track the real impact of your partnership through our reporting and evaluation.</p>
                     </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                     <router-link
                        to="/contact"
                        class="inline-flex items-center gap-3 px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                     >
                        <i class="fas fa-envelope"></i>
                        Start a Conversation
                     </router-link>
                     <router-link
                        to="/join-us"
                        class="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                     >
                        <i class="fas fa-info-circle"></i>
                        Learn More
                     </router-link>
                  </div>

                  <!-- Contact Info -->
                  <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                     <p class="text-gray-600 dark:text-gray-400 text-sm">
                        <i class="fas fa-phone mr-2 text-brand-500"></i>
                        Ready to discuss partnership opportunities? Call us at (123) 456-7890
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are inherited from global or defined here if needed */
</style>
