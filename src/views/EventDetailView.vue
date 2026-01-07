<template>
  <div class="event-detail">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1>{{ event.title }}</h1>
        <ul class="uk-breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/events">Events</router-link></li>
          <li><span>{{ event.title }}</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" uk-grid>
          
          <!-- Main Info -->
          <div class="uk-width-2-3@m">
            <div class="uk-card uk-card-default uk-overflow-hidden uk-border-rounded shadow-sm">
                <img :src="event.image" :alt="event.title" class="uk-width-1-1">
                <div class="uk-card-body">
                    <div class="uk-flex uk-flex-middle uk-margin-bottom">
                        <div class="date-badge-sq uk-margin-right">
                            <span class="day">{{ event.day }}</span>
                            <span class="month">{{ event.month }}</span>
                        </div>
                        <div>
                            <h2 class="uk-card-title uk-margin-remove">{{ event.title }}</h2>
                            <p class="uk-text-meta uk-margin-remove"><i class="fas fa-map-marker-alt uk-text-primary"></i> {{ event.location }}</p>
                        </div>
                    </div>

                    <article class="uk-article">
                        <p class="uk-text-lead">{{ event.summary }}</p>
                        <div v-html="event.description"></div>
                    </article>

                    <div class="uk-margin-large-top">
                        <h4 class="uk-heading-line"><span>Event Schedule</span></h4>
                        <ul class="uk-list uk-list-divider">
                            <li v-for="(item, index) in event.schedule" :key="index" class="uk-flex uk-flex-between">
                                <span>{{ item.time }}</span>
                                <span class="uk-text-bold">{{ item.activity }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="uk-width-1-3@m">
            <div class="uk-card uk-card-primary uk-card-body uk-light uk-border-rounded uk-margin-bottom shadow-sm">
                <h3>Interested?</h3>
                <p>Register to secure your spot or get the full agenda sent to your email.</p>
                <form class="uk-form-stacked">
                    <div class="uk-margin-small">
                        <input class="uk-input" type="text" placeholder="Full Name">
                    </div>
                    <div class="uk-margin-small">
                        <input class="uk-input" type="email" placeholder="Email Address">
                    </div>
                    <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-top" type="button">Register Now</button>
                </form>
            </div>

            <div class="uk-card uk-card-default uk-card-body uk-border-rounded shadow-sm">
                <h4 class="uk-h5 uk-text-bold">Location Details</h4>
                <div class="uk-background-muted uk-padding-small uk-border-rounded uk-margin-small-bottom">
                    <p class="uk-margin-remove"><i class="fas fa-building uk-margin-small-right"></i> {{ event.venue }}</p>
                    <p class="uk-margin-remove"><i class="fas fa-compass uk-margin-small-right"></i> {{ event.address }}</p>
                </div>
                <!-- Mini Map Placeholder -->
                <div class="uk-height-small uk-background-muted uk-flex uk-flex-center uk-flex-middle">
                    <i class="fas fa-map-marked-alt fa-3x uk-text-muted"></i>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const event = ref({
    title: 'Loading...',
    day: '--',
    month: '--',
    location: '--',
    venue: '--',
    address: '--',
    summary: '...',
    description: '<p></p>',
    image: 'https://picsum.photos/1200/600?random=100',
    schedule: []
});

// Mock Event Data
const mockEvents = {
    'agm-2026': {
        title: 'Major Superiors AGM',
        day: '15',
        month: 'JAN',
        location: 'Lilongwe, Malawi',
        venue: 'C.I.C (Capital Intermediate Center)',
        address: 'P.O. Box 1511, Area 47',
        summary: 'Annual General Meeting for all Major Superiors to discuss strategic planning and reports.',
        description: `
            <p>The Annual General Meeting provides a platform for Major Superiors from all member congregations to gather, reflect, and strategize for the coming year.</p>
            <h3>Key Objectives</h3>
            <ul>
                <li>Review 2025 Financial Reports.</li>
                <li>Approve the 2026 Operational Budget.</li>
                <li>Discuss the progress of the National Formation Program.</li>
            </ul>
        `,
        image: 'https://picsum.photos/1200/600?random=101',
        schedule: [
            { time: '08:30 AM', activity: 'Arrival & Registration' },
            { time: '09:00 AM', activity: 'Opening Mass' },
            { time: '10:30 AM', activity: 'Session 1: Executive Reports' },
            { time: '01:00 PM', activity: 'Lunch Break' },
            { time: '02:00 PM', activity: 'Session 2: Future Outlook' },
            { time: '04:00 PM', activity: 'Closing Remarks' }
        ]
    },
    'youth-workshop': {
        title: 'Youth Leadership Workshop',
        day: '10',
        month: 'FEB',
        location: 'Blantyre, Malawi',
        venue: 'Parish Hall',
        address: 'Church Rd, Blantyre',
        summary: 'A comprehensive training session for youth leaders focusing on leadership skills.',
        description: '<p>This workshop aims to empower the next generation of leaders in our communities...</p>',
        image: 'https://picsum.photos/1200/600?random=102',
        schedule: [
             { time: '08:00 AM', activity: 'Welcome Registration' },
             { time: '09:00 AM', activity: 'Servant Leadership Training' },
             { time: '12:00 PM', activity: 'Lunch' }
        ]
    }
};

onMounted(() => {
    // For demo purposes, we fetch 'agm-2026' or defaults
    const id = route.params.id || 'agm-2026';
    event.value = mockEvents[id] || mockEvents['agm-2026'];
});
</script>

<style scoped>
.date-badge-sq {
    background: var(--color-primary);
    color: #fff;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    line-height: 1;
}
.date-badge-sq .day { font-size: 1.5rem; font-weight: 800; }
.date-badge-sq .month { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; }
.shadow-sm { box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
</style>
