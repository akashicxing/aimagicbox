const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function exportTools() {
  // 创建数据库连接
  const connection = await mysql.createConnection({
    host: 'sh-cdb-5kh978ne.sql.tencentcdb.com',
    port: 20500,
    user: 'root',
    password: 'Root123!@#',
    database: 'aitoolstop'
  });

  try {
    // 查询90条工具数据
    const [tools] = await connection.execute(
      'SELECT * FROM ai_tools WHERE images_synced = 1 AND name IS NOT NULL AND description IS NOT NULL ORDER BY visits DESC LIMIT 90'
    );

    // 确保public/data目录存在
    const publicDataDir = path.join(__dirname, '../src/data');
    if (!fs.existsSync(publicDataDir)) {
      fs.mkdirSync(publicDataDir, { recursive: true });
    }

    // 写入文件
    fs.writeFileSync(
      path.join(publicDataDir, 'tools.json'),
      JSON.stringify(tools, null, 2)
    );

    console.log('工具数据已成功导出：');
    console.log(`tools.json: ${tools.length} 个工具`);

  } catch (error) {
    console.error('导出工具数据时出错：', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

exportTools(); 