/** @format */

const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// yeni entity oluşturmadan önce datanin icerigini kontrol ediyoruz
exports.create = (req, res) => {
    // data validation islemlerini burada yapiyoruz
    if (!req.body.firstname) {
        res.status(400).send({
            message: "id",
        });
        return;
    }

    // Yeni Kayit
    const dbuser = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.lastname,
        phone: req.body.phone,
        deviceid: req.body.deviceid,
        sapregister: req.body.sapregister,
        sapmanager: req.body.sapmanager,
        title: req.body.title,
        department: req.body.department,
        createdat: req.body.createdat,
        updatedat: req.body.updatedat,
        deletedat: req.body.deletedat,
        enddate: req.body.enddate,
        isactive: req.body.isactive,
        startdate: req.body.startdate,
        roleid: req.body.roleid,
        positionid: req.body.positionid,
        updatewithintegration: req.body.updatewithintegration,
        storecode: req.body.storecode,
        isdeleted: req.body.isdeleted,
        regioncode: req.body.regioncode,
    };

    // database kayit
    Users.create(dbuser)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message ||
                    "Kullanici kaydi eklenirken bazi sorunlarla karsilasildi.",
            });
        });
};

// tüm veya bazi kullanicilari arama
exports.findAll = (req, res) => {
    const userid = req.query.id;
    const condition = userid ?
        {
            id: {
                [Op.iLike]: `%${userid}%`,
            },
        } :
        null;

    Users.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message ||
                    "Kullanici kaydi aranirken bazi sorunlarla karsilasildi",
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `${id} idli kayit bulunamadi.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Kayit bulunamadi id=" + id,
            });
        });
};

// Kayit güncelleme
exports.update = (req, res) => {
    const id = req.params.id;

    Users.update(req.body, {
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Kullanici güncelleme basarili.",
                });
            } else {
                res.send({
                    message: `${id} id ile güncelleme basarisiz, ilgili id ile kayit bulunamamis olabilir!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: id + " id ile güncelleme yapilirken hata ile karsilastik!",
            });
        });
};

// ozel kayit silme
exports.delete = (req, res) => {
    const id = req.params.id;

    Users.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Kullanici basariyle silindi!",
                });
            } else {
                res.send({
                    message: `${id} id ile kullanici bulunamadi, silme basarisiz!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: id + " id ile kayit silme basarisiz!",
            });
        });
};

// tüm aktif datalari getir
exports.findAllPublished = (req, res) => {
    Users.findAll({ where: { isactive: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Kayitlar aranirken hata ile karsilasildi.",
            });
        });
};