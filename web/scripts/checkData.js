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
    const [tools] = await connection.execute(`
      SELECT id, name, cos_screenshots
      FROM ai_tools 
      WHERE status = 2 
      AND is_ad = 0
      AND cos_screenshots IS NOT NULL
      LIMIT 1
    `);
    
    console.log('Sample data:');
    console.log(tools[0]);
    console.log('\ncos_screenshots type:', typeof tools[0].cos_screenshots);
    console.log('cos_screenshots value:', tools[0].cos_screenshots);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await connection.end();
  }
}

main(); 