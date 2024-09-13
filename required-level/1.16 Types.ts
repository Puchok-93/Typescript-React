// *  Types

// ? Example Types Syntax
type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

// ? Теперь type с именем Config можно использовать для аннотирования других объектов.
// ? Если они не будут соответствовать этой форме - будет ошибка.
const serverConfig: Config = {
    protocol: 'https',
    port: 3001,
}

const serverBackupConfig: Config = {
    protocol: 'http',
    port: 3000,
}


// ? В отдельный type можно выносить и описание функции:
type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return 'Server started'
}

startServer('https', 3001)


type Role = { 
    role: string 
};

type ConfigWithRole = Config & Role;

// ? Благодаря оператору пересечения (intersection, &) мы скомбинировали два типа и получили тип ConfigWithRole. 
// ? Он содержит все свойства из объединенных типов.

const backupConfig: ConfigWithRole = {
    protocol: 'http',
    port: 3001,
    role: 'sysadmin'
}