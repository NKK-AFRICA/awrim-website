<template>
  <div class="resources">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1 uk-scrollspy="cls: uk-animation-slide-top-small; delay: 200">Resources & Downloads</h1>
        <p uk-scrollspy="cls: uk-animation-fade; delay: 400">Access our repository of reports, policies, and forms.</p>
        <ul class="uk-breadcrumb" uk-scrollspy="cls: uk-animation-fade; delay: 600">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Resources</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        
        <!-- Featured Resource -->
        <div class="uk-margin-medium-bottom" uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200">
           <div class="featured-doc-card">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                 <div class="uk-width-auto">
                    <i class="fas fa-file-pdf icon-pdf file-icon-featured"></i>
                 </div>
                 <div class="uk-width-expand">
                    <h3 class="uk-margin-remove-bottom">AWRIM Strategic Plan 2025-2030</h3>
                    <p class="uk-text-meta uk-margin-small-top">A comprehensive roadmap for our association's growth over the next five years.</p>
                 </div>
                 <div class="uk-width-auto@s">
                    <button class="uk-button uk-button-primary"><i class="fas fa-download uk-margin-small-right"></i> Download PDF</button>
                 </div>
              </div>
           </div>
        </div>

        <div class="uk-grid-divider" uk-grid>
            <!-- Sidebar Filter (Optional, keeping simple for now) -->
            <!-- Main Grid -->
            <div class="uk-width-1-1">
                <div class="section-header">
                    <h3 class="uk-heading-line"><span>Document Library</span></h3>
                </div>

                <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .doc-card; delay: 100">
                    
                    <!-- Item 1 -->
                    <div>
                        <div class="doc-card">
                            <i class="fas fa-file-pdf file-icon-large icon-pdf"></i>
                            <span class="doc-title">Annual Report 2024</span>
                            <span class="doc-meta">PDF • 2.4 MB</span>
                            <div class="doc-action">
                                <button class="uk-button uk-button-default uk-width-1-1">Download</button>
                            </div>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div>
                        <div class="doc-card">
                            <i class="fas fa-file-word file-icon-large icon-word"></i>
                            <span class="doc-title">Membership Application Form</span>
                            <span class="doc-meta">DOCX • 500 KB</span>
                            <div class="doc-action">
                                <button class="uk-button uk-button-default uk-width-1-1">Download</button>
                            </div>
                        </div>
                    </div>

                    <!-- Item 3 -->
                    <div>
                        <div class="doc-card">
                            <i class="fas fa-file-pdf file-icon-large icon-pdf"></i>
                            <span class="doc-title">Child Protection Policy</span>
                            <span class="doc-meta">PDF • 1.2 MB</span>
                            <div class="doc-action">
                                <button class="uk-button uk-button-default uk-width-1-1">Download</button>
                            </div>
                        </div>
                    </div>

                     <!-- Item 4 -->
                    <div>
                        <div class="doc-card">
                            <i class="fas fa-file-excel file-icon-large icon-excel"></i>
                            <span class="doc-title">Financial Reporting Template</span>
                            <span class="doc-meta">XLSX • 85 KB</span>
                            <div class="doc-action">
                                <button class="uk-button uk-button-default uk-width-1-1">Download</button>
                            </div>
                        </div>
                    </div>

                     <!-- Item 5 -->
                    <div>
                        <div class="doc-card">
                            <i class="fas fa-file-pdf file-icon-large icon-pdf"></i>
                            <span class="doc-title">Constitutions & Canon Law Guide</span>
                            <span class="doc-meta">PDF • 3.8 MB</span>
                            <div class="doc-action">
                                <button class="uk-button uk-button-default uk-width-1-1">Download</button>
                            </div>
                        </div>
                    </div>

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
