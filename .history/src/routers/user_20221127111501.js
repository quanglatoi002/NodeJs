import express from "express";
import * as user from "../controllers";

const router = express.Router();
router.get("/", user.getUsers);

module.exports = router;
