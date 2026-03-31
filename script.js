<<<<<<< HEAD
// 1. Le decimos al código qué elementos del HTML vamos a usar
const reproductor = document.getElementById('miVideo');
const fuente = document.getElementById('fuenteVideo');
const etiquetaTitulo = document.getElementById('tituloActual');

// Lista exacta de tus 5 videos
const listaDeVideos = [
    { archivo: 'videos/video1presentacioncomprimido.webm', nombre: 'Presentación Institucional' },
    { archivo: 'videos/pasos123.webm', nombre: 'Solicitud de Crédito' },
    { archivo: 'videos/videoelectrodomesticos.webm', nombre: '' },
   
];

// 3. Empezamos en el video 0 (el primero de la lista)
let indiceActual = 0;

reproductor.onended = function() {
    indiceActual++; // Intentamos pasar al siguiente video

    if (indiceActual < listaDeVideos.length) {
        // --- CASO A: Aún hay videos en la lista ---
        fuente.src = listaDeVideos[indiceActual].archivo;
        etiquetaTitulo.innerText = "" + listaDeVideos[indiceActual].nombre;
        
        reproductor.load();
        reproductor.play();
    } else {
        // --- FIN DE LA LISTA (Opción del usuario) ---
        console.log("Secuencia terminada. Esperando al usuario.");
        
        indiceActual = 0; // Reseteamos al primer video
        fuente.src = listaDeVideos[indiceActual].archivo;
        etiquetaTitulo.innerText = "¡Has visto todo! Haz clic en Play para repetir.";
        
        reproductor.load(); 
        // NO ponemos reproductor.play(), así se queda quieto con el poster inicial
    }

    
};

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
=======
// 1. Le decimos al código qué elementos del HTML vamos a usar
const reproductor = document.getElementById('miVideo');
const fuente = document.getElementById('fuenteVideo');
const etiquetaTitulo = document.getElementById('tituloActual');

// Lista exacta de tus 5 videos
const listaDeVideos = [
    { archivo: 'videos/video1presentacioncomprimido.webm', nombre: 'Presentación Institucional' },
    { archivo: 'videos/pasos123.webm', nombre: 'Solicitud de Crédito' },
    { archivo: 'videos/videoelectrodomesticos.webm', nombre: '' },
   
];

// 3. Empezamos en el video 0 (el primero de la lista)
let indiceActual = 0;

reproductor.onended = function() {
    indiceActual++; // Intentamos pasar al siguiente video

    if (indiceActual < listaDeVideos.length) {
        // --- CASO A: Aún hay videos en la lista ---
        fuente.src = listaDeVideos[indiceActual].archivo;
        etiquetaTitulo.innerText = "" + listaDeVideos[indiceActual].nombre;
        
        reproductor.load();
        reproductor.play();
    } else {
        // --- FIN DE LA LISTA (Opción del usuario) ---
        console.log("Secuencia terminada. Esperando al usuario.");
        
        indiceActual = 0; // Reseteamos al primer video
        fuente.src = listaDeVideos[indiceActual].archivo;
        etiquetaTitulo.innerText = "¡Has visto todo! Haz clic en Play para repetir.";
        
        reproductor.load(); 
        // NO ponemos reproductor.play(), así se queda quieto con el poster inicial
    }

    
};


>>>>>>> 7036d059d6af9877eec3de1ca4f1bb74f13f0ae5
