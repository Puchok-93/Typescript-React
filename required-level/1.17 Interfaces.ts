// * Interfaces

// ? Интерфейс - это еще один тип в TS, который позволяет синтаксически записать шаблон того объекта , который будет создан

// ? Example Interface Syntax
interface ServerConfig {
    protocol: 'http' | 'https'; 
    port: 3000 | 3001
}


// ? Обычно имена интерфейсов пишут в виде венгерской нотации, начиная с буквы I
interface IConfig {
    protocol: 'http' | 'https'; 
    port: 3000 | 3001;
}

interface IRole {
    role: 'admin';
}


// ? Для комбинации нескольких интерфейсов и получения нового используется ключевое слово extends
// ? Полученый интерфейс будет иметь все свойства указаных + можно добавлять новые внутри фигурных скобок
interface IConfigWithRole extends IConfig, IRole {
    // ? Тут могут быть новые свойства
}


const serverNewConfig: IConfigWithRole = {
    protocol: 'https',
    port: 3000,
    role: 'admin',
}

const startNewServer = (config: IConfigWithRole): "Server strted" => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`)

    return "Server strted"
}

startNewServer(serverNewConfig);


// ? Если неизвестно сколько свойств будет в объекте, но известно в каком виде они все будут, то можно использовать 
// ? специальный синтаксис Index Signatures (индексная сигнатура)

interface IStyles {
    [key: string]: string;
}

// ? все объекты, аннотированные этим интерфейсом, должны
// ?  соблюдать структуру: свойство только строка, его значение - тоже только строка

const styles: IStyles = {
    background: 'red',
    color: 'white',
    border: '1px solid green',
    fontSize: '20px',
}