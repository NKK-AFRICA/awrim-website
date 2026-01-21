
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Import Font Awesome
import './style.css'
import './admin.css'

// loads the Icon plugin (Keep UIkit icons as fallback/internal use for navbar toggle)
UIkit.use(Icons)

const app = createApp(App)

app.use(router)

app.mount('#app')
