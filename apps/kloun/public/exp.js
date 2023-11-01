function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${ms} ms`);
    }, ms);
  });
}

const promise1 = timeout(1000); // Resolves after 1 second
const promise2 = timeout(2000); // Resolves after 2 seconds
const promise3 = timeout(500); // Resolves after 500 ms

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
