import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";
// Add the Firebase services that you want to use
// import "firebase/auth"; //dunno if needed
import "firebase/firestore";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRVsOkwdTOtOjF8ZYA3yIx1slgDqJzLMc",
  authDomain: "roster-system-6a1c8.firebaseapp.com",
  databaseURL: "https://roster-system-6a1c8.firebaseio.com",
  projectId: "roster-system-6a1c8",
  storageBucket: "roster-system-6a1c8.appspot.com",
  messagingSenderId: "937393580803",
  appId: "1:937393580803:web:d56b011450a11411551736",
  measurementId: "G-L97MD4ZPJZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;