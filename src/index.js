import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as firebase from 'firebase'
import 'firebase/firestore'
const app = firebase.initializeApp({
  apiKey: 'AIzaSyAdk32V1KHo03mhvZPwt0P-5zGgXBTlek0'
})
const db = firebase.firestore()
ReactDOM.render(<App db={db} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
