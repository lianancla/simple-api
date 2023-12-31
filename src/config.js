export const env = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
};

export const db_config = {
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  host: env.DB_HOST,
};
