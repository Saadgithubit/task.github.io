import {auth , onAuthStateChanged} from '../config.js'


// console.log(onAuthStateChanged , auth);
onAuthStateChanged(auth, (user) => {
    if (user) {
    
      const uid = user.uid;
      console.log(user);
      const emailElement = document.getElementById('userId')
        emailElement.innerHTML = user.email
      console.log(emailElement);
      
    }
  });

const addPost = document.getElementById('add-post')
addPost.addEventListener('click' , ()=>{
    window.location = '../postAdds/post.html'
})