/* se instaló un 'translation type package' (@types/lodash), el cual sirve como traducción de 
librerías de JS, para poder usarlas en TS */
import _ from 'lodash'; 

/* 'declare' le permite a TS declarar features o variables que sabemos que existen, 
o hacerle saber a TS sobre variables globales que algunos paquetes incluyen, 
mismas que TS no puede saber que existen, pero nosotros como developers sí */
declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);