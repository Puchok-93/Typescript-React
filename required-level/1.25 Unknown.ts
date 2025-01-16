// ? Бывают ситуации, когда мы можем получить сущность неизвестного типа. 
// ? Для работы с ними существует тип - unknown , который является типобезопасным аналогом any.


// ! При использовании any мы не получим ошибку в 6й строке. Но в рантайме она будет
let smth: any;
smth = 'str';

let data: string[] = smth;
data.find(e => e);

// * При использовании unknown ошибка будет. Нельзя применять метод неизвестно к чему.

let something: unknown;
something = 'str';

// ! let data1: string[] = something;
// ! data1.find(e => e);

// ? Опасность any в том, что это . В нем нет никакой строгости. Никакие проверки типов в нем не выполняются. 
// ? А вот unknow – это неизвестный тип.
// ? В any может быть что угодно, а в unknown – мы не знаем что может быть.
// ? К чему угодно может применятся , а к неизвестному – ничего

// ? Для работы с этим типом необходимо использовать сужение типов. 
// ? Так мы поймем что это и сможем правильно с ним работать

function fetchData(data: unknown):void {
    if(typeof data === 'string') {
        console.log(data.toLocaleLowerCase());
    }

    data // nen unknown
}

// ? Данный тип можно использовать для работы с функциями, которые возвращают что-угодно. Например, JSON.parse(). 
// ? Так мы избежим ошибок и правильно будем работать с данными


// ? В JSON строке могут быть разные данные
const userData = '{"isDeveloperData": true, "userNameData": 40, "userNameData": "John"}';

// ? Благодаря функции safeParse мы получим не что угодно, а неизвестно что.
function safeParse(s: string): unknown {
    return JSON.parse(s);
}

const data2 = safeParse(userData);

// ? А функция transferData использует сужение типов для правильной работы.
function transferData(d: unknown): void {
    if(typeof d === 'string') {
        console.log(d.toLocaleLowerCase())
    } else if(typeof d === 'object' && d) {
        console.log(data)
    } else {
        console.error('Some Error')
    }
}

transferData(data2);