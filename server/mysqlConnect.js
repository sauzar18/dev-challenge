import mysql from 'mysql'

const dbConfig = {
  host: 'localhost',
  user: 'root',
  database: 'dev_db',
  password: '',
  multipleStatements: true
}
const connection = mysql.createConnection(dbConfig)

export default connection
