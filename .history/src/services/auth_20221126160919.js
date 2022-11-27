import db from "../models";

export const register = () =>
    new Promise((res, reject) => {
        try {
            res("register service");
        } catch (error) {
            reject.error;
        }
    });
