
const filledOrders = [10,30,1,3,4,5,6]
const maxValue = 40



const checkValue = (arr,value) =>{
    let sum = 0;
    const maxValue = value

    arr.sort((a, b) => a - b);

    arr.forEach((item)=>{
        if(item <= value){
            sum ++;
            value -= item;
        }
    });
   
    return sum
}

const result = checkValue(filledOrders, maxValue);
console.log(result);


