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
    celda.style.backgroundColor = '#272727';
    celda.contentEditable = false;
  }
});



//*******************************
//Solución del crucigrama
//*******************************


//Definición de las respuestas
const respuestasCrucigrama = [
  { palabra: "ENSALADA", posiciones: [34, 35, 36, 37, 38, 39, 40, 41] }, // Fila específica
  { palabra: "PLATANO", posiciones: [56, 57, 58, 59, 60, 61, 62] }, 
  { palabra: "LECHE", posiciones: [57, 71, 85, 99, 113] }, // Columna específica
  { palabra: "ZANAHORIA", posiciones: [46, 60, 74, 88, 102, 116, 130, 144, 158] }, 
  { palabra: "QUESO", posiciones: [6, 20, 34, 48, 62] }, 
  { palabra: "ARROZ", posiciones: [37, 51, 65, 79, 93] }, 
  { palabra: "NARANJA", posiciones: [25, 39, 53, 67, 81, 95, 109] }
];



//*******************************
//Numeración palabras
//*******************************

// Agregar numeración a las primeras celdas de cada palabra sin afectar respuestas
respuestasCrucigrama.forEach(({ posiciones }, index) => {
  const primeraCelda = celdas[posiciones[0]]; // Obtiene la primera celda de la palabra
  primeraCelda.setAttribute("data-pista", index + 1); // Agrega el número como atributo
});



//*******************************
//Validación de respuestas
//*******************************


function verificarRespuestas() {
  let correcto = true;

  respuestasCrucigrama.forEach(({ palabra, posiciones }) => {
    let palabraUsuario = posiciones.map(index => celdas[index].textContent.trim().toUpperCase()).join('');
    
    if (palabraUsuario !== palabra) {
      posiciones.forEach(index => celdas[index].style.backgroundColor = '#dd6767'); // Marcar en rojo
      correcto = false;
    } else {
      posiciones.forEach(index => celdas[index].style.backgroundColor = '#8fda8f'); // Verde si es correcta
    }
  });

  if (correcto) {
    alert('¡Felicidades! Has resuelto el crucigrama.');
  }
}