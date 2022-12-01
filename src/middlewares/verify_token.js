import jwt from "jsonwebtoken";
import { badRequest, notAuth } from "./handle_errors";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return notAuth("Require authorization");
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decodeUser) => {
        if (err) return notAuth("Access token may be expired or invalid");
        req.user = decodeUser;
        next();
    });
};
export default verifyToken;
