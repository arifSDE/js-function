const numvbers =[12,87,23,25,46];
const Evens=[];
for(const num of numvbers){
    // console.log(num)
    
    if(num%2===0){
        // console.log("Even",num)
        Evens.push(num)
    }
}




function getEvenNumbers(array){
    const evens=[];
    for(const num of array){
        if(num %2===0){
            evens.push(num);
            return evens;
        }
    }
}

const result=getEvenNumbers(numvbers);
console.log("result",result)