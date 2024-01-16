const navElement = document.getElementById('nav');
const toggleMenuElement = document.getElementById('toggle-menu');
const closeMenuElement = document.getElementById('close');
const listSubmenu = document.querySelectorAll('.item--click');
const togglePregunta = document.querySelectorAll('.toggle-pregunta');



// abrir menu lateral con clic al icono
toggleMenuElement.addEventListener('click', () => {
    navElement.classList.add('visible')
})
// cerrar menu lateral con clic al icono
closeMenuElement.addEventListener('click', () => {
    navElement.classList.remove('visible')
})
// cerrar menu lateral con clic fuera del menu
document.onclick = function(e){
    if(!toggleMenuElement.contains(e.target) && !navElement.contains(e.target)){
        navElement.classList.remove('visible')
    }
}

// mostrar y ocultar el submenu del nav
listSubmenu.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
            
        }
        menu.style.height = `${height}px`;
    })
})

// mostrar y ocultar el contenido de las preguntas
togglePregunta.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        let content = listElement.nextElementSibling;
        if(content.clientHeight == "0"){
            height = content.scrollHeight + 20;
            
        }
        content.style.height = `${height}px`;
        
    })
})