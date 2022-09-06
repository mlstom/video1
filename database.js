const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

async function openDB() {
    return open({
        filename: './dbapi.sqlite',
        driver: sqlite3.Database
    })
}


async function setup() {
    const db = await openDB();
    await db.migrate({ force: 'last' });

    const users = await db.all('SELECT * FROM User')
    console.log('SVI USERI', users)
    const poruke = await db.all('SELECT * FROM Poruka')
    console.log('SVE PORUKE', poruke)
}

setup();