<template>
  <div class="activities">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Our Activities</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Serving communities across Malawi through various initiatives to promote justice, peace, and holistic development.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Activities</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div class="section-header uk-margin-medium-bottom">
          <span class="section-label">Our Programmes</span>
          <h2 class="section-title">Current Programmes</h2>
        </div>
        
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
          
          <!-- Programme 1 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=10" alt="On-going Formation">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-pray"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">On-going Formation</h3>
                <p class="enhanced-card-description">AWRIM focuses on spiritual and religious formation to deepen and strengthen the spiritual life and transform sisters into missionary disciples of Jesus Christ and stewards of God's creation. Workshops and sessions are organized for different groups of sisters including formandees, especially second year novices.</p>
              </div>
            </div>
          </div>

          <!-- Programme 2 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=11" alt="AACSS">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-hands-helping"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">AACSS</h3>
                <p class="enhanced-card-description">All-Africa Conference Sister to Sister (AACSS) program aims at building capacity of women religious to enable them effectively address HIV/AIDS pandemic, other emerging chronic conditions, disasters, and their impact on families, community life and society.</p>
              </div>
            </div>
          </div>

          <!-- Programme 3 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=12" alt="SCORE ECD">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-child"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">SCORE ECD</h3>
                <p class="enhanced-card-description">Strengthen Capacity of women Religious in Early Child Development (SCORE ECD) builds the capacity of Catholic Sisters to better provide early childhood development (ECD) services to children. Currently in Phase III, implemented by seven congregations.</p>
              </div>
            </div>
          </div>

          <!-- Programme 4 -->
          <div>
             <div class="enhanced-card">
               <div class="enhanced-card-image-wrapper">
                 <img src="https://picsum.photos/600/400?random=13" alt="ASEC">
                 <div class="enhanced-card-image-overlay"></div>
                 <div class="enhanced-card-icon">
                   <i class="fas fa-graduation-cap"></i>
                 </div>
               </div>
               <div class="enhanced-card-body">
                 <h3 class="enhanced-card-title">ASEC</h3>
                 <p class="enhanced-card-description">African Sisters Education Collaborative (ASEC) facilitates access to education for women religious in Africa, including Sister Leadership Development Initiative (SLDI), Higher Education for Sisters in Africa (HESA), and scholarship programs.</p>
               </div>
             </div>
           </div>

           <!-- Programme 5 -->
           <div>
             <div class="enhanced-card">
               <div class="enhanced-card-image-wrapper">
                 <img src="https://picsum.photos/600/400?random=14" alt="CCCM">
                 <div class="enhanced-card-image-overlay"></div>
                 <div class="enhanced-card-icon">
                   <i class="fas fa-baby"></i>
                 </div>
               </div>
               <div class="enhanced-card-body">
                 <h3 class="enhanced-card-title">Catholic Care for Children Malawi (CCCM)</h3>
                 <p class="enhanced-card-description">A sister-led, charism-driven movement that ensures children grow up in safe, loving families, reducing recourse to institutional care and encouraging family- and community-based care for children.</p>
               </div>
             </div>
           </div>

           <!-- Programme 6 -->
           <div>
             <div class="enhanced-card">
               <div class="enhanced-card-image-wrapper">
                 <img src="https://picsum.photos/600/400?random=15" alt="BPE">
                 <div class="enhanced-card-image-overlay"></div>
                 <div class="enhanced-card-icon">
                   <i class="fas fa-book-reader"></i>
                 </div>
               </div>
               <div class="enhanced-card-body">
                 <h3 class="enhanced-card-title">Bakhita Partnership for Education (BPE)</h3>
                 <p class="enhanced-card-description">A partnership of the Jesuit Religious Order in Africa and associations of Catholic sisterhoods in Kenya, Uganda, Zambia, Tanzania and Malawi, leveraging experience in education to offer and advocate for holistic education and formation.</p>
               </div>
             </div>
           </div>

        </div>

        <hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">

        <div class="section-header uk-margin-medium-bottom">
          <span class="section-label">Our Networks</span>
          <h2 class="section-title">Network Initiatives</h2>
        </div>

        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
          
          <!-- Network 1 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=20" alt="Anti-Human Trafficking">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Anti-Human Trafficking</h3>
                <p class="enhanced-card-description">Focused on establishing an institutional framework for effective regulation, coordination, and support of trafficking victims. Implemented by seven congregations across multiple dioceses to combat human trafficking in Malawi.</p>
              </div>
            </div>
          </div>

          <!-- Network 2 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=21" alt="Elderly Care">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-heart"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Elderly Care</h3>
                <p class="enhanced-card-description">Formed to train sisters on how to take care of elderly sisters and sensitize sisters on how to grow old gracefully. Comprises 18 congregations working across multiple dioceses.</p>
              </div>
            </div>
          </div>

          <!-- Network 3 -->
          <div>
            <div class="enhanced-card">
              <div class="enhanced-card-image-wrapper">
                <img src="https://picsum.photos/600/400?random=22" alt="Health Care">
                <div class="enhanced-card-image-overlay"></div>
                <div class="enhanced-card-icon">
                  <i class="fas fa-stethoscope"></i>
                </div>
              </div>
              <div class="enhanced-card-body">
                <h3 class="enhanced-card-title">Health Care</h3>
                <p class="enhanced-card-description">Formed to sensitize sisters on communicable and non-communicable diseases. Comprises eight congregations conducting sessions across multiple dioceses to improve health awareness and care.</p>
              </div>
            </div>
          </div>

          <!-- Network 4 -->
          <div>
             <div class="enhanced-card">
               <div class="enhanced-card-image-wrapper">
                 <img src="https://picsum.photos/600/400?random=23" alt="Sister Lead Youth Initiatives">
                 <div class="enhanced-card-image-overlay"></div>
                 <div class="enhanced-card-icon">
                   <i class="fas fa-users"></i>
                 </div>
               </div>
               <div class="enhanced-card-body">
                 <h3 class="enhanced-card-title">Sister Lead Youth Initiatives</h3>
                 <p class="enhanced-card-description">Enhanced vocational skills development for underprivileged youth through strengthened Vocational Skills Training initiatives. Implemented by eight congregations running vocational skills institutions across multiple dioceses.</p>
               </div>
             </div>
           </div>

        </div>
      </div>
    </div>
  </div>
</template>