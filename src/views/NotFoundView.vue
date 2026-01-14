<template>
  <div class="not-found uk-flex uk-flex-center uk-flex-middle">
    <div class="uk-text-center uk-padding">
      <h1 class="uk-heading-2xlarge uk-margin-remove primary-color not-found-number">404</h1>
      <h2 class="uk-margin-medium-top">Page Not Found</h2>
      <p class="uk-text-lead">The page you are looking for might have been removed or is temporarily unavailable.</p>
      
      <div class="uk-margin-large-top">
        <router-link to="/" class="uk-button uk-button-primary uk-button-large">
          <i class="fas fa-home uk-margin-small-right"></i> Return Home
        </router-link>
        <span class="uk-margin-small-left uk-margin-small-right">or</span>
        <router-link to="/contact" class="uk-button uk-button-default uk-button-large">
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 80vh;
  background: #f8f8f8;
}

.primary-color {
  color: var(--color-primary);
}

.not-found-number {
  font-weight: 800;
  opacity: 0.1;
}
</style>
