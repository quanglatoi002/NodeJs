import db from "../models";
import { Op } from "sequelize";

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
            if (order) queries.order = [order];
            if (name) query.title = { [Op.substring]: name };
            if (available) query.available = { [Op.between]: available };
            const response = await db.Book.findAndCountAll({
                where: query,
                ...queries,
            });
            res({
                err: response ? 0 : 1,
                mes: response ? "Got" : "Can't found books",
                bookData: response,
            });
        } catch (error) {
            reject.error;
        }
    });
