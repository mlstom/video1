const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

export default async function getUserById(req, res) {
    async function openDB() {
        return open({
            filename: './dbapi.sqlite',
            driver: sqlite3.Database
        })
    }
    const db = await openDB();
    if(req.method === 'PUT'){
        db.exec(`UPDATE user SET name = "${req.body.name}", email= "${req.body.email}" where id= ${ req.query.id} `)
    }
    const user = await db.get(`SELECT * FROM User where User.id="${req.query.id}"`)
    res.json(user)
}