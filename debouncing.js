let counter=0

const getData=()=>{
console.log('fetching the data....',counter++)
}
const debounce=(getData,d)=>{

    let timer ;
    return function  (...args){
        if(timer){
            clearTimeout(timer)
        }
        timer= setTimeout(function(){
          getData()
        },d)
    }

}
const betterFn=debounce(getData,1000)