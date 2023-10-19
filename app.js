var data;
var index = 0
getData()

function getData(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    // .then(res => console.log(res[index] ))
    .then(res => {
        data = res
        
    var loader = document.getElementById('loader')
    loader.className = 'hide'
    
    start()
})
}

function start(){
    console.log(data) 
    // var parent = document.getElementById('parent-div')
    // var img = parent.childNodes[1]
    // img.src = data.image
    // var title = document.getElementById('title')
    // title.innerHTML = data.title
    // var price = document.getElementById('price')
    // price.innerHTML = data.price
    // var description = document.getElementById('description')
    // description.innerHTML = data.description 
   var container = document.getElementById('container')
   
    for(var i = 0; i < data.length; i++){
        
        var dataObj = data[i]
        var parent = document.createElement('div')
        parent.id = 'parent-div'
        var img = document.createElement('img')
        img.src = dataObj.image
        var title = document.createElement('h3')
        title.id = 'title'
        title.innerHTML = dataObj.title
        var price = document.createElement('h4')
        price.id = 'price'
        price.innerHTML = '$ ' + dataObj.price 
        var des = document.createElement('h4')
        des.className = 'description'
        des.innerHTML = 'Description'
        var description = document.createElement('p')
        description.id = 'description'
        description.innerHTML = dataObj.description
        parent.append(img)
        parent.append(title)
        parent.append(price)
        parent.append(des)
        parent.append(description)
        container.append(parent)
        }
        
        console.log(parent)

}


    
    