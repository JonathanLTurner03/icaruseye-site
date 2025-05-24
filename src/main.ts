import '@/assets/scss/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { createApp } from 'vue'
import '@/assets/scss/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue'
import router from './router';

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/github-dark.css';   // or any style

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App) .use(VuePlyr, {
    plyr: {}
}).use(router).mount('#app');