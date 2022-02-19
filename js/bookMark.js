var tamplateBookMark = document.querySelector('#templateBookMark').content

var bookMarkItem = document.querySelector('.bookMarkItemList')
var booksAll = []


window.addEventListener('click', event=>{
    let item = event.target
    if(item.dataset.setbook === 'bookMark'){
        renderBookMarksecond(event)
    }
})
if(window.localStorage.getItem('bookMark')){
    let booksMark = JSON.parse(window.localStorage.getItem('bookMark'))
    renderBookMark(booksMark)
}

// render one
function renderBookMarksecond(element){
    let bookBlockMark = document.importNode(tamplateBookMark, true)

    let titleBookMark = bookBlockMark.querySelector('.titleBookMark')
    console.log(titleBookMark);
    titleBookMark.textContent = element.target.closest('li').querySelector('.liItemTitle').textContent
     
    let actorBlockMark = bookBlockMark.querySelector('.actorBookMark')
    actorBlockMark.textContent = element.target.closest('li').querySelector('.liItemActor').textContent
    bookMarkItem.appendChild(bookBlockMark)
}
// deleted
function daletedBook(item){
    console.log(item);
    item.closest('.bookMarkList').remove()

    // let bookMarkItemTitle = item.closest('.btnBookMark').querySelector('.titleBookMark').textContent

    booksAll = booksAll.filter(id=>{
        return id.title !== bookMarkItemTitle
    })
    window.localStorage.setItem('booksMark', JSON.stringify(booksAll))
}


// render two
function renderBookMark(booksMark){
    booksMark.forEach(element => {
        let markblocBook = document.importNode(tamplateBookMark, true)

        let titleBookMark = markblocBook.querySelector('.titleBookMark')
        titleBookMark.textContent = element.volumeInfo.title

        let actorBookMark = markblocBook.querySelector('.actorBookMark')
        actorBookMark.textContent = element.volumeInfo.author
    booksMark.appendChild(markblocBook)

    });
}

window.addEventListener('click', event=>{
    if(event.target.dataset.remove === 'delet'){
        daletedBook(event.target)
    }
})
