let ham=document.querySelector('.ham')
let srem=document.querySelector('.showremove')
let mobnav=document.querySelector('.hamnav')
ham.addEventListener('click',showNav)
srem.addEventListener('click',remNav)
function showNav(){
    mobnav.classList.toggle('show')
}


function remNav(){
    mobnav.classList.remove('show')
}