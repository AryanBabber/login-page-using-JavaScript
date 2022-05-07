let container = document.getElementById('container');
let main = document.getElementById('main');
let loginPage = document.getElementById('login-page')
let registerPage = document.getElementById('register-page')
let pageView = document.getElementById('page-view')
let loginRegister = document.getElementById('login-register')
let boxStyle = loginRegister.style
// let loginAndRegister = [loginPage, registerPage]

loginPage.addEventListener('click', ()=>{
    document.body.style.backgroundColor = '#ddd'
    main.style.opacity = 0.2
    loginPage.style.backgroundColor = '#ddd'
    registerPage.style.backgroundColor = '#ddd'
    pageView.style.animation = 'fadeIn ease 2s'
    loginRegister.style.display = 'block'
    boxStyle.width = '500px'
    boxStyle.height = '500px'
    boxStyle.border = '1px solid black'
    boxStyle.backgroundColor = '#263D42'
    boxStyle.boxShadow = '0px 0px 10px 5px #888'
    loginRegister.innerHTML = `
        <h1 class='loginRegister-head'>LOGIN</h1>
        <p class='loginRegister-credentials'>Username:</p>
        <form id='login-username'>
            <input type='text' name='login' placeholder='Enter your username:' class='username' required>
        </form>
        <p class='loginRegister-credentials'>Password:</p>
        <form id='login-password'>
            <input type='password' name='login' placeholder='Enter your password:' class='password' required>
        </form>
        <button type='submit' class='submit-button' id='login-button'>LOGIN</button>
    `
})

registerPage.addEventListener('click', ()=>{
    document.body.style.backgroundColor = '#ddd'
    loginPage.style.backgroundColor = '#ddd'
    main.style.opacity = 0.2
    pageView.style.animation = 'fadeIn ease 2s'
    // animation: fadeIn ease 3s;
    registerPage.style.backgroundColor = '#ddd'
    loginRegister.style.display = 'block'
    boxStyle.width = '500px'
    boxStyle.height = '500px'
    boxStyle.border = '1px solid black'
    boxStyle.backgroundColor = '#263D42'
    boxStyle.boxShadow = '0px 0px 10px 5px #888'
    loginRegister.innerHTML = `
        <h1 class='loginRegister-head'>REGISTER</h1>
        <p class='loginRegister-credentials'>Username:</p>
        <form id='register-username'>
            <input type='text' name='register' placeholder='Enter your username:' class='username' required>
        </form>
        <p class='loginRegister-credentials'>Password:</p>
        <form id='register-password'>
            <input type='password' name='register' placeholder='Enter your password:' class='password' required>
        </form>
        <button type='submit' class='submit-button' id='register-button'>REGISTER</button>
    `


})

let loginButton = document.getElementById('login-button')
/*

loginButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(login-username.login.value == 'Aryan' && login-password.login.value == 'aaaaaaaa'){
        window.alert('Hello there')
    }
})

            Fix this
*/

main.addEventListener('click', ()=>{
    loginRegister.style.display = 'none'
    document.body.style.backgroundColor = '#fff'
    registerPage.style.backgroundColor = '#fff'
    loginPage.style.backgroundColor = '#fff'
    main.style.opacity = 1
    pageView.style.animation = 'none'
})

// comments

/* 
1. Password showing hiding feature with an eye
2. Both login and registered users will take the data in the local storage
3. Both pages will hover over the text on the index.html


link: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1

*/
