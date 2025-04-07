const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'sh-cdb-5kh978ne.sql.tencentcdb.com',
    port: 20500,
    user: 'root',
    password: 'Root123!@#',
    database: 'aitoolstop'
  });

  try {
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('Available tables:');
    console.log(tables);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await connection.end();
  }
}

main(); 