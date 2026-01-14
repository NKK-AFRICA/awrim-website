<template>
  <div class="donate">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Support Our Mission</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Your generosity helps us continue our work in education, health, and social justice.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Donate</span></li>
        </ul>
      </div>
    </div>

    <!-- Content -->
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        
        <div class="uk-card uk-card-default uk-card-body uk-margin-bottom shadow-lg">
          <h2 class="uk-card-title uk-text-primary uk-text-bold">Why Donate?</h2>
          <p class="uk-text-large">
            AWRIM relies on the support of partners and people of goodwill to fund its Secretariat activities and coordinate the diverse ministries of women religious in Malawi.
          </p>
          <p>
            Your contribution directly supports:
          </p>
          <ul class="uk-list uk-list-bullet">
            <li>Training and formation programs for sisters.</li>
            <li>emergency relief funds for vulnerable communities.</li>
            <li>Operational costs for our coordination efforts.</li>
          </ul>
        </div>

        <div class="uk-grid-medium uk-child-width-1-2@s" uk-grid>
          <!-- Bank Transfer -->
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-height-1-1 donate-card">
              <h3 class="uk-h4"><i class="fas fa-university uk-text-primary uk-margin-small-right"></i> Bank Transfer</h3>
              <p class="uk-text-small uk-text-muted">Direct transfer to our account.</p>
              
              <div class="uk-background-muted uk-padding-small uk-border-rounded">
                <p class="uk-margin-remove"><strong>Bank Name:</strong> National Bank of Malawi</p>
                <p class="uk-margin-remove"><strong>Account Name:</strong> AWRIM Secretariat</p>
                <p class="uk-margin-remove"><strong>Account Number:</strong> 100XXXXXXX</p>
                <p class="uk-margin-remove"><strong>Branch:</strong> Capital City</p>
                <p class="uk-margin-remove"><strong>SWIFT Code:</strong> NBMXXXXX</p>
              </div>
            </div>
          </div>

          <!-- Mobile Money -->
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-height-1-1 donate-card">
               <h3 class="uk-h4"><i class="fas fa-mobile-alt uk-text-primary uk-margin-small-right"></i> Mobile Money</h3>
               <p class="uk-text-small uk-text-muted">Quick support via Airtel Money or Mpamba.</p>

               <div class="uk-background-muted uk-padding-small uk-border-rounded">
                 <p class="uk-margin-remove"><strong>Airtel Money:</strong> +265 999 999 999</p>
                 <p class="uk-margin-remove"><strong>Mpamba:</strong> +265 888 650 643</p>
               </div>
            </div>
          </div>
        </div>

        <div class="uk-margin-large-top uk-text-center">
          <p class="uk-text-meta">For international donations or specific project funding, please contact us directly.</p>
          <router-link to="/contact" class="uk-button uk-button-primary">Contact Finance Team</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-lg {
  box-shadow: var(--shadow-md);
}

.donate-card {
  border: 2px solid #f0f0f0;
}
</style>
