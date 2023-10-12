//fetch('https://example.com').then().catch().finally() //then-> respon,catch->error,finally-> te sob chole ase
const promiseOne = new Promise(function(resolve, reject){  //resolve connected to dot then()
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})