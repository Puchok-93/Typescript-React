/* 
	* 1.1 Базовые значения: числа, строки, логические значения
*/

// * Строки помещаются в '', "", ``
let userNameData: string = 'John';

// * Числами могут быть: 10, 0.5, 0.0001, -50, 4e10
let userAgeData: number = 30;

// * Логический тип: true / false
let isDeveloperData: boolean = true;

if(isDeveloperData) {
	// console.log(`This is true, ${userNameData} is developer and his ${userAgeData + 1} age!`)
}

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.2 Использование типов в функциях

	? Если функция ничего не возвращает (вывод в консоль, отправка данных на сервер, работа с DOM-деревом...), то возвращаемый тип будет void
	? Void это не только отсутствие возвращаемого значения, но и его полное игнорирование.
*/


//* Если функция ничего не возвращет, то тип указываем тип : void
function logMessageVoid(isDeveloper: boolean, userName: string, userAge: number): void {
	if(isDeveloper) {
		// console.log(`This is true, ${userName} is developer and his ${userAge + 1} age!`)
	}
}

//* Если функция что-то возвращет, и задается аннотация с типом возвращаемого значения, 
//* ts не может явно определить вернется ли значеие с указанным в аннотации типом, для таких случаев стоит произвести проверку
function logMessageString(isDeveloper: boolean, userName: string, userAge: number): string {
	let result: string;

	if(isDeveloper) {
		result = `This is true, ${userName} is developer and his ${userAge + 1} age!`;
	} else {
		result =`Error`
	}

	// console.log(result)
	return result
}

//* Пример со стрелочной функцией
const logMessageArrow = (isDeveloper: boolean, userName: string, userAge: number): string => {
	let result: string;

	if(isDeveloper) {
		result = `This is true, ${userName} is developer and his ${userAge + 1} age!`;
	} else {
		result =`Error`
	}

	// console.log(result)
	return result
}

logMessageVoid(isDeveloperData, userNameData, userAgeData);
logMessageString(isDeveloperData, userNameData, userAgeData);
logMessageArrow(isDeveloperData, userNameData, userAgeData);

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.3 Тип any

	? Тип - это дословно «любое значение». TS не может определить тип, с которым ему работать, 
	? не знает какие методы можно использовать, какие подсказки давать и когда сообщать об ошибках
*/


// * Примеры получения any
// * В JSON строке может быть что угодно и в любом виде. TS не знает, есть ли там свойство или метод smth и не подскажет вам об ошибке. 
// * Он вообще не может знать, что за тип получится в итоге парсинга”: строка, число, объект...
const userData = '{"isDeveloperData": true, "userNameData": 40, "userNameData": "John"}';

const userObg = JSON.parse(userData);

// * При создании пустой переменной 
let test; 

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.4 Самостоятельная работа

	? Задание
	const currRate = "1.05";

	const fetchCurr = (response) => {
		const data = JSON.parse(response);
		return data;
	};

	function transferEurToUsd(available, amount, commission) {
		if (available) {
			let res = fetchCurr(currRate) * amount * commission;
			console.log(res);
		} else {
			console.log("Сейчас обмен недоступен");
		}
	}

transferEurToUsd(true, 500, 1.05);

*/

//* Решение
const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
	const data: number = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission;
		// console.log(res);
	} else {
		// console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.5 Тип never

	? Never - используется тогда, когда функция выполняется без возвращения значения в принципе. 
*/

// ? Никакого значения не может быть возвращено
const createError = (msg: string) => {
	throw new Error(msg);
	// console.log()
}

function logMessageNever(isDeveloper: boolean, userName: string, userAge: number): string {
	if(isDeveloper === true) {
		return `This is true, ${userName} is developer and his ${userAge + 1} age!`;
	} else if(isDeveloper === false) {
		return 'This is false'
	} 

	return createError('Errpor');
}

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.6 Типы null и undefined
*/

const testEl: null = null;

function getRandomData() {
	if(Math.random() < 0.5) {
		return null;
	} else {
		return ' Some data '
	}
}

// ? В data может попасть как null, так и строка. С отключенной проверкой
// ? TS вам не подскажет о том, что возможна ошибка на этапе null.trim()
// ? И даже если вы укажите аннотацию const data: string, то ничего не изменится.
// ? TS будет продолжать думать, что в data строка, ведь теперь допустимо:

const data = getRandomData();
const trimmedData = data ? data.trim() : null;

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.7 Типизация объекта и деструктуризация 
*/

const userDataObj = {
	userNameData: 'John',
	userAgeData: 30,
	isDeveloperData: true,
	messages: {
		error: 'Error',
	}
}

// ? TS позволяет передавать объект шире, чем описан в аннотации. если в userData будут еще свойства, то это не будет ошибкой. Но описанные в аннотации должны быть обязательно

function logMsgObj( data: {userNameData: string; userAgeData: number; isDeveloperData: boolean } ): string {
	if(data.isDeveloperData) {
		return `This is true, ${data.userNameData} is developer and his ${data.userAgeData + 1} age!`;
	} else {
		return 'Error'
	} 
}

// ? Пример с деструктуризацией объекта. Деструктуризация на этапе аннотации аргумента функции

function logMsgObj2( {userNameData, userAgeData, isDeveloperData}: {userNameData: string, userAgeData: number, isDeveloperData: boolean} ): string {
	if(isDeveloperData) {
		return `This is true, ${userNameData} is developer and his ${userAgeData + 1} age!`;
	} else {
		return 'Error'
	} 
}

// ? Пример с деструктуризацией вложенного объекта

function logMsgObj3( 
	{userNameData, userAgeData, isDeveloperData, messages: {error}}: {userNameData: string, userAgeData: number, isDeveloperData: boolean, messages: {error: string} } ): string {
	if(isDeveloperData) {
		return `This is true, ${userNameData} is developer and his ${userAgeData + 1} age!`;
	} else {
		return error
	} 
}

logMsgObj(userDataObj);

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.8 Типизация объекта и деструктуризация 

	? Запись string[] , number[], {}[] и тп. - это указание того, что массив состоит из типов, указанных перед [ ]
	? двойные квадратные скобки [ ][ ] - это массив массивов с определенными данными:
*/

const depatments = ['dev', 'design' , 'marketing'];
const nums: number[] = [1, 2 ,3];

// ? Массив массивов

const numbers: number[][] = [ [1,2,3], [3,4,5] ];

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.9 Самостоятельная работа

	? Задание
	const electricityUserData = {
		readings: 95,
		units: "kWt",
		mode: "double",
	};

	const waterUserData = {
		readings: 3,
		units: "m3",
	};

	const elRate = 0.45;
	const wRate = 2;

	const monthPayments = [0, 0]; // [electricity, water]

	const calculatePayments = (elData, wData, elRate, wRate) => {
		if (elData.mode === "double" && elData.readings < 50) {
			monthPayments[0] = elData.readings * elRate * 0.7;
		} else {
			monthPayments[0] = elData.readings * elRate;
		}

		monthPayments[1] = wData.readings * wRate;
	};

	calculatePayments(electricityUserData, waterUserData, elRate, wRate);

	const sendInvoice = (monthPayments, electricityUserData, waterUserData) => {
		const text = `    Hello!
		This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
		It will cost: ${monthPayments[0]}€
		
		This month you used ${waterUserData.readings} ${waterUserData.units} of water
		It will cost: ${monthPayments[1]}€`;

		return text;
	};
*/

const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
	{ mode, readings} : { mode: string; readings: number }, 
	wData : { readings: number }, 
	elRate: number, 
	wRate: number
): void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
	[el, water]: number[], 
	electricityUserData : { readings:number; units: string }, 
	waterUserData : { readings:number; units: string }
): string => {
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

	return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(invoice);

/ * -------------------------------------------------------------------------------- * /

/* 
	* 1.10 Tuples - кортежи

	? Кортеж - необходим для записи данных в строго определенном порядке
	? 
*/

// ? Пример кортежа
const userDataTuple = [true, 40, 'John'];

// ? Пример описания структуры кортежа
const userDataTuple2: [boolean, number, string] = [true, 40, 'John']

// ? Пример деструктуризации кортежа
const [boolean, number, string] =  userDataTuple;

// ? Для расширения кортежей неопределенным количеством элементов используется специальный синтаксис.
// ? Можно применять в любом месте аннотации, но не более одного раза:
const userDataTuple3: [boolean, number, string, ...string[]] = [true, 40, 'John', 'Alex', 'Ann'];

/ * -------------------------------------------------------------------------------- * /

/*
	* 1.11 Union - объединение
	? Пример: string | number - union-тип 
*/

// ? Значение переменная может быть, как числом, так и строкой
const message: string | number = 5;

// ? Значение переменная может быть, массивом строк или массивом чисел. Но в одном массиве не может быть и чисел и строк
const messages: string[] | number[] = ['a', 'b'];


// ? Нужно быть аккуратными при манипуляциях с этими аргументами внутри тела функции. 
// ? Можно использовать только операции, доступные со всеми типами в union типе. Иначе будет ошибка:
function printMessage(msg: string | number): void {
	// console.log(msg)
}

/ * -------------------------------------------------------------------------------- * /

/*
	* 1.12 Narrowwing - сужение типов
*/

function printMessage2(msg: string | number): void {
	if(typeof msg === 'string') {
		// console.log(msg.toLocaleString())
	} else {
		// console.log(msg.toExponential())
	}

	// console.log(msg)
}

printMessage2('2');
printMessage2(2);


// ? Метод Array.isArray() позволяет определить массив
function printMessage3(msg: string[] | number | boolean): void {
	if(Array.isArray(msg)) {
		msg.forEach(m => console.log(m));
	} else if(typeof msg === 'number') {
		// console.log(msg.toFixed());
	} else {
		// console.log(msg)
	}
}

// ? Можно применять равенство по значениям и типам
const  printReading = (a: number | string, b: number | boolean) => {
	if(a === b) {
		console.log(a, b)
	}
}

// ? Пример, когда операция доступна сразу на разных типах
const  printReading2 = (a: number[] | string) => {
	// console.log(a.slice(0,3))
}

// ? Оператор in позволит определить, существует ли свойство в объекте
function checkReadings(readings: { system: number } | { user: number }): void {
	if('system' in readings) {
		// console.log(readings.system)
	} else {
		// console.log(readings.user)
	}
}

// ? Оператор instanceof позволит определить, является ли аргумент экземпляром для получения всех методов
function logValue(x: string | Date) {
	if(x instanceof Date) {
		// console.log(x.getDate)
	} else {
		// console.log(x.trim())
	}
}

/ * -------------------------------------------------------------------------------- * /

/*
	* 1.13 Примитивные литеральные типы

	? Примитивы – это простые типы данных, строки, числа, булевы значения, символы и тд.
	? Литералы – это конкретные значения этих типов.
	? Примитивные литеральные типы - это типы на основании конкретных значений примитивов
*/


let msg: 'Hello' = 'Hello';

msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

// ? Для аргументов, которые приходят динамически в функцию, можно комбинировать аннотации, условия и константы. 
// ? Так мы будем дополнительно активировать проверку и на уровне runtime кода:
function startServer(
	protocol: 'http' | 'https', 
	port: 3000 | 3001
): 'Server start' {

	if(port === port3000 || port === port3001) {
		// console.log(`Server started on ${protocol}://server:${port}`);
	} else {
		// console.error('Invalid port');
	}

	return 'Server start';
}

startServer('https', 3000);

// ? Пример аннотирования функции с ограниченным кол-вом значений:
function createAnimation(
	id: string | number, 
	animationName: string, 
	timingFunction: 'ease' | 'ease-out' | 'ease-in' = 'ease',
	duration: number,
	iterationCount: 'infinite' | number
): void {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if(elem) {
		// console.log(`${animationName} ${timingFunction}, ${duration}, ${iterationCount}`)
		// elem.style.animation = `${animationName} ${timingFunction}, ${duration}, ${iterationCount}`;
	// }

}

createAnimation('id', 'fade', 'ease-out', 3, 'infinite');

/ * -------------------------------------------------------------------------------- * /

/*
	* 1.14 Псевдонимы типов - Type alliases

*/

// ? Пример псевдонима типов
type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number;

// ? Пример аннотирования функции с ограниченным кол-вом значений:
function createAnimation2(
	id: AnimationID, 
	animationName: string, 
	timingFunction: AnimationTimingFunc = 'ease',
	duration: number,
	iterationCount: 'infinite' | number
): void {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if(elem) {
		// console.log(`${animationName} ${timingFunction}, ${duration}, ${iterationCount}`)
		// elem.style.animation = `${animationName} ${timingFunction}, ${duration}, ${iterationCount}`;
	// }
}

/ * -------------------------------------------------------------------------------- * /

/*
	* 1.14 Объектные литералы и аннотации функций
*/

const serverConfig: {protocol: 'http' | 'https'; port: 3000 | 3001} = {
	protocol: 'https',
	port: 3001,
}

const startServer2: (protocol: 'http' | 'https', port: 3000 | 3001) => string = 
(
	protocol: 'http' | 'https', 
	port: 3000 | 3001
): 'Server start' => {

	// console.log(`Server started on ${protocol}://server:${port}`);
	return 'Server start';
}

startServer2(serverConfig.protocol, serverConfig.port);

/*
	* 1.15 Тест
*/

// ? 1. Какой тип будет у переменной res в данном коде? 

const userDataTuple4: [...boolean[], number, string] = [true, false, 40, "John"]; 
const res = userDataTuple4.map(d => d.toString());

// ! Ответ: ошибка

// ? 2. Механизм, когда мы определяем тип для того, чтобы выполнить с ним нужные операции называется

// * Ответ: Сужение типов (Narrowing)

// ? 3. Кортеж (tuple) - это структура, которая необходима для: 

// * Ответ: Записи набора данных в строго определенном порядке по типам

// ? 4. Какая проблема в этом коде? 

const printReadings = (a: number[] | string) => { 
	console.log(a.slice(0, 3)); 
};

// * Ответ: Метод slice существует на этих типах, проблем не будет

// ? 5. Union type позволяет сказать коду, что...

// * Ответ: Сущность будет одним из предложенных типов


// ? 6. Какой оператор или метод невозможно использовать для сужения типов?

// * Ответ: Object.is()


// ? 7. Какой тип у переменной port3002 ? 

// const port3000: number = 3000; 
// const port3001 = 3001; 
// let port3002 = 3002;

// * Ответ: number 


// ? 8. Тип never можно получить, если.

// * Ответ:  Функция никогда не заканчивается возвращаемым значением

// ? 9. Как называется данный прием? type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";

// * Ответ: Псевдоним типа (Type Aliases)

// ? 10. Какой из вариантов указания возвращаемого значения не доступен в функциях?

// * Ответ: function test(): []number {

// ? 11. Какие типы будут у переменных a и b последовательно в указанной строке?

const printReadings2 = (a: number | string, b: number | boolean) => { 
	if(a === b) { 
		console.log(a, b); 
		// Вот здесь! 
	} 
};

// * Ответ: [number, number]

// ? 2. Литерал - это:

// * Ответ: Конкретное значение любого типа


// ? 13. Какой тип будет в указанной строке? (7я строка)

function printMsg(msg: string[] | number | boolean): void { 
	if(Array.isArray(msg)) { 
		msg.forEach((m) => console.log(m)); 
	} else if(typeof msg === "number") { 
		console.log(msg.toFixed()); 
	} else { 
		console.log(msg); // Вот здесь! 
		} 
}

// * Ответ: boolean

// ? 14. Какая ошибка допущена в этом коде? 

let salary; 
salary = 40000;


// * Ответ: salary имеет тип any даже после присвоения значения


// ? 15. Есть ли проблемы в этом коде? 

const departments: string[] = ["dev", "design", "marketing"]; 
const dep = departments[0]; 
// dep.parseInt();

// * Ответ: Да, в переменной department лежит строка, а у строк нет метода parseInt
