require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "starwars_db",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
};
