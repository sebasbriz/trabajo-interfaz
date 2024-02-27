document.addEventListener("DOMContentLoaded", function(){
    //zona segura
    const btnRegistro = document.getElementById("btnRegistro");
    const btnVolver = document.getElementById("btnVolver");

    reproducirAudio();

    //Se le asigna el evento click al botón crear
    btnRegistro.addEventListener("click", function() {
        capturarDatos();
    });

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
}

function capturarDatos(){
    const txtName = document.getElementById("txtName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nombre = txtName.value.trim();
    if(!nombre) {
        alert("Ingrese el nombre de Usuario");
        return;
    };

    const mail = email.value.trim();
    if(!mail){
        alert("Ingrese el EMAIL");
        return;
    };

    const pass = password.value.trim();
    if(!pass){
        alert("Ingrese su contraseña");
        return;
    };

    const user = {
        nombre: nombre,
        email: mail,
        contrasenha: pass,
    };
    console.log(user);

    const craerJsonUsuario = JSON.stringify(user);
    console.log(craerJsonUsuario);
    localStorage.setItem("user", craerJsonUsuario);

    alert("Registro exitoso.")
    location.replace("./index.html");
};

function volverPagAnterior(){
    location.replace("./index.html");
};
