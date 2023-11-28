// const names: any[] = [];
const names: Array<string> = [];
names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
        // resolve(50); // no es posible
    }, 2000);
});

promise.then(data => {
    data.split('');
})