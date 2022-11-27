import db from "../models";

export const register = () =>
    new Promise((res, reject) => {
        try {
            res({
                err: 0,
                mes: "register service",
            });
            console.log("after res");
        } catch (error) {
            reject.error;
        }
    });
