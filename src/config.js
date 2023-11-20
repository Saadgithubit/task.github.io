import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import{ getFirestore , collection, addDoc, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { getStorage , ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

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
const db = getFirestore(app);
const storage = getStorage(app);


 function register(user){
   const {fullName, email , password} = user

  createUserWithEmailAndPassword(auth, email, password)
  
  .then(async(userCredential) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullName, 
        email,
        password
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    const user = userCredential.user;
    alert('Sign Up Successfull')
    window.location.href = './signin.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
    console.log("errorcode =>" , errorCode);
    console.log("errorMessage =>" , errorMessage);
  });
 }

 function logIn(user){
  const {email , password} = user

  
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    alert('Log in Successfull')
    window.location.href = './dashboard/dashboard.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("errorcode =>" , errorCode);
    console.log("errorMessage =>" , errorMessage);
  });
 }

 async function addPostToDb(add){
  try {

    
    const storageRef = ref(storage, `${add.img.name}`);

    await uploadBytes(storageRef, add.img)

    const url = await getDownloadURL(storageRef)

    add.img = url
    // console.log(add);


    const docRef = await addDoc(collection(db, "adds"), add)
    console.log('data added successful');

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
 }




 export{
  register,
  logIn,
  auth,
  onAuthStateChanged,
  addPostToDb
 }