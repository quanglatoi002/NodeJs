import joi from "joi";

import * as services from "../services";
import { internalServerError, badRequest } from "../middlewares/handle_errors";
import { email, password, refreshToken } from "../helpers/joi_schema";

export const register = async (req, res) => {
    try {
        // check see use import email, password, nếu ch thì tb lỗi status(400) để đỡ phải chọc vào database sẽ không cần thiết
        // kết quả gửi về sẽ ở phần body
        // const { email, password } = req.body;
        // if (!email || !password)
        //     return res.status(400).json({
        //         err: 1,
        //         mes: "Missing payloads",
        //     });

        // Validate email and password
        //Nếu email, password không có lỗi thì kết quả nhận vào sẽ là undefined ngược lại sẽ trả về 1 object
        const { error } = joi.object({ email, password }).validate(req.body);
        if (error) return badRequest(error.details[0]?.message, res);
        const response = await services.register(req.body);
        return res.status(200).json(response);

        // return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};

//login
export const login = async (req, res) => {
    try {
        const { error } = joi.object({ email, password }).validate(req.body);
        if (error) return badRequest(error.details[0]?.message, res);
        const response = await services.login(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};

//refresh_token
export const refreshTokenController = async (req, res) => {
    try {
        const { error } = joi.object({ refreshToken }).validate(req.body);

        if (error) return badRequest(error.details[0]?.message, res);
        const response = await services.refreshToken(req.body.refreshToken);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};
