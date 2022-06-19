const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')
const buscar = document.querySelector('.buscar')
const buscar_texto = document.querySelector('.buscar_texto')



hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
    && e.target != menu && e.target != hamburguer && e.target !=buscar_texto){

        console.log(e.target)
        menu.classList.toggle("spread")
    }
})