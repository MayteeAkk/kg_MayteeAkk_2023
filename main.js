//HashMap to reference what word to replace each number with(Also if the Number is Negative)
const numberConversion = new Map([
    ['-', 'negative'],
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

//Function to Convert the Numbers into Words(By Digit)
function numbertoWords(...arguments){
    let numbers = arguments;
    let main = [];
    //Loop to Go Through Each Number in the Array that is Passed
    for(let i = 0; i < numbers.length; i++){
        let temp = [];
        let numString = numbers[i].toString(); //Converts each Number to String
        let lenofNum = numString.length; //Find length of the Number we are looking at(e.g 52 = 2)
        //Loop Goes Through Each Digit
        for(let j = 0; j < lenofNum; j++){
            let word = numberConversion.get(numString[j]); //Access HashMap
            temp.push(word);
        }
        let combinedWords = temp.join('');
        main.push(combinedWords);
    }
    console.log(main);
}

numbertoWords(32,323,4543,53445,3424,3434,-23,53,42,31,23,14,11,334,10000000000000);
