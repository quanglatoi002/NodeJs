import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;
