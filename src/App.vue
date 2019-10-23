<template>
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
                <v-btn  flat class="white--text" @click="inicio = true">Conteo de Votos</v-btn>
            </v-toolbar>
            <v-content>
                <v-tabs
                        v-model="tab"
                        color="white"
                        background-color="deep-purple accent-4"
                        class="elevation-2 pestana"
                        :centered="centered"
                        :grow="grow"
                        :vertical="vertical"
                        :right="right"
                        :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                        :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                        :icons-and-text="icons"
                >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab class="tabs" >
                       Septimo
                        <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>
                    <v-tab class="tabs" >
                        Octavo
                        <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>
                    <v-tab class="tabs" >
                        Noveno
                        <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>
                    <v-tab class="tabs" >
                        Decimo
                        <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>
                    <v-tabs-items>
                        <v-tab-item>
                            <v-container fluid grid-list-md offset-sm3>
                                <v-layout justify-center justify-space-around>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Ruleta Grupo #1</h2><br>
                                                <span class="grey--text">Integrantes: <ul><li>Alvarez</li><li>Ramirez</li><li>Quintana</li><li>García</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('1')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Escalera y Serpiente Grupo #2</h2><br>
                                                <span class="grey--text">Integrantes:<ul><li>Peña</li><li>Berrio</li><li>Meza</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('2')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>

                                </v-layout>
                            </v-container>
                        </v-tab-item>
                        <v-tab-item>
                            <v-container fluid grid-list-md offset-sm3>
                                <v-layout justify-center justify-space-around>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Brazo Hidráulico Grupo #3</h2><br>
                                                <span class="grey--text">Integrantes: <ul><li>Teran</li><li>Montenegro</li><li>H. Jimenez</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('3')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Holograma 3D <br>Grupo #4</h2><br>
                                                <span class="grey--text">Integrantes:<ul><li>Vera</li><li>Llanos</li><li>García</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('4')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Lámpara de lava <br>Grupo #5</h2><br>
                                                <span class="grey--text">Integrantes:<ul><li>Santíz</li><li>Herrera</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('5')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Moldeación de la materia <br>Grupo #6</h2><br>
                                                <span class="grey--text">Integrantes:<ul><li>Pardo</li><li>Escobar</li><li>C. Acosta</li><li>Sampayo</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('6')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    <v-card class="card-sombra" width="270px">
                                        <v-card-title>
                                            <div>
                                                <h2>Ver tu propia voz <br>Grupo #7</h2><br>
                                                <span class="grey--text">Integrantes:<ul><li>Parra</li><li>Rivera</li><li>Ospino</li></ul></span><br>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-btn color="primary" :disabled="botonV" @click="voto('7')" block large>VOTAR</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-layout>
                            </v-container>
                        </v-tab-item>
                        <v-tab-item>
                            jjjjj
                        </v-tab-item>
                        <v-tab-item>
                            hjfgjfgjfgjfgj
                        </v-tab-item>
                    </v-tabs-items>

                </v-tabs>


            </v-content>
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
            tabs: ['Septimo', 'Octavo', 'Noveno','Decimo'],
        }),
        methods: {
            voto: function (grupo) {
                let docRef = db.collection("grupos").doc(grupo.toString());
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
    .pestana{
        position: relative;
        background: white;
        top: 20%;
        margin-right: 50px;
        margin-left: 50px;
    }
    .tabs{
        color: white!important;
        background: #1976d2;
    }
</style>
