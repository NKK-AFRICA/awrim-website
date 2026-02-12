<template>
  <div class="home">

    <!-- SECTION 1 — HERO SECTION -->
    <section class="home-hero uk-light">
      <div class="uk-container">
        <div class="uk-child-width-1-2@m uk-grid-large uk-flex-middle" uk-grid>
          <div class="uk-padding-remove-vertical">
             <h2 class="uk-heading-medium" uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200" style="font-size: 3.5rem;">
               Empowering Consecrated Women to Transform Communities in Malawi
             </h2>
             <p class="uk-text-lead uk-margin-medium-top" uk-scrollspy="cls: uk-animation-fade; delay: 400">
               For more than five decades, AWRIM has united women religious across Malawi to strengthen spiritual formation, advance education and social development, and uplift the most vulnerable through compassionate service.
             </p>
             <div class="uk-margin-large-top" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 600">
               <router-link to="/what-we-do" class="uk-button uk-button-primary uk-button-large uk-margin-small-right">Learn What We Do</router-link>
               <router-link to="/donate" class="uk-button uk-button-outline-white uk-button-large">Donate Today</router-link>
             </div>
          </div>
          <div class="uk-visible@m">
             <div class="uk-position-relative" uk-scrollspy="cls: uk-animation-slide-right-medium; delay: 400">
                <img src="@/assets/hero.png" alt="Sisters in Community" class="hero-image">
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — WHO WE ARE (INTRO BLOCK) -->
    <section class="uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid-large uk-flex-middle" uk-grid>
           <div class="uk-width-1-2@m">
              <img src="https://picsum.photos/800/600?random=2" alt="About AWRIM" class="content-image">
           </div>
           <div class="uk-width-1-2@m">
              <span class="section-label">Who We Are</span>
              <h2 class="uk-heading-small uk-margin-small-top">Uniting Consecrated Women Across Malawi</h2>
              <p class="uk-text-large">AWRIM is the Association of Women Religious Institutes of Malawi — a national body uniting 45 congregations of consecrated women who live and serve across all Catholic dioceses in Malawi.</p>
              <p>Founded in 1966, AWRIM strengthens spiritual formation, encourages collaboration between congregations, and coordinates programs that uplift communities spiritually, socially, and economically.</p>
              <p>AWRIM accompanies Sisters as they live their prophetic mission, deepen their vocation, and respond to the needs of God's people through education, health services, pastoral care, advocacy, and capacity building.</p>
              <router-link to="/about" class="uk-button uk-button-default uk-margin-top">Learn More About Us →</router-link>
           </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — OUR FOCUS AREAS -->
    <section class="uk-section uk-section-muted">
       <div class="uk-container">
          <div class="section-header uk-text-center">
             <span class="section-label">Our Core Pillars</span>
             <h2 class="section-title">What We Focus On</h2>
          </div>

          <div class="uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match uk-grid-large" uk-grid>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-praying-hands"></i></div>
                   <h3>Spiritual Formation</h3>
                   <p>Strengthening the spiritual lives of Sisters through retreats, recollections, ongoing formation, and joint pastoral activities that deepen discipleship and community life.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-hands-helping"></i></div>
                   <h3>Social Development</h3>
                   <p>Supporting education, early childhood development, health services, anti-trafficking initiatives, and outreach programs for vulnerable groups across Malawi.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-shield-alt"></i></div>
                   <h3>Governance & Capacity Building</h3>
                   <p>Enhancing leadership, administration, policy development, financial management, and organizational systems across congregations.</p>
                </div>
             </div>
             <div>
                <div class="focus-card">
                   <div class="focus-icon"><i class="fas fa-chart-line"></i></div>
                   <h3>Sustainability & Self-Reliance</h3>
                   <p>Promoting resource mobilization strategies, investments, and income-generating initiatives that support long-term mission effectiveness.</p>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- SECTION 4 — FEATURED PROGRAMS -->
    <section class="uk-section">
       <div class="uk-container">
          <div class="section-header uk-text-center">
             <span class="section-label">Our Impact</span>
             <h2 class="section-title">Featured Programs</h2>
          </div>

          <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid-large" uk-grid>
             <div>
                <div class="uk-card uk-card-default uk-card-hover program-card">
                  <div class="uk-card-body">
                     <h3 class="uk-card-title">AACSS</h3>
                     <p>A program dedicated to equipping Sisters with skills to address HIV/AIDS, chronic illnesses, trauma, counseling, and spiritual development to support individuals and families.</p>
                     <div class="uk-margin-small-top">
                        <router-link to="/activities" class="uk-text-small uk-text-primary">Read More →</router-link>
                     </div>
                  </div>
                </div>
             </div>
             <div>
                <div class="uk-card uk-card-default uk-card-hover program-card">
                  <div class="uk-card-body">
                     <h3 class="uk-card-title">SCORE-ECD</h3>
                     <p>Building the capacity of congregations to deliver holistic early childhood development services that support children's growth, safety, and education.</p>
                     <div class="uk-margin-small-top">
                        <router-link to="/activities" class="uk-text-small uk-text-primary">Read More →</router-link>
                     </div>
                  </div>
                </div>
             </div>
             <div>
                <div class="uk-card uk-card-default uk-card-hover program-card">
                  <div class="uk-card-body">
                     <h3 class="uk-card-title">ASEC</h3>
                     <p>Higher education, leadership training, and professional development opportunities that empower Sisters to lead effectively within their ministries and congregations.</p>
                     <div class="uk-margin-small-top">
                        <router-link to="/activities" class="uk-text-small uk-text-primary">Read More →</router-link>
                     </div>
                  </div>
                </div>
             </div>
             <div>
                <div class="uk-card uk-card-default uk-card-hover program-card">
                  <div class="uk-card-body">
                     <h3 class="uk-card-title">Catholic Care for Children Malawi (CCCM)</h3>
                     <p>A charism-driven movement promoting family and community-based care for children while reducing dependence on institutional care systems.</p>
                     <div class="uk-margin-small-top">
                        <router-link to="/activities" class="uk-text-small uk-text-primary">Read More →</router-link>
                     </div>
                  </div>
                </div>
             </div>
             <div>
                <div class="uk-card uk-card-default uk-card-hover program-card">
                  <div class="uk-card-body">
                     <h3 class="uk-card-title">Bakhita Partnership for Education (BPE)</h3>
                     <p>A continental collaboration advancing quality education, formation, and policy through the combined efforts of Catholic Sisters and Jesuit institutions across Africa.</p>
                     <div class="uk-margin-small-top">
                        <router-link to="/activities" class="uk-text-small uk-text-primary">Read More →</router-link>
                     </div>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- SECTION 5 — OUR NETWORKS -->
    <section class="uk-section uk-section-muted">
       <div class="uk-container">
          <div class="section-header uk-text-center">
             <span class="section-label">Collaboration</span>
             <h2 class="section-title">Our Networks</h2>
             <p class="uk-text-large uk-margin-small">Four network initiatives bringing together congregations to address critical issues in Malawi.</p>
          </div>

          <div class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match uk-grid-large" uk-grid>
             <div>
                <div class="network-card uk-card uk-card-default uk-card-body uk-text-center">
                   <div class="uk-margin-bottom"><i class="fas fa-shield-alt fa-3x uk-text-primary"></i></div>
                   <h4>Anti-Human Trafficking Network</h4>
                   <p class="uk-text-small uk-margin-small-top">Preventing trafficking, caring for survivors, and strengthening national coordination across dioceses.</p>
                </div>
             </div>
             <div>
                <div class="network-card uk-card uk-card-default uk-card-body uk-text-center">
                   <div class="uk-margin-bottom"><i class="fas fa-heart fa-3x uk-text-primary"></i></div>
                   <h4>Elderly Care Network</h4>
                   <p class="uk-text-small uk-margin-small-top">Training Sisters to care for elderly members while promoting dignity, healthy aging, and holistic support.</p>
                </div>
             </div>
             <div>
                <div class="network-card uk-card uk-card-default uk-card-body uk-text-center">
                   <div class="uk-margin-bottom"><i class="fas fa-heartbeat fa-3x uk-text-primary"></i></div>
                   <h4>Health Care Network</h4>
                   <p class="uk-text-small uk-margin-small-top">Empowering Sisters with updated knowledge on communicable and non-communicable diseases to improve health outcomes in their ministries.</p>
                </div>
             </div>
             <div>
                <div class="network-card uk-card uk-card-default uk-card-body uk-text-center">
                   <div class="uk-margin-bottom"><i class="fas fa-users fa-3x uk-text-primary"></i></div>
                   <h4>Sister-Led Youth Initiatives Network</h4>
                   <p class="uk-text-small uk-margin-small-top">Enhancing vocational and skills development programs for underserved young people across Malawi.</p>
                </div>
             </div>
          </div>

          <div class="uk-text-center uk-margin-large-top">
             <router-link to="/networks" class="uk-button uk-button-default">Learn More About Our Networks</router-link>
          </div>
       </div>
    </section>

    <!-- SECTION 6 — IMPACT & STATISTICS (HIGHLIGHTS) -->
    <section class="uk-section">
      <div class="uk-container">
         <div class="section-header uk-text-center">
            <span class="section-label">Our Reach</span>
            <h2 class="section-title">Impact & Statistics</h2>
         </div>
         <div class="stats-bar">
           <div class="uk-grid-divider uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center uk-grid-large" uk-grid>
              <div class="stat-item">
                 <h3>45</h3>
                 <p>Congregations United Across Malawi</p>
              </div>
              <div class="stat-item">
                 <h3>8</h3>
                 <p>Catholic Dioceses Served</p>
              </div>
              <div class="stat-item">
                 <h3>Dozens</h3>
                 <p>Early Childhood, Education & Health Programs</p>
              </div>
              <div class="stat-item">
                 <h3>1000+</h3>
                 <p>Sisters Empowered Through Spiritual & Academic Formation</p>
              </div>
           </div>
         </div>
      </div>
    </section>

    <!-- SECTION 7 — PARTNERS SECTION -->
    <section class="uk-section uk-section-muted">
        <div class="uk-container">
            <div class="section-header uk-text-center">
               <span class="section-label">Collaboration</span>
               <h2 class="section-title">Our Partners</h2>
               <p class="uk-text-large uk-margin-small">AWRIM works in collaboration with leading organizations</p>
            </div>

            <!-- Partner Categories -->
            <div class="partners-showcase uk-margin-large-top">
               <div class="uk-grid uk-margin-top uk-child-width-1-3@m">


                  <!-- International Partners -->
                  <div>
                  <div class="partner-category international-theme">
                     <div class="partner-category-icon">
                        <i class="fas fa-globe-africa text-2xl text-white"></i>
                     </div>
                     <h4 class="partner-category-title">International Aid</h4>
                     <div class="partner-category-list">
                        <div class="partner-name">Catholic Relief Services</div>
                        <div class="partner-name">International NGOs</div>
                     </div>
                  </div>
               </div>

                  <!-- Religious Organizations -->
                  <div>
                  <div class="partner-category religious-theme">
                     <div class="partner-category-icon">
                        <i class="fas fa-church text-2xl text-white"></i>
                     </div>
                     <h4 class="partner-category-title">Religious Organizations</h4>
                     <div class="partner-category-list">
                        <div class="partner-name">MCCB</div>
                        <div class="partner-name">ACWECA</div>
                        <div class="partner-name">UISG</div>
                        <div class="partner-name">CRS</div>
                        <div class="partner-name">GHR - CCC</div>
                        <div class="partner-name">HILTON FOUNDATION - YOUTH LEAD</div>
                        <div class="partner-name">Missio</div>
                        <div class="partner-name">Sisters of st Peter claver</div>
                        <div class="partner-name">Catholic university</div>
                     </div>
                  </div>                     
                  </div>

                  <!-- Government Ministries -->
                  <div>
                  <div class="partner-category government-theme">
                     <div class="partner-category-icon">
                        <i class="fas fa-landmark text-2xl text-white"></i>
                     </div>
                     <h4 class="partner-category-title">Government Ministries</h4>
                     <div class="partner-category-list">
                        <div class="partner-name">Ministry of Gender & Social Welfare</div>
                        <div class="partner-name">Ministry of Health</div>
                        <div class="partner-name">Ministry of Education</div>
                        <div class="partner-name">Tevet</div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>


            <!-- Call to Action -->
            <div class="uk-text-center uk-margin-large-top">
               <router-link to="/partners" class="uk-button uk-button-primary uk-button-large">
                  <i class="fas fa-handshake mr-2"></i>
                  Learn More About Our Partnerships
               </router-link>
            </div>
        </div>
    </section>

    <!-- SECTION 8 — CALL TO ACTION (FINAL CTA) -->
    <section class="cta-section uk-text-center">
       <div class="uk-container uk-container-small">
          <h2 class="uk-margin-remove-top">Support the Mission of Consecrated Women in Malawi</h2>
          <p class="uk-text-large">Your generosity enables Sisters to provide compassionate service, spiritual formation, education, health support, and hope to communities across Malawi.</p>
          <div class="uk-flex uk-flex-center uk-grid-small uk-margin-large-top" uk-grid>
             <div><router-link to="/donate" class="uk-button uk-button-white uk-button-large">Donate Now</router-link></div>
             <div><router-link to="/join-us" class="uk-button uk-button-outline-white uk-button-large">Partner With Us</router-link></div>
          </div>
       </div>
    </section>

  </div>
</template>

<style scoped>
.text-accent {
    color: #d4736c;
}

.hero-image {
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    max-width: 100%;
    height: auto;
}

.content-image {
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
    width: 100%;
    height: auto;
}

/* Section Headers */
.section-header {
    margin-bottom: 3rem;
}

.section-label {
    color: var(--color-primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin: 0;
    line-height: 1.2;
}

/* Focus Cards */
.focus-card {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    height: 100%;
    transition: all 0.3s ease;
}

.focus-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.focus-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--color-primary) 0%, #d4736c 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: #fff;
    font-size: 1.5rem;
}

.focus-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
}

.focus-card p {
    color: #666;
    line-height: 1.6;
}

/* Program Cards */
.program-card {
    height: 100%;
    transition: all 0.3s ease;
}

.program-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(190, 43, 55, 0.15);
}

.program-card .uk-card-body {
    padding: 2rem;
}

.program-card .uk-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.program-card p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

/* Network Cards */
.network-card {
    height: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    padding: 2rem 1.5rem;
}

.network-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.network-card h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.75rem;
}

.network-card p {
    color: #666;
    line-height: 1.5;
    font-size: 0.9rem;
}

/* Statistics */
.stats-bar {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 16px;
    padding: 3rem 2rem;
    margin: 2rem 0;
}

.stat-item h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    line-height: 1;
}

.stat-item p {
    color: #666;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.85rem;
    margin: 0;
}

/* Partners Showcase */
.partners-showcase {
    margin-top: 3rem;
}

.partner-category {
    background: #fff;
    border-radius: 16px;
    padding: 2rem 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: box-shadow 0.3s ease;
    border: 1px solid #f0f0f0;
    /* height: 100%; */
    margin: 0 1rem 2rem 1rem;
}


.partner-category-icon {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    position: relative;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.partner-category-icon::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 3px;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    -webkit-mask-composite: xor;
}

/* Religious Theme */
.religious-theme .partner-category-icon {
    background: linear-gradient(135deg, var(--color-primary) 0%, #a11f2a 100%);
}

.religious-theme .partner-category-icon::before {
    background: linear-gradient(135deg, rgba(190, 43, 55, 0.3), rgba(161, 31, 42, 0.2));
}

/* International Theme */
.international-theme .partner-category-icon {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.international-theme .partner-category-icon::before {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(29, 78, 216, 0.2));
}

/* Government Theme */
.government-theme .partner-category-icon {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
}

.government-theme .partner-category-icon::before {
    background: linear-gradient(135deg, rgba(5, 150, 105, 0.3), rgba(4, 120, 87, 0.2));
}

.partner-category:hover .partner-category-icon {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.partner-category-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1.5rem;
}

.partner-category-list .partner-name:not(:first-child) {
    margin-top: 0.75rem;
}

.partner-name {
    font-size: 0.9rem;
    color: #555;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0.5rem;
}

.partner-name:last-child {
    margin-bottom: 0;
}

.additional-partners-note {
    background: #fff;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid #f0f0f0;
}

/* CTA Section */
.cta-section {
    background: linear-gradient(135deg, var(--color-primary) 0%, #d4736c 100%);
    padding: 4rem 0;
    color: #fff;
}

.cta-section h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.cta-section p {
    margin-bottom: 2rem;
    opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .stats-bar {
        padding: 2rem 1rem;
    }

    .stat-item h3 {
        font-size: 2.5rem;
    }

    .focus-card,
    .network-card {
        padding: 1.5rem;
    }

    .program-card .uk-card-body {
        padding: 1.5rem;
    }
}
</style>
