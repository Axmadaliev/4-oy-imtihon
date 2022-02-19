const API = 'https://reqres.in/api'
var loginFormEl = document.querySelector('.form')

var emailInputEl = document.querySelector('#input-name')
var passwordInputEl = document.querySelector('#input-password')
var alertTemplate = document.querySelector('#templateAlert').content

async function loginAll (login){
    return new Promise ((resolve, reject) =>{
        fetch(`${API}/login` ,{
            method:'POST',
            headers:{
                "Content-type":'application/json'
            },
            body:JSON.stringify(login)
        })
        .then(res =>{
            if(res.status > 300)reject(res)
            return res.json()
        })
        .then(res => {
            if(res.token !== undefined){
                window.localStorage.setItem('token',res.token)
                window.location.replace('index.html')
            }else{
                const response = JSON.parse(JSON.stringify(res))
                alert(response.error.textContent = 'Kallanga sani Turi yoz')
            }
        })
        .catch(err => {
            alert(err)
        })
    
    })
}

loginFormEl.addEventListener('submit', event => {
    event.preventDefault()
    const body = { 
        email:emailInputEl.value,
        password:passwordInputEl.value
    }
    try {
        loginAll(body)
    } catch (error) {
        alert(error)
    }
        

})