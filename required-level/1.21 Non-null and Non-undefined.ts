// ? Для указания того, что сущность точно существует мы используем оператор Non-Null and Non-Undefined - '!'.
// ? Даже если TS будет предупреждать вас об ошибке, то этот оператор отключит это поведение. 
// ? Использовать его стоит только тогда, когда на 100% уверены, что сущность существует

interface User {
    login: string;
    password: string;
    age: number;
    address?: string;
    parents?: {
        mother?: string;
        father?: string;
    }
}

const user1: User = {
    login: 'login',
    password: 'qwerty',
    age: 50,
}

function sendUserData1 (obj: User, db?: string):void {
    console.log(obj.parents!.father?.toLowerCase, db!.toLowerCase())
}