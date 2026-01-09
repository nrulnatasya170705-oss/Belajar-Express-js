var express = require('express');
var router = express.Router();

router.get("/mahasiswa", function (req, res, next) {
    res.render("mahasiswa_view", {
        nama: "Tasya",
        kelas: "MI.03",
        alamat: "garot"
    });
});

module.exports = router;