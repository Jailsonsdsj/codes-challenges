// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
// var data = lines.shift().split(" ");

// let money = parseInt(data[0]);

const notes = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
const totalValue = 0.14;
const calculate = (notes, value) =>{
    let result;
    let coinType;

    notes.forEach(element => {
        //bitwise integer division
        result = value/element | 0;
        
        if(element == 100.00){
            console.log('NOTAS:')
            coinType = "nota"
        }else if(element == 1.00){
            console.log('MOEDAS: ')
            coinType = "moeda"
        }
        console.log(`${result} ${coinType}(s) de R$ ${element}`);
        value = (value%element).toFixed(2);
      
    });
}

calculate(notes, totalValue);

