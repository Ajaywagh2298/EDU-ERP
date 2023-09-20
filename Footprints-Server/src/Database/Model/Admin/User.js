const { DataTypes,  } = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Users', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'uid'
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'userName'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'email'
        },
        admin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'admin',
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        uniqueID: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'uniqueID'
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'type'
        }
    });
}

