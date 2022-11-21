/** @format */

module.exports = (sequelize, Sequelize) => {
    const extendeduser = sequelize.define("extendeduser", {
        userid: {
            type: Sequelize.UUID,
            field: "UserId",
            primaryKey: true,
            allowNull: false,
        },
        roleid: {
            type: Sequelize.UUID,
            allowNull: false,

            field: "RoleId",
        },
        phone: {
            type: Sequelize.STRING,
            field: "Phone",
        },
        email: {
            type: Sequelize.STRING,
            field: "Email",
        },
        password: {
            type: Sequelize.STRING,
            field: "Password",
        },
    });

    return extendeduser;
};