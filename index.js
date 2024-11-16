
// function borrowing 
// function can be borrowed by call method 


// let name={
//     firstName:"Virat",
//     secondName:"Kohli",
// }
// let printName=function(hometown){
//     console.log(this.firstName+ "  "+this.secondName+"  "+hometown)
// }
// //printName();
// let name2={
//     firstName:"Priya",
//     secondName:"Sharma"
// }
// printName.call(name2,"Sundargarh")
// printName.call(name,"Mumbai")


//////topic///////
//checking the trust issue with set time out 

// concept -> the js is a single tread lanuage so when the global execution context is not emptied the set time out willl not execute


console.log("start")

setTimeout(function cb(){
console.log('inside the set time out')
},5000)

let startTime=new Date().getTime()
//console.log(startTime)
let endTime=startTime
while(endTime<startTime+10000){
endTime=new Date().getTime()
}
console.log("while expires")
 
   


