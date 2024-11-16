/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let profit=0;
      let maxprofit=0
           let p1=0;
           let p2=p1+1
           while(  p2<arr.length){
               if(arr[p2]>arr[p1]){
                   profit=arr[p2]-arr[p1]
                   maxprofit=Math.max(profit,maxprofit)
                   p2++
               }else if(arr[p2]<arr[p1]){
                   p1=p2
                   p2++
                   
               }else{
                   p2++
               }
           }
       return maxprofit
        
   };
   

  