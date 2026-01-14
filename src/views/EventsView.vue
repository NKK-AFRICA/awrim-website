<template>
  <div class="events">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Events Calendar</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Join us for upcoming trainings, meetings, and celebrations.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Events</span></li>
        </ul>
      </div>
    </div>

    <!-- Events List -->
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-small">
        
        <div class="section-header">
           <h3 class="uk-heading-line"><span>Upcoming Agenda</span></h3>
        </div>

        <!-- Event 1 -->
        <div class="event-card" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 100">
           <div class="date-badge">
              <h2>15</h2>
              <span>JAN</span>
              <small>2026</small>
           </div>
           <div class="event-details">
              <h3 class="event-title">Major Superiors AGM</h3>
              <div class="event-meta">
                 <span><i class="fas fa-clock"></i> 9:00 AM - 4:00 PM</span>
                 <span><i class="fas fa-map-marker-alt"></i> Lilongwe C.I.C</span>
              </div>
              <p>Annual General Meeting for all Major Superiors to discuss strategic planning and reports.</p>
              <div class="event-action">
                 <router-link to="/events/agm-2026" class="uk-button uk-button-primary uk-button-small">Event Details</router-link>
              </div>
           </div>
        </div>

        <!-- Event 2 -->
        <div class="event-card" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200">
           <div class="date-badge alternate">
              <h2>10</h2>
              <span>FEB</span>
              <small>2026</small>
           </div>
           <div class="event-details">
              <h3 class="event-title">Youth Leadership Workshop</h3>
              <div class="event-meta">
                 <span><i class="fas fa-clock"></i> 8:00 AM - 2:00 PM</span>
                 <span><i class="fas fa-map-marker-alt"></i> Blantyre Parish Hall</span>
              </div>
              <p>A comprehensive training session for youth leaders from various parishes focusing on leadership skills.</p>
              <div class="event-action">
                 <router-link to="/events/youth-workshop" class="uk-button uk-button-default uk-button-small">Register Now</router-link>
              </div>
           </div>
        </div>

        <!-- Event 3 -->
        <div class="event-card" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 300">
           <div class="date-badge secondary">
              <h2>02</h2>
              <span>MAR</span>
              <small>2026</small>
           </div>
           <div class="event-details">
              <h3 class="event-title">World Day of Prayer</h3>
              <div class="event-meta">
                 <span><i class="fas fa-clock"></i> 2:00 PM - 5:00 PM</span>
                 <span><i class="fas fa-map-marker-alt"></i> National Celebration (Zomba)</span>
              </div>
              <p>Inter-congregational prayer and reflection day. Open to all members and the public.</p>
              <div class="event-action">
                 <button class="uk-button uk-button-default uk-button-small">Learn More</button>
              </div>
           </div>
        </div>

         <!-- Event 4 -->
        <div class="event-card" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 400">
           <div class="date-badge">
              <h2>25</h2>
              <span>APR</span>
              <small>2026</small>
           </div>
           <div class="event-details">
              <h3 class="event-title">Strategic Planning Retreat</h3>
              <div class="event-meta">
                 <span><i class="fas fa-clock"></i> 3 Days</span>
                 <span><i class="fas fa-map-marker-alt"></i> Lake Malawi Retreat Center</span>
              </div>
              <p>A focused retreat for the executive committee to draft the 2026-2030 strategic plan.</p>
              <div class="event-action">
                 <button class="uk-button uk-button-primary uk-button-small">Members Only</button>
              </div>
           </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are handled globaly in style.css */
</style>
