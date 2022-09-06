const sqlite3 = require('sqlite3')
const { open } = require('sqlite')


export default async function getPorukaById(req, res) {
    async function openDB() {
        return open({
            filename: './dbapi.sqlite',
            driver: sqlite3.Database
        })
    }
    const db = await openDB();
    const poruka = await db.get(`SELECT * FROM Poruka join User on Poruka.userID= User.id where User.id="${req.query.id}" and Poruka.id="${req.query.por}"`)
    res.json(poruka)
}