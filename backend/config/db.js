const mySql = require('mysql');
const util  = require('util');

require('dotenv').config();

const pool = mySql.createPool({
    connectionLimit : 10,
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : process.env.DB_PASS || 'password',
    database: 'sistemaTallerUseda' 
  });

pool.getConnection((error, connection )=>{
  if(error){
    if(error.code == 'PROTOCOL_CONNECTION_LOST'){
      console.error('DATABASE CONNECTION WAS CLOSED');
    }
    if(error.code == 'ER_CON_COUNT_ERROR'){
      console.error('DATABASE HAS TO MANY CONNECTIONS');
    }
    if(error.code == 'ECONNREFUSED'){
      console.error('DATABASE CONNECTION WAS REFUSED');
    }
  }
  if (connection) connection.release();
  console.log('DB is connected');
  return;
})

pool.query = util.promisify(pool.query);

module.exports = pool;

