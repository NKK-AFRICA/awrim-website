<template>
  <div class="activities">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1>Our Activities</h1>
        <p>Serving communities across Malawi through various initiatives to promote justice, peace, and holistic development.</p>
        <ul class="uk-breadcrumb">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Activities</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
          
          <!-- Activity 1 -->
          <div>
            <router-link to="/activities/justice" class="uk-link-reset">
              <div class="uk-card uk-card-default uk-card-hover">
                <div class="uk-card-media-top">
                  <img src="https://picsum.photos/600/400?random=10" alt="Justice & Peace">
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">Justice & Peace</h3>
                  <p>Advocating for social justice and peace initiatives across the dioceses.</p>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Activity 2 -->
          <div>
            <router-link to="/activities/human-trafficking" class="uk-link-reset">
              <div class="uk-card uk-card-default uk-card-hover">
                <div class="uk-card-media-top">
                  <img src="https://picsum.photos/600/400?random=11" alt="Human Trafficking">
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">Human Trafficking Campaign</h3>
                  <p>Raising awareness and fighting against human trafficking in our communities.</p>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Activity 3 -->
          <div>
            <router-link to="/activities/justice" class="uk-link-reset">
              <div class="uk-card uk-card-default uk-card-hover">
                <div class="uk-card-media-top">
                  <img src="https://picsum.photos/600/400?random=12" alt="Interfaith Dialogue">
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">Interfaith Dialogue</h3>
                  <p>Promoting understanding and cooperation between different faith groups.</p>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Activity 4 -->
          <div>
             <router-link to="/activities/justice" class="uk-link-reset">
               <div class="uk-card uk-card-default uk-card-hover">
                 <div class="uk-card-media-top">
                   <img src="https://picsum.photos/600/400?random=13" alt="Pastoral Work">
                 </div>
                 <div class="uk-card-body">
                   <h3 class="uk-card-title">Pastoral Work</h3>
                   <p>Engaging in spiritual guidance, counseling, and parish ministry.</p>
                 </div>
               </div>
             </router-link>
           </div>

           <!-- Activity 5 -->
           <div>
             <router-link to="/activities/education" class="uk-link-reset">
               <div class="uk-card uk-card-default uk-card-hover">
                 <div class="uk-card-media-top">
                   <img src="https://picsum.photos/600/400?random=14" alt="Education">
                 </div>
                 <div class="uk-card-body">
                   <h3 class="uk-card-title">Education</h3>
                   <p>Running schools and providing educational support to children and youth.</p>
                 </div>
               </div>
             </router-link>
           </div>

           <!-- Activity 6 -->
           <div>
             <router-link to="/activities/health" class="uk-link-reset">
               <div class="uk-card uk-card-default uk-card-hover">
                 <div class="uk-card-media-top">
                   <img src="https://picsum.photos/600/400?random=15" alt="Health Services">
                 </div>
                 <div class="uk-card-body">
                   <h3 class="uk-card-title">Health Services</h3>
                   <p>Managing health institutions, HIV/AIDS services, and care for the elderly.</p>
                 </div>
               </div>
             </router-link>
           </div>

        </div>
      </div>
    </div>
  </div>
</template>