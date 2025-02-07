const crucigrama = document.getElementById('crucigrama');

for (let i = 0; i < 182; i++) { // 14x13 = 182 celdas
  const celda = document.createElement('div');
  celda.classList.add('celda');
  celda.setAttribute('data-index', i);
  celda.contentEditable = true;
  crucigrama.appendChild(celda);
}


//Definiendo el Patrón del Crucigrama

const patron = [
  // 1 para celdas activas, 0 para celdas negras
//Renglón n
//  1  2  3  4  5  6  7  8  9  10 11 12 13 14  
//  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
//Renglón 1
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  
//Renglón 2
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
  
//Renglón 3
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  
//Renglón 4
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0,
  
//Renglón 5
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0,
  
//Renglón 6
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0,
  
  
 //Renglón 7
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0,
  
//Renglón 8
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  
//Renglón 9
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
//Renglón 10
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
//Renglón 11
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
//Renglón 12
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
//Renglón 13
//1  2  3  4  5  6  7  8  9  10 11 12 13 14
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
  // Añadir el patrón completo para las 182 o n celdas
];

// Aplicar el patrón a las celdas
const celdas = document.querySelectorAll('.celda');

celdas.forEach((celda, index) => {
  //Si la celda es de valor 0, el fondo se pone de color #000 (negro)
  //  y hace que no se pueda editar
  if (patron[index] === 0) {
    celda.style.backgroundColor = '#000';
    celda.contentEditable = false;
  }
});

//Validación de respuestas
/*
const respuestas = [
  // Colocar aquí las respuestas correctas en orden de las celdas
  'P', 'A', 'R', 'I', 'S', // Por ejemplo
  // Continúa con el resto
];

function verificarRespuestas() {
  let correcto = true;
  
  celdas.forEach((celda, index) => {
    if (patron[index] === 1) {
      const letraUsuario = celda.textContent.trim().toUpperCase();
      if (letraUsuario !== respuestas[index]) {
        celda.style.backgroundColor = '#f8d7da'; // Rojo claro
        correcto = false;
      } else {
        celda.style.backgroundColor = '#d4edda'; // Verde claro
      }
    }
  });
  
  if (correcto) {
    alert('¡Felicidades! Has resuelto el crucigrama.');
  }
}
*/
// Puedes añadir un botón para activar la verificación