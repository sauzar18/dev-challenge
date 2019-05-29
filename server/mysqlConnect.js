import mysql from 'mysql'

const dbConfig = {
  host: 'localhost',
  user: 'root',
  database: 'dev_db',
  password: '',
  /*
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b1038310007f5e',
  database: 'heroku_1e39c00e23ca36c',
  password: '4cf9784b',
  */
  multipleStatements: true
}
const connection = mysql.createConnection(dbConfig)

export default connection
