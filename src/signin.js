import { logIn } from "./config.js";


 const btn = document.getElementById('signin-btn')

   btn.addEventListener('click' , ()=>{
    let email = document.getElementById('logInEmail').value
    let password = document.getElementById('logInPassword').value


    const user = {email,password}
    
    logIn(user)

    
//     signInWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
   
//     const user = userCredential.user;
//     alert('Log In Successfull')
//     window.location.href = '../index.html'
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });


   })