//sirve para que el js se ejecute despues de cargar todo el html
document.addEventListener("DOMContentLoaded", function(){
    //zona segura
    reproducirAudio();
});

function reproducirAudio() {
    // Hay que permitir en google chrome la reproduccion de audio
    // en el candadito
    const audio = document.getElementById("mainTheme");
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}