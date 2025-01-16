// ? Необязательные свойства и аогументы

// ? Для указания того, что свойство в объекте или аргумент в функции может быть необязательным, используется оператор optional "?"

// ? Бывают ситуации, когда объекты должны соблюдать строгую форму, даже если значения у свойства нет. Свойство должно быть всегда. 
// ?В таком случае нам поможет union тип, а не optional operator: ?. Строка 12
interface User {
    login: string;
    password: string;
    age: number;
    address?: string;
    // address: string | undefind;
    parents?: {
        mother?: string;
        father?: string;
    }
}

const user: User = {
    login: 'login',
    password: 'qwerty',
    age: 50,
}

const dbName = '12345';

// ? В функциях optional operator устанавливается после названия аргумента:
// ? Теперь при использовании такого аргумента внутри тела функции используется
// ?  Он позволяет сделать запрос к свойству или методу объекта и если его нет, то просто вернуть undefined. 
// ? Это позволяет избегать ошибок optional chaining operator (ES2020)

function sendUserData (obj: User, db?: string):void {
    console.log(obj, db?.toLowerCase)
}