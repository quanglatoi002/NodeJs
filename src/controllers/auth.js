import * as services from "../services";

export const register = async (req, res) => {
    try {
        // check see use import email, password, nếu ch thì tb lỗi status(400) để đỡ phải chọc vào database sẽ không cần thiết
        // kết quả gửi về sẽ ở phần body
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({
                err: 1,
                mes: "Missing payloads",
            });
        const response = await services.register(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Internal Server Error",
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({
                err: 1,
                mes: "Missing payloads",
            });
        const response = await services.login(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Internal Server Error",
        });
    }
};
