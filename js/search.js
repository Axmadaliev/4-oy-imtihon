
window.addEventListener('click', event=>{
    let elem = event.target
    if(elem.dataset.set === 'seet'){
        ulList.innerHTML = ''

        booksApi().then(()=>{
            try {
                rendorBooks(ulList, count)
            } catch (error) {
                console.log(error.message);
            }
        })
    }
})
var sortedEl = document.querySelector('.sortedEl')
sortedEl.addEventListener('click', (e)=>{
    e.preventDefault()
    async function booksApiSorted (pageNumber = 10){
        respons = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem.value}&startIndex=${pageNumber}&orderBy=newest`)
        respons = await respons.json()
        books = respons.items
        return books
    }
    booksApiSorted().then(()=>{
        rendorBooks(ulList, count)
        
    })
    
})


