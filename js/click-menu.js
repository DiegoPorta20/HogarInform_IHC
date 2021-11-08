let menu = document.querySelector('.menu');
let head_click = document.querySelector('.head-click');
let x = document.querySelector('.x-menu');

menu.addEventListener('click', ()=>{
    head_click.classList.toggle('bajar');
    menu.classList.toggle('ocultar');
    x.classList.toggle('ocultar');       
    x.classList.toggle('aparecer');
})
x.addEventListener('click', ()=>{
    head_click.classList.toggle('bajar');
    menu.classList.toggle('ocultar');
    x.classList.toggle('ocultar');       
    x.classList.toggle('aparecer');
})
window.addEventListener('click', e=>{
    if(head_click.classList.contains('bajar') && e.target != menu && e.target != head_click && e.target != x){
        head_click.classList.toggle('bajar');
        menu.classList.toggle('ocultar');
        x.classList.toggle('ocultar');        
        x.classList.toggle('aparecer');
    }
})
