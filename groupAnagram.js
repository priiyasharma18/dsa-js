

let arr = [1,2]
let k = 2;
let map = new Map()
let res = []
var topKFrequent = function (arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    console.log(map)
    //we need to sort the map with most frequent element
    map.forEach((val, key) => {
        if (val <= k) {
            res.push(key)
        }
    })
    return res
};
console.log(topKFrequent(arr, k))

//this problem needs different approach