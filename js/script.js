const ships = ['Submarino', 'Acorazado', 'Patrullero', 'Portaaviones', 'Destructor'];
document.addEventListener('DOMContentLoaded', function () {
    //Crear la lista a mostrar
    //Obtener la referencia al elemento ol
    let shipsList = document.getElementById('ships-list');
    //Iterar sobre el array y agregar cada elemento de la lista
    ships.forEach(function(ship){
        //Crear un elemento li
        const li =document.createElement('li');
        //asignar a li el contenido de ship
        li.textContent = ship;
        //agregar elemento de shipList a la lista ordenada
        shipsList.appendChild(li);
    })
});

let currentShip=0;
function sendPosition() {
    let currentPosition = document.getElementById('position').value;
    if(currentPosition<ships.length){
        console.log(currentPosition);
        currentShip++;
        showShip(currentShip);
    }
    else{
        alert('Ya ha ingresado todas las posiciones');
    }
}

function showShip(currentShip) {
    let shipsList = document.getElementById('ships-list');
    let listItem = shipsList.children[currentShip].textContent;
    console.log(listItem)
    let shipLabel = document.querySelector('.shipLabel');
    shipLabel.textContent = listItem;
    
    console.log(currentShip)
}