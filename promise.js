console.log('promise chaining')

 //promise -> An object that manages asynchronous oprerations 
            // wrap the promis object in the {asynchronous code}
            // I promise to return a value
            // PENDING -> RESOLVE AND REJECT
//            new Promise((resolve,reject)=>{asynchronous code})

// do theese chores in order

//1- walk the dog outside
//2- clean the kitchen 
//3- take out the trash
function cleanKitchen(trash){
    setTimeout(()=>{
     console.log("cooked food and cleaned the kitchen.")
     trash()
    },5000)
}

function walkDog(cleanKitchen){
        setTimeout(()=>{
            console.log("Walked the dog in the morning.")
            cleanKitchen()
           },1000)
 
}

function trash(callback){
    setTimeout(()=>{
     console.log("Throw the trash outside.")
     callback()
    },5000)
}

 walkDog(()=>{
    cleanKitchen(()=>{
        trash(()=>{
            console.log("all the tasks are comleted ")
        })
    })
 })  
 //this is promise