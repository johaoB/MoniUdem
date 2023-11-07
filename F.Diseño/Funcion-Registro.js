document.getElementById("Ingreso").addEventListener("click", function() {
    window.location.href = "Pagina-MoniUdem.html"
});

/*import {initializeApp} from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAahq_52ZAly5xM2kGzxJkXSM1lQ4gL_9w",
    authDomain: "moniudem.firebaseapp.com",
    databaseURL: "https://moniudem-default-rtdb.firebaseio.com",
    projectId: "moniudem",
    storageBucket: "moniudem.appspot.com",
    messagingSenderId: "690751567190",
};
const app = initializeApp(firebaseConfig);
const database = app.database();
const ref = database.ref("https://moniudem-default-rtdb.firebaseio.com/");*/

document.getElementById("FormRegistro").addEventListener("submit", function(event) {
    event.preventDefault()

    var nombre = document.getElementsByName("Nombre").value;
    var apellido = document.getElementsByName("Apellido").value;
    var correo = document.getElementsByName("Correo").value;
    var contraseña = document.getElementsByName("Contraseña").value;
    var facultad = document.getElementsByName("Facultad").value;
    var cargo = document.getElementsByName("Cargo").value;

    console.log("hola")
});