console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    getImages()
    getDogBreeds()


function getImages(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(function(response){
    return response.json()
}).then(function(images){
    images.message.forEach(function(image){
        addImages(image)
    })
    })
}

function addImages(pictures){
    let container = document.getElementById('dog-image-container')
    let newImage = document.createElement('img')
    newImage.src = pictures
    container.appendChild(newImage)
}

function getDogBreeds(){
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(function(response){
    return response.json()
}).then(function(breeds){
    for(let breed in breeds.message){
        addDogBreeds(breed)
    }
})
}

function addDogBreeds(breed){
    let unorderedList = document.getElementById('dog-breeds')
    let newListItem = document.createElement('li')
    newListItem.innerText = breed
    unorderedList.appendChild(newListItem)
    newListItem.addEventListener('click', changeColor)
}

function changeColor(){
    this.addEventListener("click", function(){
        this.style.color = "blue"
    })
}

const dropDown = document.getElementById('breed-dropdown')



function changeList(breeds) {
    let ul = document.getElementById('dog-breeds')
    ul.innerHTML = ""
    let letter = dropDown.value

    for(let breed in breeds.message){
       
        if (breed.charAt(0) == letter) {
            const li = document.createElement('li')
            li.innerText = breed
            ul.appendChild(li)
        }
        
    }
}


function fetchBreedAlphabetically(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(function(response){
        return response.json()
        .then(function(json){
            changeList(json)
        })
    })
}

dropDown.addEventListener('change', fetchBreedAlphabetically)
})