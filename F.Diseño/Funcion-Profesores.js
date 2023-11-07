document.getElementById("Salir").addEventListener("click", function() {
    window.location.href = "Pagina-MoniUdem.html"
});

document.getElementById("Revisar").addEventListener("click", function() {
    var selectedFile = localStorage.getItem("selectedFile");

    if (selectedFile) {
        selectedFile = JSON.parse(selectedFile);
        var pdfBlob = new Blob([selectedFile], { type: "application/pdf" });
        var fileURL = URL.createObjectURL(pdfBlob);
        var newWindow = window.open(fileURL, "_blank");
    } else {
        console.log("Ningún archivo seleccionado.");
    }
});

