import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD5qyG3zZoztJwvyAHsGMeLItzTRybDpyI",
  authDomain: "media-travel-57335.firebaseapp.com",
  projectId: "media-travel-57335",
  storageBucket: "media-travel-57335.appspot.com",
  messagingSenderId: "873769518189",
  appId: "1:873769518189:web:563c84ad656eab5bef2b64"
})

export const auth = app.auth()
export default app
