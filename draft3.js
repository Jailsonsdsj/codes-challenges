function findCompletePrefixes(names, query) {
    // Write your code here
    const result = []
    let count = 0;
    names.sort()

    query.forEach((query) =>{
        names.forEach((name)=>{
            if((name.substring(0,query.length) === query) && (query.length !== name.length)){
                count++
            }
        })
        result.push(count)
        count=0

    })
    return result
  
  
}

const names = ['steve','stevens','danny','steves','dan','john','johnny','joe','alex','alexander']
const query  = ['steve','alex','dan']

const a = findCompletePrefixes(names, query)
console.log(a)
