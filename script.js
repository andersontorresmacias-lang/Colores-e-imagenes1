function mostrarColor() {
    const color = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    cuadro.style.backgroundColor = color ? color : "transparent";
}

function mostrarVehiculo() {
    const vehiculo = document.getElementById("selectVehiculo").value;
    const cuadro = document.getElementById("cuadroVehiculo");

    const imagenes = {
        carro: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?w=400",
        moto: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?w=400",
        bicicleta: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?w=400"
    };

    if (imagenes[vehiculo]) {
        cuadro.innerHTML = `<img src="${imagenes[vehiculo]}" alt="${vehiculo}">`;
    } else {
        cuadro.innerHTML = "";
    }
}