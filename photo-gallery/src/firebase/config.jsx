import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDKCZVaNsh2HOhireUgrKs2Cl_ByNWneg4',
  authDomain: 'photo-gallery-f8593.firebaseapp.com',
  projectId: 'photo-gallery-f8593',
  storageBucket: 'photo-gallery-f8593.appspot.com',
  messagingSenderId: '574573522805',
  appId: '1:574573522805:web:dfe70f89d5b6a7bb69ad3c',
}

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
