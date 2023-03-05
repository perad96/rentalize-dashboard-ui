import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import '@/assets/css/custom.css'
import 'apexcharts/dist/apexcharts.css'

// JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


createApp(App).use(router).mount('#app')
