<template>
  <div id="app">

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
