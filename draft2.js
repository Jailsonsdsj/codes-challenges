(function lonelyinteger(a) {

    let uniqueElement;
    const arr = [1,2,5,2,3,3,4,5,4]
   
    arr.sort((a,b)=> a-b)
    
    for(let i=1; i<=arr.length; i++){
       if((arr[0] != arr[1])){
            uniqueElement = arr[0]
            break
       }else if((arr[i] != arr[i-1]) && (arr[i] != arr[i+1])){
            uniqueElement = arr[i]
            break;
        }
    }
    return uniqueElement;

 })()
 