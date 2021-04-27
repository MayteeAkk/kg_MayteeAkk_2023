let scriptArguments = process.argv.slice(2);

//HashMap to reference what word to replace each number with(Also if the Number is Negative)
const numberConversion = new Map([
    ['-', 'Negative'],
    ['0', 'Zero'],
    ['1', 'One'],
    ['2', 'Two'],
    ['3', 'Three'],
    ['4', 'Four'],
    ['5', 'Five'],
    ['6', 'Six'],
    ['7', 'Seven'],
    ['8', 'Eight'],
    ['9', 'Nine']
]);

//Function to Convert the Numbers into Words(By Digit)
function numbertoWords(){
    let numbers = scriptArguments;
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
    console.log(main.toString());
}

numbertoWords();
