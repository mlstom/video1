const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

export default async function getPorukeUserById(req, res) {
    async function openDB() {
        return open({
            filename: './dbapi.sqlite',
            driver: sqlite3.Database
        })
    }
    const db = await openDB();
    const poruke = await db.all(`SELECT * FROM Poruka join User on Poruka.userID= User.id where User.id="${req.query.id}"`)
    res.json(poruke)
}