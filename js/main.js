// При загрузке страницы всплывают последовательные окна которые сначала предлагает ввести первое число, потом второе. После этого в коде мы суммируем два эти числа и если сумма чисел парное число, записываем его в один массив, если не парное в другой. Задаем вопрос с двумя числами пока один из массивов не станет длинной в 5 элементов. Массив победитель вывести в консоль и подписать какие числа выиграли.

// Последовательность выполнения
// 1 Создать 2 переменные в которые будут присваиваться эти два числа, потом эти числа суммируются.
// 2 написать проверку чисел на парный и непарный результат суммы в зависимости от этого пушим в нужный массив.
// 3 Обернуть код  цикл чтобы этот код работал то тех пор пока один из массивов не станет длинной 5.
// 4 Добавить логику завершения, как только длина одного из массивов 5, вывести победителя.

let a 
let b
let x
let arrEven = [];
let arrOdd = [];

do { 
	a = Number(prompt('Введите первое число', ''));
	b = Number(prompt('Введите второе число', ''));
	x = a + b;
	if (x % 2 == 0) {
		arrEven.push(x);
	 } else {
		arrOdd.push(x);
	 }; 
} while(arrEven.length > 0 && arrEven.length < 5 || arrOdd.length > 0 && arrOdd.length < 5);

console.log(arrEven, arrOdd);


	 if (arrEven.length === 5) {
		alert(`Победитель ${arrEven}`)
 } else {
		alert(`Победитель ${arrOdd}`)
 }



