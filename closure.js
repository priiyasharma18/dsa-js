// function main(){
// var name='priya'

//     return function(){
//         console.log(name)
//     }

// }

// let res=main()()

// console.log(res)

// currying in javascript 



// function add(a,b,c){
//     return a+b+c
// }

// console.log(add(2,3,4))


// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// let step1=add(2)
// let step2=step1(34 )
// let step3=step2(1000)
// console.log(step3)




// javascript currying is function currying where the function will only run when all the param are present
// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             return `sending email to ${to} with subject ${subject} with body ${body}`
//         }
//     }
// }
// let step1=sendAutoEmail("Priya Sharma")
// let step2=step1("Order is confirmed")
// let step3=step2("order is ready to be shipped!!!")
// console.log(step3)



function numberGenerator(){
     let num=1;
     function checkNum(){
        console.log(num) //1 
     }
     num++;  // 2 
     return checkNum;
}
var number=numberGenerator()
console.log(number())
