//Crear la lista a mostrar
const ships = ['Submarino', 'Acorazado', 'Patrullero', 'Portaaviones', 'Destructor'];
//Matriz tablero juego
let matrix = [
    new Array(10),
];
//Barcos
const ship1 = [[1, 1],
[1, 1],
[1, 1]];

const ship2 = [[1],
[1],
[1],
[1]];

const ship3 = [[1, 1, 1],
[1, 1, 1]];

const ship4 = [[1, 1, 1, 1, 1]];

const ship5 = [[1, 1],
[1, 1]]

//Array con las matrices de los barcos
const totalShips = [ship1, ship2, ship3, ship4, ship5];

//Eventos que cargan instantaneamente
document.addEventListener('DOMContentLoaded', function () {
    showShips();
    createTable();
});

function sendPosition() {
    let currentPosition = document.getElementById('position').value;
    console.log(currentPosition);
}

function showShips() {
    //Obtener la referencia al elemento ol
    let shipsList = document.getElementById('ships-list');
    //Iterar sobre el array y agregar cada elemento de la lista
    ships.forEach(function (ship) {
        //Crear un elemento li
        const li = document.createElement('li');
        //asignar a li el contenido de ship
        li.textContent = ship;
        //agregar elemento de shipList a la lista ordenada
        shipsList.appendChild(li);
    })
}
function createTable() {
    //Obtener la referencia de la tabla
    let board = document.getElementById('battlefield');
    //Crear filas y columnas de la tabla
    for (let i = 0; i < 11; i++) {
        let row = board.insertRow(i);
        matrix[i] = [];

        for (let j = 0; j < 11; j++) {
            let cell = row.insertCell(j);

            // Asignar letras a las columnas
            if (i === 0 && j > 0) {
                cell.textContent = String.fromCharCode(64 + j);
                cell.classList.add('column-header');
                matrix[i][j] = 1;
            }
            // Asignar números a las filas
            else if (j === 0 && i > 0) {
                cell.textContent = i;
                cell.classList.add('row-header');
                matrix[i][j] = 1;
            }
            else {
                //Enviar a la matrix
                matrix[i][j] = 0;
                cell.id = String.fromCharCode(64 + j) + i
                cell.classList.add('initial-color');
            }
        }
    }
    alternCordenade();
    alternPositions();
}

function alternPositions() {
    // Generar una posición aleatoria
    //Rango de la A a la J mayusculas es 65 a 74 en charcode
    let row = Math.floor(Math.random() * 10) + 65;
    //Rango del 1 al 10 aleatorio
    let col = Math.floor(Math.random() * 10) + 1;

    //De acuerdo a la coorenada aleatoria pintamos el cuadro :)
    document.querySelector(`#${String.fromCharCode(row) + col}`).style.backgroundColor = 'red'
    availablePosition(totalShips);
}

function alternCordenade() {
    let xPosition = Math.floor(Math.random() * 10+1);
    let yPosition = Math.floor(Math.random() * 10+1);
    let position = [xPosition, yPosition];
    console.log(position,matrix);
    matrix[xPosition][yPosition]=1;
    console.log(matrix);
}

function availablePosition(totalShips) {
    for (let ship of totalShips) {
        sizeShip(ship);
        console.log(sizeShip(ship));
    }
}

function sizeShip(ship) {
    //Altura de filas que ocupa
    let heigthShip = ship.length;
    //Ancho en columnas que ocupa
    let widthShip = ship[0].length;
    let dimensions = [heigthShip, widthShip]
    return dimensions;
}

/*         // Verificar si la posición está ocupada por otro barco
if (posiciónOcupada(fila, columna, barcos)) {
posiciónDisponible = false;
break;
}

// Agregar la posición al barco
barco.posiciones.push({ fila, columna });

// Mover a la siguiente posición
columna++;
}

// Si la posición es válida, agregar el barco a la lista
if (posiciónDisponible) {
barcos.push(barco);
} else {
// Volver a generar posiciones para este barco
i--;
}


function posiciónOcupada(fila, columna, barcos) {
for (let barco of barcos) {
for (let posición of barco.posiciones) {
   if (posición.fila === fila && posición.columna === columna) {
       return true;
   }
}
}
return false;
}
*/




/* // Ejemplo de uso
const tamañoBarco = 3;
const numFilas = 10;
const numColumnas = 10;

const barcos = asignarPosicionesAleatorias(tamañoBarco, numFilas, numColumnas);
console.log(barcos); */


// Generar posiciones aleatorias para cada barco
/* for (let i = 1; i <= tamañoBarco; i++) {
    const barco = {
        tamaño: tamañoBarco,
        posiciones: []
    };

    // Generar una posición aleatoria
    let fila = Math.floor(Math.random() * numFilas) + 1;
    let columna = Math.floor(Math.random() * numColumnas) + 1;

    // Verificar si la posición está disponible
    let posiciónDisponible = true;

    for (let j = 0; j < tamañoBarco; j++) {
        // Verificar si la posición está ocupada por otro barco
        if (posiciónOcupada(fila, columna, barcos)) {
            posiciónDisponible = false;
            break;
        }

        // Agregar la posición al barco
        barco.posiciones.push({ fila, columna });

        // Mover a la siguiente posición
        columna++;
    }

    // Si la posición es válida, agregar el barco a la lista
    if (posiciónDisponible) {
        barcos.push(barco);
    } else {
        // Volver a generar posiciones para este barco
        i--;
    }
}


function posiciónOcupada(fila, columna, barcos) {
    for (let barco of barcos) {
        for (let posición of barco.posiciones) {
            if (posición.fila === fila && posición.columna === columna) {
                return true;
            }
        }
    }
    return false;
}

// Ejemplo de uso
const tamañoBarco = 3;
const numFilas = 10;
const numColumnas = 10;

const barcos = asignarPosicionesAleatorias(tamañoBarco, numFilas, numColumnas);
console.log(barcos);

function sendPosition() {
    let currentPosition = document.getElementById('position').value;

}
 */