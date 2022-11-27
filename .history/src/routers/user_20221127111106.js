const router = require("express").Router();

const user = require("../controllers/user");
import user from "../controllers";
router.get("/", user.getUsers);

module.exports = router;
