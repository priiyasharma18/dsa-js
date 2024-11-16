// const user={};

// user.name="priya";
// user.email='priya@gmail.com'
// user.age="23"
// user.gender='female'
// console.log(user)

// let req={}

// req.user=user
// console.log(req)
// contains duplicate 2
let arr=[1,2,3,1]
let k=3

var containsNearbyDuplicate = function(arr, k) {
   let map=new Map()
    for(let i=0;i<arr.length;i++){
      
        if(map.has(arr[i])){
           let diff= i-map.get(arr[i])
           if(diff<=k){
            return true
           }
        }
        map.set(arr[i],i)
    }
    return false
    
}
console.log(containsNearbyDuplicate(arr,k))