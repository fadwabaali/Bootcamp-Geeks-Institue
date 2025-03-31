// 🌟 Exercise 1 : Comparison

const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        }else {
            reject(`${num} is greater than 10`);
        }
    })
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// 🌟 Exercise 2 : Promises

// 🌟 Exercise 2 : Promises

const success = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success!');
        }, 4000); 
    });
};

success()
    .then(result => console.log(result)) 
    .catch(error => console.log(error));

// 🌟 Exercise 3 : Resolve & Reject

const resPromise = Promise.resolve(3)

resPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

const rejPromise = Promise.reject('Boo!')

rejPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));