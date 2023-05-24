// ------------------------------------
// promise (no meaning)

// const promise = new Promise((resolve, reject) => {
//   let isTrue = true;
//   if (isTrue) {
//     resolve(1);
//   } else {
//     reject(0);
//   }
// });

// console.log(promise);

// promise.then(
//     result => console.log(result),
//     error => console.error(error)
// );

// care only for success
// promise.then(
//     result => console.log(result),
// );

// care only for error
// promise.then(
//     null,
//     error => console.log('Error... ' + error),
// );

// promise
//   .then(result => console.log(result))
//   .catch(error => console.log('Error... ' + error))
//   .finally(() => console.log('Housekeeping'));

// ------------------------------------
// Asynchronous Simulation --> "Success", "Fail"

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Success') , Math.floor(Math.random() * 3000));
//     setTimeout(() => reject('Fail'), Math.floor(Math.random() * 3000));
// });

// promise
//   .then(result => console.log('Result: ' + result))
//   .catch(error => console.error('Error: ' + error));

// console.log("code execution continues...");

// ------------------------------------
// Chain
// new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
// // .catch() ....
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
//     .catch(error => console.error('Error...'));


// ------------------------------------
// async - await  -- ES7
// async --> return a promise -- always
// async function f(){
//     return 1;
// }

// f().then(console.log);

async function f(){
  const promise = new Promise((resolve, reject) => resolve(1));
  let result = await promise;
  console.log(result);
}

f()
console.log("code execution continues...");