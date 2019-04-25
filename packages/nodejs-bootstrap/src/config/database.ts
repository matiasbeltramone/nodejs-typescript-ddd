export default {
  DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/example_db',
  DB_NAME: process.env.DB_NAME || 'kiwing',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'secret',
  DB_PORT: process.env.DB_PORT || '3306'
};
