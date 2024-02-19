import { createApp } from 'vue'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Add SVG library
import { library } from '@fortawesome/fontawesome-svg-core';
//FreeIcons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
 
import './style.css'
import app from './App.vue'

//Add free Icons Style
library.add(fas, fab, far);

createApp(app).mount('#app')
//app.components('font-awesome-icon', FontAwesomeIcon);


import "bootstrap/dist/css/bootstrap.min.css";
