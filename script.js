// 1. Le decimos al código qué elementos del HTML vamos a usar
const reproductor = document.getElementById('miVideo');
const fuente = document.getElementById('fuenteVideo');
const etiquetaTitulo = document.getElementById('tituloActual');

// Lista exacta de tus 5 videos
const listaDeVideos = [
    { archivo: 'videos/pasos1234.mp4', nombre: 'Presentación Institucional' },
   
   
];
// Lógica simple para el video único de P4E
const miVideo = document.getElementById('miVideo');

if (miVideo) {
    miVideo.onended = function() {
        console.log("Video de presentación finalizado.");
        // Opcional: Si quieres que se repita solo, descomenta la siguiente línea:
        // miVideo.play(); 
    };
}



document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscamos el checkbox usando el ID exacto de tu HTML: "menu-toggle"
    const menuCheckbox = document.getElementById('menu-toggle');
    
    // 2. Buscamos todos tus enlaces con la clase "p4e-nav-link"
    const navLinks = document.querySelectorAll('.p4e-nav-link');

    // 3. Cuando se haga clic en un enlace, el menú se cierra
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuCheckbox) {
                menuCheckbox.checked = false; // Esto quita el color naranja de la pantalla
                console.log("Menú cerrado correctamente");
            }
        });
    });
});


/* Lógica de Ventanas Emergentes - Préstamos 4 Esquinas */

function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = "block";
        // Bloqueamos el scroll del fondo para que sea más profesional
        document.body.style.overflow = "hidden"; 
    }
}

function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = "none";
        // Devolvemos el scroll al cerrar
        document.body.style.overflow = "auto";
    }
}

// Cerrar si el usuario toca la parte oscura fuera del cuadro
window.addEventListener("click", function(event) {
    if (event.target.className === "modal-p4e") {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
