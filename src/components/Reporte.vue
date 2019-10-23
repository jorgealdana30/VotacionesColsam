<template>
    <v-app>
        <div id="app">
            <v-app>
                <v-toolbar app color="primary" class="toolbar">
                    <v-toolbar-title class="logoMargin">
                        <v-img src="https://firebasestorage.googleapis.com/v0/b/colsamapp.appspot.com/o/logo%2Flogo.png?alt=media&token=d985d93c-2f39-4758-ba21-07fb86d99401"
                               class="logo" height="66" width="54"></v-img>
                    </v-toolbar-title>
                    <v-toolbar-title class="white--text titulo">
                        Triduo de la creatividad Colsam 2019
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn  flat class="white--text" href="index.html">Salir</v-btn>
                </v-toolbar>
                <v-content>
                <v-container offset-sm3>
                    <v-card dark class="card-sombra2">
                        <v-card-title>
                            <div>
                                <span>Conteo de votos en tiempo real</span><br>
                                <span class="grey--text">"Información actualizandose cada segundo, recibiendo datos..."</span><br>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <apexchart type=bar class="apex" :options="chartOptions" :series="series" />
                        </v-card-actions>
                    </v-card>
                </v-container>
                </v-content>
            </v-app>
        </div>
    </v-app>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';
    import Vue from 'vue'
    import firebase from 'firebase'
    let config = {
        apiKey: "AIzaSyCH8lsk4BnNEn4FWvlpXJDA5sTQzwXLS_c",
        authDomain: "votacionescolsam.firebaseapp.com",
        databaseURL: "https://votacionescolsam.firebaseio.com",
        projectId: "votacionescolsam",
        storageBucket: "",
        messagingSenderId: "1035804809043"
    };
    let app =firebase.initializeApp(config);
    let db = firebase.firestore(app);
    Vue.component('apexchart',VueApexCharts);
    let colors = ['#008FFB', '#00E396', '#FEB019', '#fffb54', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#558b2f', '#ff7043'];

    export default {
        name: "Reporte",
        components: {
            apexchart: VueApexCharts,
        },
        data: () => {
            return {
                datos:[],
                series: [{
                    data: []
                }],
                chartOptions: {
                    animate: false,
                    chart: {
                        height: 350,
                        animate: false,
                        type: 'bar',
                        events: {
                            click: function (chart, w, e) {

                            }
                        },
                    },
                    colors: colors,
                    plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            distributed: true,
                            animate:true
                        }
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    xaxis: {
                        categories: ['Grupo #1', 'Grupo #2', 'Grupo #3', 'Grupo #4','Grupo #5', 'Grupo #6', 'Grupo #7', 'Grupo #8'
                            ,'Grupo #9', 'Grupo #10'],
                        labels: {
                            style: {
                                colors: colors,
                                fontSize: '18px'
                            }
                        }
                    }
                }
            }
        },
        mounted(){
            this.transfer();
        },
        methods: {
            transfer: function(){
                setInterval(this.actualizar, 10000);
            },
            actualizar: function () {
                this.series[0].data=[];
                for(let i = 1; i<=this.chartOptions.xaxis.categories.length; i++){
                    db.collection("grupos").doc(i.toString()).get().then(doc =>{
                        this.series[0].data.push(doc.data().nrovotos);
                    });
                }
            }
        }
    }
</script>

<style scoped>
    @import "../assets/style.css";
    .apex{
        width: 1080px;
    }

</style>