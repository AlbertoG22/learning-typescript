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
function merge<T extends {}, U>( objA: T, objB: U ) {
    return Object.assign( objA, objB );
}

const mergedObj = merge({name: 'Alberto'}, {age: 24});
const mergedObj2 = merge({name: 'Alberto', hobbies: ['Sports']}, {age: 24});
console.log(mergedObj2);
console.log(mergedObj.name);