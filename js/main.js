// bookList
var templateBookList = document.querySelector('#templateBookList').content

var showPageNumber= document.querySelector('.showPageNumber')

var searchItem = document.querySelector('#input-search')
var ulList = document.querySelector('.ulItem')
var respons;

var books = []
async function booksApi (pageNumber = 10){
    respons = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem.value}&startIndex=${pageNumber}&ord`)
    respons = await respons.json()
    books = respons.items
    return books
}

booksApi().then(()=>{
    rendorBooks(ulList, count)
    
})



async function rendorBooks(node){

    node.innerHTML = ''
    if(!books){
        node.textContent = " topomading ooolll"
    }

    let ulListFrogment = document.createDocumentFragment()
    books.forEach(element => {
        let listts = document.importNode(templateBookList, true)

        let img = listts.querySelector('.liItemImg')
        if(element.volumeInfo.imageLinks){

            img.src = element.volumeInfo.imageLinks.thumbnail
        }

        let Title = listts.querySelector('.liItemTitle')
        Title.textContent = element.volumeInfo.title

        let Avtors = listts.querySelector('.liItemActor')
        Avtors.textContent = element.volumeInfo.authors

        let year = listts.querySelector('.liItemYear')
        year.textContent = element.volumeInfo.publishedDate
        
        showPageNumber.textContent =  element.volumeInfo.pageCount
        ulListFrogment.append(listts)
    });
    node.appendChild(ulListFrogment)
}
var count=20 

// pagination 

var nextPage = document.querySelector('.nextPage')
var previousPage = document.querySelector('.previousPage')
var answered = document.querySelector('.answered')
nextPage.addEventListener('click', event=>{
    count +=10
    if(count < 10){
        return 10
    }
    event.preventDefault()
    async function booksApiSorted (pageNumber = 10){
        respons = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem.value}&startIndex=${pageNumber}`)
        respons = await respons.json()
        books = respons.items
        return books
    }

    booksApiSorted(count).then(()=>{
        rendorBooks(ulList)
        // console.log(count);
    })
        answered.textContent = count / 10
   
})

previousPage.addEventListener('click', event=>{
    count -= 10
    if(count < 10){
        return 10
    }
    event.preventDefault()
    async function booksApiSorted (pageNumber = 10){
        respons = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem.value}&startIndex=${pageNumber}`)
        respons = await respons.json()
        books = respons.items
        return books
    }

    booksApiSorted(count).then(()=>{
        rendorBooks(ulList)
        // console.log(count);
    })
    answered.textContent = count / 10
   
})

// logout

var logOut = document.querySelector('.btnElement')

logOut.addEventListener('click', event=>{
    window.location.replace('login.html')
})