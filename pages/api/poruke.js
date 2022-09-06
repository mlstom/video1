const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

export default async function getAllPoruke(req, res) {
    async function openDB() {
        return open({
            filename: './dbapi.sqlite',
            driver: sqlite3.Database
        })
    }
    const db = await openDB();
    const poruke = await db.all('SELECT * FROM Poruka')
    res.json(poruke)
}
