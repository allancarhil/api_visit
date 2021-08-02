const Sequelize=require('sequelize');
const dbconfig=require('../config/database');
const Campanha= require('../models/Campanha');
const connection=new Sequelize(dbconfig);
Campanha.init(connection);
module.exports=connection; 
