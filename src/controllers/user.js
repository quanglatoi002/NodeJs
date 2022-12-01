import joi from "joi";

import * as services from "../services";
import { internalServerError, badRequest } from "../middlewares/handle_errors";
// import { email, password } from "../helpers/joi_schema";

export const getCurrent = async (req, res) => {
    try {
        const { id } = req.user;
        const response = await services.getOne(id);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};
