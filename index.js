/*
    * 1.1 Базовые значения: числа, строки, логические значения
*/
// * Строки помещаются в '', "", ``
var userNameData = 'John';
// * Числами могут быть: 10, 0.5, 0.0001, -50, 4e10
var userAgeData = 30;
// * Логический тип: true / false
var isDeveloperData = true;
if (isDeveloperData) {
    // console.log(`This is true, ${userNameData} is developer and his ${userAgeData + 1} age!`)
}
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.2 Использование типов в функциях

    ? Если функция ничего не возвращает (вывод в консоль, отправка данных на сервер, работа с DOM-деревом...), то возвращаемый тип будет void
    ? Void это не только отсутствие возвращаемого значения, но и его полное игнорирование.
*/
//* Если функция ничего не возвращет, то тип указываем тип : void
function logMessageVoid(isDeveloper, userName, userAge) {
    if (isDeveloper) {
        // console.log(`This is true, ${userName} is developer and his ${userAge + 1} age!`)
    }
}
//* Если функция что-то возвращет, и задается аннотация с типом возвращаемого значения, 
//* ts не может явно определить вернется ли значеие с указанным в аннотации типом, для таких случаев стоит произвести проверку
function logMessageString(isDeveloper, userName, userAge) {
    var result;
    if (isDeveloper) {
        result = "This is true, ".concat(userName, " is developer and his ").concat(userAge + 1, " age!");
    }
    else {
        result = "Error";
    }
    // console.log(result)
    return result;
}
//* Пример со стрелочной функцией
var logMessageArrow = function (isDeveloper, userName, userAge) {
    var result;
    if (isDeveloper) {
        result = "This is true, ".concat(userName, " is developer and his ").concat(userAge + 1, " age!");
    }
    else {
        result = "Error";
    }
    // console.log(result)
    return result;
};
logMessageVoid(isDeveloperData, userNameData, userAgeData);
logMessageString(isDeveloperData, userNameData, userAgeData);
logMessageArrow(isDeveloperData, userNameData, userAgeData);
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.3 Тип any

    ? Тип - это дословно «любое значение». TS не может определить тип, с которым ему работать,
    ? не знает какие методы можно использовать, какие подсказки давать и когда сообщать об ошибках
*/
// * Примеры получения any
// * В JSON строке может быть что угодно и в любом виде. TS не знает, есть ли там свойство или метод smth и не подскажет вам об ошибке. 
// * Он вообще не может знать, что за тип получится в итоге парсинга”: строка, число, объект...
var userData = '{"isDeveloperData": true, "userNameData": 40, "userNameData": "John"}';
var userObg = JSON.parse(userData);
// * При создании пустой переменной 
var test;
/ * -------------------------------------------------------------------------------- * /;
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
var currRate = "1.05";
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = fetchCurr(currRate) * amount * commission;
        // console.log(res);
    }
    else {
        // console.log("Сейчас обмен недоступен");
    }
}
transferEurToUsd(true, 500, 1.05);
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.5 Тип never

    ? Never - используется тогда, когда функция выполняется без возвращения значения в принципе.
*/
// ? Никакого значения не может быть возвращено
var createError = function (msg) {
    throw new Error(msg);
    // console.log()
};
function logMessageNever(isDeveloper, userName, userAge) {
    if (isDeveloper === true) {
        return "This is true, ".concat(userName, " is developer and his ").concat(userAge + 1, " age!");
    }
    else if (isDeveloper === false) {
        return 'This is false';
    }
    return createError('Errpor');
}
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.6 Типы null и undefined
*/
var testEl = null;
function getRandomData() {
    if (Math.random() < 0.5) {
        return null;
    }
    else {
        return ' Some data ';
    }
}
// ? В data может попасть как null, так и строка. С отключенной проверкой
// ? TS вам не подскажет о том, что возможна ошибка на этапе null.trim()
// ? И даже если вы укажите аннотацию const data: string, то ничего не изменится.
// ? TS будет продолжать думать, что в data строка, ведь теперь допустимо:
var data = getRandomData();
var trimmedData = data ? data.trim() : null;
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.7 Типизация объекта и деструктуризация
*/
var userDataObj = {
    userNameData: 'John',
    userAgeData: 30,
    isDeveloperData: true,
    messages: {
        error: 'Error',
    }
};
// ? TS позволяет передавать объект шире, чем описан в аннотации. если в userData будут еще свойства, то это не будет ошибкой. Но описанные в аннотации должны быть обязательно
function logMsgObj(data) {
    if (data.isDeveloperData) {
        return "This is true, ".concat(data.userNameData, " is developer and his ").concat(data.userAgeData + 1, " age!");
    }
    else {
        return 'Error';
    }
}
// ? Пример с деструктуризацией объекта. Деструктуризация на этапе аннотации аргумента функции
function logMsgObj2(_a) {
    var userNameData = _a.userNameData, userAgeData = _a.userAgeData, isDeveloperData = _a.isDeveloperData;
    if (isDeveloperData) {
        return "This is true, ".concat(userNameData, " is developer and his ").concat(userAgeData + 1, " age!");
    }
    else {
        return 'Error';
    }
}
// ? Пример с деструктуризацией вложенного объекта
function logMsgObj3(_a) {
    var userNameData = _a.userNameData, userAgeData = _a.userAgeData, isDeveloperData = _a.isDeveloperData, error = _a.messages.error;
    if (isDeveloperData) {
        return "This is true, ".concat(userNameData, " is developer and his ").concat(userAgeData + 1, " age!");
    }
    else {
        return error;
    }
}
logMsgObj(userDataObj);
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.8 Типизация объекта и деструктуризация

    ? Запись string[] , number[], {}[] и тп. - это указание того, что массив состоит из типов, указанных перед [ ]
    ? двойные квадратные скобки [ ][ ] - это массив массивов с определенными данными:
*/
var depatments = ['dev', 'design', 'marketing'];
var nums = [1, 2, 3];
// ? Массив массивов
var numbers = [[1, 2, 3], [3, 4, 5]];
/ * -------------------------------------------------------------------------------- * /;
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
var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
var waterUserData = {
    readings: 3,
    units: "m3",
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (_a, wData, elRate, wRate) {
    var mode = _a.mode, readings = _a.readings;
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (_a, electricityUserData, waterUserData) {
    var el = _a[0], water = _a[1];
    var text = "    Hello!\n    This month you used ".concat(electricityUserData.readings, " ").concat(electricityUserData.units, " of electricity\n    It will cost: ").concat(el, "\u20AC\n    \n    This month you used ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    It will cost: ").concat(water, "\u20AC");
    return text;
};
var invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(invoice);
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.10 Tuples - кортежи

    ? Кортеж - необходим для записи данных в строго определенном порядке
    ?
*/
// ? Пример кортежа
var userDataTuple = [true, 40, 'John'];
// ? Пример описания структуры кортежа
var userDataTuple2 = [true, 40, 'John'];
// ? Пример деструктуризации кортежа
var boolean = userDataTuple[0], number = userDataTuple[1], string = userDataTuple[2];
// ? Для расширения кортежей неопределенным количеством элементов используется специальный синтаксис.
// ? Можно применять в любом месте аннотации, но не более одного раза:
var userDataTuple3 = [true, 40, 'John', 'Alex', 'Ann'];
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.11 Union - объединение
    ? Пример: string | number - union-тип
*/
// ? Значение переменная может быть, как числом, так и строкой
var message = 5;
// ? Значение переменная может быть, массивом строк или массивом чисел. Но в одном массиве не может быть и чисел и строк
var messages = ['a', 'b'];
// ? Нужно быть аккуратными при манипуляциях с этими аргументами внутри тела функции. 
// ? Можно использовать только операции, доступные со всеми типами в union типе. Иначе будет ошибка:
function printMessage(msg) {
    console.log(msg);
}
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.12 Narrowwing - сужение типов
*/
function printMessage2(msg) {
    if (typeof msg === 'string') {
        console.log(msg.toLocaleString());
    }
    else {
        console.log(msg.toExponential());
    }
    console.log(msg);
}
printMessage2('2');
printMessage2(2);
// ? Метод Array.isArray() позволяет определить массив
function printMessage3(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === 'number') {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
}
// ? Можно применять равенство по значениям и типам
var printReading = function (a, b) {
    if (a === b) {
        console.log(a, b);
    }
};
// ? Пример, когда операция доступна сразу на разных типах
var printReading2 = function (a) {
    console.log(a.slice(0, 3));
};
// ? Оператор in позволит определить, существует ли свойство в объекте
function checkReadings(readings) {
    if ('system' in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
// ? Оператор instanceof позволит определить, является ли аргумент экземпляром для получения всех методов
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getDate);
    }
    else {
        console.log(x.trim());
    }
}
/ * -------------------------------------------------------------------------------- * /;
/*
    * 1.13 Примитивные литеральные типы

    ? Примитивы – это простые типы данных, строки, числа, булевы значения, символы и тд.
    ? Литералы – это конкретные значения этих типов.
    ? Примитивные литеральные типы - это типы на основании конкретных значений примитивов
*/
var msg = 'Hello';
msg = 'Hello';
var port3000 = 3000;
var port3001 = 3001;
// ? Для аргументов, которые приходят динамически в функцию, можно комбинировать аннотации, условия и константы. 
// ? Так мы будем дополнительно активировать проверку и на уровне runtime кода:
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error('Invalid port');
    }
    return 'Server start';
}
startServer('https', 3000);
// ? Пример аннотирования функции с ограниченным кол-вом значений:
function createAnimation(id, animationName, timingFunction, duration, iterationCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    if (timingFunction === void 0) { timingFunction = 'ease'; }
    // if(elem) {
    console.log("".concat(animationName, " ").concat(timingFunction, ", ").concat(duration, ", ").concat(iterationCount));
    // elem.style.animation = `${animationName} ${timingFunction}, ${duration}, ${iterationCount}`;
    // }
}
createAnimation('id', 'fade', 'ease-out', 3, 'infinite');
/ * -------------------------------------------------------------------------------- * /;
// ? Пример аннотирования функции с ограниченным кол-вом значений:
function createAnimation2(id, animationName, timingFunction, duration, iterationCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    if (timingFunction === void 0) { timingFunction = 'ease'; }
    // if(elem) {
    console.log("".concat(animationName, " ").concat(timingFunction, ", ").concat(duration, ", ").concat(iterationCount));
    // elem.style.animation = `${animationName} ${timingFunction}, ${duration}, ${iterationCount}`;
    // }
}
