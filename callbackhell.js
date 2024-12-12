// call back hell

// situation in javascript where the callbacks are nested within each other to the degree where it is difficult 
// to read. 
// old patterns to handle asynchronous function

// solution

//use Promises and async and await to avoid call back hell

function task1(task2){
    setTimeout(()=>{
        console.log(" hey this is my first task")
        task2()
    },1000)
   
}
function task2(task3){
    setTimeout(()=>{
        console.log(" hey this is my second task")
        task3()
    },500)
}
function task3(task4){
    setTimeout(()=>{
        console.log(" hey this is my third task")
        task4()
    },3000)
}
function task4(task5){
    setTimeout(()=>{
        console.log(" hey this is my fouth task")
        task5()
    },1000)
}
function task5(callback){
    setTimeout(()=>{
        console.log(" hey this is my fifth task")
        callback()
    },1000)
    
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log(" all the tasks are completed")
                })
            })
        })
    })
})

