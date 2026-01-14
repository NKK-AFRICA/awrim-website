<template>
  <div class="contact">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Contact Us</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Get in touch with the Association of Women in Religious Institutes of Malawi. We are here to listen and support.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Contact</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large uk-child-width-1-2@m" uk-grid>
          <div>
            <h3>Get in Touch</h3>
            <p>For inquiries about our programs, partnerships, or donations, please reach out to us.</p>
            
            <ul class="uk-list uk-list-divider uk-margin-medium-top">
              <li>
                <i class="fas fa-map-marker-alt uk-margin-small-right"></i>
                P.O. Box 1511, Lilongwe, Malawi
              </li>
              <li>
                <i class="fas fa-phone uk-margin-small-right"></i>
                +265 888 650 643 / +265 995 201 632
              </li>
              <li>
                <i class="fas fa-envelope uk-margin-small-right"></i>
                info@awrim.org (Placeholder)
              </li>
              <li>
                <i class="fas fa-clock uk-margin-small-right"></i>
                Mon - Fri: 8:00 AM - 5:00 PM
              </li>
            </ul>

            <div class="uk-margin-medium-top">
               <h4>Follow Us</h4>
               <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-facebook-f"></i></a>
               <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-card-title">Send a Message</h3>
              <form class="uk-form-stacked">
                <div class="uk-margin">
                  <label class="uk-form-label" for="name">Name</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="name" type="text" placeholder="Your Name">
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="email">Email</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="email" type="email" placeholder="Your Email">
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="message">Message</label>
                  <div class="uk-form-controls">
                    <textarea class="uk-textarea" id="message" rows="5" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <button class="uk-button uk-button-primary uk-width-1-1">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <div class="uk-margin-large-top">
          <!-- Wrapper for map -->
          <div class="uk-card uk-card-default uk-card-body uk-padding-remove uk-overflow-hidden">
             <!-- Google Maps Placeholder (Lilongwe) -->
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123984.6644874457!2d33.70783300582522!3d-13.983363499426217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d31a520fa16b%3A0xc6c7a6e11893c834!2sLilongwe%2C%20Malawi!5e0!3m2!1sen!2sus!4v1689123456789!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>