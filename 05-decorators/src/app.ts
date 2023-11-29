function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor(); // usar los valores de la clase dentro de la decorator function
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('LOGGIN - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Beto';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);

// ------------------------------------------------------------------------------------------------
function Log(target: any, propertyName: string | symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}