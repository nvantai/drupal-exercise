import Resource from "vue-resource";
import ProductDetailComponent from '../components/product-detail-page.vue';
function initVue() {
    window.bus = new Vue();
    window.$ = jQuery;
    Vue.use(Vuetify);
    Vue.use(Resource);
    const components = {};
    Vue.component('ProductDetailComponent', ProductDetailComponent);

    new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        components
    });
}

initVue();