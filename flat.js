let arr=[1,[2,[3,[4,[5]]]]]

function flat(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
       
        if(typeof arr[i] == "number"){
            res.push(arr[i])
        }else if(Array.isArray(arr[i])){
             
             res= res.concat(flat(arr[i]));
        }
        
    }
    return res
}
console.log(flat(arr))