<template>
  <div class="faq">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Frequently Asked Questions</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Find answers to common questions about our organization, mission, and work.</p>
        <ul class="uk-breadcrumb">
           <li><router-link to="/">Home</router-link></li>
           <li><span>FAQ</span></li>
        </ul>
      </div>
    </div>

    <!-- FAQ Section with Categories -->
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-small">
        
        <!-- General Questions -->
        <div class="uk-margin-large-bottom" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200">
           <h2 class="faq-category-title">General Information</h2>
           <ul uk-accordion="multiple: true">
               <li class="faq-card uk-open">
                   <a class="uk-accordion-title" href="#">What is AWRIM?</a>
                   <div class="uk-accordion-content">
                       <p>AWRIM stands for Association of Women in Religious Institutes of Malawi. We are a unifying body for 29 congregations of religious women working together for spiritual growth, community service, and holistic development across the country.</p>
                   </div>
               </li>
               <li class="faq-card">
                   <a class="uk-accordion-title" href="#">Where is AWRIM located?</a>
                   <div class="uk-accordion-content">
                       <p>Our main secretariat is located in Lilongwe, Malawi. However, our member congregations and Sisters serve in all seven Roman Catholic dioceses across the nation, working in schools, hospitals, and parishes.</p>
                   </div>
               </li>
               <li class="faq-card">
                   <a class="uk-accordion-title" href="#">When was AWRIM founded?</a>
                   <div class="uk-accordion-content">
                       <p>AWRIM traces its roots back to 1966 when it started as ARIMA (Association of Religious Institutes of Malawi). It was formally constituted as a distinct women's association in the 1990s.</p>
                   </div>
               </li>
           </ul>
        </div>

        <!-- Membership & Vocations -->
        <div class="uk-margin-large-bottom" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 400">
           <h2 class="faq-category-title">Membership & Vocations</h2>
           <ul uk-accordion="multiple: true">
               <li class="faq-card">
                   <a class="uk-accordion-title" href="#">How can I become a Sister?</a>
                   <div class="uk-accordion-content">
                       <p>Becoming a religious sister involves a period of formation and discernment. Since there are many different congregations (Orders) with different charisms, we recommend you contact a specific congregation you feel drawn to, or contact us for general guidance on how to start your vocational journey.</p>
                   </div>
               </li>
               <li class="faq-card">
                   <a class="uk-accordion-title" href="#">Who can join AWRIM?</a>
                   <div class="uk-accordion-content">
                       <p>AWRIM is an association of Congretations (religious institutes), not individuals. Any recognized Institute of Consecrated Life for women operating in Malawi is eligible for membership in the association.</p>
                   </div>
               </li>
           </ul>
        </div>

        <!-- Support & Donations -->
        <div uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 600">
           <h2 class="faq-category-title">Support & Partners</h2>
           <ul uk-accordion="multiple: true">
               <li class="faq-card">
                   <a class="uk-accordion-title" href="#">How can I support AWRIM's work?</a>
                   <div class="uk-accordion-content">
                       <p>You can support us through prayer, financial donations, or by partnering with us on specific projects such as education or healthcare initiatives. Please visit our <router-link to="/contact">Contact page</router-link> to get in touch with our leadership team.</p>
                   </div>
               </li>
               <li class="faq-card">
                   <a class="uk-accordion-title" href="#">Do you work with international partners?</a>
                   <div class="uk-accordion-content">
                       <p>Yes, we collaborate with various local and international organizations, including donors, Vatican dicasteries, and other NGOs that share our vision of human dignity and social development.</p>
                   </div>
               </li>
           </ul>
        </div>

        <!-- Help CTA -->
        <div class="uk-margin-large-top uk-text-center">
            <div class="uk-card uk-card-default uk-card-body section-background-accent uk-light uk-border-rounded">
                <h3>Still have questions?</h3>
                <p>We're here to help. Reach out to our team directly.</p>
                <router-link to="/contact" class="uk-button uk-button-default" style="background: #fff; color: var(--color-primary); border: none;">Contact Us</router-link>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are handled globaly in style.css for faq-card etc */
</style>
