document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".slider-nav a");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        indicators.forEach((indicator) => {
            indicator.classList.remove("active");
        });
        slides[index].style.display = "block";
        indicators[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 10000);
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const openModalButton = document.getElementById("olvido");
    const closeModalButton = document.querySelector(".close");
    const questionButton = document.getElementById("Question");

    openModalButton.addEventListener("click", function() {
      modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function() {
      modal.style.display = "none";
    });

    questionButton.addEventListener("click", function() {
      modal.style.display = "block";
    });

    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
});

document.getElementById("Registro").addEventListener("click", function() {
    window.location.href = "Pagina-Registro.html"
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "malejandra203@soyudemedellin.edu.co" && password === "mariaalejandra123") {
        window.location.href = "Pagina-Estudiantes.html";

    }else if (username === "mlopez027@udemedellin.edu.co" && password === "marcelalopez123") {
        window.location.href = "Pagina-Profesores.html";

    }else if (username === "cflorez071@soyudemedellin.edu.co" && password === "carlosflorez123") {
        window.location.href = "Pagina-Aspirantes.html";
    }
    else{
        showAlert("Las credenciales proporcionadas son incorrectas o el correo no está registrado en la página. Por favor, verifica tu información e intenta de nuevo.");
    }
});

document.getElementById("myModal").addEventListener("submit", function(event) {
    event.preventDefault()

    var email = document.getElementById("R-email")
    // falta la logica para enviar el email
});

function showAlert(message) {
    var customAlert = document.getElementById("customAlert");
    var alertMessage = document.getElementById("alertMessage");

    alertMessage.textContent = message;
    customAlert.style.display = "flex";

    customAlert.addEventListener("click", function() {
        customAlert.style.display = "none";
    });
}

document.getElementById("showPassword").addEventListener("click", function() {
    var passwordField = document.getElementById("password");
    var button = document.getElementById("showPassword")

    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordField.style.height = "30px";
        passwordField.style.width = "326px";
        passwordField.style.border = "5px";
        passwordField.style.borderRadius = "5px"
        passwordField.style.backgroundColor = "#33393d";
        passwordField.style.color = "white"
        passwordField.style.cursor = "pointer"
        button.style.backgroundColor = "transparent";
        button.classList.add("visiblePassword");
    } else {
        passwordField.type = "password";
        passwordField.style.height = "30px";
        passwordField.style.width = "326px";
        passwordField.style.border = "5px";
        passwordField.style.borderRadius = "5px";
        passwordField.style.backgroundColor = "#33393d";
        passwordField.style.cursor = "pointer";
        button.style.backgroundColor = "transparent";
        button.classList.remove("visiblePassword");
    }
});