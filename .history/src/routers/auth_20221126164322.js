import * as controller from "../controllers";

const user = require("../controllers/user");
router.get("/", user.getUsers);

module.exports = router;
