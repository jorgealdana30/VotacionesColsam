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
                <v-btn  flat class="white--text" @click="inicio = true">Conteo de Votos</v-btn>
            </v-toolbar>
            <v-content>

                <v-container fluid grid-list-md offset-sm3>
                    <v-layout justify-center justify-space-around>
                            <v-card class="card-sombra" width="270px">
                                <v-img class="white--text foto"
                                       src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F1.png?alt=media&token=901c29e1-7a64-426a-b5e1-b0ff21126492">
                                </v-img>
                                <v-card-title>
                                    <div>
                                        <span>Janinna Isabel Baza Arrieta</span><br>
                                        <span class="grey--text">"Para viajar lejos no hay mejor nave que un libro"</span><br>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn color="primary" :disabled="botonV" @click="votoJanina" block large>VOTAR</v-btn>
                                </v-card-actions>
                            </v-card>
                        <v-card class="card-sombra" width="270px">
                            <v-img class="white--text foto"
                                   src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F3.png?alt=media&token=2bffe81b-2566-4c0b-a4c4-03e7288a65c7">
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span>Kevin Sebastian Padilla Sarmiento</span><br>
                                    <span class="grey--text">"Con Kevin al poder, nada que temer, con etica lograremos la victoria."</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="primary" :disabled="botonV" @click="votoKevin" block large >VOTAR</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-sombra" width="270px">
                            <v-img class="white--text foto"
                                   src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F2.png?alt=media&token=5e49df03-e517-44de-af62-b14deb181bf4">
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span>Dairo José Quintana Olivares</span><br>
                                    <span class="grey--text">"No al conformismo, sí a la unión, no al voto en blaco, sí a 03"</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="primary" :disabled="botonV" @click="votoDairo" block large >VOTAR</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-sombra" width="270px">
                            <v-img class="white--text foto"
                                   src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F4.png?alt=media&token=80446a3a-aadb-44b1-bbf0-513705c6dd9d">
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span>Voto en Blanco</span><br>
                                    <span class="grey--text">"Si no deseas votar por ningun candidato, elige voto en blanco."</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="primary" :disabled="botonV" @click="votoBlanco" block large >VOTAR</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-dialog v-model="alertExito" persistent max-width="500px">
                            <v-card>
                                <v-card-title>
                                    <span class="headline text-lg-center text-sm-center">¡Gracias por tu voto!</span>
                                </v-card-title  >
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="inicio" persistent max-width="600px">
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Ingresar panel de Administración</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12>
                                                <v-text-field label="Correo*" v-model="email" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-text-field label="Contraseña*" v-model="pass" type="password" required></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                    <small>*Campos requeridos</small>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="inicio = false">Cerrar</v-btn>
                                    <v-btn color="blue darken-1" flat @click="login">Entrar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
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
            botonV: false,
            alertExito: false,
            inicio: false,
            email: '',
            pass: ''
        }),
        methods: {
            votoJanina: function () {
                let docRef = db.collection("personeros").doc('1001918552');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                    this.botonV = true;
                    this.alertExito = true;
                    setTimeout(this.reinicioVoto, 5000);
                });
            },
            votoDairo: function () {
                let docRef = db.collection("personeros").doc('1002027132');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                    this.botonV = true;
                    this.alertExito = true;
                    setTimeout(this.reinicioVoto, 5000);
                });
            },
            votoKevin: function () {
                let docRef = db.collection("personeros").doc('1002031194');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                    this.botonV = true;
                    this.alertExito = true;
                    setTimeout(this.reinicioVoto, 5000);
                });
            },
            votoBlanco: function () {
                let docRef = db.collection("personeros").doc('PskaWVZqqdhdUfMRbgvf');
                docRef.get().then(doc => {
                    docRef.update({nrovotos: doc.data().nrovotos + 1});
                    this.botonV = true;
                    this.alertExito = true;
                    setTimeout(this.reinicioVoto, 5000);
                });
            },
            reinicioVoto: function () {
                this.botonV = false;
                this.alertExito = false;
            },
            login: function () {
                if (this.user.length === 0) {
                    this.errorUser = true;
                    this.errorPass = false;
                } else if (this.pass.length === 0) {
                    this.errorPass = true;
                    this.errorUser = false;
                } else {
                    let f = firebase.auth().signInWithEmailAndPassword(this.user, this.pass).then(
                        function () {
                            return true;
                        },
                        function () {
                            return false;
                        }
                    );
                    f.then(res => {
                        if (res) {
                            this.usuario = firebase.auth().currentUser;
                            localStorage.setItem('usuario', JSON.stringify(this.usuario));
                            this.exito = true;
                            this.errorLogin = false;
                            this.errorUser = false;
                            this.errorPass = false;
                            this.user = '';
                            this.pass = '';
                            setInterval(this.redireccionar, 2000);
                            setTimeout("location.href = '/reporte.html'", 4000);
                        }
                    });
                }
            },
            redireccionar: function () {
                this.exito = false;
                this.errorPass = false;
                this.errorUser = false;
                this.errorLogin = false;
                this.redireccion = true;
            },
        }
    }
</script>

<style scoped>
    @import "assets/style.css";
</style>
