/** @format */
let dbconfig = {};
const configList = {
    test: {
        HOST: "10.7.2.190",
        USER: "postgres",
        PASSWORD: "Boss1001!!g",
        DB: "sosv2-identity",
        dialect: "postgres",
    },
    live: {
        HOST: "10.7.2.183",
        USER: "postgres",
        PASSWORD: "Boss1001!!g",
        DB: "SOS",
        dialect: "postgres",
    },
    development: {
        HOST: "10.7.2.183",
        USER: "postgres",
        PASSWORD: "Boss1001!!g",
        DB: "SOSTEST",
        dialect: "postgres",
    },
};
if (process.env.ISTEST == "true") dbconfig = configList.test;
dbconfig = configList.live;
module.exports = dbconfig;