import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/register", controller.register);

module.exports = router;
