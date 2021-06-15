function toggleLeer() {
    var leerMasContent = document.getElementById("leerMasContent")
    var leerMas = document.getElementById("leerMas")
    if (leerMasContent.style.display === "block") {
        leerMasContent.style.display = "none";
        leerMas.textContent = "Leer más...";
    }else {
        leerMasContent.style.display = "block";
        leerMas.textContent = "Leer menos...";
    }
}
function mostrarCategoria(type) {
    var mascotasElement= document.getElementById("mascotas");
    var paseosElement= document.getElementById("paseos");
    var hobbiesElement= document.getElementById("hobbies");

    var mascotasBtnElement = document.getElementById("mascotas-btn");
    var paseosBtnElement = document.getElementById("paseos-btn");
    var hobbiesBtnElement = document.getElementById("hobbies-btn");
    switch (type) {
        case "mascotas":
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "none";
            mascotasElement.style.display = "block";

            paseosBtnElement.style.backgroundColor = "rgb(247, 166, 129)";
            hobbiesBtnElement.style.backgroundColor = "rgb(247, 166, 129)";
            mascotasBtnElement.style.backgroundColor = "rgba(106, 106, 245, 0.527)";
            break;
        case "paseos":
            hobbiesElement.style.display = "none";
            mascotasElement.style.display = "none";
            paseosElement.style.display = "block";
            
            mascotasBtnElement.style.backgroundColor = "rgb(247, 166, 129)";
            hobbiesBtnElement.style.backgroundColor = "rgb(247, 166, 129)";
            paseosBtnElement.style.backgroundColor = "rgba(106, 106, 245, 0.527)";            
            break;
        default:
            mascotasElement.style.display = "none";
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "block";

            paseosBtnElement.style.backgroundColor = "rgb(247, 166, 129)";
            mascotasBtnElement.style.backgroundColor = "rgb(247, 166, 129)";
            hobbiesBtnElement.style.backgroundColor = "rgba(106, 106, 245, 0.527)";
            break;
    }
}