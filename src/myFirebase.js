import * as firebase from  'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBPelc-Wy-G2IsqhScm3HLi0AaiIWDwEdE",
    authDomain: "fir-test-ec62e.firebaseapp.com",
    databaseURL: "https://fir-test-ec62e.firebaseio.com",
    projectId: "fir-test-ec62e",
    storageBucket: "fir-test-ec62e.appspot.com",
    messagingSenderId: "461821938535",
    appId: "1:461821938535:web:bf73a526c1e0cc20df3dc2",
    measurementId: "G-LSSRCYVWSG"
  };

const app=firebase.initializeApp(firebaseConfig);

export default app;