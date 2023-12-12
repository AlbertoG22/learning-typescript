/* se instaló un 'translation type package' (@types/lodash), el cual sirve como traducción de 
librerías de JS, para poder usarlas en TS */
import _ from 'lodash';
import 'reflect-metadata';

import { plainToClass } from 'class-transformer';

/* 'declare' le permite a TS declarar features o variables que sabemos que existen, 
o hacerle saber a TS sobre variables globales que algunos paquetes incluyen, 
mismas que TS no puede saber que existen, pero nosotros como developers sí */
declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);


// --------------------------------------------------------------------------------------------
import { Product } from './product.model';
import { validate } from 'class-validator';


const products = [
    { title: 'A carpet', price: 29.99 },
    { title: 'A book', price: 10.99 }
];

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if(errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

// la función 'plainToClass' hace lo anterior, no se ocupan types, ya que trabaja con vanilla JS
const loadedProducts = plainToClass(Product, products);

for(const prod of loadedProducts) {
    console.log(prod.getInformation());
}

const p1 = new Product('A book', 12.99);
console.log(p1.getInformation());