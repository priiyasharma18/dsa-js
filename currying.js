
function add(a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

let res=add(2)(3)(4)
console.log(res)


function sendEmail(to){
    return function (subject){
        return function (body){
            console.log(`sending email ${to} with regarding ${subject} and for ${body}`)
        }
    }
}

let step1=sendEmail("Priya")
 let step2=step1("to accept the offer letter  ")
let step3=step2("to join our company")
//console.log(step3)