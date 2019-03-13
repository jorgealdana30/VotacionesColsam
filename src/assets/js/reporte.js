import Vue from 'vue'
import './plugins/vuetify'
import App from '../../components/Reporte'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#reporte');
