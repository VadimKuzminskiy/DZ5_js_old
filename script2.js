//        Найти сумму и количество положительных элементов.
//        Найти минимальный элемент массива.
//        Найти максимальный элемент массива.
//        Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
//  Найти количество четных положительных элементов.
//  Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
//        Найти определить количество элементов, равных 4.


let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let arr2 = [22, 88, 99, 0, 34];
let positiveSum1 = 0;
let positiveCount1 = 0;
let negativeCount1 = 0;
let fourCount1 = 0;
let min1 = arr[0];
let max1 = arr[0];
let evenPositiveSum1 = 0;
let evenPositiveCount1 =0;
let oddPositiveSum1 = 0;
let oddPositiveCount1 = 0;

function arrFun(array, positiveSum, positiveCount, negativeCount, fourCount, min, max, oddPositiveCount, oddPositiveSum, evenPositiveSum, evenPositiveCount){
    for(let i = 0; i < arr.length; i++) {
        if(array[i] > 0) {
            positiveSum += array[i];
            positiveCount++;

            if(arr[i] % 2 == 0){
            evenPositiveSum += array[i]; 
            evenPositiveCount++;
            } else {
            oddPositiveSum += array[i]; 
            oddPositiveCount++;
            }
        }
        
        if (array[i] === 4) {
            fourCount++;
          }

        if (array[i] < 0) {
            negativeCount++;
        }

        if (array[i] < min) {
            min = array[i];
          }

        if (array[i] > max) {
            max = array[i];
          }  
     
    }
    console.log("Сумма положительных элементов: " + positiveSum);
console.log("Количество положительных элементов: " + positiveCount);
console.log("Количество элементов, равных 4: " + fourCount);
console.log("Количество отрицательных элементов: " + negativeCount);
console.log("Минимальный элемент: " + min);
console.log("Максимальный элемент: " + max);
console.log("Количество четных положительных элементов: " + evenPositiveCount);
console.log("Сумма четных положительных элементов: " + evenPositiveSum);
console.log("Сумма нечетных положительных элементов: " + oddPositiveSum);
console.log("Количество нечетных положительных элементов: " + oddPositiveCount);
}

arrFun(arr, positiveSum1, positiveCount1, negativeCount1, fourCount1, min1, max1, oddPositiveCount1, oddPositiveSum1, evenPositiveCount1, evenPositiveSum1);

arrFun(arr2, positiveSum1, positiveCount1, negativeCount1, fourCount1, min1, max1, oddPositiveCount1, oddPositiveSum1, evenPositiveCount1, evenPositiveSum1);
