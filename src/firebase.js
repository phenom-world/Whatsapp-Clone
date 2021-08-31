import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2tTAORLp9FmPZYkWQbjQlOmE_fQaPMo8",
  authDomain: "whatsapp-clone-904da.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-904da.firebaseio.com",
  projectId: "whatsapp-clone-904da",
  storageBucket: "whatsapp-clone-904da.appspot.com",
  messagingSenderId: "38522830896",
  appId: "1:38522830896:web:a88c99a958abad3407edf5",
  measurementId: "G-1NFXMPSQJX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
