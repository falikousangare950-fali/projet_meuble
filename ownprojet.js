const starting = document.querySelector(".starting");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 1) {
        starting.style.position = "fixed";
        starting.style.top = "0";
        starting.style.left = "0";
        starting.style.width = "100%";
        starting.style.backgroundColor = "black"; // Ajustez selon votre design
        starting.style.zIndex = "1000"; // Pour s'assurer qu'il reste au-dessus du reste
    } else {
        starting.style.position = "static";
        starting.style.backgroundColor = ""; 
    }
});