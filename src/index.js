console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl)
.then(function(response){
    return response.json()
}).then(function(images){
    images.message.forEach(function(image){
        console.log(image)
    })
    })
