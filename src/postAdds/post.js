import {addPostToDb, auth} from '../config.js'

const btn = document.getElementById('post-btn')


btn.addEventListener('click' , async()=> {
    const uid = await auth.currentUser.uid
    const inputElements = document.getElementsByTagName('input')
    const title = inputElements[0].value
    const amount = inputElements[1].value
    const description = inputElements[2].value
    const img = inputElements[3].files[0]
    console.log(uid);

const add = {
    title,
    amount,
    description,
    img,
    uid
}

addPostToDb(add)

})