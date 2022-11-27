import db from "../models";
import bcrypt from "bcryptjs"; // thư viện dùng để băm mật khẩu
import jwt from "jsonwebtoken";
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
            // Tạo token để mã hóa id, email, role_Code với hạn là 5d
            const token = response[1]
                ? jwt.sign(
                      {
                          id: response[0].id,
                          email: response[0].email,
                          role_Code: response[0].role_Code,
                      },
                      process.env.JWT_SECRET,
                      { expiresIn: "5d" }
                  )
                : null;
            res({
                err: response[1] ? 0 : 1,
                mes: response[1]
                    ? "Register is successfully"
                    : "Email already used",
                token,
            });
            res({
                err: 0,
                mes: "register service",
            });
        } catch (error) {
            reject.error;
        }
    });
