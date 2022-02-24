// Import stylesheets

// Check Yourself! Week 3.

// Группа С =========================================================

// Задание №1 // ! done
// Четное или нечетное число. Пользователь вводит какое-то число (num).
// Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».
//Если пользователь вводит четное число, то вывести «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное".

// let num = prompt(`Введите число`);
// if (num % 2 === 0) {
//   console.log(`Число  + ${num} +  четное`);
// } else {
//   console.log(`Число " + ${num} + " нечетное`);
// }

// Задание №2 // ? changed
// При помощи цикла for выведите чётные числа от 2 до 20.

// for (let i = 2; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Задание №3 // ! done
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент при помощи метода массива.
// let arr = ["js", "css", "jq"];
// let newArr = arr.splice(0, 1);
// console.log(newArr);

// Группа B и А =====================================================

// Задание №1
// Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, т.е. введенное число это однозначное, двузначное или трехзначное и тд. А также положительное оно или отрицательное.
// Например, "Число " + num + " однозначное положительное". Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// Задание №2 // ! done
// Дан массив ["Apple", "Orange", "Banana", Pineapple, "Cherry"].
//Вывести в консоль самое длинное слово из массива и упорядочить массив по убыванию (по количеству символов).
// let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"];
// arr.sort((a, b) => b.length - a.length);
// console.log(arr);

// Задание №3 // ! done
// Создайте массив из чисел, затем пройдитесь по элементам массива и сложите все числа. Результат выведите в консоль.
// Пример: [1, 2, 3, 4, 5]
// Вывод: 15
// let num = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];  // sum = sum + arr[i]
// }
// console.log(sum);

// Задание №4 // ! done
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 3);
// console.log(newArr);

//

// Задание №5 // ? changed
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// console.warn("Task-5");
// let arr = ["#", "##", "###", "####", "#####", "######", "#######"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ? new one
// let num = "";
// for (let i = 1; i <= 7; i++) {
//   num += "#";
//   console.log(num);
// }
// Группа A =========================================================

// Задание №6 // ! done
// Дан массив ["Life", "is", "hard"]. С помощью метода splice замените слово "hard" на "good".
// let arr = ["Life", "is", "hard"];
// arr.splice(2, 1, "good");
// console.log(arr);

// Задание №7 // ! done
// Используя методы splice и push напишите программу, котоая переставляет первый элемент массива в конец того же массива.
// Пример ввода: ["один","два","три","четыре"]
// Пример вывода: ["два","три","четыре","один"]
// let arr = ["один", "два", "три", "четыре"];
// arr.splice(0, 1);
// arr.push("один");
// console.log(arr);

// function checkTask() {
//   return "Привет, JavaScript!";
// }
// console.log(checkTask());
// let age = 30;
// function checkTask(age) {
//   if (age >= 18) {
//     return "Добро пожаловать";
//   } else {
//     return "Вход запрещен ";
//   }
// }
// checkTask(30);

// function checkTask(name, letter) {
//   name = name.split("");
//   let count = 0;
//   for (let i = 0; i < name.length; i++) {
//     if (name[i] == letter) {
//       count++;
//     }
//   }
//   return console.log(count);
// }
// checkTask("hello", "l");

// function checkTask(num1) {
//   for (let i = 1; i < 6; i++) {
//     if (i * 1 === 0) {
//       return console.log(num1);
//     }
//   }
// }
// console.log(checkTask([i]));

// function factorial(n) {
//   let result = 6;
//   while (n) {
//     result *= n++;
//   }
//   return result;
// }
// console.log(factorial());
// function checkTask(num1) {
//   tot = num1;
//   for (let i = num1 - 1; i > 1; --i) {
//     tot *= i;
//   }
//   return console.log(tot);
// }
// checkTask(5);

// function checktask(x, y) {
//   let array = [];
//   for (let i = x; i <= y; i++) array.push(i);
//   return array;
// }
// checktask(5, 10);

// function checkTask(myString) {
//   myString.split("");
//   let str = myString.split("").reverse().join("");
//   if (myString === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkTask("довод"));
