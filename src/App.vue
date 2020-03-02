<template>
    <div id="app">
        <v-app>
            <v-toolbar app class="toolbar">
                <v-toolbar-title class="logoMargin">
                    <v-img src="https://firebasestorage.googleapis.com/v0/b/colsamapp.appspot.com/o/logo%2Flogo.png?alt=media&token=d985d93c-2f39-4758-ba21-07fb86d99401"
                           class="logo" height="66" width="54"></v-img>
                </v-toolbar-title>
                <v-toolbar-title class="white--text titulo">
                    Votaciones Personería 2020
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn flat class="white--text" @click="inicio = true">Conteo de Votos</v-btn>
            </v-toolbar>
            <v-content>
                <v-container fluid grid-list-md offset-sm3>
                    <v-layout justify-center justify-space-around >
                        <v-card class="card-sombra" width="270px">
                            <v-card-title>
                                <div>
                                    <h2>Ingrid Jimena Trujillo Benavidez</h2><br>
                                    <v-img src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F1.jpeg?alt=media&token=c0c1c97e-8c75-4f9a-9eb4-0bda5a2c78b5"></v-img>
                                    <span class="grey--text">Las oportunidades no ocurren, tu las creas.</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn class="buttons" :disabled="botonV" @click="voto('1')" block large>
                                    VOTAR
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-sombra" width="270px">
                            <v-card-title>
                                <div>
                                    <h2>Jesús Manual Robayo Pérez</h2><br>
                                    <v-img src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F2.jpeg?alt=media&token=686ec83e-c56e-4c81-b0da-228470e26827"></v-img>
                                    <span class="grey--text">No puedes cambiar el pasado pero sí aprender de él para escribir un futuro.</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn class="buttons" :disabled="botonV" @click="voto('2')" block large>
                                    VOTAR
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-sombra" width="270px">
                            <v-card-title>
                                <div>
                                    <h2>María Fernanda Velásquez García</h2><br>
                                    <v-img src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F3.jpeg?alt=media&token=de0067c6-754e-4d23-af20-80be56fc8fc1"></v-img>
                                    <span class="grey--text">Doy el primer paso, para que juntos demos el segundo.</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn class="buttons" :disabled="botonV" @click="voto('3')" block large>
                                    VOTAR
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-sombra" width="270px">
                            <v-card-title>
                                <div>
                                    <h2>Voto en blanco</h2><br>
                                    <v-img src="https://firebasestorage.googleapis.com/v0/b/votacionescolsam.appspot.com/o/fotos%2F4.png?alt=media&token=80446a3a-aadb-44b1-bbf0-513705c6dd9d"></v-img>
                                    <span class="grey--text" style="color: white">Voto en blanco.</span><br>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn class="buttons" :disabled="botonV" @click="voto('4')" block large>
                                    VOTAR
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-layout>
                </v-container>


            </v-content>
            <v-dialog v-model="alertExito" persistent max-width="500px">
                <v-card>
                    <v-card-title>
                        <span class="headline text-lg-center text-sm-center">¡Gracias por tu voto!</span>
                    </v-card-title>
                </v-card>
            </v-dialog>
            <v-dialog v-model="inicio" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Ingresar panel de Administración</span>
                    </v-card-title>
                    <v-card-text>
                        <v-alert type="error" v-model="errorPass" dismissible>Por favor ingrese una contraseña
                            valida.
                        </v-alert>
                        <v-alert type="error" v-model="errorUser" dismissible>Por favor ingrese un usuario
                            valido.
                        </v-alert>
                        <v-alert type="error" v-model="errorLogin" dismissible>Usuario y/o contraseña
                            incorrecta.
                        </v-alert>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-text-field label="Correo*" v-model="email" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Contraseña*" v-model="pass" type="password"
                                                  required></v-text-field>
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
    let app = firebase.initializeApp(config);
    let db = firebase.firestore(app);
    export default {
        name: 'app',
        data: () => ({
            botonV: false,
            exito: false,
            alertExito: false,
            inicio: false,
            usuario: [],
            email: '',
            pass: '',
            errorUser: false,
            errorPass: false,
            errorLogin: false,
            errorDB: false,
            tab: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            icons: false,
            centered: true,
            grow: true,
            vertical: true,
            prevIcon: false,
            nextIcon: false,
            right: false,
        }),
        methods: {
            voto: function (personero) {
                let docRef = db.collection("personeros").doc(personero.toString());
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
                if (this.email.length === 0) {
                    this.errorUser = true;
                    this.errorPass = false;
                } else if (this.pass.length === 0) {
                    this.errorPass = true;
                    this.errorUser = false;
                } else {
                    let f = firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(
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
                            this.exito = true;
                            this.errorLogin = false;
                            this.errorUser = false;
                            this.errorPass = false;
                            this.email = '';
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
            },
        }
    }
</script>

<style scoped>
    @import "assets/style.css";

    .pestana {
        position: relative;
        top: 20%;
        margin-right: 50px;
        margin-left: 50px;
    }

    .tabs {
        color: white !important;
        background: #000000;
    }
</style>
