// // const names: any[] = [];
// const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//         // resolve(50); // no es posible
//     }, 2000);
// });

// promise.then(data => {
//     data.split('');
// })


// ---------------------------- Generic Function ----------------------------
function merge<T extends {}, U extends object>( objA: T, objB: U ) {
    return Object.assign( objA, objB );
}

const mergedObj = merge({name: 'Alberto'}, {age: 24});
const mergedObj2 = merge({name: 'Alberto', hobbies: ['Sports']}, {age: 24});
console.log(mergedObj2);
console.log(mergedObj.name);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}
// extractAndConvert({}, 'name'); // no es posible porque no hay property name en el objeto
extractAndConvert({ name: 'Beto' }, 'name');