import firebase from "firebase";

// .env に設定した値を取得してる
const config = {
    apiKey: "AIzaSyCL0DKn7PR8eK5zzx-8_x6848ofNaBaie8",
    authDomain: "history-of-keyakizaka46.firebaseapp.com",
    projectId: "history-of-keyakizaka46",
    storageBucket: "history-of-keyakizaka46.appspot.com",
    messagingSenderId: "656490981947",
    appId: "1:656490981947:web:40db71c45d5ca599420a1e",
    measurementId: "G-8G91ZZV8PC"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase