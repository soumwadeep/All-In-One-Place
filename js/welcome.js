// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    document.getElementById("log").innerHTML ="Log Out";
    document.getElementById("printuser").innerHTML ="Hello ! " + user.email;
    document.getElementById("logoutw").innerHTML ="Are You Sure You Want To Log Out? Then Click On The Log Out Button To Confirm.";
    // alert("Welcome: " + user.email + "! Now You Can Access Our Files!");
    // ...
  } else {
    // User is signed out
    document.getElementById("log").innerHTML ="Log In";
    document.getElementById("printuser").innerHTML ="Hello! Guest";
    // ...
  }
});
// Sign Out
logOut.addEventListener("click", (e) => 
{
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("Bye! Visit Again!");
      window.location.href = "https://allinoneplace.ml/";
    })
    .catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      //add an alert for errors
      alert(errorMessage);
    });
});
