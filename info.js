document.addEventListener("DOMContentLoaded", function(){
    //zona segura
    const btnVolver = document.getElementById("btnVolver");

    reproducirAudio();

    btnVolver.addEventListener("click", function(){
        volverPagAnterior();
    });
});

function reproducirAudio() {
    // Hay que permitir en google chrome la reproduccion de audio
    // en el candadito
    const audio = document.getElementById("mainTheme");
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
};

function volverPagAnterior(){
    location.replace("./index.html");
};