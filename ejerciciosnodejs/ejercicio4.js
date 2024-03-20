const os = require('os');
/*Confeccionar un programa que requiera el módulo 'os' para recuperar el espacio libre de memoria. Mostrar inicialmente el epacio libre mediante el método freemem()
Luego crear un vector y mediante el método push almacenar 1000000 de enteros. Mostrar luego de la creación y carga del vector la cantidad de espacio libre.

Llamar al archivo ejercicio4.js
*/


console.log('Espacio libre inicial es de', os.freemem(), 'Bytes');

const vector = [];
for (let i = 0; i < 1000000; i++) {
    vector.push(i);
}

console.log('Espacio libre después de cargar el vector es de', os.freemem(), 'Bytes');
