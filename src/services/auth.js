import db from "../models";
import bcrypt from "bcryptjs"; // thư viện dùng để băm mật khẩu
// hàm hashPassword
const hashPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const register = ({ email, password }) =>
    new Promise(async (res, reject) => {
        try {
            const response = await db.User.findOrCreate({
                where: { email },
                defaults: {
                    email,
                    password: hashPassword(password),
                },
            });
            res({
                err: response[1] ? 0 : 1,
                mes: response[1]
                    ? "Register is successfully"
                    : "Email already used",
            });
            res({
                err: 0,
                mes: "register service",
            });
        } catch (error) {
            reject.error;
        }
    });
