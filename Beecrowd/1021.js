// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
// var data = lines.shift().split(" ");

// let money = parseInt(data[0]);

const notes = [100,50,20,10,5,2,1,0.50,0.25,0.10,0.5,0.01];
const totalValue = 576.73;
const calculate = (notes,value) =>{
    let result;
    notes.forEach(element => {
        result = value / element|0;
        if(element == 100){
            console.log('NOTAS:')
        }else if(element == 1){
            console.log('MOEDAS: ')
        }
        console.log(`${result} nota(s) de R$ ${element}`);
        value %= element;
    });
}

calculate(notes,totalValue);