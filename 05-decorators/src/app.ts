function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('LOGGIN - PERSON')
class Person {
    name = 'Beto';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);