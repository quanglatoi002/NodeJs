import db from "../models";

export const register = () =>
    new Promise((res, reject) => {
        try {
            res({
                err: 0,
                mes: "register service",
            });
        } catch (error) {
            reject.error;
        }
    });
