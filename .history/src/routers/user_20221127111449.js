import express from "express";
import * from "../controllers";

const router = express.Router();
router.get("/", user.getUsers);

module.exports = router;
