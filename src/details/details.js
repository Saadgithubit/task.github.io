import { getSingleAdd,  getUser } from "../config.js"

addsDetails()

 async function addsDetails(){


   const id = window.location.search.split('=')[1]
   const container = document.getElementById('container')
   const ad = await getSingleAdd(id)
    const user = await getUser(ad.uid)
   console.log(ad);


     console.log(user);
    const card = document.createElement('div')
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



    // console.log(ad);
    
    
 }
