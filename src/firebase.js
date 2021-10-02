import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKgzufJxT_UgdyHFcDBn1xNQJ5_tU0_M8",
  authDomain: "whatsapp-clone-bcd89.firebaseapp.com",
  projectId: "whatsapp-clone-bcd89",
  storageBucket: "whatsapp-clone-bcd89.appspot.com",
  messagingSenderId: "1077438697790",
  appId: "1:1077438697790:web:b684db3aa94c7d6de3dc6f",
  measurementId: "G-TP0T70CRLX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebase };
export default db;
