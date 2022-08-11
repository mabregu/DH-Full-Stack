let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promesa1');
    }, 2000);
});
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa2');
    }, 1000);
});
let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa3');
    }, 1000);
});

Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        return resultados[3];
    })
    .then(promesa3 => {
        console.log(promesa3);
    })
    .catch(error => {
        console.log("Fallo la promesa", error);
    })
    .finally(() => {
        console.log('Finalizado');
    })
;