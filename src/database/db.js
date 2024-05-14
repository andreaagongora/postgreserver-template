const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


//const sequelize = new Sequelize(connect_string) 
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  logging: false, // set to console.log to see the raw SQL queries
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
}
});

sequelize.authenticate().then(()=> {
  console.log('Connection has been established successfully.')
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

sequelize.sync().then(() => {
  console.log('Schemas sincronizados')
}).catch((err) => {
  console.log('Problemas al sincronizar la base')
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Conectar los modelos
db.customer = require('./models/customer') (sequelize, DataTypes);

module.exports = db;