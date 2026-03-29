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


