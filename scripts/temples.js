
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "&#10005;"; 
        } else {
            hamburger.innerHTML = "&#9776;"; 
        }
    });
});