import db from "../models";
import { Op } from "sequelize";
import { v4 as generateId } from "uuid";
const cloudinary = require("cloudinary").v2;

export const getBooks = ({ page, limit, order, name, available, ...query }) =>
    new Promise(async (res, reject) => {
        try {
            // raw: true có nghĩa là sẽ ko chạy mặc định sequelize mà chạy theo object thuần
            // nest: true dùng gom các khóa ngoại lại với nhau thành một object
            const queries = { raw: true, nest: true };
            const offset = !page || +page <= 1 ? 0 : +page - 1;
            const fLimit = +limit || +process.env.LIMIT_BOOK;
            queries.offset = offset * fLimit;
            queries.limit = fLimit;
            //sắp sắp theo hướng giảm dần order[]=price&order[]=DESC
            if (order) queries.order = [order];
            // Op.substring : %name% khi mình quên nội dung ở đầu và cuối ra sao thì có thể sử dung substring dùng ta chỉ cần có nội dụng ở giữa
            if (name) query.title = { [Op.substring]: name };
            if (available) query.available = { [Op.between]: available };
            const response = await db.Book.findAndCountAll({
                where: query,
                ...queries,
                attributes: {
                    exclude: ["category_code"],
                },

                include: [
                    {
                        model: db.Category,
                        attributes: {
                            exclude: ["createAt", "updateAt"],
                        },
                        as: "categoryData",
                    },
                ],
            });
            res({
                err: response ? 0 : 1,
                mes: response ? "Got" : "Can't found books",
                bookData: response,
            });
        } catch (error) {
            reject(error);
        }
    });
//CREATE
export const createNewBook = (body, fileData) =>
    new Promise(async (res, reject) => {
        try {
            const response = await db.Book.findOrCreate({
                where: { title: body?.title },
                defaults: {
                    ...body,
                    id: generateId(),
                    image: fileData?.path,
                },
            });
            res({
                err: response[1] ? 0 : 1,
                mes: response[1] ? "Created" : "Cannot create new book",
            });
            if (fileData && !response[1])
                cloudinary.uploader.destroy(fileData.filename);
        } catch (error) {
            reject(error);
            if (fileData && !response[1])
                cloudinary.uploader.destroy(fileData.filename);
        }
    });
