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
                        Votaciones Colsam 2019
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn  flat class="white--text" href="index.html">Salir</v-btn>
                </v-toolbar>
                <v-content>
                <v-container offset-sm3>
                    <v-card dark class="card-sombra" width="100%" height="90%">
                        <v-card-title>
                            <div>
                                <span>Conteo de votos en tiempo real</span><br>
                                <span class="grey--text">"Información actualizandose cada segundo, recibiendo datos..."</span><br>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <apexchart type=bar width="1100" height=350 :options="chartOptions" :series="series" />
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
    Vue.component('apexchart',VueApexCharts);
    var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
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
                    chart: {
                        height: 350,
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
                            distributed: true
                        }
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    xaxis: {
                        categories: ['Janinna', 'Kevin', 'Dairo', 'Voto Blanco'],
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

            console.log(this.series);

        },
        computed: {
            actualizar: function () {
                return [20, 13, 23, 29]
            }
        }
    }
</script>

<style scoped>
    @import "../assets/style.css";
</style>