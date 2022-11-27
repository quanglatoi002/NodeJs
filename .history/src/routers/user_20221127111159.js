const router = require("express").Router();
import { express } from "express";
import user from "../controllers";
router.get("/", user.getUsers);

module.exports = router;
