document.getElementById("Salir").addEventListener("click", function() {
    window.location.href = "Pagina-MoniUdem.html"
});

/*document.getElementById("Revisar").addEventListener("click", function() {
    var selectedFile = localStorage.getItem("selectedFile");

    if (selectedFile) {
        selectedFile = JSON.parse(selectedFile);
        var pdfBlob = new Blob([selectedFile], { type: "application/pdf" });
        var fileURL = URL.createObjectURL(pdfBlob);
        var newWindow = window.open(fileURL, "_blank");
    } else {
        console.log("Ningún archivo seleccionado.");
    }
});*/

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
