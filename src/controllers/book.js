import * as services from "../services";
import { internalServerError } from "../middlewares/handle_errors";

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
