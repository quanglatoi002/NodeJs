import db from "../models";

export const getOne = (userId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { id: userId },
                // Để chọn 1 số thuộc tính thì sử dụng attributes
                attributes: {
                    // exclude loại bỏ 1 số thuộc tinh ko muốn xuất ra
                    exclude: ["password", "role_code"],
                },
                // muốn sử dụng bảng khác trang bảng khác thì sử dụng include
                include: [
                    {
                        model: db.Role,
                        as: "roleData",
                        attributes: ["id", "code", "value"],
                    },
                ],
            });
            resolve({
                err: response ? 0 : 1,
                mes: response ? "Got" : "User not fount",
                userData: response,
            });
        } catch (error) {
            reject.error;
        }
    });
