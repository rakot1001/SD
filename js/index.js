"use strict";

/* Создать массив из 10 чисел. Числа 0,2,4,6,8 и т.д.
Двумя разными циклами перебрать масисив, увеличив каждый элемент на 1 */

// const arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];

// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
//   console.log(arr[i]);
// }

// arr.forEach(arr=>{
//   console.log(arr);
// })

// for (let ar of arr) {
//   ar += 1;
//   console.log(ar);
// }
////////////////////////
// arr.forEach((element) => {
//   console.log(++element);
// });
///////////////////
/* Всплывающее окно. В нем нужно ввести число. Второе всплувающее окно. Вводим слово. К этому слову нужно дописать в конец столько
воскл. знаков, сколько в этом числе
4
abc
abc!!!!*/

// const input1 = +prompt("Введите число");
// let input2 = prompt("Введите слово:");

// function getExpr(input1, input2) {
//   if (input1.isNaN) {
//     throw new TypeError("Not a number");
//   }
//   const expr = "!";
//   for (let i = 0; i < input1; i++) {
//     input2 = input2.concat(expr);
//   }
//   return input2;
// }
// const res = getExpr(input1, input2);
// console.log(res);
/*Создать мапу, в которой ключ - название города
, а значение - численность населения млн
Найти город с самым численным населением*/

// const map = new Map();
// map.set("Днепр", 10000);
// map.set("Запорожье", 12000);
// map.set("Львов", 11000);
// let arr2 = [];
// arr2 = Array.from(map.values());
// let res = Math.max.apply(null, arr2);

// console.log(res);

// event=>node=>myArray
