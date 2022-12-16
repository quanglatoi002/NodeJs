import * as services from "../services";
import { badRequest, internalServerError } from "../middlewares/handle_errors";
import {
    title,
    image,
    category_code,
    price,
    available,
    bid,
    bids,
    filename,
    description,
} from "../helpers/joi_schema";
import joi from "joi";
const cloudinary = require("cloudinary").v2;

export const getBooks = async (req, res) => {
    try {
        // nếu bạn nhận dữ liệu từ param từ phía client thì kết quả sẽ trả về trên req.query
        //nếu bạn dùng phương thức get post thì kết quả trả về sẽ ở req.body
        // Trước những promise thì phải có await
        // getBooks nhận cho mình 1 callback trong đó có chứa new promise
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
            //Sau khi người dùng nhấn create thì ảnh sẽ được gửi lên cloudinary trên khi đưa tới controller, nếu joi_chema mà error thì lập thức xóa ảnh đã lưu trước đó trên cloud
            if (fileData) cloudinary.uploader.destroy(fileData.filename);
            return badRequest(error.details[0].message, res);
        }
        const response = await services.createNewBook(req.body, fileData);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};

// UPDATE
export const updateBook = async (req, res) => {
    try {
        const fileData = req.file;
        const { error } = joi.object({ bid }).validate({ bid: req.body.bid });
        if (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename);
            return badRequest(error.details[0].message, res);
        }
        const response = await services.updateBook(req.body, fileData);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};

// DELETE
export const deleteBook = async (req, res) => {
    try {
        const { error } = joi.object({ bids, filename }).validate(req.query);
        if (error) {
            return badRequest(error.details[0].message, res);
        }
        const response = await services.deleteBook(
            req.query.bids,
            req.query.filename
        );
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
};
