// ключове слово імя змінної = значення
// let, const , var - ключові слова.
// const varName = "var name";
// const varname = "sd";

// const currentYear = 2023;
// console.log("Рік:", currentYear);

// const num = 10; //- тип даних number
// const str = "string"; // - тип даних string
// const bool = true; // - тип даних Boolean
// const selectedProduct = null; // - тип даних Null
// let username;
// console.log(username); // - тип даних undefined

// console.log("тип даних:", typeof selectedProduct);

// console.log()
// alert()

// alert("Ми викликали алерт!");

// const isYear = confirm("Зараз 2020 рік ?");
// console.log(isYear);

// const isYear = prompt("Зараз 2020 рік ?");
// console.log(typeof isYear, isYear);

// const x = "10.23px";
// const y = 10;

// console.log(x !== y);

// Додавання +
// Віднімання -
// Множення *
// Ділення /
// Остача від ділення %
// a>b i a<b - більше або меньше
// a>=b i a<=b - більше або дорівнює та  меньше або дорівнює
// a == b - рівність
// a === b - строга рівність
// a != b -  нерівність
// a !== b - строга нерівність

// let value = 9;
// value += 10; //Аналогічно запису value = value + 10
// console.log(value);

// NUMBER --------->
// Number.parseInt(x) - Парсить з рядка ціле число. 10
// Number.parseInt(x) - Парсить з рядка дробове число. 10.23
// console.log(Number.isNaN(y));

// const invalidNuber = Number("wewewe");
// console.log(Number.isNaN(invalidNuber));

// console.log(Math.floor(2.7)); //-2
// console.log(Math.ceil(1.2)); //-2
// console.log(Math.round(1.5)); повертає значення яке заокруглене до найближчого цілого .. 2
// console.log(Math.max(21, 22, 23, 24)); повертає найбільше число
// console.log(Math.min(11, 22, 33)); повертає найменьше число
// console.log(Math.pow(2, 4)); піднесення до степеня
// console.log(Math.random()); повертає рандомне число від 0 до 1
// console.log(Math.round(Math.random() * (10 - 1) + 1));

// STRING --------->
// const strr = "JavaScript";

// const message = "Banana " + "is" + " happy";
// // console.log(1 + +"20");
// ${вираз}

// const fruit = "Banana";
// const color = "yellow";
// const file = "index.js";

// const banana = ${fruit} is ${color};
// console.log(fruit.toLowerCase());
// console.log(file.endsWith(".js"));

// fruit.length - повертає нам кількість символі в рядкові //6
// fruit.toUpperCase() - переводить рядок у верхній регістр
// fruit.toLowerCase() - переводить рядок у нижній регістр
// banana.indexOf("is") - повертає позицію (індекс) якщо не знаходить тоді -1
// banana.includes("is") - перевіряє чи міститься в рядку підрядок
//

// ЛОГІЧНІ ОПЕРАТОРИ && || !

// вираз && вираз
// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// console.log(age > 20 && age < 30); // false

// вираз || вираз
// console.log(age < 40  age > 30); // true  false -> true

// !вираз
// const isOnline = true;
// const isOffline = !isOnline;
// console.log(!true); //-> false
// console.log(isOffline); //-> false

//Розгалуження

// if (умова) {}
// тіло
// }


//const isAge = 10
//if(isAge == 10) {
//   console.log('age = 10');
//}


//const isAge = 10
//if(isAge == 10) {
//    console.log('age = 10');
//} else {
//    console.log('age = ${isAge}');
//}

//const isAge = 10
//if(isAge == 10) {
//   console.log('age = 10');
//} else if {
//    console.log('age = ${isAge}');
//}

 //Вираз якщо умова правдива: вираз якщо умова хибна
//isAge === 10 ? console.log('age = 10') : console.log('age = ${isAge}');

// switch (значення) {
//     case значення:
//         інструкції
//         break;

//         case значення:
//         інструкції
//         break;

//     default:
//         break;
// }

// let cost 
// const subsciption = 'premium'

// switch (subsciption) {
//     case 'free':
//         cost = 0
//         break;

//         case 'pro':
//         cost = 100
//         break;

//         case 'premium':
//         cost = 500
//         break;

//     default: 
//     console.log(' Не вірний тип підписки! ')
//         break;
// }

// console.log("cost" ,cost)

//Область видимості змінних (varisble scope)

// const value = 5

// if(true) {
// console.log ("Блочна область видимості", value);
// let blockVar = 10;
// console.log ("Глобальна область видимості blockVar", blockvar);
// }

// console.log ("Глобальна область видимості blockvar", blockvar);

// console.log ("Глобальна область видимості", value);

// Цикли !

//  while(умова){
//  код циклу
// }

// let couter = 10

// while (couter < 10) {
//     console.log("counter:", couter)
//     couter += 1;
// }

// do {
//     console.log("counter:", couter)
//  couter += 1;
// } while (couter < 10);

// for (ініціалізація; умова; крок) {
//     тіло циклу 
// }

// for (let i = 0; i <= 20; i += 5) {
//     console.log(1);
//     if (i === 10) {
//         console.log('знайшли число 10, перериваємо виконання циклу' )
//         break;
// }


for (let i = 1; i <= 100; i += 1) {
       console.log(i);
       if (i === 50){
        console.log('знайшли число 50, перериваємо виконання циклу' )
        
       break;
}
}