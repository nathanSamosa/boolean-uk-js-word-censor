const string = prompt("Please input a sentence");
const blam = prompt("enter the words you would like to center, separated by a blank space");
const censor = prompt("enter how you would like to censor the words");

const textArr = string.split(" ");
const blamArr = blam.split(" ");

console.log(textArr);
console.log(blamArr);
var censorCount = 0;

for (i = 0; i < textArr.length; i++) {
    for(j = 0; j < blamArr.length; j++) {
        if (textArr[i] == blamArr[j]) {
            console.log("censor!");
            textArr[i] = censor;
            censorCount++;
        }    
    }   
}

console.log(textArr);

const stringNew = textArr.join(" ");
console.log(stringNew);
console.log("Number of words censored: " + censorCount);