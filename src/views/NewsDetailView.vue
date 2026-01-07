<template>
  <div class="news-detail">
    <!-- Hero Image -->
    <div class="uk-cover-container uk-height-medium">
      <img :src="article.image" alt="News Image" uk-cover>
      <div class="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-text-center">
         <div class="uk-width-1-2@m">
             <span class="uk-label uk-label-danger uk-margin-small-bottom">{{ article.category }}</span>
             <h1 class="uk-heading-small uk-margin-remove-top">{{ article.title }}</h1>
             <p class="uk-text-large">{{ article.date }}</p>
         </div>
      </div>
    </div>

    <!-- Content -->
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        
        <router-link to="/news" class="uk-button uk-button-text uk-margin-medium-bottom"><i class="fas fa-arrow-left uk-margin-small-right"></i> Back to News</router-link>

        <article class="uk-article">
           <p class="uk-text-lead">{{ article.summary }}</p>

           <div v-html="article.content"></div>
           
           <!-- Simulated content blocks for filling -->
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
           <blockquote>
               <p>“We are committed to serving the people of Malawi with love and dedication, following the example of Christ.”</p>
               <footer>AWRIM Leadership</footer>
           </blockquote>

           <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

        </article>

        <hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">
        
        <!-- Share (Visual only) -->
        <div class="uk-text-center">
            <span class="uk-text-meta uk-margin-right">Share this story:</span>
            <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="uk-icon-button uk-margin-small-right"><i class="fab fa-twitter"></i></a>
            <a href="#" class="uk-icon-button"><i class="fab fa-whatsapp"></i></a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref({})

// simulated data store
const newsData = [
  {
    id: 1,
    title: "New Education Center Opened",
    date: "January 5, 2026",
    category: "Education",
    image: "https://picsum.photos/1200/600?random=50",
    summary: "AWRIM is proud to announce the opening of a new secondary school in Mzuzu, serving over 500 students.",
    content: "<p>The new center will focus on providing quality education to girls from underprivileged backgrounds. This initiative is part of our broader strategic goal to empower the youth of Malawi through knowledge and skills development.</p>"
  },
  {
    id: 2,
    title: "Annual General Meeting 2025",
    date: "December 12, 2025",
    category: "Events",
    image: "https://picsum.photos/1200/600?random=51",
    summary: "The Major Superiors met in Lilongwe to discuss strategic goals for the upcoming year.",
    content: "<p>Leaders from all 29 member congregations gathered to reflect on the past year's achievements and challenges. Key topics included sustainability of projects, inter-congregational collaboration, and the ongoing formation of sisters.</p>"
  },
  {
    id: 3,
    title: "Relief Aid for Flood Victims",
    date: "November 20, 2025",
    category: "Charity",
    image: "https://picsum.photos/1200/600?random=52",
    summary: "AWRIM sisters have mobilized resources to support families affected by recent floods in the Southern Region.",
    content: "<p>In response to the devastating floods, AWRIM has dispatched teams to distribute food, blankets, and gathered supplies. We call upon all people of goodwill to join us in supporting our brothers and sisters in need during this difficult time.</p>"
  }
]

onMounted(() => {
  const id = parseInt(route.params.id)
  article.value = newsData.find(item => item.id === id) || newsData[0] // fallback to first if not found
})
</script>

<style scoped>
/* Article Typography */
.uk-article p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
}
</style>
