const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Todo model
const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    tableName: 'Tasks', 
    timestamps: false, 
});

module.exports = Task;