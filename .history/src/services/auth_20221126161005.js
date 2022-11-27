import db from "../models";

export const register = () =>
    new Promise((res, reject) => {
        try {
            res("register service");
            console.log("after res");
        } catch (error) {
            reject.error;
        }
    });
