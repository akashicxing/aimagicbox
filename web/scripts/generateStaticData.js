const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const path = require('path');

async function main() {
  // 创建数据库连接
  const connection = await mysql.createConnection({
    host: 'sh-cdb-5kh978ne.sql.tencentcdb.com',
    port: 20500,
    user: 'root',
    password: 'Root123!@#',
    database: 'aitoolstop'
  });

  try {
    // 获取所有有效的工具数据
    const [tools] = await connection.execute(`
      SELECT 
        id,
        tool_id,
        name,
        description,
        redirect_url,
        visits,
        growth_rate,
        saves,
        category,
        cos_logo_url,
        cos_preview_url,
        cos_screenshots
      FROM ai_tools 
      WHERE images_synced = 1 
      AND is_ad = 0
      ORDER BY sort_order DESC, visits DESC
    `);
    
    // 获取所有分类数据
    const [categories] = await connection.execute(`
      SELECT DISTINCT category 
      FROM ai_tools 
      WHERE images_synced = 1 
      AND category IS NOT NULL 
      AND category != ''
    `);
    
    // 处理分类数据，转换为所需格式
    const processedCategories = categories
      .map(item => item.category)
      .filter(Boolean)
      .map(category => ({
        id: category,
        name: category,
        count: tools.filter(tool => tool.category === category).length
      }));
    
    // 处理工具数据，转换截图数组
    const processedTools = tools.map(tool => {
      return {
        id: tool.id,
        tool_id: tool.tool_id,
        name: tool.name,
        description: tool.description,
        redirect_url: tool.redirect_url,
        visits: tool.visits,
        growth_rate: tool.growth_rate,
        saves: tool.saves,
        category: tool.category,
        cos_logo_url: tool.cos_logo_url,
        cos_preview_url: tool.cos_preview_url,
        screenshot: Array.isArray(tool.cos_screenshots) && tool.cos_screenshots.length > 0 
          ? tool.cos_screenshots[0]  // 取数组的第一个元素
          : null
      };
    });
    
    // 创建 data 目录（如果不存在）
    const dataDir = path.join(__dirname, '..', 'src', 'data');
    await fs.mkdir(dataDir, { recursive: true });
    
    // 将数据写入 JSON 文件
    await fs.writeFile(
      path.join(dataDir, 'tools.json'),
      JSON.stringify(processedTools, null, 2)
    );
    
    await fs.writeFile(
      path.join(dataDir, 'categories.json'),
      JSON.stringify(processedCategories, null, 2)
    );
    
    console.log('Static data generated successfully!');
    console.log(`Generated ${processedTools.length} tools in ${processedCategories.length} categories`);
    
    // 打印第一个工具的数据以供检查
    if (processedTools.length > 0) {
      console.log('\nFirst tool data sample:');
      const sample = {
        id: processedTools[0].id,
        name: processedTools[0].name,
        category: processedTools[0].category,
        screenshot: processedTools[0].screenshot
      };
      console.log(JSON.stringify(sample, null, 2));
    }
  } catch (error) {
    console.error('Error generating static data:', error);
  } finally {
    await connection.end();
  }
}

main(); 