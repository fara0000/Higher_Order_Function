//1.Количество символов между двумя буквами алфавита. Определение буквы по ее номеру в алфавите.
function getNumberOfSymbol (letter) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letterPosition = alphabet.indexOf(letter)+1;
    return letterPosition
}
console.log(getNumberOfSymbol("k"))

function getAverageNumber (num1, num2, num3) {
    if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
        return num1;
    } else if(num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {   
        return num2;
    } else {
        return num3;
    }
}
function getPositiveAndNegativeArr (arr) {
    let arrNegative = [];
    let arrPositive = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arrNegative.unshift(arr[i])
        } 
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arrPositive.push(arr[i])
        }
    }
    return `[[${arrNegative}],[${arrPositive}]]`
}
function getSumOfArray (arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++){
        result += arr[i]
    }
    return result;
}
function deleteElmOfArray (arr1,arr2) {
    for (i = 0; i < arr2.length; i++) {
        arr1.delete([arr2[i]])
    }
    return arr1;
}
console.log(deleteElmOfArray([1,2,3],[1,3]))
function getStringFromArray (arr) {
    let result = arr.toString();
    return `"${result}"`;
}
console.log(getStringFromArray([1,2,3,-1,32]))
function getBinaryCode (n) {
    if(n <= 0) { return ''}

}
function changeElements (arr) {
    
    let min = arr[0];
    let min_index = 0;
    let max = arr[0];
    let max_index = 0;

    for (let i = 0; i <= arr.length-1; i++){
        if (arr[i] < min) {
            min_index = i;
            min = arr[i];           
        }if (arr[i] > max) {
            max_index = i;
            max = arr[i];
        }
    }
    arr[min_index] = max;
    arr[max_index] = min;

    return arr;
}
console.log(changeElements([2,10,1]))
