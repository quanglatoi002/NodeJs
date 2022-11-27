import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/", controller.register);

module.exports = router;
