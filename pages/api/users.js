const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

export default async function getAllUsers(req, res) {
    async function openDB() {
        return open({
            filename: './dbapi.sqlite',
            driver: sqlite3.Database
        })
    }
    const db = await openDB();
    const users = await db.all('SELECT * FROM User')
    res.json(users)
}