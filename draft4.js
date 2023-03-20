function getNumber(binary) {
    // Write your code here
    // const number = binary.join('')
    let result = String(binary.data)

    while(binary.next !== null){
        binary = binary.next;
        result += binary.data;
        
    }

    return parseInt(result,2);
}


const a = getNumber([7,0,1,0,0,1,1])
console.log(a)