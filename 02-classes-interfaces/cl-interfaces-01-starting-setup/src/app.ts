interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30
    
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;
user1 = new Person('Beto');
// user1.name = 'Alberto'; // no es posible por "read-only property"

user1.greet('Hi there, I am');
console.log(user1);