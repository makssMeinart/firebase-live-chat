import React, { createContext } from "react"
import ReactDOM from "react-dom"
import "normalize.css"
import App from "./App"
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp({
  apiKey: "AIzaSyAp5kZj0Wh4wmOL5jxhJZ_2yOrz7UPGLLY",
  authDomain: "fir-chat-1908d.firebaseapp.com",
  projectId: "fir-chat-1908d",
  storageBucket: "fir-chat-1908d.appspot.com",
  messagingSenderId: "711597554796",
  appId: "1:711597554796:web:8567c19fbb6dc354a46c49",
  measurementId: "G-R8HP41BPV7",
})

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

const value = {
  firebase,
  auth,
  firestore
}

ReactDOM.render(
  <Context.Provider value={value}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
)