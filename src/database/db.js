const { Sequelize, DataTypes } = require('sequelize');
const connect_string = process.CONNECT_STRING
require('dotenv').config()


//const sequelize = new Sequelize(connect_string) 
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
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