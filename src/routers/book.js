import express from "express";
import * as controllers from "../controllers";
import verifyToken from "../middlewares/verify_token";

const router = express.Router();

router.get("/", controllers.getBooks);

router.use(verifyToken);
router.get("/", controllers.getBooks);

module.exports = router;
