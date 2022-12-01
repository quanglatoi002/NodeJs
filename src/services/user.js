import db from "../models";
import jwt from "jsonwebtoken";
// hàm hashPassword

export const getOne = ({ userId }) =>
    new Promise(async (res, reject) => {
        try {
            const response = await db.User.findOne({
                where: { id: userId },
            });
            res({
                err: response ? 0 : 1,
                mes: response ? "Got" : "User not fount",
                userData: response,
            });
        } catch (error) {
            reject.error;
        }
    });
