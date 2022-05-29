// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM0h1KOKqmKJPWJQuwdVfGY_kQWEnmsQI",
  authDomain: "all-in-one-place-b04b1.firebaseapp.com",
  projectId: "all-in-one-place-b04b1",
  storageBucket: "all-in-one-place-b04b1.appspot.com",
  messagingSenderId: "121024875216",
  appId: "1:121024875216:web:ca68f1f5e87135cf592cd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign In
signIn.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Welcome : " + user.email + "! Now You Can Access Our Files!");
      window.location.href = "./index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //add an alert for errors
      alert(errorMessage);
    });
});

// Sign Up
signUp.addEventListener("click", (e) => {
  //Add All The Input Field's ID
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //Copy It From Docs
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(
        "Welcome: " +
          user.email +
          "! To All In One Place. Please Wait For Few Seconds While We Complete Your Registration!"
      );
      window.location.href = "./index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      //add an alert for errors
      alert(errorMessage);

      // ..
    });
});
