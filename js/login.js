document.getElementById("formLogin").addEventListener("submit", function (event) { //Se trabaja en el formulario, y se ejecuta la funcion cuando se da click en el boton
    event.preventDefault(); //Evita que se refresque la pagina al mandar los datos

    const correoLogin = document.getElementById("correoLogin").value; //Se obtiene el valor del input del correologin
    const contrasenaLogin = document.getElementById("contrasenaLogin").value; //Se obtiene el valor del input del contrasenalogin

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado")); //Se desencripta el localStorage y se almacenan los valores en la constante

//Condicional, si valor del input login es igual al valor del localStorage ejecutar lo siguiente 
    if (usuarioRegistrado.correo === correoLogin && usuarioRegistrado.contrasena === contrasenaLogin) {
        localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre); //Se guarda el valor del nombre en un localstorage bajo la clave "nombreUsuario"
        window.location.href = "saludo.html"; //Redirige al html 
    } else {
        alert("Correo o contraseña incorrectos."); //Si no se cumple el if, muestra esta alerta
    }
});
