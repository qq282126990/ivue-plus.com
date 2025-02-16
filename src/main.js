/* eslint-disable */
import {
  createApp,
} from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import Hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import javascript from 'highlight.js/lib/languages/javascript';

// import IvueMaterial from 'ivue-material-plus';
import IvueMaterialPlus from '../dist/ivue-material-plus.min';

// import 'ivue-material-plus/dist/styles/index.css';
// import 'ivue-material-plus/dist/styles/elevation.css';
// import 'ivue-material-plus/dist/styles/layout.css';
// import 'ivue-material-plus/dist/styles/color.css';

import '../dist/styles/index.css';
import '../dist/styles/elevation.css';
import '../dist/styles/layout.css';
import '../dist/styles/color.css';

import DocMarkdown from './components/doc-markdown.vue';
import Example from './components/install/example.vue';
import PreCode from './components/pre-code.vue';

const app = createApp(App);
app.use(IvueMaterialPlus);

const globalProperties = app.config.globalProperties

router.beforeEach((to, from, next) => {
  globalProperties.$LoadingBar.start();
  next();
});

router.afterEach(route => {
  globalProperties.$LoadingBar.finish();
});


// 识别为javascript
// Hljs.registerLanguage('javascript', javascript);
Hljs.getLanguage('javascript', javascript);
Hljs.configure({
  ignoreUnescapedHTML: true
});

app.component('DocMarkdown', DocMarkdown);
app.component('Example', Example);
app.component('PreCode', PreCode);


// 判断移动设备
const ua = navigator.userAgent;
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
const isMobile = isIphone || isAndroid;

// 移动端
if (isMobile) {
  app.config.globalProperties.isMobile = true;
}
// 不是移动端
else {
  app.config.globalProperties.isMobile = false;
}

app.use(store).use(router).mount('#app');
