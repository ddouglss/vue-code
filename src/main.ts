import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue3 from 'bootstrap-vue-3';
import '@fortawesome/fontawesome-free/css/all.css';


import DefaultLayouts from "./components/layouts/DefaultLayouts.vue";
import NavbarLayout from './components/layouts/NavbarLayout.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App); // Criação da instância do app

// Registro dos layouts como componentes globais
app.component("navbart-layout", NavbarLayout);
app.component("default-layout", DefaultLayouts);

// Uso das bibliotecas e plugins
app.use(store);
app.use(router);
app.use(BootstrapVue3);

// Montagem do app
app.mount('#app');
