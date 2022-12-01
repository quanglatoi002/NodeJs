import db from "../models";

export const getOne = (userId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { id: userId },
                attributes: {
                    exclude: ["password"],
                },
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
