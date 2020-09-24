const { findByEmailAndPassword } = require("./controller");

const router = require("express").Router();

router.post("/login", findByEmailAndPassword);

module.exports = router;