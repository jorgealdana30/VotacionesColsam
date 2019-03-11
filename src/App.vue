<template>
  <div id="app">
    <v-app>
    <v-toolbar app color="primary" class="toolbar">
      <v-toolbar-title class="logoMargin">
        <v-img src="https://firebasestorage.googleapis.com/v0/b/colsamapp.appspot.com/o/logo%2Flogo.png?alt=media&token=d985d93c-2f39-4758-ba21-07fb86d99401" class="logo" height="66" width="54"></v-img>
      </v-toolbar-title>
      <v-toolbar-title class="white--text titulo hidden-md-and-down">
        Votaciones Colsam 2019
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
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
}
</script>

<style>

</style>
