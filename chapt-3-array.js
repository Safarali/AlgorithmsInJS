//This Chapter focuses on Arrays

// Insert At

function insertAt(arr, pos, val) {
    arr.push(val);
    var temp;
    for(var i = arr.length-1; i > pos; i --){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}


// Push the value to front. Use just push method.

function pushFront(arr, num) {
    arr.push(num);
    var temp;
    for(var i = arr.length-1; i > 0; i --){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}


// Remove from the front. Use just pop method;

function popFront(arr) {
    var temp;
    for(var i = 0; i < arr.length-1; i ++){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr.pop();
}


//  Remove At

function removeAt(arr, pos) {
    var temp;

    for(var i = pos; i < arr.length-1; i ++){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

// Swap Pairs

function swapPairs(arr) {
    if(arr.length % 2 === 0){
        var size = arr.length;
    }
    else {
        var size = arr.length-1;
    }
    var temp;
    for(var i = 0; i < size-1; i += 2){
        temp = arr[i];

        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

//removeDuplicates

function removeDuplicates(arr) {
    var uniq = [];

    for(var i = 0; i < arr.length; i ++){
        if(uniq.indexOf(arr[i]) === -1){
            uniq.push(arr[i]);
        }
    }
    return uniq;
}


//===== Min to Front======//
function minToFront(arr) {
    var minPos = getMinPos(arr);

    for(var i = minPos; i > 0; i -- ){
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}
//it returns min value's position and use it in minToFront();
function getMinPos(arr) {
    var pos = 0;
    var min = arr[0];
    for(var i = 0; i < arr.length; i ++){
        if(min > arr[i]){
            min = arr[i];
            pos = i;
        }
    }
    return pos;
}


// Reverse Array in-place

function reverseArr(arr) {
    var halfSize = arr.length / 2;
    var temp;

    for(var i = 0; i < halfSize-1; i ++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}


// Rotate Array

function rotateArr(arr, shiftBy) {
    var rotated = [];
    for(var i = 0; i < arr.length; i ++){
        var newEle = arr[(i+shiftBy + 1) % arr.length];
        rotated.push(newEle);
    }
    return rotated;
}


// arrConcat

function arrConcat(arr, arr1) {
    var concatedArr =[];

    for(var i = 0; i < arr.length; i ++){
        concatedArr.push(arr[i]);
    }

    for(var i = 0; i < arr1.length; i ++){
        concatedArr.push(arr1[i]);
    }
    return concatedArr;
}


// Filter Range // Remove Range;
function filterRange(arr, min, max) {
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] > min && arr[i] < max){
            arr = removeAt(arr,i); // removeAt functin is the helper function which you can find in line # 42
            i -= 1;
        }
    }
    return arr;
}



// Remove Negatives
function removeNegtives(arr) {
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] < 0){
            arr = removeAt(arr, i); // removeAt functin is the helper function which you can find in line # 42
            i -= 1;
        }
    }
    return arr;
}


// Second to Last

function secondToLast(arr) {
    if(arr.length < 2){
        return null;
    }
    else {
        return arr[arr.length-2];
    }
}

// NthLargest;

function NthLargest(arr, n) {
    if(arr.length < n){
        return null;
    }
    var temp;
    for(var i = 0; i < arr.length; i ++){
        for(var j = i +1; j < arr.length; j ++){
            temp = arr[i];
            if(arr[i] > arr[j]){
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[arr.length-n];
}

// nth to Last;

function NthToLast(arr, n) {
    if (n > arr.length){
        return null;
    }
    return arr[arr.length-n];
}


// isCreditCardValid?

function isCreditCardValid(digits) {
    var sum = 0;

    if(isCardDigitsValid(digits)){
        var lastDigit = digits.pop();
        for(var i = digits.length-1; i >= 0; i --){
            if(i % 2 !== 0){
                digits[i] = digits[i] * 2;
                if(digits[i] > 9){
                    digits[i] -= 9;
                }
            }
            sum += digits[i];
        }
    } else {
        return false;
    }
    return((sum + lastDigit) % 10 === 0);
}

// Helper function: It checks if any digits of card more than 9? If so, it ruturns false right away. If not, true;
function isCardDigitsValid(digits) {
    for(var i = 0; i < digits.length; i ++){
        if(digits[i] > 9){
            return false;
        }
    }
    return true;
}

function shuffle(array) {

}


// Shuffle Array;
function shuffle(array) {
    var randomIndex, temp;
    for(var i = 0; i < array.length; i ++){
        randomIndex = Math.floor(Math.random() * i);
        temp = array[i];
        array[i] =  array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}


// Intermediate Sums

function intermediateSums(array, n) {
    var sum = 0;
    var idxCouter = 0;

    for(var i = 0; i < array.length; i ++){
        idxCouter += 1;
        if(idxCouter % n !== 0 && i !== array.length-1){
            sum += array[i];
        }
        else {
            sum += array[i];
            array = insertAt(array, i + 1, sum);  //insertAt function could be found on the top of the page
            sum = 0;
            idxCouter = 0;
            i += 1;
        }
    }
    return array;
}


// Double Trouble
function twinifyElements(arr) {
    for(var i = 0; i < arr.length; i ++){
        arr = insertAt(arr, i+1, arr[i]);  // //insertAt function could be found on the top of the page
        i += 1;
    }
    return arr;
}

// Zip it, by creating a new array;

function zipIt(arr, arr1) {
    var limit = arr.length
    if(arr.length >= arr1.length){
        limit = arr1.length
    }

    var zipped = [];
    for(var i = 0; i < limit; i ++){
        zipped.push(arr[i], arr1[i]);
    }

    var size = zipped.length / 2

    if(size === arr.length && size === arr1.length){
        return zipped;
    }
    else if(size === arr.length){
        for(var i = size; i < arr1.length; i ++){
            zipped.push(arr1[i]);
        }
    }
    else {
        for(var i = size; i < arr.length; i ++){
            zipped.push(arr[i]);
        }
    }
    return zipped;
}

 //f Zip it by mutating first array

 function zipIt1(arr, arr1) {
     var limit = arr.length;
     if(arr.length > arr1.length){
         limit = arr1.length;
     }
     var inserIdx = 1;
     for(var i = 0; i < limit; i ++){
         arr = insertAt(arr, inserIdx, arr1[i]);
         inserIdx += 2;
     }

     if(limit === arr.length/2){
         for(var i = limit; i < arr1.length; i ++){
             arr.push(arr1[i]);
         }
     }
     return arr;
 }
