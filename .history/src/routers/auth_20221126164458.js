import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/", user.getUsers);

module.exports = router;
