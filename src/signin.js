import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBSeFEy16oTHcRbKgOV7TexVl_l5eKx1Eo",
    authDomain: "assignment-5d71c.firebaseapp.com",
    projectId: "assignment-5d71c",
    storageBucket: "assignment-5d71c.appspot.com",
    messagingSenderId: "1079759975934",
    appId: "1:1079759975934:web:76f1a6b53df503134e3caf",
    measurementId: "G-3YLWZTCNJQ"
  };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const btn = document.getElementById('signin-btn')

   btn.addEventListener('click' , ()=>{
    let email = document.getElementById('logInemail')
    let password = document.getElementById('logInpassword')

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    alert('Log In Successfull')
    window.location.href = '../index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

   })