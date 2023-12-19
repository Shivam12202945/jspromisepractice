const promiseone= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("this is the promiese");
        resolve();
    },1000)
});
promiseone.then(()=>{
    console.log("promise is fulfilled");
}).catch(()=>{
    console.log("promise is rejected");
    console.log("this is the second commit");
}); 
console.log("here are the some changes for the second commit for this git");

