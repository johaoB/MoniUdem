document.getElementById("Ingreso").addEventListener("click", function() {
    window.location.href = "Pagina-MoniUdem.html"
});

document.getElementById("FormRegistro").addEventListener("submit", function(event) {
    event.preventDefault()

    var nombre = document.getElementsByName("Nombre")[0].value;
    var apellido = document.getElementsByName("Apellido")[0].value;
    var correo = document.getElementsByName("Correo")[0].value;
    var contraseña = document.getElementsByName("Contraseña")[0].value;
    var facultad = document.getElementsByName("Facultad")[0].value;
    var cargo = document.getElementsByName("Cargo")[0].value;


   /* const db = require('./database/db');

    db.connect();

    db.agregarUsuario(nombre, apellido, correo, contraseña, facultad, cargo)
  .then(results => {
    console.log('Usuario agregado con éxito:', results);
  })
  .catch(error => {
    console.error('Error al agregar usuario:', error);
  })
  .finally(() => {
    db.disconnect();
  }); */

  
  window.location.href = "Pagina-Moniudem.html" 
});
