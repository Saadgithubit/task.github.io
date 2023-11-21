import {auth , onAuthStateChanged} from '../config.js'
import { getAllAdds } from "../config.js"




onAuthStateChanged(auth,  (user) => {
  if (user) {
    
    const uid = user.uid;
    // console.log(user);
    const emailElement = document.getElementById('userId')
    emailElement.innerHTML = user.email
    // console.log(emailElement);
    renderAdds()
    
  }
});

const addPost = document.getElementById('add-post')
addPost.addEventListener('click' , ()=>{
  window.location = '../postAdds/post.html'
})

const container = document.getElementById('container')


async function renderAdds(){
  
  const allAdds = await getAllAdds()
  
  // const container = document.getElementById('container')
  // console.log(container);
  console.log(allAdds);

  for(var i = 0 ; i < allAdds.length; i++){
  const ad =  allAdds[i] 

  const card = document.createElement('div')
  card.className = 'parent-div'
  card.addEventListener('click' , ()=>{
    window.location.href = '../details/details.html?adId=' + ad.id
  })

  const img = document.createElement('img')
  img.src = ad.img
  const title = document.createElement('h3')
  title.innerHTML = ad.title
  const amount = document.createElement('h4')
  amount.innerHTML = ad.amount
  card.append(img)
  card.append(title)
  card.append(amount)
  container.append(card)
  console.log(ad);

  
}

}