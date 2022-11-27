import express from "express";
import user from "../controllers";

const router = express.Router();
router.get("/", user.getUsers);

export 
