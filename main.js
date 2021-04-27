//HashMap to reference what word to replace each number with
const numberConversion = new Map([
    ['0', 'zero'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine']
]);

function numbertoWords(){
    let numbers = arguments;
    let main = [];
    for(let i = 0; i < numbers.length; i++){
        let temp = [];
        let numString = numbers[i].toString();
        let lenofNum = numString.length;
        for(let j = 0; j < lenofNum; j++){
            let word = numberConversion.get(numString[j]);
            temp.push(word);
        }
        let combinedWords = temp.join('');
        main.push(combinedWords);
    }
    console.log(main);
}

numbertoWords(53,42,31,23,14,11,334);

