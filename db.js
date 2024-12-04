const pg = require('pg');

const Pool = pg.Pool
const pool = new Pool({
  user: 'postgres',
  host: '51.120.2.39',
  database: 'Project01',
  password: '123456!Ata123',
  port: 5432,
})

module.exports=pool;