document.addEventListener("DOMContentLoaded", function(){
    //zona segura
    const registro = document.getElementById("btnRegistro");
    const volver = document.getElementById("btnVolver");

    //Se le asigna el evento click al botón crear
    btnRegistro.addEventListener("click", function() {
        capturarDatosDelFormulario();
    });
});


