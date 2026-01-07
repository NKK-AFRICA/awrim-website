<template>
  <div class="gallery">
    <!-- Header -->
    <div class="page-header">
      <div class="uk-container">
        <h1>Gallery</h1>
        <p>Visual moments from our mission, community work, and celebrations.</p>
        <ul class="uk-breadcrumb">
           <li><router-link to="/">Home</router-link></li>
           <li><span>Gallery</span></li>
        </ul>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        
        <!-- Category Filters -->
        <div class="uk-flex uk-flex-center uk-margin-large-bottom">
            <ul class="uk-subnav uk-subnav-pill" uk-switcher="connect: #gallery-grid; animation: uk-animation-fade">
                <li class="uk-active"><a href="#">All</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Community</a></li>
            </ul>
        </div>

        <ul id="gallery-grid" class="uk-switcher">
            <!-- All -->
            <li>
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div v-for="n in 9" :key="n">
                        <a class="uk-inline-gradient uk-display-block" :href="`https://picsum.photos/800/600?random=${n + 60}`" :data-caption="`Gallery Image ${n}`">
                            <img :src="`https://picsum.photos/600/400?random=${n + 60}`" alt="" class="uk-border-rounded">
                        </a>
                    </div>
                </div>
            </li>
            <!-- Mission -->
            <li>
                <div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div v-for="n in 3" :key="n">
                        <a class="uk-inline" :href="`https://picsum.photos/800/600?random=${n + 70}`">
                            <img :src="`https://picsum.photos/600/400?random=${n + 70}`" alt="" class="uk-border-rounded">
                        </a>
                    </div>
                </div>
            </li>
             <!-- Events -->
            <li>
                <div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div v-for="n in 3" :key="n">
                        <a class="uk-inline" :href="`https://picsum.photos/800/600?random=${n + 80}`">
                            <img :src="`https://picsum.photos/600/400?random=${n + 80}`" alt="" class="uk-border-rounded">
                        </a>
                    </div>
                </div>
            </li>
             <!-- Community -->
            <li>
                <div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div v-for="n in 3" :key="n">
                        <a class="uk-inline" :href="`https://picsum.photos/800/600?random=${n + 90}`">
                            <img :src="`https://picsum.photos/600/400?random=${n + 90}`" alt="" class="uk-border-rounded">
                        </a>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
