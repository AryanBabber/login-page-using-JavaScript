let container = document.getElementById('container');
let loginPage = document.getElementById('login-page')
let registerPage = document.getElementById('register-page')
let pageView = document.getElementById('page-view')
let loginRegister = document.getElementById('login-register')
let boxStyle = loginRegister.style
// let loginAndRegister = [loginPage, registerPage]

loginPage.addEventListener('click', ()=>{
    boxStyle.width = '500px'
    boxStyle.height = '500px'
    boxStyle.border = '1px solid black'
    boxStyle.backgroundColor = '#ddd'
    boxStyle.boxShadow = '2px 2px 5px 5px #888'
    loginRegister.innerHTML = `
        <h1 class='loginRegister-head'>LOGIN</h1>
        <p class='loginRegister-credentials'>Username:</p>
        
        <p class='loginRegister-credentials'>Password:</p>
    `
})

registerPage.addEventListener('click', ()=>{
    boxStyle.width = '500px'
    boxStyle.height = '500px'
    boxStyle.border = '1px solid black'
    boxStyle.backgroundColor = '#ddd'
    boxStyle.boxShadow = '2px 2px 5px 5px #888'
    loginRegister.innerHTML = `
        <h1 class='loginRegister-head'>REGISTER</h1>
        <p class='loginRegister-credentials'>Username:</p>
        
        <p class='loginRegister-credentials'>Password:</p>
    `
})


// comments

/* 
1. Password showing hiding feature with an eye
2. Both login and registered users will take the data in the local storage
3. Both pages will hover over the text on the index.html


link: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1

container.innerHTML =   `
        <div id="page-view">
            
        </div>
    `

*/
