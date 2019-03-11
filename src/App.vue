<template>
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
            </v-toolbar>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout justify-start>
                        <v-flex>
                            <v-card width="250px">
                                <v-img  class="white--text foto" offset-sm1 justify-center  align-center
                                       src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F1.png?alt=media&token=3b558092-8993-4d04-b798-f74df7a4b51f">
                                </v-img>
                                <v-card-title>
                                    <div>
                                        <span class="grey--text">Janinna Isabel Baza Arrieta</span><br>
                                        <span>"Para viajar lejos no hay mejor nave que un libro"</span><br>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat color="orange">Share</v-btn>
                                    <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card width="400px">
                                <v-img class="white--text foto" height="200px"
                                       src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                            <v-flex xs12 align-end flexbox>
                                                <span class="headline">Opcion 01</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-img>
                                <v-card-title>
                                    <div>
                                        <span class="grey--text">Number 10</span><br>
                                        <span>Whitehaven Beach</span><br>
                                        <span>Whitsunday Island, Whitsunday Islands</span>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat color="orange">Share</v-btn>
                                    <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import firebase from 'firebase'

    let config = {
        apiKey: "AIzaSyCH8lsk4BnNEn4FWvlpXJDA5sTQzwXLS_c",
        authDomain: "votacionescolsam.firebaseapp.com",
        databaseURL: "https://votacionescolsam.firebaseio.com",
        projectId: "votacionescolsam",
        storageBucket: "",
        messagingSenderId: "1035804809043"
    };
    firebase.initializeApp(config);

    export default {
        name: 'app',
        data() {

        },
        methods: {}
    }
</script>

<style scoped>
    @import "assets/style.css";
</style>
