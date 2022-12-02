import express from "express";
import * as controllers from "../controllers";
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_roles";

const router = express.Router();

// PRIVATE ROUTER
router.use(verifyToken);
router.get("/", controllers.getCurrent);

module.exports = router;
