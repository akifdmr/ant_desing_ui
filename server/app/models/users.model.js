/** @format */

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            field: "Id",
        },
        firstname: {
            type: Sequelize.STRING,
            field: "FirstName",
        },
        lastname: {
            type: Sequelize.STRING,
            field: "LastName",
        },
        email: {
            type: Sequelize.STRING,
            field: "Email",
        },
        phone: {
            type: Sequelize.STRING,
            field: "Phone",
        },
        deviceid: {
            type: Sequelize.STRING,
            field: "DeviceId",
        },
        sapregister: {
            type: Sequelize.INTEGER,
            field: "SapRegister",
        },
        sapmanager: {
            type: Sequelize.INTEGER,
            field: "SapManager",
        },
        title: {
            type: Sequelize.INTEGER,
            field: "Title",
        },
        department: {
            type: Sequelize.INTEGER,
            field: "Department",
        },
        createdat: {
            type: Sequelize.DATE,
            field: "CreatedAt",
        },
        updatedat: {
            type: Sequelize.DATE,
            field: "UpdatedAt",
        },
        deletedat: {
            type: Sequelize.DATE,
            field: "DeletedDat",
        },
        enddate: {
            type: Sequelize.DATE,
            field: "EndDate",
        },
        isactive: {
            type: Sequelize.BOOLEAN,
            field: "IsActive",
        },
        startdate: {
            type: Sequelize.DATE,
            field: "StartDate",
        },
        roleid: {
            type: Sequelize.UUID,
            field: "RoleId",
        },
        positionid: {
            type: Sequelize.UUID,
            allowNull: true,
            field: "PositionId",
        },
        updatewithintegration: {
            type: Sequelize.BOOLEAN,
            field: "UpdateWithIntegration",
        },
        storecode: {
            type: Sequelize.STRING,
            field: "StoreCode",
        },
        isdeleted: {
            type: Sequelize.BOOLEAN,
            field: "IsDeleted",
        },
        regioncode: {
            type: Sequelize.STRING,
            field: "RegionCode",
        },
    });

    return Users;
};