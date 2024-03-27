document.getElementById("Salir").addEventListener("click", function() {
    window.location.href = "Pagina-MoniUdem.html"
});

document.getElementById("CustomButton").addEventListener("click", function() {
    document.getElementById("Archivo").click()
});

document.getElementById("Archivo").addEventListener("change", function() {
    var fileInput = document.getElementById("Archivo");
    const selectedFile = fileInput.files[0];
    document.getElementById("Seleccion").innerText = selectedFile.name;

    localStorage.setItem("selectedFile", JSON.stringify(selectedFile));
});

