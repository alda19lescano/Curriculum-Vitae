window.addEventListener("scroll", function (){
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

window.sr = ScrollReveal();
sr.reveal('.animacion', {
    duration:4000,
    origin:'bottom',
})

let boton_ocultar = document.getElementById('boton_ocultar');

let ocultar = document.getElementById('ocultar');

boton_ocultar.addEventListener('click', estilo); 

function estilo (){
    ocultar.classList.toggle('boton_redes');

    if (ocultar.classList.contains ("boton_redes")) {
        boton_ocultar.innerHTML = "Mostrar menos";
    } else {
        boton_ocultar.innerHTML = "Redes sociales";
    }
}