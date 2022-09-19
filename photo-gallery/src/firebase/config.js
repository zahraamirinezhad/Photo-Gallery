import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

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

export { projectStorage, projectFirestore }
