// call method sets value for "this" keyword 

let name={
    first:"Priya",
    last:"sharma"
}

let name2={
    first:"Allu",
     last:"Arjun"
}

let greet =function (hometown){
    console.log(this.first + " "+ this.last  +" "+ hometown)
}

greet.call(name,"odisha")
 greet.call(name2,"UP")

 //apply  it passes the argument by array

 greet.apply(name2,["karnatak"])
      

 //bind ( ) it will return a function and is similar to call method ..this function can be i
 // invoked later

 let greeting=greet.bind(name,"Delhi")
  greeting()