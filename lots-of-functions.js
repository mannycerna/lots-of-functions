
/*
function name = sayHi
parameters: nameStr -> string(takes in a string type)

return string 

concatenation
interpolation
*/

function sayHi(name){
    let newStr = `Hi, ${name}`;
    return newStr;
}
console.log(sayHi("Greyson"));
console.log(sayHi("Jimmy"));
console.log(sayHi("Bob"));


/*
function name = bigString
parameters: 
str1 -> string(takes in a string type)
str2 -> string

return:
 - boolean (true if bigger) 
 - boolean (=)
 - string

concatenation
interpolation
*/

function bigString(str1,str2){
    // let str1 = "big";
    // let str2 = "bigger";

    if (str1.length > str2.length) {
        return str1;
        // return console.log(`${str1} greater ${str2}`);
    } else if (str2.length > str1.length){
        return str2;
        // return console.log(`${str2} greater ${str1}`);
    } else if (str1.length === str2.length){
        console.log(`String1 length: ${str1} = String2 length: ${str2}`);
    }

}
console.log(bigString("goodday", "goodbye"));
console.log(bigString("day", "night"));
console.log(bigString("taco", "tuesday"));

/*
function name = bigNumber
parameters: 
str1 -> number(takes in a number type)
str2 -> number

return:
 - boolean (greater > if true) 
 - boolean (=)
 - number

concatenation
interpolation
*/


function bigNumber(num1, num2){
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1){
        return num2;
    } else if (num1 === num2){
        console.log(`Num1: ${num1} = Num2: ${num2}`);
    }
}
console.log(bigNumber(2,10));
console.log(bigNumber(10,3));
console.log(bigNumber(10,10));



let myArray = [2,5,6,7,10,11];

function fiveMore(myArray) {
    for  (let i = 0; i < myArray.length; i++) {
        if(myArray[i] % 2 !== 0) {
            myArray[i] += 5;
        }
        // console.log(myArray[i]);
    
    }
console.log(myArray);

}
fiveMore(myArray);
fiveMore([10,12,22,35,40]);



let myArray1 = [2, 4, 6, 8, 10];
let sum = 0;
function arraySummer(myArray1) {
    for  (let i = 0; i < myArray1.length; i++) {
      sum += myArray1[i];
    //   console.log(sum);
    }
    console.log(sum);
}
arraySummer(myArray1);


function everyDivisible(number){
    for(let i = 1; i <= 100; i++){
        if (i % number === 0) {
            console.log(i); 
        }
    }
}
everyDivisible(7);

// 1st draft of solution below
// function everyDivisible(number){
//     let currentNbr = 100;
//     while (currentNbr >= number) {
//         // console.log(currentNbr)


//         if (currentNbr % number === 0) {
//             console.log(currentNbr);
//         }  

//         currentNbr--;
    
        
//     } 
// }

// everyDivisible(7);

