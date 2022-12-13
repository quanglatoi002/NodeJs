import * as services from "../services";
import { badRequest, internalServerError } from "../middlewares/handle_errors";
import {
    title,
    image,
    category_code,
    price,
    available,
} from "../helpers/joi_schema";
import joi from "joi";
const cloudinary = require("cloudinary").v2;

export const getBooks = async (req, res) => {
    try {
        // nếu bạn nhận dữ liệu từ param từ phía client thì kết quả sẽ trả về trên req.query
        //nếu bạn dùng phương thức get post thì kết quả trả về sẽ ở req.body
        const response = await services.getBooks(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};

// CREATE

export const createNewBook = async (req, res) => {
    try {
        const fileData = req.file;
        const { error } = joi
            .object({
                title,
                image,
                category_code,
                price,
                available,
            })
            .validate({ ...req.body, image: fileData?.path });
        if (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename);
            return badRequest(error.details[0].message, res);
        }
        const response = await services.createNewBook(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};
