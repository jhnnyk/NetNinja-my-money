import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB01fKBII-de4FemhaDWmbJt1XMG2pTtdc",
  authDomain: "netninja-mymoney-e7765.firebaseapp.com",
  projectId: "netninja-mymoney-e7765",
  storageBucket: "netninja-mymoney-e7765.appspot.com",
  messagingSenderId: "473075927548",
  appId: "1:473075927548:web:0752f2081e1edfc6930a79"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
