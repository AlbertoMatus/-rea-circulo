//Aquí declaramos la variable const de PI
const PI = 3.1416;

//Aquí declaramos la constante radio con el valor 5
let radio = 5;

//En esta parte se hace el calculo del área del circulo
let area = PI * (radio ** 2);

//En esta parte se eimprime el resultado del área
console.log("El área del circulo es: " + area);

//En este apartado se intenta renombrar la constante PI con el valor de área
PI = area;

/*
Aquí se intenta imprimir ese renombramiento, 
marcando un error que no permite renombrar esta variable debido a que previamente fue nombrada como constante
*/
console.log(PI);