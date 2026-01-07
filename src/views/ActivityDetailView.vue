<template>
  <div class="activity-detail">
    <!-- Hero Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1>{{ activityTitle }}</h1>
        <ul class="uk-breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/activities">Activities</router-link></li>
          <li><span>{{ activityTitle }}</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" uk-grid>
          
          <!-- Main Content -->
          <div class="uk-width-2-3@m">
            <img :src="activityImage" :alt="activityTitle" class="uk-border-rounded uk-width-1-1 uk-margin-medium-bottom shadow-lg">
            
            <article class="uk-article">
              <p class="uk-text-lead">{{ activitySummary }}</p>
              
              <div v-html="activityContent"></div>
              
              <div class="uk-margin-large-top uk-padding uk-background-muted uk-border-rounded">
                <h3 class="uk-h4">Project Impact</h3>
                <ul class="uk-list uk-list-disc">
                   <li>Reached over 50 rural communities.</li>
                   <li>Trained 200+ local leaders.</li>
                   <li>Established sustainable support systems.</li>
                </ul>
              </div>
            </article>
          </div>

          <!-- Sidebar -->
          <div class="uk-width-1-3@m">
            <div class="uk-card uk-card-default uk-card-body uk-margin-bottom">
              <h3 class="uk-card-title">Share</h3>
              <div class="uk-flex uk-flex-middle">
                 <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-facebook-f"></i></a>
                 <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-twitter"></i></a>
                 <a href="#" class="uk-icon-button"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>

            <div class="uk-card uk-card-primary uk-card-body uk-light">
              <h3 class="uk-card-title">Support This Work</h3>
              <p>Your donation helps us expand this project to more areas.</p>
              <router-link to="/donate" class="uk-button uk-button-default uk-width-1-1">Donate Now</router-link>
            </div>
            
            <div class="uk-margin-top">
                <h4 class="uk-heading-line"><span>Other Activities</span></h4>
                <ul class="uk-list uk-list-divider">
                    <li><router-link to="/activities/education">Education</router-link></li>
                    <li><router-link to="/activities/health">Health Services</router-link></li>
                    <li><router-link to="/activities/justice">Justice & Peace</router-link></li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activityTitle = ref('Loading...');
const activityImage = ref('https://picsum.photos/800/400?random=1');
const activitySummary = ref('Loading activity details...');
const activityContent = ref('<p>Loading content...</p>');

// Mock Data Dictionary
const activitiesData = {
  'education': {
    title: 'Education',
    image: 'https://picsum.photos/800/400?random=14',
    summary: 'Running schools and providing educational support to children and youth across Malawi.',
    content: `
      <p>Education is a cornerstone of our mission. AWRIM member congregations manage numerous primary and secondary schools, vocational training centers, and literacy programs.</p>
      <h3>Scholarship Programs</h3>
      <p>We provide scholarships to vulnerable children, particularly girls, to ensure they complete their education and break the cycle of poverty.</p>
      <h3>Teacher Training</h3>
      <p>Continuous professional development for our teaching sisters ensures high standards of education in all our institutions.</p>
    `
  },
  'health': {
    title: 'Health Services',
    image: 'https://picsum.photos/800/400?random=15',
    summary: 'Managing health institutions, HIV/AIDS services, and care for the elderly.',
    content: `
      <p>Our sisters serve on the frontlines of healthcare, often in the most remote areas. We operate clinics, hospitals, and community health outreach programs.</p>
      <p>Key focus areas include maternal health, nutrition, and palliative care.</p>
    `
  },
  'justice': {
    title: 'Justice & Peace',
    image: 'https://picsum.photos/800/400?random=10',
    summary: 'Advocating for social justice and peace initiatives across the dioceses.',
    content: `
      <p>We work to promote human dignity and rights through advocacy, civic education, and conflict resolution programs.</p>
    `
  },
   'human-trafficking': {
    title: 'Human Trafficking Campaign',
    image: 'https://picsum.photos/800/400?random=11',
    summary: 'Raising awareness and fighting against human trafficking in our communities.',
    content: `
      <p>Our anti-trafficking network works to prevent trafficking, protect victims, and prosecute offenders through collaboration with law enforcement and community leaders.</p>
    `
  }
};

const loadActivity = () => {
  const id = route.params.id; // e.g. 'education'
  const data = activitiesData[id] || {
    title: 'Activity Not Found',
    image: 'https://picsum.photos/800/400?grayscale',
    summary: 'The requested activity could not be found.',
    content: '<p>Please return to the activities page.</p>'
  };
  
  activityTitle.value = data.title;
  activityImage.value = data.image;
  activitySummary.value = data.summary;
  activityContent.value = data.content;
};

onMounted(loadActivity);
watch(() => route.params.id, loadActivity);

</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
</style>
