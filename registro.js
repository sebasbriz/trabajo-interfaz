document.addEventListener("DOMContentLoaded", function(){
    //zona segura
    reproducirVideo();
});

function reproducirVideo() {
    // Hay que permitir en google chrome la reproduccion de audio
    // en el candadito
    const video = document.getElementById("backVideo");
    video.loop = true;
    video.autoplay = true;
    video.load();
    video.play();
}