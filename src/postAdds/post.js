import {addPostToDb} from '../config.js'

const btn = document.getElementById('post-btn')

// console.log(btn);

btn.addEventListener('click' , ()=> {
const inputElements = document.getElementsByTagName('input')
const title = inputElements[0].value
const amount = inputElements[1].value
const description = inputElements[2].value
const img = inputElements[3].files[0]

const add = {
    title,
    amount,
    description,
    img
}

addPostToDb(add)

})