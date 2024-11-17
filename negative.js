// Move all negative numbers to beginning and positive to end with constant extra space
// Last 

let arr=[-3,2,-1,4,5]

let i=0;
let j=arr.length-1;
while(i<=j){
    if(arr[i]<0){
        i++
    }else if(arr[i]>0){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        j--
        
    }
}
console.log(arr)

//maintain two pointer approach 
