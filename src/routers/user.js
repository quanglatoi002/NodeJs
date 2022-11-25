const router = require("express").Router();

const user = require("../controllers/user");
router.get("/", user.getUsers);

module.exports = router;
