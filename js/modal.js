// window.addEventListener('click', event=>{
//     let clouse = event.target.da
// })

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    }else {
      x.style.display = "flex";
    }
}

var templateModal = document.querySelector('.template_modal').content
var modalHome = document.querySelector('.modalchild')

window.addEventListener('click', event=>{
    if(!event.target.dataset.clean==='seete'){
      console.log(event);
    }
    
})

// window.addEventListener('click', event=>{
//   let x = document.getElementById('myLinks')
//   if(event.target.dataset.clean==='seete'){
//     x.style.display = "flex";
//   }
//   // console.log(burgerEl);
//   if(event.target.dataset.clean !=='seete'){
//       // console.log(burgerEl);
//       x.style.display="none"
//   }

// })

var respons;

var books = []
async function booksApi (pageNumber = 10){
  respons = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem.value}&startIndex=${pageNumber}&ord`)
  respons = await respons.json()
  books = respons.items
  return books
}

async function renderModal(node){
  node.innerHTNL = ''

  let modalFragment = document.createDocumentFragment()

  books.forEach(element=>{
    let modalItems = document.importNode(templateModal, true)

  let lielement = document.querySelector('.liItem')
  lielement.dataset ++

    let modalTitle = modalItems.querySelector('.modal_title')
    modalTitle.textContent = element.volumeInfo.title

    let modalImge = modalItems.querySelector('.modal_img')
    if(element.volumeInfo.imageLinks){
      modalImge.src = element.volumeInfo.imageLinks.thumbnail
    }

    let description = modalItems.querySelector('.modal_published')
    description.textContent = element.volumeInfo.description

    let auther = modalItems.querySelector('.modal_auther')
    auther.textContent = element.volumeInfo.auther

    let published = modalItems.querySelector('.modal_published')
    published.textContent = element.volumeInfo.published

   let publishers =modalItems.querySelector('.modal_publishers')
   publishers.textContent = element.volumeInfo.publishers

   let cotegories = modalItems.querySelector('.modal_catedories')
   cotegories.textContent = element.volumeInfo.cotegories

   let pageCount = modalItems.querySelector('.modal_page_count')
   pageCount.textContent = element.volumeInfo.pageCount

   modalFragment.append(modalItems)
  })
  node.append(modalFragment)
}

window.addEventListener('click', event=>{
  console.log(event.target);
})

window.addEventListener('click', event=>{
  let emen = event.target.dataset.set =="set"
  if(event.target = emen){
    renderModal(modalHome)
  }
})

// var modalBox = document.getElementById('#modalchild')
// modalBox.addEventListener('click', event => {
//     console.log(event.target)
//         if(!event.target.classList.contains('.modalChildrenTop') && event.target.matches('.modal_enters')){
//             modalBox.innerHTML = null
//             // console.log("modal yopilmaydi")
//         }
// })