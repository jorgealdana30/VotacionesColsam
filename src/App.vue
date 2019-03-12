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
                <v-btn  flat class="white--text">Conteo de Votos</v-btn>
            </v-toolbar>
            <v-content>
                <v-container fluid grid-list-md>
                    <v-layout justify-center justify-space-around>
                            <v-card width="350px">
                                <v-img class="white--text foto"
                                       src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F1.png?alt=media&token=deda4692-5e7f-43b0-adb4-25399a61f92e">
                                </v-img>
                                <v-card-title>
                                    <div>
                                        <span>Janinna Isabel Baza Arrieta</span><br>
                                        <span class="grey--text">"Para viajar lejos no hay mejor nave que un libro"</span><br>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn color="primary" @click="votoJanina" block large>VOTAR</v-btn>
                                </v-card-actions>
                            </v-card>
                        <v-card width="350px">
                            <v-img class="white--text foto"
                                   src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F3.png?alt=media&token=2bffe81b-2566-4c0b-a4c4-03e7288a65c7">
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span>Kevin Sebastian Padilla Sarmiento</span><br>
                                    <span class="grey--text">"Para viajar lejos no hay mejor nave que un libro"</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="primary" @click="votoKevin" block large >VOTAR</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card width="350px">
                            <v-img class="white--text foto"
                                   src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F2.png?alt=media&token=5e49df03-e517-44de-af62-b14deb181bf4">
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span>Dairo José Quintana Olivares</span><br>
                                    <span class="grey--text">"Para viajar lejos no hay mejor nave que un libro"</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="primary" @click="votoDairo" block large >VOTAR</v-btn>
                            </v-card-actions>
                        </v-card>
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
    let app =firebase.initializeApp(config);
    let db = firebase.firestore(app);
    export default {
        name: 'app',
        data: () => ({

        }),
        methods: {
            votoJanina: function () {
                let docRef = db.collection("personeros").doc('1001918552');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                });
            },
            votoDairo: function () {
                let docRef = db.collection("personeros").doc('1002027132');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                });
            },
            votoKevin: function () {
                let docRef = db.collection("personeros").doc('1002031194');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                });
            }
        }
    }
</script>

<style scoped>
    @import "assets/style.css";
</style>
